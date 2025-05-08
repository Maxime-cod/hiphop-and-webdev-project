import { ReactiveMachine } from "@hop/hiphop";

export const abco = hiphop module() {
   in A;
   in B;
   in C;
   out O = 0;
   
   fork {
        await (A.now);
    } par {
        await (B.now);
    } par {
        await(C.now);
    }
    emit O(O.preval + 1);
}