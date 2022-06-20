const reportJokes:any = [];

function getDate() {
    return new Date().toLocaleDateString("es-ES");
};

function getLocation() {
    navigator.geolocation.getCurrentPosition(generateWeather);
}

async function generateWeather(position: any) {
    let showWeather: HTMLElement = document.getElementById('show-weather');
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let key = 'abd700ead8fc5a6f7b3b5a9ed2b031f6';
    let lang = 'ca'; //catalan
    let units = 'metric';
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

    //Get API
    var requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };
    const result: any = await fetch(url, requestOptions);
    const data: any = await result.json();

    //Get temperature
    let temp =  Math.floor(data.main.temp);
    //Icon
    let icon = `<img
    src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png"
    alt="${data.weather[0].description}"/>`;

    showWeather.innerHTML = `${icon} | ${temp} ºC`;
};

async function generateJoke() {
  const DAD_JOKE_URL = "https://icanhazdadjoke.com/";
  const NORRIS_URL = "https://api.chucknorris.io/jokes/random";

  //Get API dad joke
  let requestOptions1 = {
    headers: {
      Accept: "application/json",
    },
  };
  const dadJokes: any = await fetch(DAD_JOKE_URL, requestOptions1);
  const jokes1: any = await dadJokes.json();

  //Get API chuck norris joke
  let requestOptions2 = {
    method: "GET",
    redirect: "follow",
  };

  const chuckJokes: any = await fetch(NORRIS_URL, requestOptions2);
  const jokes2: any = await chuckJokes.json();

  let numRandom = Math.round(Math.random());
  let result = numRandom ? jokes1.joke : jokes2.value;
  const printJoke: HTMLElement = document.getElementById("jokeDisplay");
  printJoke.innerHTML = result;

  const date = getDate();

  let jokeObj = {
    date: date,
    joke: result,
    score: 0,
  };
  reportJokes.push(jokeObj);
};

function rateJoke(score: number) {
  //let index: number = reportJokes.findIndex(i => i.score == 0);
  reportJokes[reportJokes.length -1].score = score;

  console.log("report jokes score", reportJokes);
  generateJoke();
};

getLocation();