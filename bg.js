const body = document.querySelector("body");
const imgContainer = document.querySelector(".js-bg");

const IMG_NUMBERT = 3;

function handleImgLoad(event){
    const image = event.target;
    newImageNumber = genRandom();
    image.src = `images/${newImageNumber + 1}.jpg`;
}

function paintImage(imgNumber){

    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    imgContainer.appendChild(image);
    image.addEventListener("click", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBERT);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();