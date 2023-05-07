/*for(let index = 0; index < 15; index++){
    console.log(index);
if (index % 2 === 2) {
    console.log(index + 'is even');
}
else{
    console.log(index + 'is odd');
}
}*/

/*let arr = [0,1,2,3,4,58,9];

for(let index = 0; index <= arr.length; index++){
    console.log(arr[index]);
}*/

/*let arr = [23,56,4,78,5,63,45,20,56];
const arr_len = arr.length;
let elm = 56;
for(let index = 0; index < arr_len; index++){
    if(arr[index] == elm){
        arr.splice(index,1);
    }
}
console.log(arr);*/
/*4 ^ 3 =64
16 ^ 2 =256
let num = 16;
let pow = 2;
let res = 1; 
for(let i = 0; i < pow; i++){
    res= res * num;
}
console.log(res);*/

/*for(let i =0; i < 5; i++){
    for(let j = 0; j < 3; j++){
        console.log(j,i);
    }
}*/

/*let range = 8;
for(let i = 1; i <= range; i++){
    let str =" ";
    for(let j = 1; j <= i; j++){
        str= str + j + " ";
    }
    console.log(str);
}*/

/*let arr = [2,4,5,7,8,9]
let obj = {
    a:'1',
    b:'John',
    c: {a:9}
}
for(x in obj){
    console.log(x,obj[x]);
}*/

/*let arr = [2,4,5,7,8,9]
let obj = {
    a: '1',
    b:'John',
    c:{a:9}
}
for(i of arr){
    console.log(i);
}*/

// const users = [
//     {
//         user_id:1,
//         name:'Leanne Graham',
//         usersame:'Bret',
//         contact:{
//             email:'Sincere@april.biz',
//             phone:'+072505556666'
//         }
//     },
//     {
//         user_id:2,
//         name:'Ervin Howell',
//         username:'Antonette',
//         contact:{
//             email:'Nathan@yesenia.net',
//             phone:'+972501234567'
//         }
//     },
//     {
//         user_id: 3,
//         name: 'Clementine Bauch',
//         username:'Samantha',
//         contact:{
//             email: 'Nathan@yesenia.net',
//             phone: '+972501234567'
//         }
//     }
// ]
// console.log(users)

// for(let x = 0; x < users.length; x++){
//     console.log(users[x].user_id);
//     console.log(users[x].name);
//     console.log(users[x].username);
//     console.log(users[x].contact.email);
//     console.log(users[x].contact.phone);
// }

// for(let i = 0; i <5; i++){

// }

// let i = 0;
// while(i< 5){
//     console.log(i);
//     i++
// }

// let arr = [2,5,6,7,8]
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] === 5) {
//         continue;
//     }
//     console.log(arr[i])
// }

// let user = {
//     name:'bla bla',
//     username:'blablabla',
//     email:'bla@gmail.com',
//     contact: {
//         phone:'9999999999'
//     }
// }
// let vals = Object.values(user);
// console.log(user)

let names = ["john","sarah",23,"Rudolf",34];

for(i in names){
    if(isNaN(names[i])){
      let arr = names[i].split('');
      // console.log(arr);
      if(arr[0] !== arr[0].toUpperCase()){
        arr[0] = arr[0].toUpperCase();
        console.log(arr.join(''));
      }
      else{
        console.log(names[i]);
      }
    }
  } 