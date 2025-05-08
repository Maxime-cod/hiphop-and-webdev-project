let startTime   = 0;
let elapsed     = 0;
let intervalId  = null;
let lapCount    = 0;
let lastLapTime = 0;  // track timestamp of last lap

const display      = document.getElementById('display');
const startStopBtn = document.getElementById('start-stop-btn');
const lapResetBtn  = document.getElementById('lap-reset-btn');
const lapsList     = document.getElementById('laps');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const centi = Math.floor((ms % 1000) / 10);
  return String(minutes).padStart(2,'0') + ':' +
         String(seconds).padStart(2,'0') + ':' +
         String(centi).padStart(2,'0');
}

function updateDisplay() {
  const now = intervalId
    ? (Date.now() - startTime + elapsed)
    : elapsed;
  display.textContent = formatTime(now);
}

function start() {
  startTime   = Date.now();
  lastLapTime = startTime;
  intervalId  = setInterval(updateDisplay, 10);
  startStopBtn.textContent = 'Stop';
  lapResetBtn.textContent  = 'Lap';
  lapResetBtn.disabled     = false;
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
  elapsed += Date.now() - startTime;
  startStopBtn.textContent = 'Resume';
  lapResetBtn.textContent  = 'Reset';
}

function reset() {
  elapsed     = 0;
  lapCount    = 0;
  lastLapTime = 0;
  lapsList.innerHTML = '';
  updateDisplay();
  lapResetBtn.disabled = true;
  startStopBtn.textContent = 'Start';
}

function lap() {
  const now     = Date.now();
  const delta   = now - lastLapTime;      // time since last lap
  lastLapTime   = now;
  lapCount += 1;

  const li = document.createElement('li');
  li.textContent = `Lap ${lapCount}: ${formatTime(delta)}`;
  lapsList.appendChild(li);
}

startStopBtn.addEventListener('click', () => {
  if (!intervalId) start();
  else stop();
});

lapResetBtn.addEventListener('click', () => {
  if (intervalId) lap();
  else reset();
});

// initialize display
updateDisplay();
