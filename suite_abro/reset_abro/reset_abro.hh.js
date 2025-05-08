import { ReactiveMachine } from "@hop/hiphop";

export const reset_abro = hiphop module() {
  in A;
  in B;
  in Reset;
  out O = 0;
  
  loop {
    abort (Reset.now){
      fork {
         await (A.now);
      } par {
         await (B.now);
      }
      emit O(O.preval + 1);
    }
    // When we aborted because Reset was raised,
    // explicitly emit O(0) before restarting.
    if (Reset.now) {
       emit O(0);
    }
  }
}
