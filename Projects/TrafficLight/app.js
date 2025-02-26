const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


// setTimeout(() => {
//     yellow.classList.remove("yellowcolor")
//     red.classList.add("redcolor")
//     console.log("inside this")
// }, 3000);


// setTimeout(() => {
//     red.classList.remove('redcolor')
//     green.classList.add("greencolor")
//     console.log("inside this")
// }, 6000);


// setTimeout(() => {
//     green.classList.remove('greencolor')
//     yellow.classList.add("yellowcolor")
//     console.log("inside yellow")
// }, 9000);




// let num = 11
// setInterval(() => {

//   if(num>0){
//     num--
//   }
//    document.querySelector('.span').textContent = num
// }, 1000);

// document.createElement('p')








setTimeout(() => {
    red.classList.add('redcolor')
}, 3000);

setTimeout(() => {
    yellow.classList.add('yellowcolor')
    red.classList.remove('redcolor')
}, 6000);

setTimeout(() => {
    green.classList.add('greencolor')
    yellow.classList.remove('yellowcolor')
}, 9000);


// red.classList.add("redcolor")

// setInterval(() => {

//     // if(red.classList.contains('redcolor') || yellow.classList.contains('yellowcolor') || green.classList.contains('greencolor') ){
//     //     let num = 3
//     //     setInterval(() => {
    
//     //     if(num>0){
//     //         num--
//     //     }
//     //     document.querySelector('.span').textContent = num
//     //     }, 1000);
    
//     // }
    

  
//     setTimeout(() => {
//         red.classList.remove("redcolor")
//         yellow.classList.add("yellowcolor")
//     }, 3000);
    
//     setTimeout(() => {
//         yellow.classList.remove("yellowcolor")
//         green.classList.add("greencolor")
//     }, 6000);

    
//     setTimeout(() => {
//         green.classList.remove("greencolor")
//         red.classList.add("redcolor")
//     }, 9000);



// }, 9000);
// clearInterval()