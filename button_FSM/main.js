// main.js
console.log("main.js loaded");

import { createMachine, interpret } from 'xstate';

// Define the FSM with three states.
const fsm = createMachine({
  id: 'fsm',
  initial: 'state1',
  states: {
    state1: { on: { to2: 'state2', to3: 'state3' } },
    state2: { on: { to1: 'state1', to3: 'state3' } },
    state3: { on: { to1: 'state1', to2: 'state2' } }
  }
});

// Create an interpreter for the state machine.
const fsmService = interpret(fsm).onTransition((state) => {
  console.log("State changed to:", state.value);
  // Update text display
  document.getElementById('state-display').textContent = state.value;
  
  // Update visual representation: remove "active" from all, then add to current state circle.
  ['state1', 'state2', 'state3'].forEach((id) => {
    document.getElementById(id).classList.remove('active');
  });
  document.getElementById(state.value).classList.add('active');
});
fsmService.start();

// Instead of auto-sending signals with setInterval, attach button listeners.
document.getElementById('btn-to1').addEventListener('click', () => {
  console.log("Button pressed: to1");
  fsmService.send('to1');
});
document.getElementById('btn-to2').addEventListener('click', () => {
  console.log("Button pressed: to2");
  fsmService.send('to2');
});
document.getElementById('btn-to3').addEventListener('click', () => {
  console.log("Button pressed: to3");
  fsmService.send('to3');
});
