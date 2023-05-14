//exercise2
function winBattle() {
  return true;
}

//result
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

//exercise3
const isString = (value) => (typeof value === "string" ? true : false);
console.log(isString("hello")); // true
console.log(isString([1, 2, 4, 0])); // false

//exercise4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

//exercise5
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const ordinalIndex = index < 3 ? index + 1 : 0;
  const ordinalIndicator = ordinal[ordinalIndex] || ordinal[0];
  console.log(`${index + 1}${ordinalIndicator} choice is ${color}.`);
});

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

//exercise6
let bankAmount = 5000;
const vatPercentage = 17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < expenses.length; i++) {
  const expense = parseFloat(expenses[i]);
  const taxAmount = (vatPercentage / 100) * Math.abs(expense);
  expenses[i] = (expense >= 0 ? "+" : "-") + (expense + taxAmount);
  bankAmount += expense + taxAmount;
}

console.log("Bank Account standing:", bankAmount);
