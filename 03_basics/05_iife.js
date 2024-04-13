//  Immediately Invoked Function Expressions (IIFE)
// why we use iife? => 


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){ 
    // Named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is most important to tell the IIFE that this context should be stopped

// (definition of function) (execution call)

// there are some cases in which global scope pollute things up, so to remove those , we have used IIFE.

( (name) => {
    console.log(`DB CONNECTED TWO, ${name}`);
} ) ("Tamal");