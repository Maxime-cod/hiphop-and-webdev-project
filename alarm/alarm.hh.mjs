import { ReactiveMachine } from "@hop/hiphop";

export const AlarmSpec = hiphop module Alarm() {
  in CLOCK;
  in SNOOZE;
  in STOP;
  out BEEP = false;

  abort (STOP.now) {
    loop {
      if (SNOOZE.now) {
        // Emit false and skip beeping for five clock cycles.
        emit BEEP(false);
        await (CLOCK.now);
        await (CLOCK.now);
        await (CLOCK.now);
        await (CLOCK.now);
        await (CLOCK.now);
      } else {
        // Normal operation: emit true.
        emit BEEP(true);
        await (CLOCK.now);
      }
    } 
  }
  // When the STOP signal has occurred, ensure BEEP is off.
  emit BEEP(false);
}

export const mach = new ReactiveMachine(AlarmSpec);
