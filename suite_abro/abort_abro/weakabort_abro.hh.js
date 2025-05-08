import { ReactiveMachine } from "@hop/hiphop";

export const weakabort_abro = hiphop module() {
   in A;
   in B;
   in R;
   out O = 0;
   
   
   weakabort(R.now){
    loop{
    fork {
        await (A.now);
    } par {
        await (B.now);
    }
    emit O(O.preval + 1);
   }
   }
}