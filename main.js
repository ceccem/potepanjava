
const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getUTCHours()).padStart(1, '0');
  const m = String(currentTime.getMinutes()).padStart(1, '0');
  const s = String(currentTime.getSeconds()).padStart(1, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(1, '0');

  time.textContent = `${h}:${m}:${s}:${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
  startTime = Date.now();
  displayTime();
});

stop.addEventListener('click', function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});

reset.addEventListener('click', function() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
  time.textContent = '0:0:0:0';
  stopTime = 0;
})