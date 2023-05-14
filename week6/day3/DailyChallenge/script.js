let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

const cloneGroceries = () => {
  let user = client;
  client = "Betty";
  let shopping = Object.assign({}, groceries);
  shopping.totalPrice = "35$";
  shopping.other.payed = false;

  console.log("User:", user);
  console.log("Shopping Object:", shopping);
};

displayGroceries();
cloneGroceries();
