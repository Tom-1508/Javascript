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

// 1. Write a program that takes a user's input and calculates the length of the input string using the length property.

// const yourName = prompt("enter your name: ") // this is not working in node , so figure out how to take user input 

let yourName = "tuioniuhhg"
// console.log(`the length of the string is ${yourName.length}`);

// 2. Create a program that prompts the user for a string and an index. Then, use the charAt() method to display the character at that index.

let stringOne = "I will be a successful software Developer Oin this year."
let index = 8
// console.log(stringOne.charAt(index));

// 3. Write a program that takes a string and two indices (start and end). Use the substring() method to extract and display the substring between the given indices.

let userInput = "wow, what a cover drive!"
const start = 3
const end = 15
// let newInput = Boolean(userInput.substring(start, end))
// console.log(`the answer is : ${userInput.substring(start, end)}`);
// console.log(`the answer is : ${newInput}`);


// 4. Take a sentence as input and split it into words using the split() method. Count and display the number of words in the sentence.

let newsentence = "You must be the change you wish to see in the world."

let arr = newsentence.split(" ")
console.log(arr)
let count = 0
for (let index = 0; index < arr.length; index++) {
    count++;
}
// console.log(`the no. of words are : ${count}`);

// 5. Create a program that takes a sentence and allows the user to search for a word or phrase and replace it with another word or phrase using the replace() method.

let newSentenceOne = "You must be the change be you wish to see in the be world."

console.log(`the answer is ${newSentenceOne.replace("be", 2+2)}`);

// note: The replace() method replaces the "first occurrence" of a specified value with another value.

// 6. Write a program that takes a string and a character as input. Use the indexOf() method to find and display the index of the first occurrence of that character in the string.

let newSentenceTwo = "You must be the change be you wish to see in the be world."
console.log(`the answer is ${newSentenceTwo.indexOf("be")}`); //The indexOf() method returns the index of the first occurrence of a specified value within the string.

// 7. Implement a program that reverses a given string using string manipulation methods.
// 8. Take a sentence with extra whitespace and use string methods to remove the extra spaces, leaving only single spaces between words.
// 9. Write a program that checks if a given string is a palindrome (reads the same forwards and backwards) using string methods.
// 10. Create a program that takes a sentence and converts it to title case (the first letter of each word capitalized) using string methods.