import { ReactiveMachine } from "@hop/hiphop";

export const abco = hiphop module() {
   in A;
   in B;
   in C;
   out O = 0;
   
   fork {
        await (A);
    } par {
        fork{
            await (B);
        } par {
            await(C);
        } 
    }
    emit O(O.preval + 1);
}