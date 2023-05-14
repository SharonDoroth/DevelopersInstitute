const users = { user1: 18273, user2: 92833, user3: 90315 };

// Convert object to array
const usersArray = Object.entries(users);

// Multiply the user's ID by 2
const modifiedArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(modifiedArray);
