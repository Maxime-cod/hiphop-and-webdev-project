// main.js
console.log("main.js loaded");

import { createMachine, interpret } from 'xstate';

// Define the FSM with three states.
const fsm = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QDNYFsB0sAuBDbYAjAMTYD2ATANoAMAuoqAA5mwCW2bZAdoyAB6JCAdgoYAbDSk0AzBTkBWABxKALAoA0IAJ6IKqpRiULpS4QsUVCCgL42tqTDnxFSZGbQZIQLdpx58gggiYpLScooq6lq6CEqEGDLSNOKSFACcqenCdg7oWHgEFG6Enny+HFy83kEhEskRFMpqmjpC6ekY1tLCMoTZFGa5II4FLsXkHvTlrJUBNYgy4oYy5jSEhBSS-cLpMXoKCTImUmYWTVa29iP5zgQyJWXeFf7VoEFLK2sbW+vZe20EEtOhRkulVMIpIQZENrqM7mAHuRqNNnrNXoFFstEt9Ntt-vsEKCEuITjRejtBjlhtwyBA4HxHDM-FVMQgALTiQmcjDJKQKYSqTbyOTDeGFIjMuZvASIVQUQngjDpE7WYTiXow+Ri24SihSjELIkKMSDQ7CJQ0NTymgQwlJYQYYTOqQyIUms06pwSmQG1lG1TiGQYBSqyShqwqLmA0GqepQgwycEUQV2OxAA */
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

// Define a fixed sequence of signals.
const signals = ['to2', 'to3', 'to1', 'to3', 'to2', 'to1'];
let currentSignalIndex = 0;

// Function to send the next signal.
function sendNextSignal() {
  const signal = signals[currentSignalIndex];
  console.log("Sending signal:", signal);
  fsmService.send(signal);
  currentSignalIndex = (currentSignalIndex + 1) % signals.length;
}

// Send a signal every 2000 milliseconds.
setInterval(sendNextSignal, 2000);
