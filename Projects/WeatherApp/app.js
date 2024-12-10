console.log("hello ji ");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

//Weather API call
async function customWeather(){
    try{
       let latitude = 28.6066259;
       let longitude = 77.0601443;
       
       //fecth api call
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
       // convert to json file  
       const weatherData = await response.json();
       let locationName = weatherData.name;

       console.log("Weather data of current location : ", weatherData);

       onUI(weatherData, locationName)
    }
    catch(err){
        console.log("the error you got here : ", err);
    }
}

async function onUI(data, name){
    let weatherinput = document.createElement('p');
    weatherinput.textContent = `Temperature : ${data?.main?.temp.toFixed(2)} °C`
    let location = document.createElement('p'); 
    location.textContent = `Location : ${name}`
    
    document.body.appendChild(location);
    document.body.appendChild(weatherinput);
}
customWeather();