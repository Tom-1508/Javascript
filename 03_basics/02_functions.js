// pata nehi kitna arguments aayengein, like shopping carts users will add things up in that situation ................

// function calculateCartPrice (...num1){ // rest operator ,it's same as spread operator. just different use cases
//     return num1
// }
function calculateCartPrice (val1, val2, ...num1){ // rest operator ,it's same as spread operator. just different use cases
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) // Array type 


//Object handling in function
const user = {
    userName: "Tamal",
    prices: 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     userName: "shyam",
//     price: 200
// })


//Arrays handling in function

const mynewArray = [200, 400, 600, 800]

function arrayReturn(getArray){
    return getArray[2]
}

// console.log(arrayReturn(mynewArray));
console.log(arrayReturn([100,34,56,78]));