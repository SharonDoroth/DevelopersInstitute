//functions
//declaration
function myName(name){
    return name
}

//function expression
const myName = function(name){
    return name
}

//arrow functions
const myName = (name) => {
    return name 
}

//local variables 
const local = () => {
    let x = 10
}

//outer variables
let x = 10;
const outer = () => {
    let x = 11;
    return x * 2
}

//self invoking function
function myName(name){
    console.log(name);
}
myName('sara')

(function(name){
    console.log(name);
});

//nested function
function outer(x){
    function inner(y){
        return x * y
    }
    return inner;
}

let a = outer(7);
console.log(a)

//cauculando VAT
const VAT = 1.17;
let a = outer(VAT);
console.log(a(6));
//cauculando VAT de outro jeito
const VAT = 1.17;
let a = outer(VAT)(6);
console.log(a);

//currying 
const x = (a) => (b) => a * b;
// currying de outro jeito
const x = (a) => {
    return (b) => {
        return a * b
    }
}

//compose - para ler o codigo e bom ler como hebraico
const x = (a, b) => (c) => a(b(c));

let sum1 = (num) => num * 2;
let sum2 = (num) => num + 1;

let a = x(sum1,sum2)(6);
console.log(a);//resposta 14


//objects and properties
let obj = {};
let obj1 = {
    name: 'sara',
    email: 'sara@gmail.com'
}

let obj2 = new Object();

obj.name = 'John'
obj.email = 'john@gmail.com'

obj2['name'] = 'Marry';
obj2['email'] = 'marry@gmail.com'

console.log(obj,obj1,obj2)

//exercicio
let state = {
    firstname: '',
    lastname:'',
    email:''
};

function handleInput(e){
    console.log(e.target.value);//state[e.target.name] = e.target.value;
}

function handleSubmit(){
    console.log(state)
}

//by value or by reference
let a = 5;
let b = a;
b++;
console.log(a,b);//resposta 5 6

let arr = [1,2,3];
let arr2 = arr;//clonando - [...arr];
arr2[1] = 4
arr[0] = 15;
console.log(arr);
console.log(arr2);// resposta 15,4,3

let obj = {
    name: 'aaa',
    email: 'bbb'
}

let obj2 = {...obj}
let obj3 = Object.assign({},obj);
obj.email = 'ccc';

console.log(obj);
console.log(obj2);

//exercicio copiar

let user = {
    name:'Mark',
    address:{
        city: 'Tel Aviv',
        country:'Israel'
    }
}
let user2 = {...user}

user2.name = 'Eli';
user2.address.city = "Haifa"
console.log(user)
console.log(user2)
//exercicio copiar json file
let user = {
  name: "Mark",
  address: {
    city: "Tel Aviv",
    country: "Israel",
    zipcode: {
        start: '567',
        end:'78990'
    }
  },
};

console.log(user);

let json = JSON.stringify(user)
let user2 = JSON.parse(json)
console.log(user2)