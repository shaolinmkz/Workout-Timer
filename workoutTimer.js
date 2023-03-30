let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume");
let stop = document.getElementById("stop");
let intervalHandle1, intervalHandle2, intervalHandle3, timeoutHandle; 
let counterHour = 1, counterMin = 1, counterSec = 1;
let onOff = "on"; 
let on = "on";

window.onload = function () {
    intervalHandle1 = setInterval(sec, 1000);
    intervalHandle2 = setInterval(min, 1000);
    intervalHandle3 = setInterval(hrs, 1000);
};

function sec () {
    if (counterSec < 10) {
         return seconds.innerHTML = `0${Number(counterSec++)}`;
    } else if (counterSec <= 60) {
        return seconds.innerHTML = counterSec++;
    }  else {
        counterSec = `0${1}`;
        return seconds.innerHTML = "0" + counterSec++;
    }
};

function min () {
    if (Number(seconds.innerHTML) === 60) {
        if (counterMin < 10) {
            return minutes.innerHTML = `0${Number(counterMin++)}`;
        } else if (counterMin <= 60) {
            return minutes.innerHTML = counterMin++;
        } else {
            counterMin = `0${1}`;
            return minutes.innerHTML = "0" + counterMin++;
        }
    }
};

function hrs () {
    if (Number(hours.innerHTML) === 24) {
        clearInterval(intervalHandle1);
        clearInterval(intervalHandle2);
        clearInterval(intervalHandle3);
        setTimeout(zeroZero, 10000);
    }
    if ((Number(minutes.innerHTML) + 1) > 60 && Number(seconds.innerHTML) === 60) {
        if (counterHour < 10) {
            return hours.innerHTML = `0${counterHour++}`;
        } else {
            return hours.innerHTML = counterHour++;
        }
    }
};

function zeroZero () {
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
};

function pauseTimer () {
    if (onOff === "on") { 
        clearInterval(intervalHandle1);
        clearInterval(intervalHandle2);
        clearInterval(intervalHandle3);
        onOff = "off";
    }
};
function continueTimer () {
    if (onOff === "off") {
        intervalHandle1 = setInterval(sec, 1000);
        intervalHandle2 = setInterval(min, 1000);
        intervalHandle3 = setInterval(hrs, 1000);
        onOff = "on";
    }
};
function stopTimer() {
    if (on === "on" ) {
        clearInterval(intervalHandle1);
        clearInterval(intervalHandle2);
        clearInterval(intervalHandle3);
        on = "off";
        pause.removeEventListener("click",pauseTimer);
        resume.removeEventListener("click", continueTimer);
        stop.removeEventListener("click", stopTimer);
    }
};
pause.addEventListener("click", pauseTimer);
resume.addEventListener("click", continueTimer);
stop.addEventListener("click", stopTimer);