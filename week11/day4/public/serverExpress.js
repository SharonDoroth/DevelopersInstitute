// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello, Express!</h1>");
// });

// app.listen(3000, () => {
//   console.log("Server is running at http://localhost:3000/");
// });

//DAILY CHALLENGE
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/aboutMe/:hobby', (req, res) => {
  const hobby = req.params.hobby;

  if (typeof hobby !== 'string') {
    res.status(404).send('Invalid hobby parameter.');
  } else {
    res.send(`Hobby: ${hobby}`);
  }
});

app.get('/pic', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'picture.html'));
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/formData', (req, res) => {
  const email = req.body.email;
  const message = req.body.message;

  res.send(`${email} sent you a message: "${message}"`);
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});