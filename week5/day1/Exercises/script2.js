// Retrieve the form
let formEl = document.getElementsByTagName("form")[0];
console.log(formEl);

//Retrieve the Inputs by ID
let fnameInputEl = document.getElementById("fname");
let lnameInputEl = document.querySelector("#lname"); // #forid, .forclass
// let submitInputEl = document.getElementById("submit");
console.log(fnameInputEl, lnameInputEl);

//Retrieve the Input by name att
let fnameInputEl2 = document.getElementsByName("fname")[0];
let lnameInputEl2 = document.getElementsByName("lname")[0];
// let inputElName = document.querySelectorAll("[name=fname], [name=lname]");
console.log(fnameInputEl2, lnameInputEl2);

// Submit event listener function
function logSubmit(event) {
  // prevent page refresh so that we don't loose data
  event.preventDefault();
  if (fnameInputEl.value != "" && lnameInputEl != "") {
    // select li container
    let usersAnswer = document.getElementsByClassName("usersAnswer")[0];

    // create li's
    let li1 = document.createElement("li");
    li1.innerText = `First name of user: ${fnameInputEl.value}`;
    let li2 = document.createElement("li");
    li2.innerText = `Last name of user: ${lnameInputEl.value}`;

    // append or add li's to their container
    usersAnswer.appendChild(li1);
    usersAnswer.appendChild(li2);
  } else {
    alert("Fields shouldn't be empty");
  }
}
// add listener to formEl
formEl.addEventListener("submit", logSubmit);
