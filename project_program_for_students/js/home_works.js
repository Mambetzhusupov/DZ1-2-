function validateGmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkEmail() {
    const inputEmail = document.querySelector('#gmail_input').value;
    const resultSpan = document.querySelector('#gmail_result');

    if (validateGmail(inputEmail)) {
        setResult(resultSpan, "МАЛАДЕС", "green");
    } else {
        setResult(resultSpan, "ЛЕ ТЫ ЖИДКИЙ", "red");
    }
}

function setResult(element, text, color) {
    element.textContent = text;
    element.style.color = color;
}

const checkGmail = document.querySelector("#gmail_button");

checkGmail.addEventListener("click", checkEmail);

//part2

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

function moveBlock(position) {
    if (position >= parentBlock.offsetWidth - childBlock.offsetWidth) {
        return;
    }

    childBlock.style.left = `${position}px`;

    requestAnimationFrame(() => moveBlock(position + 1));
}

moveBlock(0);

//homework2
const minutesElement = document.getElementById('minutesS');
const secondsElement = document.getElementById('secondsS');
const millisecondsElement = document.getElementById('ml-secondsS');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
            }
        }
    }

    minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    millisecondsElement.textContent = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}

document.getElementById('start').addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(updateTimer, 10);
    }
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
});




