// function findSquare(num) {
//     return num * num;
// }
// console.log(findSquare(2));
// console.log(findSquare(4));
// console.log(findSquare(6));

// function calFahrenheit (celsius){
//     return (celsius * 9/5)+ 32
// }
//  let far = calFahrenheit(0)
//  console.log(far)

// function countVowel(str) {
//     str = str.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if(str[i] === 'a' || str[i]=== 'e' || str[i] === 'i' ||
//         str[i] === 'o' || str[i] === 'u'
//       ){
//         count++;
//       }
//     }
//     return count;
//   }
//   let vowels = countVowel("Umbrella") // 2
//   console.log(vowels);

// function parentsAge(me){
//     let mum = 2 * me;
//     let dad = 1.2 * mum;
//     return [mum,dad]
    
// let ages = parentsAge(25);

//     console.log(`My dad age ${1} My mum age ${0}`);
// }

// let obg = {
//     first_name: 'John',
//     last_name: 'The King',
//     full_name: function(){
//         return this.first_name + ' ' + this.last_name
//     }
// }
// let fn = obg.full_name()
// console.log(fn);

function checkPalindrome(str){
    str = str.toLowercase();
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] != [str.length - i -1]){
//             return false;
//         }
//     }
// }
return str == str.split('').reverse().join('')
}