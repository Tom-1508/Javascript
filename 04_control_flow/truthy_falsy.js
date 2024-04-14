const userEmail = [] // jab aap maan lete hai ki yeh true value hai , isiko truthy value bolte hai

if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false , 0, -0, BigInt 0n, "", null, undefined, NaN

// rest are truthy : 
// "0", 'false', " ", [], {}, function () {}(empty function)

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0
// output: true
// false == ''
// output: true
// 0 == ''
// output: true


// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// Ternary Operator 

// condition ? true : false

const iceteaPrice = 100
iceteaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); 