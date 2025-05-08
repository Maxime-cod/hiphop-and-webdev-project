import { ReactiveMachine } from "@hop/hiphop";

export const abo = hiphop module() {
   in A;
   in B;
   out O = 0;
   
   fork {
    await (A);
    } par {
        await (B);
    }
    emit O(O.preval + 1);
}