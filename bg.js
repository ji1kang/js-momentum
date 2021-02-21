const body = document.querySelector("body");

const IMG_NUMBERT = 3;

function handleImgLoad(event){
    const image = event.target;
    console.log(image.src);
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpeg`;
    image.classList.add("bgImage");
    body.appendChild(image);
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