import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
require('flatpickr/dist/themes/dark.css');

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timer = null;

startBtn.setAttribute('disabled', true);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = event => String(event).padStart(2, 0);

const showTimer = selectedData => {
  const nowDateTime = new Date();
  const selectData = new Date(selectedData);

  if (!selectData) return;

  const timeDifference = selectData - nowDateTime;
  const { days, hours, minutes, seconds } = convertMs(timeDifference);
  daysRef.textContent = days;
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);

  if (startBtn.attributes !== 'disabled') {
    startBtn.style.backgroundColor = 'green';
  }
};

const onClosedDatePicker = selectedDates => {
  const selectedData = selectedDates[0];
  if (selectedData < new Date()) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  startBtn.removeAttribute('disabled');

  const onClick = () => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => showTimer(selectedData), 1000);
  };
  startBtn.addEventListener('click', onClick);
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: onClosedDatePicker,
};

flatpickr('#datetime-picker', { ...options });
