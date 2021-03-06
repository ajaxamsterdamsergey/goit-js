'use strict';
const refs = {
    days: document.querySelector('span[data-value="days"'),
    hours: document.querySelector('span[data-value="hours"'),
    mins: document.querySelector('span[data-value="mins"'),
    secs: document.querySelector('span[data-value="secs"'),
};
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    updateClockface(days, hours, mins, secs) {
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;
    }
    timerId = setInterval(() => {
        const currentTime = Date.now();
        const time = this.targetDate - currentTime;
        const date = new Date(time);

        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        this.updateClockface(days, hours, mins, secs);
    }, 1000);
}
const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2019'),
});
function pad(value) {
    return String(value).padStart(2, '0');
}
