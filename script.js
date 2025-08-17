const bloop = new Audio("./sounds/bloop.m4a");
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const clearBtn = document.querySelector('.clear-btn');
const session = document.querySelector('.minutes'); 

let myInterval;
let state = true;


 const appleTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent)

  if(state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
       const minuteDiv = document.querySelector('.minutes');
       const secondDiv = document.querySelector('.seconds');

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds/60);
    let secondsLeft = totalSeconds % 60;

    if (secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
    } else {
        secondDiv.textContent = secondsLeft;
    }
    minuteDiv.textContent = `${minutesLeft}`

    if(minutesLeft === 0 && secondsLeft === 0) {
        bloop.play()
        clearInterval(myInterval);
    }
} 
    myInterval = setInterval(updateSeconds, 1000);
    } else {
    alert('Session has already started.')
   }
}

startBtn.addEventListener('click', appleTimer);

pauseBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    state = true;
});

clearBtn.addEventListener('click', () => {
    clearInterval(myInterval);
    document.querySelector('.minutes').textContent = '25'; 
    document.querySelector('.seconds').textContent = '00';
    state = true;
});