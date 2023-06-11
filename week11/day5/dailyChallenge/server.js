const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let users = [];

app.get("/registerForm", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.get("/loginForm", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/register", (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  
  const existingUser = users.find(
    (user) => user.username === username || user.password === password
  );
  if (existingUser) {
    return res.json({
      message:
        "Username or password already exists. Please choose a different one.",
    });
  }

 
  const user = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password,
  };
  users.push(user);

  res.json({ message: "User registered successfully." });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.json({
      message: "Invalid username or password. Please try again.",
    });
  }

  res.json({ message: "Login successful." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
