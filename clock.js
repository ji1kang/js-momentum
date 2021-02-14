const clockContainer = document.querySelector(".js-clock"),
    colckTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        min < 10 ? `0${min}` : min
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();