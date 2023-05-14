//exercise1
-"I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)";

//exercise2
function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));


//exercise3
const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1
const usersArray = Object.entries(users);

// 2
const multipliedArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(multipliedArray);

//exercise4
-Object

//exercise5
//Analyze the options below. Which constructor will successfully extend the Dog class?
//2
Copy code
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

//exercise6
[2] === [2] FALSE
{} === {} FALSE

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);  // Output: 4
console.log(object3.number);  // Output: 4
console.log(object4.number);  // Output: 5


class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  sound(sound) {
    return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`;
  }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moos"));
