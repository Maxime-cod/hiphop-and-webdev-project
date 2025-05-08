import { ReactiveMachine } from "@hop/hiphop";

export const AlarmSpec = hiphop module Alarm() {
  in CLOCK;
  in SNOOZE;
  in STOP;
  out BEEP = false;

  abort (STOP.now) {
    loop {
      await (CLOCK.nowval);
      if (SNOOZE.now) {
        // Emit false and skip beeping for five clock cycles.
        emit BEEP(false);
        await (CLOCK.nowval);
        await (CLOCK.nowval);
        await (CLOCK.nowval);
        await (CLOCK.nowval);
        await (CLOCK.nowval);
      } else {
        // Normal operation: emit true.
        emit BEEP(true);
      }
    } 
  }
  // When the STOP signal has occurred, ensure BEEP is off.
  emit BEEP(false);
}

export const mach = new ReactiveMachine(AlarmSpec);
