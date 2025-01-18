//in build methods in js
let person = {
    name : "shyam",
    age : 24, 
    profession : "photographer",
    location : {
        pin : 343525,
    },
    networth : 600,
}

// // Object.keys()
// console.log(Object.keys(person))


// // Object.entries()
//console.log(Object.entries(person))


// // Object.fromEntries() -- array into objects
// let obj = [
//     [ 'name', 'shyam' ],      
//     [ 'age', 24 ],
//     [ 'profession', 'photographer' ],
//     [ 'location', { pin: 343525 } ],
//     [ 'networth', 600 ]       
//   ]
// console.log(Object.fromEntries(obj))


// // Object.hasOwn()       // (ES2022+)
// console.log(Object.hasOwn(person, "name"))          // ture


// // Object.assign()
// const source = {age : 23}
// const target = {name : "jhon"}
// const result = Object.assign(target, source)    // { name: 'jhon', age: 23 }
// console.log(result)                             // { age: 23 }
// console.log(source)


// // Object.seal()
// Object.seal(person)
// delete person.name      // can not delete or add 
// person.name = "alice"   // but can modify existing property
// console.log(person)


// // Object.freeze()
// Object.freeze(person)       // can not add, delete and modify property
// delete person.name          // no changes
// person.age = 45             // no changes
// console.log(person)        // console person object as it is


// // Object.create()
// let ans = Object.create(person)
// ans.name = "sundar"
// console.log(ans)
// console.log(Object.hasOwn(ans, "name"))

// Object.defineProperty()
// Object.defineProperties()  // both are descriptors methods


// // Object.defineProperty()   // Adds or modifies a property on an object with custom settings.
// Object.defineProperty(person, "name", {
//     writable : false                         // can not change the value
// })
// person.name = "hikaru"              // still remain same
// console.log(person)


// // Object.defineProperties()
// Object.defineProperties(person,{
//     name : {
//         writable : false,
//         enumerable : false
//     },
//     age :{
//         configurable : false
//     },
//     location : {
//         writable : false
//     }
// }
// )


// // Object.fromEntries()  // Converts an array of key-value pairs into an object (reverse of Object.entries()).
// const arr = [["name", "Alice"], ["age", 25]]
// console.log(arr)                                   
// const obj = Object.fromEntries(arr)
// console.log(obj)                    // { name: 'Alice', age: 25 }


// // Object.isFrozen()          // Checks if an object is frozen, return boolean
// console.log(Object.isFrozen(person))            // false


// Object.isSealed()        // Checks if an object is sealed. also return boolean
console.log(Object.isSealed(person))        // false