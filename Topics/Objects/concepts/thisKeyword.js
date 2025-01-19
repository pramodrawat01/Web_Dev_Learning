// //This keyword in js

// // This in functions (ES5)
// // Not-strict mode
// function thisInNonStrict(){
//     console.log(this)
// }
// thisInNonStrict()

// // strict mode
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


// // (ES6 in Object) : refer to window (in browser) and global(in node) object
// const obj = {
//         name : "John",
//         greet : ()=>{
//             console.log(this.name)          // undefined
//         }
//     }
// obj.greet();

// // ES6 in ES5 --
const obj = {
    name : "alice",
    greet : function(){
        const arrowFun = ()=>{
            console.log(this.name)
        }
        arrowFun()
    }
}

obj.greet()

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
