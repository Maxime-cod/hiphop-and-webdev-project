import { ReactiveMachine } from "@hop/hiphop";
import { reset_abro } from "./reset_abro.mjs";

const m = new ReactiveMachine(reset_abro);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

console.log("A then B");
m.react({ A: 1 });
m.react({ B: 1 });

console.log("A and B");
m.react({ A: 2, B: 2 });

console.log("B then A");
m.react({B:3});
m.react({A:3});

console.log("just A");
m.react({A:4});

console.log("B and A");
m.react({ B:5,A:5 });

console.log("Reset then B and A");
m.react({Reset:undefined});
m.react({ A: 6, B: 6 });

console.log("Reset and A and B");
m.react({Reset:undefined, A:7, B:7});