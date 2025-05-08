import { ReactiveMachine } from '@hop/hiphop';
import { release_abro } from './release_abro.mjs';



// Create a reactive machine using your HipHop module
const m = new ReactiveMachine(release_abro);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

// Trigger a few reactions (input events)
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

console.log("Release then B and A");
m.react({R:undefined});
m.react({ A: 6, B: 6 });

console.log("Release and A and B");
m.react({R:undefined, A:7, B:7});