// let arr = [
//   { id: 1, user: "John", email: "john@gmail.com" },
//   { id: 2, user: "Sara", email: "sara@gmail.com" },
//   { id: 3, user: "Yasaar", email: "yasaar@gmail.com" },
//   { id: 10, user: "Yeshna", email: "yeshna@gmail.com" },
//   { id: 5, user: "Varshana", email: "varshana@gmail.com" },
// ];

// const root = document.getElementById('root')

// function createUsers(){
//     root.innerHTML = '';

//     for(let i = 0; i < arr.length; i++){
//         let div = document.createElement('div');
//         div.classList.add('inner-div');

//         let img = document.createElement('img');
//         img.setAttribute("src", `https://robohash.org/2${i}`);
//         div.appendChild(img);

//         let name = document.createElement('h2');
//         name.innerText = arr[i].user;
//         div.appendChild(name);

//         let email = document.createElement('p');
//         email.textContent = arr[i].email;
//         div.appendChild(email);

//         root.appendChild(div);
//     }
// }


// const color_div = document.getElementById('div1');

// color_div.addEventListener('mouseover', function(e){
// document.getElementById("div1").addEventListener("mouseover", function() {
//             document.getElementById("div1").style.backgroundColor = "blue";
//  });  

//  document.getElementById("div1").addEventListener("mouseout", function () {
//    document.getElementById("div1").style.backgroundColor = "yellow";
//  });
// })


// document.getElementById("div1").addEventListener("mouseover", function() {
//             document.getElementById("div1").style.backgroundColor = "blue";
//  }); document.getElementById("div1").addEventListener("mouseout", function() {
//             document.getElementById("div1").style.backgroundColor = "yellow";
// });
// const mainButton = document.getElementById("Create Robots");

// mainButton.addEventListener("click", function (event) {
//   this.remove();
//   document.querySelector(".inner-div").classList.remove(".main-bg");
// });