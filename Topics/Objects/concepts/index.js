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

// // Inheritance using Classes (ES6)
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hi, my name is ${this.name} and I'm ${this.age}`)
//     }
//     say(){
//         console.log(`Hi, my name is ${this.name} and I'm ${this.age}`)
//     }
// }
// const person1 = new Person("atul", 32)
// person1.greet()

// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(person1))


// // Static, Private and instence field in js
// // static field : shared with all instence of class but only accessable using class
// class myClass{
//     static count = 0
//     increment (){
//         return myClass.count++;
//     }
// }
// const class1 = new myClass()
// class1.increment()                         // 1
// class1.increment()                         // 2
// console.log(class1.increment())            // 2
// myClass.count = 53                         // can also modified outside the class
// console.log(myClass.count)

// // Private field :
// class myClass{
//     #privatefield ="'this is private field'"
//     #count = 0;
//     counter(){
//         return this.#count++
//     }
//     getPrivateField(){
//         return `accessing ${this.#privatefield}`
//     }
// }
// const user1 = new myClass()
// console.log(user1.getPrivateField())

// const user2 = new myClass()
// user2.counter()     // 1
// user1.counter()     // 1 : no increment
// user1.counter()     // 1 : no increment
// user2.counter()     // 2
// console.log(user2.counter())  // 2

// // myClass.#count = 5         // syntex error, private field is not accessable outside the class