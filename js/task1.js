"use strict";
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
}

const timer = {
  start(){
      const deadline = new Date('Feb 22, 2021');
    setInterval(() => {
        const targetTime = new Date();
        const deltaTime = deadline - targetTime;

        updateClockface(deltaTime);
    }, 1000);
    if (deltaTime <= 0){
  clearInterval(timer)
};
  }
}
timer.start();

function updateClockface(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
}
function pad(value) {
    return String(value).padStart(2, '0');
  }