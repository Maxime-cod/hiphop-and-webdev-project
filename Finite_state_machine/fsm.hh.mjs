// Finite_state_machine/fsm.hh.mjs
// HipHop source for a reactive finite state machine.
// This module emits signals on a fixed schedule to drive the FSM.
// The signal sequence is as follows:
//   1. From state1: emit "to2" (transition to state2)
//   2. From state2: emit "to3" (transition to state3)
//   3. From state3: emit "to1" (transition to state1)
//   4. Then alternate the other transitions:
//      - From state1: emit "to3"
//      - From state3: emit "to2"
//      - From state2: emit "to1"
// This cycle repeats indefinitely.
 
  import { ReactiveMachine } from "@hop/hiphop";
  import { Timer } from "./timer.mjs";

hiphop module fsm() {
  // Declare the output signals that drive your FSM transitions.
  out to1;
  out to2;
  out to3;

  loop {
    // Wait 2000 ms then emit "to2" (transition from state1 to state2)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to2;

    // Wait 2000 ms then emit "to3" (transition from state2 to state3)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to3;

    // Wait 2000 ms then emit "to1" (transition from state3 to state1)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to1;

    // Now alternate the transitions:
    // Wait 2000 ms then emit "to3" (transition from state1 to state3)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to3;

    // Wait 2000 ms then emit "to2" (transition from state3 to state2)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to2;

    // Wait 2000 ms then emit "to1" (transition from state2 to state1)
    run Timer(2000) as timer;
    await timer.snooze;
    emit to1;
  }
}

export const mach = new ReactiveMachine(fsm());
