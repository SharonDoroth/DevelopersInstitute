EXERCISE1
let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(" "));

exercise2
let str1 = "hello ";
let str2 = " world ";

let str1Start = str1.slice(0,2);
let str2Start = str2.slice(0,2);

str1 = str2Start + str1.slice(2);
str2 = str1Start + str2.slice(2);

console.log(str1);
console.log(str2);
console.log(str1 + str2);

exercise3
let num1 = parseFloat(prompt("enter the firts number"));
let num2 = parseFloat(prompt("enter the second number"));
let sum = num1 + num2;
alert("The sum of " + num1 + " and " + num2 + " is " + sum);
