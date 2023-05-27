const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Function 1
function toJs() {
  return new Promise((resolve, reject) => {
    const morseObject = JSON.parse(morse);
    if (Object.keys(morseObject).length === 0) {
      reject("Morse JavaScript object is empty.");
    } else {
      resolve(morseObject);
    }
  });
}

// Function 2
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:");
    const words = userInput.split(" ");
    const morseTranslation = [];
    for (const word of words) {
      const morseLetters = [];
      for (const char of word) {
        const lowercaseChar = char.toLowerCase();
        if (morseJS.hasOwnProperty(lowercaseChar)) {
          morseLetters.push(morseJS[lowercaseChar]);
        } else {
          reject(
            `Character "${char}" does not exist in the Morse JavaScript object.`
          );
          return;
        }
      }
      morseTranslation.push(morseLetters.join(" "));
    }
    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const result = morseTranslation.join("\n");
  console.log(result);
}

// Chain the functions
toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.log(error));
