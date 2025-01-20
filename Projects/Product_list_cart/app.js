


// document.querySelector('.cart-btn').addEventListener('click', ()=>{
//     document.querySelector('.quentity').classList.add("index")  
//     document.querySelector('.cart-btn').classList.remove("index")
// })

// const cartbtnEle = document.querySelector('.cart-btn')


document.querySelector('.cart-btn').addEventListener('click', ()=>{
    document.querySelector('.quentity').classList.add("index")
    document.querySelector('.cart-btn').classList.remove("index")
})

document.querySelector('.minus-icon').addEventListener('click',()=>{
    document.querySelector('.minus-icon').classList.remove("index")
    document.querySelector('.plus-icon').classList.add("index")

})  