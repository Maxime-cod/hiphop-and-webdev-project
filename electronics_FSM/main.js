// main.js
console.log("main.js loaded");

import { createMachine, interpret } from 'xstate';

// --- Flip-Flop 1 FSM (accepts only s3) ---
const fsm1 = createMachine({
  id: 'fsm1',
  initial: '0',
  states: {
    '0': { on: { s3: '1' } },
    '1': { on: { s3: '0' } }
  }
});
const service1 = interpret(fsm1).onTransition((state) => {
  console.log("FSM1 state:", state.value);
  document.getElementById('fsm1-display').textContent = state.value;
  // Update SVG circles: mark the circle corresponding to the current state as active.
  ['fsm1-0', 'fsm1-1'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(`fsm1-${state.value}`).classList.add('active');
});
service1.start();

// --- Flip-Flop 2 FSM (accepts s2 and s3) ---
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
});
service2.start();

// --- Flip-Flop 3 FSM (accepts s1, s2 and s3) ---
const fsm3 = createMachine({
  id: 'fsm3',
  initial: '0',
  states: {
    '0': { on: { s1: '1', s2: '1', s3: '1' } },
    '1': { on: { s1: '0', s2: '0', s3: '0' } }
  }
});
const service3 = interpret(fsm3).onTransition((state) => {
  console.log("FSM3 state:", state.value);
  document.getElementById('fsm3-display').textContent = state.value;
  ['fsm3-0', 'fsm3-1'].forEach(id => document.getElementById(id).classList.remove('active'));
  document.getElementById(`fsm3-${state.value}`).classList.add('active');
});
service3.start();

// --- Button event listeners ---

// FSM1: Only s3
document.getElementById('fsm1-s3-btn').addEventListener('click', () => {
  console.log("FSM1: s3 pressed");
  service1.send('s3');
});

// FSM2: s2 and s3
document.getElementById('fsm2-s2-btn').addEventListener('click', () => {
  console.log("FSM2: s2 pressed");
  service2.send('s2');
});
document.getElementById('fsm2-s3-btn').addEventListener('click', () => {
  console.log("FSM2: s3 pressed");
  service2.send('s3');
});

// FSM3: s1, s2 and s3
document.getElementById('fsm3-s1-btn').addEventListener('click', () => {
  console.log("FSM3: s1 pressed");
  service3.send('s1');
});
document.getElementById('fsm3-s2-btn').addEventListener('click', () => {
  console.log("FSM3: s2 pressed");
  service3.send('s2');
});
document.getElementById('fsm3-s3-btn').addEventListener('click', () => {
  console.log("FSM3: s3 pressed");
  service3.send('s3');
});
