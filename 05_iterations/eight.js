const myNums = [1,2,3,4,5,6,7,8,9,10]

//  Adding using forEach

// let total = 0 ;

// myNums.forEach( (num) => { 
//     console.log(total);
//     total = total + num
// } )
// console.log(total);

// const myTotal = myNums.reduce( (accumulator, currentValue) => {
//     console.log(`accumulator: ${accumulator} and current Value: ${currentValue}`);
//         return accumulator + currentValue;
// }, 0)

// const myTotal = myNums.reduce ( function (accumulator, currentValue) {
//     return accumulator + currentValue;
// },0)

// console.log(myTotal);

/*
just by myself

const map = new Map()

map.set('a','1')
map.set('b','2')
map.set('c','3')

console.log(map);
console.log(map.get('a'));
console.log(map.has('a'));
*/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 12999
    },
    {
        itemName: "web D course",
        price: 6999
    },
    {
        itemName: "Mobile App Dev course",
        price: 4999
    },
    {
        itemName: "java course",
        price: 5999
    }
]


const totalShopping = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )
console.log(totalShopping);