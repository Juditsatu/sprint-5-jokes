const jokesUrl = "https://icanhazdadjoke.com/";
let options = { 
    headers: {
        "Accept" : "application/json" 
    }
};

async function generateJoke() {
    const dataJokes:any = await fetch(jokesUrl, options);
    const data:any = await dataJokes.json();
    console.log(data);
};

function nextJoke() {
    return console.log(generateJoke());
};