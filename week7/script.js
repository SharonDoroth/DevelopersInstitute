
/* Exercise
* Create an function that get an array of Numbers as input
* and return a new array with all numbers multiply by 2
* For example:
* Give this array [1,2,3,4]
* result [2,4,6,8]
*/

//resultado da internet

function multiplyByTwo(numbers) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2);
    }
    return result;
}

//resultado do professor

let originalArray = [1,2,3,4];
let newArray = multiplyByTwo(originalArray);
console.log(newArray);


function map(array){
    let newArray = [];
    array.forEach((item, i) => {
        newArr.push(item * 2)
    });
    return newArr
}


//let users = ["eli", "adam", "galina", "ziv"];
//new array that add the gmail extention to users
//eli@gmail.com

let emails = users.map(item => {
    return item + '@gmail.com'
})
console.log(emails);

let arr = [1,2,3,4];
let arr2 = arr.map(x => {
    return[x * 2]
})
let arr3 = arr2.flatMap(x => {
    return x
})
console.log(arr3);

console.log(arr2);

/*Exercise
create a function that get an array of numbers as input
and return a new array with all numbers greater that 3
for example: 
give this array [0,1,1,2,3,,5,8]
result [5,8]
*/
//resposta do professor
let arr = [0, 1, 1, 2, 3, , 5, 8];

let newArr = arr.filter(item => {
    return arr
})

console.log(newArr);

//resposta do aluno

function filter(arr) {
    let newArr = [];
    arr.forEach((item, i) => {
        if(item > 3){
            newArr.push(item)
        }
    });
    return newArr
}

console.log(filter([0,1,1,2,3,,5,8]))

//Exercicio

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
//get all names that start with / includes -Sa

const filterName = dragons.filter(item => {
    return item. includes('sa')
});
console.log(filterName);

/*Exercise
create an function that get an array of numbers as input
and return the sum of all numbers
for example:
give this array [2,5,10,100]
result 117
*/
//resposta do aluno
function reduce(arr) {
  let sum = 0;
  array.forEach((item, i) => {
    sum +=item
  });
  return sum
}

console.log(reduce([2,5,10.100]))

//resposta do professor

let numbers = [2,5,10,100]

const total = numbers.reduce((total, item) => {
    return total + item
});

console.log(total);

//exercicio 
// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//resultado do professor
function sumOfDigits(num){
    let arr = new String(num).split('');
    let newNumber = arr.reduce((total, item) => {
        return total + item;
    })
    if (newNumber <10 ){
        return newNumber
    }
    return sumOfDigits(newNumber)
}

console.log(sumOfDigits);

//resultado da internet
function reduceN(n) {
    if (n < 10) return n;

    return reduceN(
        n.toString().split('').reduce((acc, d) => {
            return acc + +d;
        },0));
}

console.log(reduceN);

// Birthday Cake Candles
// This array are Birthday Cake Candles
// You can blow only the tallest candles
// let arr = [2,4,8,4,8,1,8]
// birthdayCakeCandles function will return
// how many candles you can blow

//resposta do aluno
function birthdayCakeCandles(arr){
    let maxNum = 0;
    for(i of aff){
        if(maxNum < i){
            maxNum = i;
        }
    }
    return arr.filter(item => {
        return item === maxNum
    }).length
    }
  
//resposta do professor

function birthdayCakeCandles(arr){
    let maxNum = Math.max(...arr);
    let filter arr.filter(item => {

        return item === maxNum;
    })
    return filter.length
}

// finIntersection function return an array that contain
//the numbers exists in both strings from the array
//["1,2,5,6,7" , "2,5,7,8,15"]=>[2,5,7]

//resposta do professor

let 
function arraysCommon(arr) {
    let arr1 = arr[0].split(',');//[1,2,5,6,7]
    let arr2 = arr[1].split(',');//[2,5,7,8,15]
    let ret = arr1.filter(value => {
        return arr2.includes(value)
    })
    return ret
}

//spread operator
let [a,b] = [1,2]

let arr = [3,4];
let arr1 = [...arr, a,b]//vc esta clonando os numeros 1,2 pra dentro do arr

console.log(arr1)


