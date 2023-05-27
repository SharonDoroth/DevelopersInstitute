// Function 1: makeAllCaps
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    const allWordsAreStrings = words.every((word) => typeof word === "string");
    if (allWordsAreStrings) {
      const uppercasedWords = words.map((word) => word.toUpperCase());
      resolve(uppercasedWords);
    } else {
      reject("Not all words are strings.");
    }
  });
}

// Function 2: sortWords
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sortedWords = words.sort();
      resolve(sortedWords);
    } else {
      reject("Array length is not bigger than 4.");
    }
  });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Output: Not all words are strings.

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Output: Array length is not bigger than 4.

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
// Output: ["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
