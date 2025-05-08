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

const labels = {
    aToC:  document.getElementById('label-aToC'),
    loop:  document.getElementById('label-cLoop')
};
  

// FSM events for hex support
const hexKeys = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const onA = { '0': 'B' };
hexKeys.filter(k => k !== '0').forEach(k => onA[k] = 'C');
const onC = {};
hexKeys.forEach(k => onC[k] = 'C');

// Define the FSM
const fsm = createMachine({
  id: 'threeState',
  initial: 'A',
  states: {
    A: { on: onA },
    B: { /* no transitions */ },
    C: { on: onC }
  }
});

// Update UI: highlight active state & disable invalid keys
function updateUI(state) {
  // Highlight state circles
  for (let s in states) {
    states[s].classList.toggle('active', s === state);
  }
  // Disable or enable keypad buttons based on FSM transitions
  const transitions = fsm.config.states[state].on || {};
  const keypadButtons = document.querySelectorAll('.key-btn[data-key]');
  keypadButtons.forEach(btn => {
    const key = btn.dataset.key;
    const ok = Object.prototype.hasOwnProperty.call(transitions, key);
    btn.disabled = !ok;
  });
}

// Highlight the appropriate arrow for a signal
function flashArrow(sig) {
  let arrowEl;
  if (currentState === 'C') {
    arrowEl = arrows['C-loop'];
  } else if (sig === '0') {
    arrowEl = arrows['0'];
  } else {
    arrowEl = arrows['1-9'];
  }
  if (arrowEl) {
    arrowEl.classList.add('highlight');
    setTimeout(() => arrowEl.classList.remove('highlight'), 300);
  }
}

let currentState = 'A';
let service;

// Mode and stored value
let currentMode = 'decimal';  // 'binary' | 'decimal' | 'hexadecimal'
let storedValue = 0n;          // internal BigInt value

const modeButtons = document.querySelectorAll('.mode-btn');
const valueDisplay = document.getElementById('value-display');
const keypadEl = document.querySelector('.keypad');

// Determine numeric base from mode
function getBase() {
  return currentMode === 'binary' ? 2
       : currentMode === 'hexadecimal' ? 16
       : 10;
}
// Update the displayed stored value in correct base
function updateStoredDisplay() {
  valueDisplay.textContent = storedValue.toString(getBase()).toUpperCase();
}

function updateLabels() {
    const base = getBase();
    let aToCLabel, loopLabel;
  
    if (base === 2) {
      aToCLabel = '1';
      loopLabel = '0–1';
    } else if (base === 10) {
      aToCLabel = '1–9';
      loopLabel = '0–9';
    } else { // hex
      aToCLabel = '1–F';
      loopLabel = '0–F';
    }
  
    labels.aToC.textContent = aToCLabel;
    labels.loop.textContent = loopLabel;
  }
  

// Create and start the XState service
function makeService() {
  return interpret(fsm)
    .onTransition(st => {
      currentState = st.value;
      updateUI(currentState);
    })
    .start();
}

// Render the keypad for the active mode
function renderKeypad() {
  const base = getBase();
  let keys;
  if (base === 2) {
    keys = ['0','1'];
  } else if (base === 10) {
    keys = ['1','2','3','4','5','6','7','8','9','0'];
  } else {
    keys = hexKeys;
  }
  // Build buttons
  keypadEl.innerHTML = '';
  keys.forEach(k => {
    const btn = document.createElement('button');
    btn.className = 'key-btn';
    btn.dataset.key = k;
    btn.textContent = k.toUpperCase();
    keypadEl.appendChild(btn);
    // Wire click handler
    btn.addEventListener('click', () => {
      flashArrow(k);
      service.send(k);
      // Update stored value and display
      const digit = BigInt(parseInt(k, getBase()));
      storedValue = storedValue * BigInt(getBase()) + digit;
      updateStoredDisplay();
    });
  });
  // Sync button enabled/disabled state
  updateUI(currentState);
}

// Wire up mode-switch buttons
modeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modeButtons.forEach(b => b.classList.toggle('active', b === btn));
    currentMode = btn.dataset.mode;
    updateStoredDisplay();
    renderKeypad();
    updateLabels();
  });
});

// Initialize service and UI
service = makeService();
updateStoredDisplay();
renderKeypad();
updateLabels();

// Reset handler: restart FSM and clear value
document.getElementById('reset-btn').addEventListener('click', () => {
  service.stop();
  service = makeService();
  storedValue = 0n;
  updateStoredDisplay();
  renderKeypad();
  updateLabels();
});
