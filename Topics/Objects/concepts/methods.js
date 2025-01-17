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

// // Object.hasOwn()
// console.log(Object.hasOwn(person, "name"))          // ture

// Object.create()
let ans = Object.create(person)
ans.name = "sundar"
console.log(ans)
console.log(Object.hasOwn(ans, "name"))

// Object.defineProperty()
// Object.defineProperties()  // both are descriptors methods
