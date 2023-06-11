const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

let shoppingList = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/add-item", (req, res) => {
  const { item, amount } = req.body;
  shoppingList.push({ item, amount });
  res.redirect("/shopping-list");
});

app.get("/shopping-list", (req, res) => {
  let listHtml = "<h1>Shopping List</h1>";

  if (shoppingList.length === 0) {
    listHtml += "<p>No items in the shopping list.</p>";
  } else {
    listHtml += "<ul>";
    for (const { item, amount } of shoppingList) {
      listHtml += `<li>${item} - ${amount}</li>`;
    }
    listHtml += "</ul>";
  }

  res.send(listHtml);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
