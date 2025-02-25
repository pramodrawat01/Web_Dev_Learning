//     const field = document.querySelector(".input")

// let arr = []

// document.querySelector(".btn").addEventListener('click', ()=>{
    
    
//     console.log("btn clicked")
//     console.log(field.value)

//     arr.push(field.value)
//     console.log(arr)
//     field.value = ""

//     let text = document.createElement('div').textContent = arr
//     document.body.append(text)
    
// })

const inputBox = document.querySelector(".input")
const listContianer = document.querySelector('.container')

function addTask(){
    if(inputBox.value === ""){
        alert("you must write something")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContianer.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = 'x'
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContianer.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked")
        saveData()
    }
    else if( event.target.tagName === 'SPAN'){
        event.target.parentElement.remove()
        saveData()
    }
})

// for local storage 
function saveData(){
    localStorage.setItem('data',listContianer.innerHTML )
}

// display data after refresh
function showData(){
    listContianer.innerHTML = localStorage.getItem("data")
}
showData()