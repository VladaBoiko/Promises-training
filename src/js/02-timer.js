// Я внесла вказані тобою зміни, але він до мене матюкається в консолі і починає чесати в мінус(
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const secondForm = document.querySelector('.second-form');
const secondRefs = {
  secondtBox: document.querySelector('.second'),
  startBtn: secondForm.querySelector('[data-start]'),
  stopBtn: secondForm.querySelector('[data-stop]'),
  clockFace: document.querySelector('.timer'),
  dayValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secundesValue: document.querySelector('[data-seconds]'),
};

secondRefs.startBtn.setAttribute('disabled', 'disabled');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const finishDate = new Date(selectedDates[0]);
    timerOn(finishDate);
  },
};

flatpickr('#datetime-picker', options);

function timerOn(finishDate) {
  const utsFinishDate = finishDate.getTime();
  const currentTime = Date.now();
  const past = utsFinishDate < currentTime;
  const future = utsFinishDate > currentTime;
  // let timer = new Timer({
  //   onTick: updateTimerFace,
  // });
  if (future) {
    secondRefs.startBtn.removeAttribute('disabled', 'disabled');
  }
  if (past) {
    Notify.failure('Please choose a date in the future');
  }
  secondRefs.startBtn.addEventListener('click', () => {
    timer.start(utsFinishDate, currentTime);
  });

  secondRefs.stopBtn.addEventListener('click', () => {
    timer.stop();
    // timer = null;
  });
}
class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
    this.init();
  }
  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }

  start(finishTime, currentTime) {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = finishTime - currentTime;
      const time = this.convertMs(deltaTime);

      this.onTick(time);
      this.timeStop(deltaTime);
      secondRefs.secondtBox.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
  }
  timeStop(deltaTime) {
    if (deltaTime < 1000) {
      timer.stop();
      Notify.failure('YOU DIED!!!!!');
    }
  }
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.convertMs(0);
    this.onTick(time);
  }

  convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }
}
function pad(value) {
  return String(value).padStart(2, '0');
}

const timer = new Timer({
  onTick: updateTimerFace,
});
function updateTimerFace({ days, hours, minutes, seconds }) {
  secondRefs.dayValue.textContent = `${days}`;
  secondRefs.hoursValue.textContent = `${hours}`;
  secondRefs.minutesValue.textContent = `${minutes}`;
  secondRefs.secundesValue.textContent = `${seconds}`;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
