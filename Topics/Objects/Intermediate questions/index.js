// // Objects
// // Create an object book with properties title, author, pages, and a method
// // getSummary that returns a string summarizing the book details.
// let book = {
//     title: "The little secrete",
//     author: "carl marks",
//     pages: 304,
//     getSummary (){
//         console.log("summarizing the book details -...")
//     }
// }
// book.getSummary()


// // access the student's name and first course they r enrolled in-
// let student ={
//     name:"shyam",
//     age:21,
//     course:["math", "physics", "chemistry"]
// }
// console.log(student.name, ": and course he enrolled in - ", student.course[0])



// // Update the age property of the student object to 21, and add a new property
// // graduated with a value of false.
// let student ={
//     name : "rahul",
//     age : 24, 
// }
// student.age = 21
// student.graduate = false
// console.log(student)



// // Add a method addCourse to the student object that takes a course name 
// // as an argument and adds it to the courses array.
// let student = {
//     name : "susmita",
//     age : 23,
//     addCourse(newCourse){
//         course = [newCourse, "math", "coumputer science"]
//         return course
//     }
// }
// console.log(student.addCourse("data-science"))



//  Write a factory function createPerson that takes a name, age, and city as arguments
//  and returns an object with those properties and a method introduce that returns a
//  string introducing the person.