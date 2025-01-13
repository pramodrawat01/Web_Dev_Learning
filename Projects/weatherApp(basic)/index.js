const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

document.querySelector('.search-btn').addEventListener('click',
    async () =>{
        let cityName = document.querySelector('.search-city').value
        if(cityName === ""){
            alert("Please enter a city name")
            return
        }
        try{
            //const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)

            if(!response.ok) throw new Error ("city now found") 
            const data =await response.json()

            document.querySelector('#city-name').textContent = data?.name
            document.querySelector('#temp').textContent = data?.main?.temp
            document.querySelector('.weather-type').textContent = data?.weather[0].main

            document.querySelector('.search-humidity').textContent = data?.main?.humidity
            document.querySelector('.search-wind').textContent = data?.wind?.speed
            // const date = getCurrentDateTime()
            // document.querySelector('.date-time').textContent = date
        }
        catch(err){
            console.log("error found", err); 
        }
        
    }
)
document.querySelector('.search-btn').addEventListener('click', 
    async ()=>{
        document.querySelector('.search-humid-wind').classList.remove("active")
        document.querySelector('.search-humid-wind').classList.add("active")
    }
)

// tab switch
document.querySelector('.current').addEventListener('click', 
    async ()=>{
        document.querySelector('.search-tab').classList.remove("active")
        document.querySelector('.current-tab').classList.add("active")
    }
)
document.querySelector('.search').addEventListener('click', 
    async ()=>{
        document.querySelector('.current-tab').classList.remove("active")
        document.querySelector('.search-tab').classList.add("active")
    }
)
currentLocation()
async function currentWeather(lat, lon) {
    let latitude = lat
    let longitude = lon

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    const data = await response.json()
    
   document.querySelector('.current-city').textContent = data?.name
   document.querySelector('.current-temp').textContent = data?.main?.temp 
   document.querySelector('.type').textContent = data?.weather[0].main

   document.querySelector('.humidity').textContent = data?.main?.humidity
   document.querySelector('.wind').textContent = data?.wind?.speed

}
//document.querySelector('.current').addEventListener('click', currentWeather(28.5901, 77.0888))

// currentWeather(28.5901, 77.0888)

async function currentLocation() {
    try{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition((Position)=>{
                let lati = Position.coords.latitude
                let longi = Position.coords.longitude
                console.log(lati, longi)
                currentWeather(lati, longi)
            })
        }
        else{
            console.log("current location weather not fetched")
        }
    }
    catch(err){
        console.log("geolocation not availavle", err)
    }
}

async function getCurrentDateTime(){
    const now = new Date();
    options =  {
        weekday: 'long',  // Example: "Friday"
        year: 'numeric',  // Example: "2025"
        month: 'long',    // Example: "January"
        day: 'numeric',   // Example: "10"
        hour: '2-digit',  // Example: "10"
        minute: '2-digit' // Example: "15"
    }
    return now.toLocaleDateString('en-US', options)
}