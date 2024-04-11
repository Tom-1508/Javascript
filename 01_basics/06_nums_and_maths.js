const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.7893

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,6,8,9));
// console.log(Math.max(4,3,6,8,9));

console.log(Math.random()); // generate random value in between 0 to 1
console.log(Math.floor(Math.random()*10)+1); // generate random value in between 0 to 1

/* Algorithm :

1. we use math.random method to generate a random number in between 0 to 1 , where 0 inclusive but 1 exclusive
2. then we multiply it with 10 because it will come in between [0 to 10) 
3. Then we are using math.floor method because we want to take the lower bound , rounded value.
4. Then adding 1 to avoid 0 as answer 

*/

// General method 
const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min );
/*
Algorithm:
1. in more general sense , we do have min and max value and we will need a random number in between them.
2. so at first we will use math.random method to generate a random number.
3. Then we will take the difference of max and min because this difference will be in between them.
4. Then adding 1 to just avoid 0 in result
5. using math.floor to just taking the lower bound , rounded number
6. then adding the min , so that the genrated number will be in between max and min.

*/