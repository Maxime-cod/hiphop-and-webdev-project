import { ReactiveMachine } from "@hop/hiphop";
import { emit } from "xstate";

export const every_preemption_aro = hiphop module() {
   in A;
   in R;
   out O = 0;
   
   do{
    emit O(0);
    await(A.now);
    emit O(O.preval + 1);
    await(A.now);
    emit O(O.preval + 1);
    await(A.now);
    emit O(O.preval + 1);
    await(A.now);
    emit O(O.preval + 1);
   }every(R.now)
}