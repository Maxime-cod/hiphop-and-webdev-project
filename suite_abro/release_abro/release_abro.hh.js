import { ReactiveMachine } from "@hop/hiphop";

export const release_abro = hiphop module() {
   in A;
   in B;
   in R;
   out O = 0;
   
   do{
    fork {
        await (A.now);
    } par {
        await (B.now);
    }
    emit O(O.preval + 1);
   }every(R.now)
}