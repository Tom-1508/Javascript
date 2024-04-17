const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => num+10 ) // map automatically returns values, but forEach doesn't

// myNumbers.forEach( (num) => console.log(num+10) )// using forEach

// chaining of methods
const newNums = myNumbers
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40 )


console.log(newNums);
