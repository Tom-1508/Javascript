// 1. Primitive (call by value ==> copy)

// 7 types: String, Number, Boolean, null, undefined, Symbol(to make unique), BigInt 

// const score = 100 or false
// JS is "dynamically typed language" coz => In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 23485902869085904n //bigInt



// 2. Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "tamal",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof heros)




/*

There are mainly 2 types of datatypes :
1. Primitive ( call by value = copy version ):
- string =>  string 
- number => number
- Boolean => boolean
- null => object
- undefined => undefined 
- symbol => symbol
- Bigint  => Bigint

2. Non-Primitive ( reference type ):
- Array => object 
- Object => object
- Function => Object Function

3. JavaScript is "Dynamically typed language" because all type checks are being performed during Runtime .


*/



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitve) => copy milta hai, Heap (Non-primitive) => reference i.e. original milta hai

let myYoutubeName = "chai aur code"

let anotherName = myYoutubeName
anotherName = "tamal"

console.log(myYoutubeName);
console.log(anotherName);



let userOne ={
    email: "user@.com",
    upi: "user89ybl"
}

let userTwo = userOne

userTwo.email = "tamal.com"
console.log(userOne.email);
console.log(userTwo.email);