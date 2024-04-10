const name = "tamal"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo is ${repoCount}`)

const gameName = new String('Tamal-tm-com') // declaring variable

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(-3,4)
// console.log(anotherString)

const newStringOne = "        hitesh       "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://tamal.com/tamal200%majumdar"

// console.log(url.replace('200%', '_'));

// console.log(url.includes('taml'));

// console.log(gameName.split('-'))


// *********************************Practice the different methods of string*********************************

const myName = "tamal"
//console.log(myName.anchor("wow")) // invalid

// .at
const sentence = "wow, what a handsome guy you are!"

// console.log(`she says me that ${sentence} but she couldn't like this part ${sentence.at(sentence[5])}`)

// Write a program that takes a user's input and calculates the length of the input string using the length property.

// const yourName = prompt("enter your name: ") // this is not working in node , so figure out how to take user input 

console.log(`the length of the string is ${yourName.length}`);

// Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.