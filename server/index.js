const getUsers = require('./users.js');

async function logUsers() {
  const users = await getUsers();
  console.log(users);
}

logUsers();