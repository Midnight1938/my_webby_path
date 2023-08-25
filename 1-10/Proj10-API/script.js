const jokeElm = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke)

generateJoke();

async function generateJoke() { // Async makes the function return a promise
  const config = { headers: { Accept: "Application/json" } };

  const response = await fetch("https://icanhazdadjoke.com/", config); 
  const data = await response.json(); // await the response, then convert it to JSON
  jokeElm.innerHTML = data.joke; // set the jokeElm's innerHTML to the joke
}

// Non async version
//function generateJoke() {
//  const config = { headers: { Accept: "Application/json" } };
//
//  fetch("https://icanhazdadjoke.com/", config)
//    .then((response) => response.json())
//    .then((data) => {jokeElm.innerHTML = data.joke
//    });
//}
