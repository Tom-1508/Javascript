const marvelHeroes = ["thor","Ironman","Spiderman"]
const dcHeroes = ["superman","flash","batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes,...dcHeroes] //spread operator

// console.log(allNewHeroes)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]  

// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);



// console.log(Array.isArray("tamal"))
// console.log(Array.from("tamal"))
//console.log(Array.from({name: "hitesh"})) // interesting 

/*

The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

The Array.from() method creates a new array from an array-like or iterable object. The object you're passing to Array.from() needs to have a length property indicating the number of elements it contains or be iterable.

In your example, {name: "hitesh"} is not an array-like object or iterable because it doesn't have a length property, and it's not iterable. Therefore, Array.from() doesn't know how to create an array from it, resulting in an empty array being returned.

*/

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1,score2,score3))

/*

The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

*/


// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)

/* 
The difference between Array.of() and the Array() constructor is in the handling of single arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7. (That implies an array of 7 empty slots, not slots with actual undefined values.)
*/