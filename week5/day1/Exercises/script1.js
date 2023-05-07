// console.log h1
let h1El = document.getElementsByTagName("h1")[0];
console.log(h1El);

// remove last p
let articleElem = document.getElementsByTagName("article")[0];
let pEl = document.getElementsByTagName("p")[3];
articleElem.removeChild(pEl);

// add event listener h2
let h2El = document.getElementsByTagName("h2")[0]; // [h2]
h2El.addEventListener("click", function (e) {
  h2El.style.backgroundColor = "red";
});

//add event listener h3
let h3El = document.getElementsByTagName("h3")[0];
h3El.addEventListener("click", function (e){
    h3El.style.display = "none"
});