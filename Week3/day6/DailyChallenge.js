for (let i = 0; i <2; i++){
    console.log("- First level loop");
for (let j = 0; j <=3; j++){
    console.log('-- Second level loop');
}
}

var x,y,chr;
for (x=1; x <=6; x++)
{
    for (y=1; y < x; y++)
    {
        chr=chr+("*");
    }
    console.log(chr);
    chr='';
}

const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers);
for (var i = 0; i < numbers.length; i++){
    for(let j = 0; j < numbers.length; j++){
        if(numbers[i]< numbers [j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers);