// // Object creation :)
// // using object literals
// const obj={
//     name:"shyam",
//     age:34,
//     address:"delhi",
//     pin:342522,
// }
// console.log(obj.pin)

// // using new Object() keyword
// const person = new Object();
// person.name = "suman";
// person.age = 23;
// console.log(person)

// // using Constructor function - {create a new object and return it}
// function Person(name, age){
//     this.name = name
//     this.age = age
//     this.say = ()=> console.log("inside method")
// }
// const person1 = new Person("sherya,", 23)  // new create new instance
// person1.say()

// // using factory function - {return an object}
// function human(){
//    return{
//         name : "shubha",
//         age : 43,
//         inocent : function(){
//             console.log("inside a method of factory function")
//         }
//    }
// }
// const human1 = human()
// console.log(human1)
// human1.inocent()

// // prototype based Inheritance (pre ES6)
// // constructor function
// function Person (name, age){
//     this.name = name;
//     this.age = age;
// }
// // adding a metod using prototype
// Person.prototype.greet = function(){
//     console.log(`Hi, my name is ${this.name} and I'm ${this.age}`)
// }

// const person01 = new Person("saurabh", 23)
// person01.greet()

// Inheritance using Classes (ES6)
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}`)
    }
}
const person1 = new Person("atul", 32)
person1.greet()