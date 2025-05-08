import { ReactiveMachine } from '@hop/hiphop';
import { loop_abo } from './loop_abo.mjs';



// Create a reactive machine using your HipHop module
const m = new ReactiveMachine(loop_abo);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

// Trigger a few reactions (input events)


console.log("A then B");
m.react({ A: 1 });
m.react({ B: 2 });

console.log("A and B");
m.react({ A: 3, B: 4 });

console.log("B then A");
m.react({B:5});
m.react({A:6});

console.log("just A");
m.react({A:7});

console.log("B and A");
m.react({ B:8,A:9 });


