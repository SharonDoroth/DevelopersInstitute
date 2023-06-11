const fs = require('fs');

// try{
// const data = fs.readFileSync('info','utf-8');
// console.log(data);
// }
// catch(err){
//     console.log(err.message);
// }

// fs.readFile('info','utf-8', (err,data)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(data);
// })

// console.log('The file has been read');


const data = 'this id my hello file';

fs.writeFile('hello.txt', data, 'utf-8', (err)=>{
    if(err) console.log(err);
})