//Exercise 1
const sum = (num1, num2) => num1 + num2;

//Exercise 2
function convertToGrams(weightInKg) {
  return weightInKg * 1000;
}

console.log(convertToGrams(2));

const convertToGrams = function(weightInKg) {
  return weightInKg * 1000;
};

console.log(convertToGrams(2)); 

//Exercise 3
(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
  const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  const sentenceElement = document.createElement('p');
  sentenceElement.textContent = sentence;
  document.body.appendChild(sentenceElement);
})(3, 'Sara', 'Hawaii', 'Desiner');

//Exercise 4
//Diferent folder

//Exercise 5
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing `;
    ingredients.forEach((ingredient, index) => {
      sentence += index === ingredients.length - 1 ? ingredient : `${ingredient}, `;
    });
    document.getElementById('juice-bar').textContent = sentence + '.';
  }

  addIngredients('pear', 'cucuber', 'ginger');
  addIngredients('orange', 'banana', 'spinach');
  displayJuice();
}

makeJuice('medium');
