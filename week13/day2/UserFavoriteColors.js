//Exercise 3
import React from "react";

const UserFavoriteColors = (props) => {
  const favoriteAnimals = props.favAnimals;

  return (
    <div>
      <h3>User's Favorite Animals:</h3>
      <ul>
        {favoriteAnimals.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFavoriteColors;
