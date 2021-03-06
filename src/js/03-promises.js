import Notiflix from 'notiflix';

const form = document.querySelector('.form');
// console.log(form);
const inputDelay = document.querySelector('input[name="delay"]');
// console.log(inputDelay);
const inputStep = document.querySelector('input[name="step"]');
// console.log(inputStep);
const inputAmount = document.querySelector('input[name="amount"]');
// console.log(inputAmount);

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();
  const firstDelay = Number(inputDelay.value);
// console.log(firstDelay)
  const step = Number(inputStep.value);
  // console.log(step);
  const amount = Number(inputAmount.value);
  // console.log(amount);
  let delay = firstDelay;
  // console.log(delay);

  function createPromise(position, delay) {
    let promise = new Promise(function(resolve, reject) {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      setTimeout(() => {resolve({ position, delay })  
    }, delay)} else {
      setTimeout(() => {reject({ position, delay })
    }, delay)}
    })
    return promise
  }

  for ( let i = 0; i < amount; i ++) {
    
    createPromise(i + 1, delay).then(({ position, delay }) => setTimeout(() => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }), delay)
      .catch(({ position, delay }) => setTimeout(() => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }), delay)
      delay += step;      
  }
  
}


