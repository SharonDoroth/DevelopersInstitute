const fs = require("fs");

fs.readFile("./RightLeft.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const stepsRight = (data.match(/>/g) || []).length;
  const stepsLeft = (data.match(/</g) || []).length;

  const finalPosition = stepsRight - stepsLeft;
  console.log(`Final position: ${finalPosition} steps to the right.`);

  let currentPosition = 0;
  let stepsToNegativeOne = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === ">") {
      currentPosition++;
    } else if (data[i] === "<") {
      currentPosition--;
    }

    if (currentPosition === -1) {
      stepsToNegativeOne = i + 1;
      break;
    }
  }

  console.log(
    `Steps to hit position -1 for the first time: ${stepsToNegativeOne} steps.`
  );
});
