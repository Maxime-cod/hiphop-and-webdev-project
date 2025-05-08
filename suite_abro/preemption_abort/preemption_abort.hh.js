import { HALT, ReactiveMachine } from "@hop/hiphop";

export const preemption_abort = hiphop module() {
  in A; in R; out O = 0;

  loop {
    abort (R.now) {
      await(A.now);
      emit O(0);
      yield;                     // ← boundary: end this reaction
      emit O(1);
      yield;                      // ← boundary: end this reaction
    }
    emit O(2);
    yield;                        // boundary again
  }
};
