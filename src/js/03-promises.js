const form = document.querySelector('.form');
console.log(form);
// const delay = document.querySelector('input[name="delay"]');
// console.log(delay);
// const step = document.querySelector('input[name="step"]');
// console.log(step);
// const amount = document.querySelector('input[name="amount"]');
// console.log(amount);

form.addEventListener('submit', onSubmitClick);

function onSubmitClick(evt) {
  evt.preventDefault();

  const firstDelay = evt.target[0].value;

  const step = evt.target[1].value;
  const amount = evt.target[2].value;
  let delay = firstDelay;

  for ( let i = 0; i <= amount; i +=1) {
    createPromise(i , delay)
      .then(({ position, delay }) => setTimeout(() => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }), delay)
      .catch(({ position, delay }) => setTimeout(() => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }), delay)
      delay += step;
  }
}

function createPromise(position, delay) {
  let promise = new Promise(function(resolve, reject) {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(() => {resolve({ position, delay })  
  }, delay)} else {
    setTimeout(() => {reject({ position, delay })
  }, delay)  }
  })
  return promise
  
}
