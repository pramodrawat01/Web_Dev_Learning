// //This keyword in js

// // This in functions (ES5)
// // Not-strict mode             // refer to window (in browser) and global(in node) object
function thisInNonStrict(){
    console.log(this)
}
thisInNonStrict()   

// strict mode
// "use strict"
// function thisInStrict(){
//     console.log(this)
// }
// thisInStrict()


// // This in Objects
// // (ES5 in Object) : refer to the object that called the method (ES5 bind in their outer context)
// const obj = {
//     name : "John",
//     greet : function(){
//         console.log(this.name)          // John
//     }
// }
// obj.greet();


// (ES6 in Object) : Arrow functions do not have their own this. 
// Instead, they inherit this from the surrounding (lexical) context.
// const obj = {
//         name : "John",
//         greet : ()=>{
//             console.log(this)          // undefined
//         }
//     }
// obj.greet();

// // ES6 in ES5 --  
// const obj1 = {
//     name : "alice",
//     greet : function(){
//         const arrowFun = ()=>{
//             console.log(this.name)
//         }
//         arrowFun()
//     }
// }
// obj1.greet()

// // This in Classes (ES6) : refer to the instence of the class
// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(this.name)
//     }
// }
// const person1 = new Person("John")
// person1.greet()

// const person2 = new Person("alice")
// person2.greet()
