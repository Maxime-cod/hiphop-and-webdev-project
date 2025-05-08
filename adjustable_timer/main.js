// main.js

const hIn      = document.getElementById("hours");
const mIn      = document.getElementById("minutes");
const sIn      = document.getElementById("seconds");
const loopsIn  = document.getElementById("loops");
const setBtn   = document.getElementById("set-btn");

const ahIn     = document.getElementById("ahours");
const amIn     = document.getElementById("aminutes");
const asIn     = document.getElementById("aseconds");
const addBtn   = document.getElementById("add-btn");

const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

const display     = document.getElementById("display");
const nextDisplay = document.getElementById("next-alarm");
const loopInfo    = document.getElementById("loop-info");
const alarmsUL    = document.getElementById("alarms");

const bell       = document.getElementById("bell");
const loopEnd    = document.getElementById("loop-end");
const alarm      = document.getElementById("alarm");

let totalMs       = 0;
let remainingMs   = 0;
let timerId       = null;
let alarms        = []; // { offsetMs, fired }
let loopCount     = 1;
let currentLoop   = 0;
let cycleStart    = 0;

// format ms → "HH:MM:SS"
function fmt(ms) {
  const sec = Math.floor(ms / 1000);
  const h = Math.floor(sec / 3600),
        m = Math.floor((sec % 3600) / 60),
        s = sec % 60;
  return [h,m,s].map(n=>String(n).padStart(2,"0")).join(":");
}

setBtn.onclick = () => {
  const h = parseInt(hIn.value)   || 0;
  const m = parseInt(mIn.value)   || 0;
  const s = parseInt(sIn.value)   || 0;
  const L = parseInt(loopsIn.value)||1;

  totalMs     = ((h*3600)+(m*60)+s)*1000;
  if (totalMs <= 0 || L < 1) return;

  loopCount   = L;
  currentLoop = 1;
  remainingMs = totalMs;
  cycleStart  = Date.now();

  display.textContent     = fmt(remainingMs);
  nextDisplay.textContent = "Next alarm in: —";
  loopInfo.textContent    = `Loop: ${currentLoop}/${loopCount}`;

  alarms = [];
  alarmsUL.innerHTML = "";

  startBtn.disabled = false;
  resetBtn.disabled = false;
  addBtn.disabled   = false;
};

function preCountdown(onDone) {
  let prep = 5;
  // Show initial prep value
  display.textContent = `Starting in ${prep}`;
  const preId = setInterval(() => {
    if (prep <= 3 && prep > 0) {
      // Play loop-end for the last 3 seconds
      loopEnd.currentTime = 0;
      loopEnd.play().catch(()=>{});
    }
    prep--;
    if (prep > 0) {
      display.textContent = `Starting in ${prep}`;
    } else {
      clearInterval(preId);
      // Restore display to the timer's remaining time
      display.textContent = fmt(remainingMs);
      onDone();
    }
  }, 1000);
}


// Define the tick function once at top-level:
function tick() {
  const now     = Date.now();
  const elapsed = now - cycleStart;                  // time since this cycle began
  remainingMs   = Math.max(0, totalMs - elapsed);    // update remaining
  display.textContent = fmt(remainingMs);

  // 1) Intermediate alarms: fire when elapsed ≥ offsetMs
  alarms.forEach(a => {
    if (!a.fired && elapsed >= a.offsetMs) {
      a.fired = true;
      bell.currentTime = 0;
      bell.play().catch(()=>{});
    }
  });

  // 2) Compute time until next alarm: offsetMs - elapsed
  let nextTime = null;
  alarms.forEach(a => {
    if (!a.fired) {
      const t = Math.max(0, a.offsetMs - elapsed);
      nextTime = nextTime === null ? t : Math.min(nextTime, t);
    }
  });
  nextDisplay.textContent = nextTime !== null
    ? "Next alarm in: " + fmt(nextTime)
    : "Next alarm in: —";

  // 3) Loop or final alarm when countdown ends
  if (remainingMs === 0) {
    clearInterval(timerId);
    timerId = null;

    if (currentLoop < loopCount) {
      loopEnd.currentTime = 0;
      loopEnd.play().catch(()=>{});
      currentLoop++;
      loopInfo.textContent = `Loop: ${currentLoop}/${loopCount}`;

      // reset for next cycle
      alarms.forEach(a => a.fired = false);
      cycleStart = Date.now();
      timerId = setInterval(tick, 200);
    } else {
      alarm.currentTime = 0;
      alarm.play().catch(()=>{});
    }
  }
}


startBtn.onclick = () => {
  if (timerId) return;
  // Lock config buttons
  setBtn.disabled = true;
  addBtn.disabled = true;

  // Run 5s prep, then start the real timer
  preCountdown(() => {
    cycleStart = Date.now();
    timerId = setInterval(tick, 200);
  });
};



addBtn.onclick = () => {
  const h = parseInt(ahIn.value)||0;
  const m = parseInt(amIn.value)||0;
  const s = parseInt(asIn.value)||0;
  const offsetMs = ((h*3600)+(m*60)+s)*1000;
  if (offsetMs <= 0 || offsetMs >= totalMs) return;

  alarms.push({ offsetMs, fired: false });
  alarms.sort((a,b)=>a.offsetMs - b.offsetMs);
  alarmsUL.innerHTML = "";
  alarms.forEach(a => {
    const li = document.createElement("li");
    li.textContent = `Alarm at –${fmt(a.offsetMs)}`;
    alarmsUL.append(li);
  });
};

resetBtn.onclick = () => {
  clearInterval(timerId);
  timerId = null;
  // stop all sounds
  [bell, loopEnd, alarm].forEach(audio=>{
    audio.pause();
    audio.currentTime = 0;
  });

  totalMs = remainingMs = 0;
  display.textContent     = "00:00:00";
  nextDisplay.textContent = "Next alarm in: —";
  loopInfo.textContent    = "Loop: —/—";

  setBtn.disabled   = false;
  addBtn.disabled   = true;
  startBtn.disabled = true;
  resetBtn.disabled = true;

  alarms = [];
  alarmsUL.innerHTML = "";
};
