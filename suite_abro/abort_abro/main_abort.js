import { ReactiveMachine } from "@hop/hiphop";
import { strongabort_abro } from "./strongabort_abro.mjs";
import { weakabort_abro }   from "./weakabort_abro.mjs";

const ms = new ReactiveMachine(strongabort_abro);
const mw = new ReactiveMachine(weakabort_abro);

// tag them for your logging…
ms.moduleName = "strong";
mw.moduleName = "weak";

// add listeners on *each* machine:
[ms, mw].forEach(m => {
  m.addEventListener("O", function(e) {
    console.log(`[${this.moduleName}] got:`, e);
  });
  // initialize each one
  m.react();
});

// now a single helper to broadcast:
function broadcast(input) {
  ms.react(input);
  mw.react(input);
}

// use it:
console.log("A then B");
broadcast({ A:1 });
broadcast({ B:2 });

console.log("A then B and R at the same time");
broadcast({ A:1 });
broadcast({ B:2, R:0 });
