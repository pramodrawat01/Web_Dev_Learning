const input = document.querySelector(".input");



document.querySelector('.btn').addEventListener('click', ()=>{
    let value = input.value
    if(input.value === ''){
        alert("enter text first! ")
    }
    else{
        getImage(value);
        input.value = ""
    }
    
})

   

function getImage(value) {

    let img
    let arr = []
    arr.map( ()=>{
        img = document.createElement("img"); 
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`
        
        return img
    })

    document.body.appendChild(img);


}



document.querySelector(".save").addEventListener('click', ()=>{
    
        localStorage.setItem("QR",`${img.src}`)
})

document.querySelector('.get').addEventListener('click', ()=>{
    let add =  localStorage.getItem("QR")

    console.log(typeof add)
   //
   //  document.body.append(  document.createElement("p").textContent = `tis is the image src : ${add}`)
   
   
    document.body.append( document.createElement('img').src = add)
    const img4 = document.createElement('img')
    img4.src = add

    document.body.append(img4)
    console.log(add)
})