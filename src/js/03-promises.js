import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]')
}

refs.form.addEventListener('submit', iterationCreatePromise);

function iterationCreatePromise(event) {
  event.preventDefault();
  delayInputValue = Number(refs.delayInput.value);
  stepInputValue = Number(refs.stepInput.value);
  createPositionNumber = 0;

  for (let i = 0; i < refs.amountInput.value; i += 1){
    createPromise(createPositionNumber += 1, delayInputValue + stepInputValue * i)
    .then(result => console.log(result))
    .catch(rej => console.log(rej));
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if(shouldResolve){
      resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
    }else{
      rejected(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
    }
  }, delay)
})
}
