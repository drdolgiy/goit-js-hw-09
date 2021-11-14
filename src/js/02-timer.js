import 'flatpickr/dist/flatpickr.min.css';
require("flatpickr/dist/themes/dark.css");

import flatpickr from 'flatpickr';

const inputDatetime = document.querySelector('#datetime-picker');
const dataStartButton = document.querySelector('button[data-start]');
dataStartButton.setAttribute('disabled', '');

const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let start = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    start = selectedDates[0];
    console.log(selectedDates[0]);
      if (start < options.defaultDate) {
          return window.alert('Please choose a date in the future');
      
    } else if (selectedDates[0] > options.defaultDate) {
      dataStartButton.removeAttribute('disabled', '')
    }
   
  },
};

flatpickr(inputDatetime, options) ;

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero() {

}

dataStartButton.addEventListener('click', onClick);

function onClick() {
  const timerId = setInterval(callback, 1000);

  function callback() {
    const end = Date.now();
    // console.log(end);
    const differenceInTime = start - end;
    // console.log(differenceInTime);
    const time = convertMs(differenceInTime);
    // console.log(time);
    dataDays.textContent = time.days;
    dataHours.textContent = time.hours;
    dataMinutes.textContent = time.minutes;
    dataSeconds.textContent = time.seconds;
    
    if (differenceInTime <= 1000) {
      clearInterval(timerId)
    };    
  };     
};



