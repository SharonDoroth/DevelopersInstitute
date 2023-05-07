function startGame() {
  let userInput = prompt("Enter a number of Beer");
  let userNumberOfBeer = parseInt(userInput);

  if (isNaN(userNumberOfBeer)) {
    alert("Please give a NUMBER!");
  } else if (userNumberOfBeer <= 0) {
    alert("Please give a number greater than 0");
  } else {
    let numberCount = 1;
    alert(`We start the song at ${userNumberOfBeer} bottles`);
    alert(`Take ${numberCount} down, pass it around`);
    alert(`We now have ${userNumberOfBeer - numberCount} bottles`);

    alertBottle(userNumberOfBeer, numberCount);
  }
}

function alertBottle(userNumberOfBeer, numberCount) {
  if (userNumberOfBeer - numberCount < 0) {
    alert(`Then, Take ${userNumberOfBeer} down, pass them around`);
    alert(`we now have 0 bottle`);
    alert("Game Over!!!!!");
    return;
  }
  numberCount++;
  alert(`Then, Take ${numberCount} down, pass them around`);
  alert(`we now have ${userNumberOfBeer - numberCount} bottle(s)`);

  return alertBottle(userNumberOfBeer - numberCount, numberCount);
}
