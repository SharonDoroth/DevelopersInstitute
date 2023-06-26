// Exercise 3
import React from "react";
import ReactDOM from "react-dom";
import UserFavoriteColors from "./UserFavoriteColors";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

const App = () => {
  return (
    <div>
      <h3>First Name: {user.firstName}</h3>
      <h3>Last Name: {user.lastName}</h3>
      <UserFavoriteColors favAnimals={user.favAnimals} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
