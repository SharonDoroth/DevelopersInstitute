const users = require('users');

async function getUsers() {
  try {
    const response = await users.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.message);
    return []; 
  }
}

module.exports = getUsers;
