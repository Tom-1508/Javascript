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
console.log(myName.anchor("wow")) // invalid

// .at
const sentence = "wow, what a handsome guy you are!"

console.log(`she says me that ${sentence} but she couldn't like this part ${sentence.at(sentence[5])}`)