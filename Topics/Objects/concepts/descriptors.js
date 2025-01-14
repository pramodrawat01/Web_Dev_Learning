// descriptors in JS - define the behavior of properties on an object
let obj = {
    name : "ratan",
    age : 46,
}
console.log(Object.getOwnPropertyDescriptor(obj, "name"))

const des = Object.defineProperty(obj, "name", {
    writable : false
})
obj.name = "shyam";
console.log(obj)