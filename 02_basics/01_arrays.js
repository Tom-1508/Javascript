//arrays
// [] => Brackets ; {} => Braces ; () => Parenthesis

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]
const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1])

// Array methods :=>

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArray = myArr.join()

// console.log(myArr);
// console.log(newArray);


//Slice, Splice (Important Difference)
// Notes: slice => cannot manipulate the original array wherease splice => manipulate the original array

// console.log("A ",myArr)

// const myN1 = myArr.slice(1, 3)

// console.log(myN1);
// console.log("B ",myArr)


const myN2 = myArr.splice(1,3)
// console.log("C ",myArr);
// console.log(myN2);

// const myWow = new Array(8)
// console.log(myWow.length)
// console.log(myWow[2])
// console.log(0 in myWow)
// console.log(myWow)

// const myNewWow = Array("4")
// console.log(myNewWow.length);
// console.log(myNewWow[0]);
// console.log(myNewWow[1]);

// Constructor : A constructor is a special function that creates and initializes an object instance of a class.

// .sort, .filter, .find, .copyWithin(), .some(), .reduce() ==> couldn't understand 

const array = [18,65,2,3,0,1]
console.log(array.sort())
console.log(array.toSorted())