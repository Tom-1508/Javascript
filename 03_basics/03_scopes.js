// var c = 300
//global scope

let a = 300

// {} => scope

if (true) { // this is block scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

//Global scope of Windows and node are completely different (interview)



// nested scope

function one () {
    const userName = "Tamal"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const userName = "Tamal"
    if(userName === "Tamal"){
        const website = " youtube"
        // console.log(userName+website)
    }
    // console.log(website);
}
// console.log(userName);


// *************************** Interesting **********************

// Hoisting

console.log(addOne(5))

function addOne (num) { // simple function
    return num + 1
}



addTwo(5)

const addTwo = function (num){ //Expression 
    return num + 2
}
