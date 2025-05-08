import { ReactiveMachine } from "@hop/hiphop";

const prg = hiphop module Counter() {
   in A;
   in B;
   in R;
   in TICK;    // Clock tick to drive each reaction
   out O = 0;
   out DEBUG = "";
   
   loop {
      await (TICK.now);
      
      if (R.nowval == 1) {
         emit O(0);
         emit DEBUG("Tick: Reset triggered");
      } else if (A.nowval==1 && B.nowval==1) {
         emit O(O.preval + 1);
         emit DEBUG("Tick: Both A and B triggered: incrementing counter");
      } else if (A.nowval==1) {
         emit DEBUG("Tick: Only A triggered: waiting for B");
      } else if (B.nowval==1) {
         emit DEBUG("Tick: Only B triggered: waiting for A");
      } 
      // If no signals (A, B, R are all 0), then no debug message is emitted.
   }
}

export const mach = new ReactiveMachine(prg);
