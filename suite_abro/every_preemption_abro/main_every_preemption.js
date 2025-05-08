import { ReactiveMachine } from "@hop/hiphop";
import { every_preemption_aro } from "./every_preemption_abro.mjs";

const m = new ReactiveMachine(every_preemption_aro);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

//Trigger A more time than the max counter
console.log("Trigger A more time than the max counter")
m.react({A:undefined});
m.react({A:undefined});
m.react({A:undefined});
m.react({A:undefined});
m.react({A:undefined});
m.react({A:undefined});

// release with R (loop again the module), that shouls reset the counter
console.log("release with R (loop again the module), that shouls reset the counter")
m.react({R:undefined});

//trigger A only two time before releasing with R
console.log("trigger A only two time before releasing with R")
m.react({A:undefined});
m.react({A:undefined});
m.react({R:undefined});

//trigger A enough time again
console.log("trigger A two times again then trigger A and R at the same time")
m.react({A:undefined});
m.react({A:undefined});
m.react({A:undefined, R:undefined});