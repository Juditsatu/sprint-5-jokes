const DAD_JOKE = "https://icanhazdadjoke.com/";

async function generateJoke() {

    let options = { 
        headers: {
            "Accept" : "application/json" 
        }
    };

    const dataJokes:any = await fetch(DAD_JOKE, options);
    const data:any = await dataJokes.json();

    const printJoke = document.getElementById("jokeDisplay");
    if (printJoke) printJoke.innerHTML = data.joke;

    // const listOfJokes = [];
    // if (listOfJokes.length == 0) {
    //     listOfJokes.push(data);
    // } 
    const reportAcudits = [];
    // console.log("joke list", listOfJokes);
    //console.log("joke:", data.joke);
};

function nextJoke() {
    generateJoke();
    // const printJoke = document.getElementById("jokeDisplay");
    // if (printJoke) printJoke.innerHTML = joke;
};