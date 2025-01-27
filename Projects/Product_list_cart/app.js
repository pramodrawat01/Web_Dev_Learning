

const addCart = document.querySelector('.add-to-cart')
const counter = document.querySelector('.counter')



addCart.addEventListener('click',()=>{
    addCart.classList.add('hide')
})

const incre = document.querySelector('.increment')
const decre = document.querySelector('.decrement')
const value = document.querySelector('.value')

const totalItems = document.querySelector('.cart-item-count')

// increment function
const increment = ()=>{
    let quentity = parseInt(value.innerText);
    console.log(quentity)
    quentity += 1;
    value.innerText = quentity

    let total = parseInt(totalItems.innerText);
    total +=1;
    totalItems.innerText = total
}
// decrement function
const decrement = ()=>{
    let quentity = parseInt(value.innerText);
    console.log(quentity)
    if(quentity>0){
        quentity -= 1;
    }
    value.innerText = quentity

    let total = parseInt(totalItems.innerText);
    if(total>0){
        total -=1;
    }
    totalItems.innerText = total
}
incre.addEventListener('click',increment)
decre.addEventListener('click',decrement)

let cart = []



incre.addEventListener('click',()=>{
    document.querySelector('.empty-now').classList.add('hide')

    const nameText = document.querySelector('.dish-name')
    const cart = document.querySelector('.cart')

    // check item already exsit or not
    let existingItems = Array.from(cart.children).find((items)=>{items.dataset.name === nameText})

    if(existingItems){

    }
    else{
        const name = nameText.innerText
        cart.appendChild(name)

    }
})
