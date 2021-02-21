const clockContainer = document.querySelector(".js-clock"),
    colckTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    colckTitle.innerText = `지금은 ${hours < 10 ? `0${hours}` : hours}시${
        min < 10 ? `0${min}` : min
    }분${seconds < 10 ? `0${seconds}` : seconds}초야`;
}
function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();