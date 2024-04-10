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

console.log(typeof heros)