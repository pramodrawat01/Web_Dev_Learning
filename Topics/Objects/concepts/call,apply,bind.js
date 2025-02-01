
// let obj = {
//     name : "obj1",
//     // say:()=>{
//     //     console.log(this.name)
//     // }

//     say: function (age){
//         console.log(this.name)
//         console.log(`${age}`)
//     }
// }

// let obj2 = {
//     name : "obj2"
// }

// // call
// obj.say.call(obj2)

// // apply
// obj.say.apply(obj2, [23])

// // bind


// lexical environment and closers


function parent(){

    const outer = "outer"
    function child(){
        console.log(outer)
    }
    //return child
    // call child immediately return outer as a sting
    return child()
}

let result = parent()
//result()

// now console result
console.log(result)  // outer and undefined


