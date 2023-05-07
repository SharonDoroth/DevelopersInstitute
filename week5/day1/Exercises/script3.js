let allBoldItems;

// function to get bold items
function getBold_items() {
  allBoldItems = document.getElementsByTagName("strong");
}
getBold_items();

// function for changing color of bold elements to blue
function highlight() {
  for (let i = 0; i < allBoldItems.length; i++) {
    const el = allBoldItems[i];
    el.style.color = "blue";
  }
}

// function for changing color of bold elements back to black
function return_normal() {
  for (let i = 0; i < allBoldItems.length; i++) {
    const el = allBoldItems[i];
    el.style.color = "black";
  }
}

// access p element
let pEl = document.getElementsByTagName("p")[0];
// mouse over event
pEl.addEventListener("mouseover", highlight);
// mouse out event
pEl.addEventListener("mouseout", return_normal);
