import { mach } from "./alarm.mjs";

// Listen for BEEP events and log them.
mach.addEventListener("BEEP", evt => {
  console.log("BEEP:", evt.nowval);
});

// Function to simulate a clock pulse.
function clockPulse() {
  mach.react({ CLOCK: 1 });
}

// Generate a clock pulse every second.
setInterval(clockPulse, 1000);

// For testing: simulate snooze after 5 seconds and stop after 15 seconds.
setTimeout(() => {
  console.log("Snooze pressed");
  mach.react({ SNOOZE: 1 });
}, 5000);

setTimeout(() => {
  console.log("Stop pressed");
  mach.react({ STOP: 1 });
}, 15000);
