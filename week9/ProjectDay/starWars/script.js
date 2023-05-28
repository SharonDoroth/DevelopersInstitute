const characterInfo = document.getElementById("characterInfo");
const loadingMessage = document.getElementById("loadingMessage");
const errorMessage = document.getElementById("errorMessage");
const nameElement = document.getElementById("name");
const heightElement = document.getElementById("height");
const genderElement = document.getElementById("gender");
const birthYearElement = document.getElementById("birthYear");
const homeWorldElement = document.getElementById("homeWorld");
const getCharacterBtn = document.getElementById("getCharacterBtn");

function displayCharacterInfo(character) {
  nameElement.textContent = character.name;
  heightElement.textContent = character.height;
  genderElement.textContent = character.gender;
  birthYearElement.textContent = character.birth_year;
  fetch(character.homeworld)
    .then((response) => response.json())
    .then((data) => {
      homeWorldElement.textContent = data.name;
      loadingMessage.style.display = "none";
    })
    .catch((error) => {
      homeWorldElement.textContent = "Unknown";
      console.log(error);
      loadingMessage.style.display = "none";
    });
}

function getRandomCharacter() {
  loadingMessage.style.display = "block";
  errorMessage.textContent = "";

  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];
      displayCharacterInfo(randomCharacter);
    })
    .catch((error) => {
      errorMessage.textContent = "Ohh no, that person isn't available!";
      console.log(error);
      loadingMessage.style.display = "none";
    });
}

getCharacterBtn.addEventListener("click", getRandomCharacter);
