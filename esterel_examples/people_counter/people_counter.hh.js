import { ReactiveMachine } from "@hop/hiphop";

// Conditioner: debounce a photocell
export const Conditioner = hiphop module Conditioner() {
  in A;
  out Y;
  do {
    loop {
      await (A.now);
      emit Y();
      await (!A.now);
    }
  }
}

// Counter: count between 0 and 3
export const Counter = hiphop module Counter() {
  in ADD;
  in SUB;
  out EMPTY;
  out FULL;
  do {
    var c = 0;
    loop {
      if (ADD.now) {
        if (c < 3) c += 1;
      } else if (SUB.now) {
        if (c > 0) c -= 1;
      }

      if (c === 0) emit EMPTY();
      if (c === 3) emit FULL();
      pause;
    }
  }
}

// PeopleCounter: wire two Conditioners into the Counter
export const PeopleCounter = hiphop module PeopleCounter() {
  in ENTER;
  in LEAVE;
  out EMPTY;
  out FULL;
  do {
    signal ADD;
    signal SUB;

    fork {
      run Conditioner[signal ENTER / A, Y / ADD];
    } par {
      run Conditioner[signal LEAVE / A, Y / SUB];
    } par {
      run Counter;
    }
  }
}
