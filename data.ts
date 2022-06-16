const DAD_JOKE = "https://icanhazdadjoke.com/";
const WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=abd700ead8fc5a6f7b3b5a9ed2b031f6"
const reportJokes = [];
//clave API meteorologia abd700ead8fc5a6f7b3b5a9ed2b031f6


function getDate() {
    const date = new Date();
    let arrDate = date.toISOString().slice(0,10).split("-").reverse();
    let textDate = arrDate.toString().replace(/,/g, "-");
    return textDate;
};

// let showWeather = document.getElementById('show-weather');

function getLocation() {
    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => console.log(position));
}

function generateWeather() {
    let lat = getLocation()
    console.log("latitude", lat)
    let key = 'abd700ead8fc5a6f7b3b5a9ed2b031f6'
    
    var requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
};

async function generateJoke() {

    let options = { 
        headers: {
            "Accept" : "application/json" 
        }
    };

    const dataJokes: any = await fetch(DAD_JOKE, options);
    const data: any = await dataJokes.json();

    const printJoke = document.getElementById("jokeDisplay");
    if (printJoke) printJoke.innerHTML = data.joke;

    const date = getDate();

    let jokeObj = {
        date: date,
        joke: data.joke,
        score: 0
    };

    if (reportJokes.length == 0) {
      reportJokes.push(jokeObj);
    } else {
      reportJokes.push(jokeObj);
    }
    console.log("report jokes", reportJokes);
};

function nextJoke() {
  generateJoke();
//   let data: any = generateJoke();
};

function rateJoke(score) {
    generateJoke();
};

getLocation();