const bloop = new Audio("./sounds/bloop.mp4");
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.pause-btn');
const clearBtn = document.querySelector('.clear-btn');
let myInterval;
let state = true;

const appleTimer = () => {
    const sessionAmount = Number.parseInt(sessionStorage.textContent)
    if(state) {
        state = false;
        let totalSeconds = sessionAmount * 60;

        const updateSeconds = () => {
            // Fnction 
        }
        myInterval = setInterval(updateSeconds, 1000);
    } 
}

const updateSeconds = () => {
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');

    totalSeconds--;

    let minutesLeft = Math.floor(totalSeconds/60);
    let secondsLeft = totalSeconds % 60;

    if(secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
    } else {
        secondDiv.textContent = secondsLeft;
    } 
    minuteDiv.textContent = '${minutesLeft}'

    if(minutesLeft === 0 && secondsLeft === 0) {
        bloop.play()
        clearInterval(myInterval);
    }
}

startBtn.addEventListener('click', appleTimer);
