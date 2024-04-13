// var c = 300
//global scope

let a = 300

// {} => scope

if (true) { // this is block scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner: ", a);
}


console.log(a);
// console.log(b);
// console.log(c);

//Global scope of Windows and node are completely different (interview)