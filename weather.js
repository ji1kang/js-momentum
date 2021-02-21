const weather = document.querySelector(".js-weather")
const COORDS = "coords";
const API_KEY = "";

function getWeather(lat, lng){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(apiUrl).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp}@${place}`;
    });
}

function saveCorords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCorords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("failed to load geocode");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();
