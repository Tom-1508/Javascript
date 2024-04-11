//  Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23,5, 3, 56)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
//console.log(myTimeStamp); // we'll get milisecond value
//console.log(myCreatedDate.getTime()); // we'll get milisecond value
//console.log(Math.floor(Date.now()/1000)); // we'll get milisecond value


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

`${newDate.getDay()}` // This is called "String interpolation"

newDate.toLocaleString('default',{
    weekday: "long",
})