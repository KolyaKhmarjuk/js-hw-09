function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalId = null;
let isActive = false;

const onStartBtn = () => {
  if (isActive) return;

  isActive = !isActive;

  intervalId = setInterval(() => {
    refs.startBtn.parentElement.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
};

const onStopBtn = () => {
  clearInterval(intervalId);
  isActive = false;
};

refs.startBtn.addEventListener('click', onStartBtn);
refs.stopBtn.addEventListener('click', onStopBtn);
