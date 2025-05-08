// main.js
console.log("main.js loaded");

import { createMachine, interpret } from 'xstate';

// --- Flip-Flop 1 FSM (accepts s1, s2, s3) ---
const fsm1 = createMachine({
  id: 'fsm1',
  initial: '0',
  states: {
    '0': { on: { s1: '1', s2: '1', s3: '1' } },
    '1': { on: { s1: '0', s2: '0', s3: '0' } }
  }
});
const service1 = interpret(fsm1).onTransition((state) => {
  console.log("FSM1 state:", state.value);
  document.getElementById('fsm1-display').textContent = state.value;
  ['fsm1-0', 'fsm1-1'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(`fsm1-${state.value}`).classList.add('active');
  updateCounterDisplay();
});
service1.start();

// --- Flip-Flop 2 FSM (accepts s2, s3) ---
const fsm2 = createMachine({
  id: 'fsm2',
  initial: '0',
  states: {
    '0': { on: { s2: '1', s3: '1' } },
    '1': { on: { s2: '0', s3: '0' } }
  }
});
const service2 = interpret(fsm2).onTransition((state) => {
  console.log("FSM2 state:", state.value);
  document.getElementById('fsm2-display').textContent = state.value;
  ['fsm2-0', 'fsm2-1'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(`fsm2-${state.value}`).classList.add('active');
  updateCounterDisplay();
});
service2.start();

// --- Flip-Flop 3 FSM (accepts s3 only) ---
const fsm3 = createMachine({
  id: 'fsm3',
  initial: '0',
  states: {
    '0': { on: { s3: '1' } },
    '1': { on: { s3: '0' } }
  }
});
const service3 = interpret(fsm3).onTransition((state) => {
  console.log("FSM3 state:", state.value);
  document.getElementById('fsm3-display').textContent = state.value;
  ['fsm3-0', 'fsm3-1'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(`fsm3-${state.value}`).classList.add('active');
  updateCounterDisplay();
});
service3.start();

// Function to update the counter display
function updateCounterDisplay() {
  // Assume bit ordering: FSM3 (MSB), FSM2 (middle), FSM1 (LSB)
  const bit3 = document.getElementById('fsm3-display').textContent.trim();
  const bit2 = document.getElementById('fsm2-display').textContent.trim();
  const bit1 = document.getElementById('fsm1-display').textContent.trim();
  const binaryString = bit3 + bit2 + bit1;
  const decimalValue = parseInt(binaryString, 2);
  document.getElementById('counter-display').textContent =
    `Counter: ${binaryString} (Decimal: ${isNaN(decimalValue) ? 0 : decimalValue})`;
}

// --- Global button event listeners ---
document.getElementById('global-s1-btn').addEventListener('click', () => {
  console.log("Global: s1 pressed");
  // Only FSM1 accepts s1.
  service1.send('s1');
});
document.getElementById('global-s2-btn').addEventListener('click', () => {
  console.log("Global: s2 pressed");
  // FSM1 and FSM2 accept s2.
  service1.send('s2');
  service2.send('s2');
});
document.getElementById('global-s3-btn').addEventListener('click', () => {
  console.log("Global: s3 pressed");
  // All three FSMs accept s3.
  service1.send('s3');
  service2.send('s3');
  service3.send('s3');
});
