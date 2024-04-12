//Learning Object Destructuring

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh sir"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
// console.log(courseInstructor);

//----------------------Intro to API and JSON----------------------

// {
//     "name": "hitesh",
//     "courseName": "JS in Hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]



