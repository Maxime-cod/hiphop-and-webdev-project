import { createMachine, interpret } from 'xstate';

// Preload DOM refs
const states = {
  A: document.getElementById('sA'),
  B: document.getElementById('sB'),
  C: document.getElementById('sC')
};
const arrows = {
  '0': document.getElementById('aToB'),
  '1-9': document.getElementById('aToC'),
  'C-loop': document.getElementById('cLoop')
};
const buttons = [...document.querySelectorAll('.key-btn[data-key]')];

// FSM definition
const fsm = createMachine({
  id: 'threeState',
  initial: 'A',
  states: {
    A: { on: { '0': 'B', '1': 'C', '2': 'C','3': 'C','4': 'C','5': 'C','6': 'C','7': 'C','8': 'C','9': 'C' } },
    B: {},
    C: { on: { '0': 'C', '1': 'C','2': 'C','3': 'C','4': 'C','5': 'C','6': 'C','7': 'C','8': 'C','9': 'C' } }
  }
});

// UI update
function updateUI(state) {
  // Highlight state circles
  for (let s in states) states[s].classList.toggle('active', s === state);
  // Enable/disable keys
  // new
buttons.forEach(btn => {
    const key = btn.dataset.key;
    // Look up the state’s transition table directly:
    const transitions = fsm.config.states[state].on || {};
    const ok = Object.prototype.hasOwnProperty.call(transitions, key);
    btn.disabled = !ok;
  });
  
}

// Highlight arrow on signal
function flashArrow(sig) {
  let arrowEl;
  if (currentState === 'C') {
    // in C, any key (0–9) is the self-loop
    arrowEl = arrows['C-loop'];
  } else if (sig === '0') {
    // outside C, 0 always goes to B
    arrowEl = arrows['0'];
  } else {
    // outside C, 1–9 go to C
    arrowEl = arrows['1-9'];
  }

  if (arrowEl) {
    arrowEl.classList.add('highlight');
    setTimeout(() => arrowEl.classList.remove('highlight'), 300);
  }
}

let currentState = 'A';

let service;                // we’ll assign to this

function makeService() {
  return interpret(fsm)
    .onTransition(st => {
      currentState = st.value;
      updateUI(currentState);
    })
    .start();
}

// create it once initially
service = makeService();


// Button and key handlers
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.key;
    flashArrow(key);
    service.send(key);
  });
});

window.addEventListener('keydown', e => {
  if (/^[0-9]$/.test(e.key)) {
    const btn = buttons.find(b => b.dataset.key === e.key);
    if (btn && !btn.disabled) {
      flashArrow(e.key);
      service.send(e.key);
    }
  }
});

// initial render
updateUI(currentState);

// Reset button handler
document.getElementById('reset-btn').addEventListener('click', () => {
    // stop the old one
    service.stop();
    // make a brand-new service, which will immediately emit the initial state
    service = makeService();
    // ensure UI shows 'A'
    currentState = fsm.initial;  // or 'A'
    updateUI(currentState);
  });
  