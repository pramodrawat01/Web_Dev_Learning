

document.querySelector('.plus-icon').addEventListener('click', ()=>{
    document.querySelector('.ans').classList.add("active")
    document.querySelector('.minus-icon').classList.add("index")
    document.querySelector('.plus-icon').classList.remove("index")
})
document.querySelector('.minus-icon').addEventListener('click',()=>{
    document.querySelector('.ans').classList.remove("active")
    document.querySelector('.minus-icon').classList.remove("index")
    document.querySelector('.plus-icon').classList.add("index")

})  

document.querySelector('.plus-icon2').addEventListener('click', ()=>{
    document.querySelector('.ans2').classList.add("active")
    document.querySelector('.minus-icon2').classList.add("index")
    document.querySelector('.plus-icon2').classList.remove("index")
})
document.querySelector('.minus-icon2').addEventListener('click',()=>{
    document.querySelector('.ans2').classList.remove("active")
    document.querySelector('.minus-icon2').classList.remove("index")
    document.querySelector('.plus-icon2').classList.add("index")

})  

