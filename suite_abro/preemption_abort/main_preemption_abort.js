import { ReactiveMachine } from "@hop/hiphop";
import { preemption_abort } from "./preemption_abort.mjs";
import { log } from "xstate";

const m = new ReactiveMachine(preemption_abort);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

console.log("emit A then wait");
m.react({A:undefined});
m.react({});
m.react({});


console.log("emit A then wait one then emit R");
m.react({A:undefined});
m.react({});
m.react({R:undefined});

console.log("emit A then emit R");
m.react({A:undefined});
m.react({R:undefined});