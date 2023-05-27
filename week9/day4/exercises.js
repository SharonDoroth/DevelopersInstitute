//exercise 1
async function fetchStarWarsShip() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.log(error);
  }
}

fetchStarWarsShip();

//exercise 2

//Analyse the code provided above before executing it - what will be the outcome?
calling;
resolved;