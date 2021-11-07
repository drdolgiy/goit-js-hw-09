const startButton = document.querySelector('button[data-start]');
console.log(startButton);

const stopButton = document.querySelector('button[data-stop]');
console.log(stopButton);

let timerId = null;

startButton.addEventListener('click', onStartButtonClick);

function onStartButtonClick() {

    timerId = setInterval(() => {
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
          }
            
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startButton.setAttribute('disabled', '')
    
};

stopButton.addEventListener('click', onStopButtonClick);

function onStopButtonClick() {
    clearInterval(timerId);
    startButton.removeAttribute('disabled', '')

}