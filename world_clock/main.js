// main.js

import { DateTime } from 'https://cdn.skypack.dev/luxon';

// Get all IANA zones via the browser Intl API
const timezones = typeof Intl.supportedValuesOf === 'function'
  ? Intl.supportedValuesOf('timeZone')
  : []; // or your own fallback list

const tzInput = document.getElementById('city-tz');
const tzList  = document.getElementById('tz-list');
const addBtn  = document.getElementById('add-btn');
const cityName = document.getElementById('city-name');

// Build the timezone picker
function getOffsetLabel(tz) {
  return DateTime.now().setZone(tz).toFormat("'UTC'Z");
}

timezones.forEach(tz => {
  const li = document.createElement('li');
  li.textContent = `${getOffsetLabel(tz)} ${tz}`;
  li.dataset.tz = tz;
  tzList.append(li);
});

// Filtering function -- keeps dropdown open and scrollable
function filterAndResetNav() {
  const filter = tzInput.value.toLowerCase();
  Array.from(tzList.children).forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(filter)
      ? ''    // show
      : 'none'; // hide
  });
  tzList.classList.remove('hidden');
}

// Keyboard navigation (simple up/down + enter)
let navIndex = -1;
function handleArrowAndEnter(e) {
  const items = Array.from(tzList.querySelectorAll('li'))
    .filter(li => li.style.display !== 'none');
  if (!items.length) return;

  if (e.key === 'ArrowDown') {
    navIndex = (navIndex + 1) % items.length;
    items.forEach((li, i) => li.classList.toggle('highlight', i === navIndex));
    items[navIndex].scrollIntoView({ block: 'nearest' });
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
    navIndex = (navIndex - 1 + items.length) % items.length;
    items.forEach((li, i) => li.classList.toggle('highlight', i === navIndex));
    items[navIndex].scrollIntoView({ block: 'nearest' });
    e.preventDefault();
  } else if (e.key === 'Enter' && navIndex >= 0) {
    const tz = items[navIndex].dataset.tz;
    tzInput.value = tz;
    tzList.classList.add('hidden');
    navIndex = -1;
  }
}

// Show/hide dropdown
tzInput.addEventListener('focus',  () => tzList.classList.remove('hidden'));
tzInput.addEventListener('input',  filterAndResetNav);
tzInput.addEventListener('keydown', handleArrowAndEnter);
tzInput.addEventListener('blur',   () => setTimeout(() => tzList.classList.add('hidden'), 100));

// Click to select
tzList.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    tzInput.value = e.target.dataset.tz;
    tzList.classList.add('hidden');
  }
});

// Initial cities
const cities = [
  { name: 'New Delhi', tz: 'Asia/Kolkata' },
  { name: 'Paris',     tz: 'Europe/Paris'    }
];

function updateClocks() {
  const container = document.getElementById('clocks');
  container.innerHTML = '';

  cities.forEach(({ name, tz }) => {
    const now = DateTime.now().setZone(tz).toFormat("HH:mm:ss (UTCZ)");
    const div = document.createElement('div');
    div.className = 'clock';
    div.textContent = `${name}: ${now}`;
    container.append(div);
  });
}

// Add-city click
addBtn.addEventListener('click', () => {
  const name = cityName.value.trim();
  const tz   = tzInput.value.trim();
  if (!name || !timezones.includes(tz)) {
    alert('Enter a city and pick a valid IANA zone.');
    return;
  }
  cities.push({ name, tz });
  cityName.value = '';
  tzInput.value = '';
  updateClocks();
});

// Start ticking every second
setInterval(updateClocks, 1000);
updateClocks();
