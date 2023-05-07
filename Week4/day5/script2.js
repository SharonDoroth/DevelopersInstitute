// const elem = document.getElementById('page');
// console.log(elem.firstElementChild);

//  const elem = document.getElementsByTagName('h2');
//  elem[0].innerText = 'new title';

// let el = document.getElementById('header').nextElementSibling;
// console.log('siblings of header: ') ;
// while (el){
//     console.log(el.nodeName);
//     el = el.nextElementSibling
// }
// function myFunction(){
//     var x =
//  document.getElementById('title').previousElementSibling.innerHTML;
//  document.getElementById('content').innerHTML = text;
// }
// let name = 
// document.getElementById('page').parentNode.nodeName;
// document.getElementById('content').innerHTML = name;

// const nodeList = 
// document.body.childNodes;

// let text = '';
// for (let i = 0; i < nodeList.length;
//     i++){
//         text += nodeList[i].nodeName + '<br>'
//     }
//     document.getElementById('content').innerHTML = text;

// const elem = document.getElementById('content');
// const h2 = elem.children[0];
// const lastP = elem.lastElementChild;
// elem.replaceChild(lastP,h2);
// elem.appendChild(h2);//vai mudar de lugar o p com o h2

const elem = document.getElementById('content');
 const h2 = elem.children[0];
 h2.style.color = 'red'; // vai mudar a cor do texto do h2
 h2.style.backgroundColor = 'yellow' // vai mudar a cor do backround do h2
 h2.style.fontSize = "40px" // vai mudar o tamanho da fonte do elemento h2