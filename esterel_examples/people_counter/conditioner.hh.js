import { ReactiveMachine } from "@hop/hiphop";

export const Conditioner = hiphop module() {
  in A;
  out Y;
  do {
    loop {
      await (A.now);
      emit Y();
      await (!A.now);
    }
  }
};
