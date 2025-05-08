import { ReactiveMachine } from "@hop/hiphop";
import { PeopleCounter } from "./peopleCounter.mjs";

// instantiate the reactive machine
const machine = new ReactiveMachine(PeopleCounter);

// listen for outputs
machine.addEventListener("EMPTY", () => console.log("Room is empty"));
machine.addEventListener("FULL", () => console.log("Room is full"));

// simulate people entering and leaving
console.log("--- Test 1: Enter 3 people ---");
machine.react({ ENTER: true });   // first pulse on ENTER
machine.react({ ENTER: false });  // reset photocell
machine.react({ ENTER: true });
machine.react({ ENTER: false });
machine.react({ ENTER: true });
machine.react({ ENTER: false }); // should emit FULL here

console.log("--- Test 2: Leave 1 person ---");
machine.react({ LEAVE: true });
machine.react({ LEAVE: false }); // should clear FULL

console.log("--- Done ---");
