// alarm.hh.mjs
import { ReactiveMachine } from "@hop/hiphop";

export const AlarmSpec = hiphop module Alarm() {
  in CLOCK;
  in SNOOZE;
  in STOP;
  in RESET;      // new reset signal
  out BEEP = false;

  // Outer loop: restart entire behavior on RESET
  loop {
    // If RESET arrives, abort into next iteration
    abort (RESET.now) {
      // Inner abort: STOP stops until next RESET
      abort (STOP.now) {
        loop {
          // Wait for a CLOCK tick to start beeping
          await (CLOCK.nowval);
          if (SNOOZE.now) {
            emit BEEP(false);
            await (CLOCK.nowval); await (CLOCK.nowval);
            await (CLOCK.nowval); await (CLOCK.nowval);
            await (CLOCK.nowval);
          } else {
            emit BEEP(true);
          }
        }
      }
      // Once STOP fired, ensure beep off
      emit BEEP(false);
      // then wait for RESET to restart
      await (RESET.now);
    }
  }
}

export const mach = new ReactiveMachine(AlarmSpec);
