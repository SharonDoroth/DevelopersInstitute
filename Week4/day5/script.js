const elem = document.createElementById('inner');
const h2 = document.createElement('h2');
h2.textContent = 'new H2 Header'
elem.insertBefore(h2);
// const elem = document.getElementById('text');
// elem.innerHTML = '<b> dom is a magic</b>'// vai ser usado para adicionar html no lugar do inner div(text1).

// const elem = document.getElementById('text');
// console.log(elem.innerText);
// console.log(elem.innerHTML);
// console.log(elem.textContent);
// console.log(elem.nodeValue);// para acessar os elementos dentro do p

// const body = document.body;
// console.log(body.firstElementChild.lastElementChild);// para achar o primeiro e ultimo elemento do body.
// const body = document.body;
//  console.log(body.lastElementChild);// para achar o ultimo elemento do body.
// const body = document.body;
// console.log(body.firstElementChild.firstElementChild); //para achar o elemento dentro do elemento,usamos o mesmo nome.

// const header = document.getElementsByTagName('p');
// console.log(header);

// const div = document.getElementById('outer');
// console.log(div);
// const p = document.getElementsById('text')
// console.log(p);
