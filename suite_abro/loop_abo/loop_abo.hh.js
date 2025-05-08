import { ReactiveMachine } from "@hop/hiphop";

export const loop_abo = hiphop module() {
   in A;
   in B;
   out O = 0;
   
   loop{
    fork {
    await (A.now);
    } par {
        await (B.now);
    }
    emit O(O.preval + 1);
   }
}