// control flow or logic flow
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40){
//     console.log(`less than 50`);
// } else {
//     console.log(`temperature is greater than 50`);
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===( strict equal => data type bhi check karta hai), !== (negative sign check karta hai)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);



// short hand notation 
// const balance = 1000

//if (balance > 500) console.log("test"),
//console.log("test2"); //implicit scope 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else{
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Logged In Successfully");
}

