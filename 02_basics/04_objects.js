const tinderUser = new Object() // singleton
// const tinderUser = {} // non singleton

tinderUser.id = "123abc" //key (.) 
tinderUser.name = "Smaamy"
tinderUser.isLoggedIn =false
 
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullName: {
            firstName: "tamal",
            lastName: "Majumdar"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullName);
console.log(regularUser.fullName.userfullName.firstName);


const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}
const obj4 ={5: "a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

console.log(obj3);


const Users =[
    {
        id: 1,
        email: "tuiu@gmail.com"
    },
    {
        id: 1,
        email: "tuiu@gmail.com"
    },
    {
        id: 1,
        email: "tuiu@gmail.com"
    }
]

console.log(Users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



console.log(tinderUser.hasOwnProperty('isLoggedIn'));