// Singleton
// Object.create()
// Constructor se banayenge toh  singleton, but agar literals se banaye toh not singleton ( Interview )

//Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Tamal",
    "full name": "Tamal Majumdar",
    [mySym]: "wow",
    age: 22,
    location: "Kolkata",
    email: "tamslcrk20023@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // ban gaya object(empty)

//acessing objects

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(typeof jsUser.mySym)
// console.log(typeof jsUser[mySym])  
// console.log(typeof mySym)
jsUser.email = "tamalchatgpt.com"
// console.log(jsUser.email);


// Object.freeze(jsUser)
jsUser.email = "tamalcht.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS Users")
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
// console.log(jsUser.greeting());