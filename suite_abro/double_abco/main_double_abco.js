import { ReactiveMachine } from '@hop/hiphop';
import { abco } from './double_abco.mjs';



// Create a reactive machine using your HipHop module
const m = new ReactiveMachine(abco);

// Listen for the output event 'O'
m.addEventListener("O", e => console.log("got: ", e));

//Trigger an empty reaction (if not the first reaction is not detected)
m.react({});

// Trigger a few reactions (input events)
console.log("A then B then C");
m.react({ A: 1 });
m.react({ B: 2 });
m.react({ C: 3});

console.log("A and B");
m.react({ A: 3, B: 4 });

console.log("C")
m.react({C:3}),

console.log("A and B");
m.react({ A: 3, B: 4 });

console.log("B then A");
m.react({B:5});
m.react({A:6});

console.log("just A");
m.react({A:7});

console.log("B and A");
m.react({ B:8,A:9 });

console.log("C");
m.react({C:10});

// console.log("A,B and C");
// m.react({ A: 3, B: 4 , C:5});

// console.log("A,B and C again");
// m.react({ A: 3, B: 4 , C:5});




