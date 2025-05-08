import { createMachine, interpret } from 'xstate';

// DOM refs
const states = {
  A: document.getElementById('sA'),
  B: document.getElementById('sB'),
  C: document.getElementById('sC'),
  E: document.getElementById('sE')
};
const arrows = {
  '0': document.getElementById('aToB'),
  '1-9': document.getElementById('aToC'),
  'C-loop': document.getElementById('cLoop')
};
const buttons = [...document.querySelectorAll('.key-btn[data-key]')];

// FSM with Error state E
const fsm = createMachine({
  id: 'threeStateError',
  initial: 'A',
  states: {
    A: {
      on: {
        '0': 'B',
        '1': 'C','2': 'C','3': 'C','4': 'C',
        '5': 'C','6': 'C','7': 'C','8': 'C','9': 'C',
        ERROR: 'E'
      }
    },
    B: { on: { ERROR: 'E' } },
    C: {
      on: {
        '1': 'C','2': 'C','3': 'C','4': 'C',
        '5': 'C','6': 'C','7': 'C','8': 'C','9': 'C',
        ERROR: 'E'
      }
    },
    E: {}  // no outgoing transitions
  }
});

// Update UI
function updateUI(state) {
  // highlight states (E gets red fill via CSS)
  for (let s in states) {
    states[s].classList.toggle('active', s === state);
  }
}

// Flash arrow
function flashArrow(sig) {
  let arrowEl;
  if (sig === '0') arrowEl = arrows['0'];
  else if (currentState === 'C' && sig !== '0') arrowEl = arrows['C-loop'];
  else if (currentState === 'A' && sig !== '0') arrowEl = arrows['1-9'];

  if (arrowEl) {
    arrowEl.classList.add('highlight');
    setTimeout(() => arrowEl.classList.remove('highlight'), 300);
  }
}

let currentState = 'A';
let service;

function makeService() {
  return interpret(fsm)
    .onTransition(st => {
      currentState = st.value;
      updateUI(currentState);
    })
    .start();
}

// start initial
service = makeService();

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      // Look up the transition table for the current state
      const transitions = fsm.config.states[currentState].on || {};
      if (transitions.hasOwnProperty(key)) {
        // Valid transition (including self-loop in C)
        flashArrow(key);
        service.send(key);
      } else {
        // Invalid: go to error
        service.send('ERROR');
      }
    });
});
  
window.addEventListener('keydown', e => {
    if (/^[0-9]$/.test(e.key)) {
      const key = e.key;
      const transitions = fsm.config.states[currentState].on || {};
      if (transitions.hasOwnProperty(key)) {
        flashArrow(key);
        service.send(key);
      } else {
        service.send('ERROR');
      }
    }
});
  
  

// initial render
updateUI(currentState);

// reset
document.getElementById('reset-btn').addEventListener('click', () => {
  service.stop();
  service = makeService();
  currentState = fsm.initial;
  updateUI(currentState);
});
