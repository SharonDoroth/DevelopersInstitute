function startGame() {
  let word = prompt("Player1 Enter a word:");
  let stars = "";

  if (word.length >= 8) {
    for (let i = 0; i < word.length; i++) {
      stars += "*"; // stars = stars(old stars) + "*"
    }
    console.log(stars);

    enterLetter(word);
  } else {
    alert("Please enter a word of atleast 8 characters");
    return startGame();
  }
}

function enterLetter(word, letters = [], count = 1, oldStars) {
  if (count >= 11) return alert("YOU LOSE!!");
  if (oldStars && !oldStars.includes("*")) return alert("YOU WIN!!");

  let letter1 = prompt("Player2 enter a letter:");
  if (letters.includes(letter1))
    return alert(`You already guesed this letter(${letter1})`);
  let stars = "";
  letters.push(letter1); // keet track of player2's letters
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    if (letters.includes(currentLetter)) {
      stars += currentLetter;
    } else {
      stars += "*"; // stars = stars(old stars) + "*"
    }
  }
  console.log(stars);
  return enterLetter(word, letters, count + 1, stars); // ***h**
}
