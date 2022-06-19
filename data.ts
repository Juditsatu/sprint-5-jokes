const DAD_JOKE = "https://icanhazdadjoke.com/";
const WEATHER = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=abd700ead8fc5a6f7b3b5a9ed2b031f6"
const reportJokes:any = [];
//clave API meteorologia abd700ead8fc5a6f7b3b5a9ed2b031f6
// let showWeather = document.getElementById('show-weather');

function getDate() {
    const date = new Date();
    let arrDate = date.toISOString().slice(0,10).split("-").reverse();
    let textDate = arrDate.toString().replace(/,/g, "-");
    return textDate;
};

function getLocation() {
    return navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => console.log(position));
}

function generateWeather() {
    let lat = getLocation()
    console.log("latitude", lat)
    let key = 'abd700ead8fc5a6f7b3b5a9ed2b031f6'
    
    var requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
      };
      
      const weather = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${key}`, requestOptions)
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

    const printJoke: HTMLElement | null = document.getElementById("jokeDisplay");
    printJoke.innerHTML = data.joke;

    const date = getDate();

    let jokeObj = {
        date: date,
        joke: data.joke,
        score: 0
    };
    reportJokes.push(jokeObj)

    //console.log("report jokes", reportJokes);
};

function rateJoke(score: number) {
  //let index: number = reportJokes.findIndex(i => i.score == 0);
  reportJokes[reportJokes.length -1].score = score;

  console.log("report jokes score", reportJokes)
  generateJoke();
};

getLocation();