
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

//sayMyName //This is reference of function
//sayMyName() //this is execution of function


//METHOD = 1
// function addTwoNumbers(number1, number2){ // number1 and number2 are Parameters
//     console.log(number1 + number2);
// }


//METHOD = 2
// function addTwoNumbers(number1, number2){ // number1 and number2 are Parameters
//     let result = number1 + number2
//     // console.log("hitesh");
//     return result
//     // console.log("hitesh");
// }


//METHOD = 3
function addTwoNumbers(number1, number2){ // number1 and number2 are Parameters
    return number1 + number2
}


//addTwoNumbers() // output will be NaN => coz input not given
//addTwoNumbers(3, 4)  // 3, 4 is Arguments
// addTwoNumbers(3, "4") 
// addTwoNumbers(3, "a") 
// addTwoNumbers(3, null) 

//That's why checking is Important => i.e. if else, for etc.

//know the difference between Params and arguments

const result = addTwoNumbers(3,5)

// console.log("result: ",result);
// console.log(`result : ${result}`);


function loginUserMessage(userName = "sam"){
    if(userName === undefined){ //if(!userName) // professional approach //"", undefined are false by default
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Tamal"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage()) // output: undefined just logged in