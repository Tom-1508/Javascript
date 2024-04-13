// Arrow function and THIS keyword
// 'this' refers to current context

const user = {
    userName: "Tamal",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

//console.log(this); // {} => empty for node

// browser ke andar jo global object hai wo hai =>  Window(interview)
// node =>  {}

// function chai(){
//     let userName = "hitesh"
//     console.log(this.userName); //no usage of this in function only in object
// }

// chai()



//  const chai  = function (){
//     let userName = "hitesh"
//     console.log(this.userName);
//  }


 const chai  = () => {
    let userName = "hitesh"
    console.log(this);
 }

//  chai()

// () => {} => basic syntax of arrow function

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "tamal"})
console.log(addTwo(3,4))



const myArray = [2,34,5,6]

// myArray.forEach