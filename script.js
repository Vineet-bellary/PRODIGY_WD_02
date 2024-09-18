let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
let laps = [];

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function pauseStopwatch() {
  clearInterval(interval);
  recordLap();
}

function resetStopwatch() {
  clearInterval(interval);
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  laps = [];
  document.getElementById('milliseconds').innerText = '00';
  document.getElementById('seconds').innerText = '00';
  document.getElementById('minutes').innerText = '00';
  document.getElementById('laps-list').innerHTML = '';
}

function startTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  document.getElementById('milliseconds').innerText = formatTime(milliseconds);
  document.getElementById('seconds').innerText = formatTime(seconds);
  document.getElementById('minutes').innerText = formatTime(minutes);
}

function recordLap() {
  const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
  laps.push(lapTime);
  const lapsList = document.getElementById('laps-list');
  const li = document.createElement('li');
  li.innerText = `Lap ${laps.length}: ${lapTime}`;
  lapsList.appendChild(li);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
