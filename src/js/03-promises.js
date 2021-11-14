const form = document.querySelector('.form');
console.log(form);
const delay = document.querySelector('input[name="delay"]');
console.log(delay);
const step = document.querySelector('input[name="step"]');
console.log(step);
const amount = document.querySelector('input[name="amount"]');
console.log(amount);

delay.addEventListener('input', onDelayInput)
function onDelayInput(evt) {
const delayValue = evt.currentTarget.value;
console.log(delayValue);
}

step.addEventListener('input', onStepInput)
function onStepInput(evt) {
const stepValue = evt.currentTarget.value;
console.log(stepValue);
}

amount.addEventListener('input', onAmountInput)
function onAmountInput(evt) {
const amountValue = evt.currentTarget.value;
console.log(amountValue);
}

form.addEventListener('submit', onSubmitClick);
function onSubmitClick(evt) {
  evt.preventDefault();
  createPromise();
}

for( let i = 0; i <= amount; i += 1) {
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
    } else {
      // Reject
    }
  }

}

