function createPEl() {
  let con = document.querySelector("#container");
  let allPElements = document.querySelectorAll("p");

  if (allPElements.length < 5) {
    let pEl = document.createElement("p"); //<p></p>
    pEl.innerText = "Hello World"; // <p>Hello World</p>
    con.appendChild(pEl);
  } else {
    clearInterval(createPInterval);
  }
}

setTimeout(() => {
  //   alert("hello, world!");
  createPEl();
}, 2000);

let createPInterval = setInterval(createPEl, 2000);

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", (e) => {
  clearInterval(createPInterval);
});
