let numberOfTimes = 0;
function playTheGame() {
  if (confirm("Do you really want to play the game?")) {
    const userInput = prompt("Enter a number between 0 and 10");
    const userNumber = parseInt(userInput);

    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye");
    } else if (userNumber < 0 || userNumber > 10) {
      alert("Sorry its not a good number, Goodbye");
    } else {
      const computerNumber = Math.floor(Math.random() * 11);
      compareNumbers(userNumber, computerNumber);
    }
  }
}

function compareNumbers(userNumber, computerNumber) {
  numberOfTimes++;
  if (userNumber === computerNumber) {
    return alert("WINNER, you played the game " + numberOfTimes + " times");
  } else if (userNumber > computerNumber) {
    alert("Your number is bigger than the computer’s, guess again");
  } else {
    alert("Your number is smaller than the computer’s, guess again");
  }

  const userInput = prompt("Enter another number between 0 and 10");
  const anotherUserNumber = parseInt(userInput);

  if (isNaN(anotherUserNumber)) {
    alert("Sorry Not a number, Goodbye");
  } else if (anotherUserNumber < 0 || anotherUserNumber > 10) {
    alert("Sorry its not a good number, Goodbye");
  } else {
    compareNumbers(anotherUserNumber, computerNumber);
  }
}
