const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]"); 

const userContainer = document.querySelector("[weather-container]");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchContainer = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".show-weather-container");

// variables neede

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");
getfromSessionStorage();


// declaration of switchTab() function
function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchContainer.classList.contains("active")){
            // if searchContainer is invisible then make it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchContainer.classList.add("active");
        }
        else{
            // now make visible to your weather container
            searchContainer.classList.remove("active");
            userInfoContainer.classList.remove("active")
            // now if I'm inside weather tab then display weather info let's check local storage first
            // for coordinates, if I have saved them there
            getfromSessionStorage();
        }
    }
}

// switch tab
userTab.addEventListener("click", ()=>{
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", ()=>{
    // pass clicked tab as input parameter
    switchTab(searchTab);
});


// if coordinates are presents in session storage or not
function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem("user-coordinates");
    if(!localCoordinates){
        // if there are no local coordinates then
        grantAccessContainer.classList.add("active");

    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeathreInfo(coordinates);
    }
}

async function fetchUserWeathreInfo(coordinates){
    const {lat, lon} = coordinates;
    // make grantAccess container invisible here
    grantAccessContainer.classList.remove("active");
    // make loader visible
    loadingScreen.classList.add("active");

    // API call
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        // remvoe loading screen 
        loadingScreen.classList.remove("active");
        // visible userInfoContainer
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err){
        loadingScreen.classList.remove("active");
    }

}


function renderWeatherInfo(weatherInfo){
    // fetch element form browser 
    const cityName = document.querySelector(["data-cityName"]);
    const countryIcon = document.querySelector(["data-countryIcon"]);
    const desc = document.querySelector(["data-weatherDescription"]);
    const weatherIcon = document.querySelector(["data-weatherIcon"]);
    const temp = document.querySelector(["data-temperature"]);
    const windSpeed = document.querySelector(["data-windSpeed"]);
    const humidity = document.querySelector(["data-humidity"]);
    const cloudiness = document.querySelector(["data-cloudiness"])


    // fetch values from weatherInfo object and put them in UI elements
    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = weatherInfo?.main?.temp;
    windSpeed.innerText = weatherInfo?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    cloudiness.innerText = weatherInfo?.clouds?.all;

}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        // show an alert for no geolocation available
    }
}
function showPosition(position){
    const userCoordinates = {
        lat : position.coords.latitude, 
        lon : position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeathreInfo(userCoordinates);
}

const grantAccessButton = document.querySelector(["data-grantAccess"]);
grantAccessButton.addEventListener("click", getLocation);


const searchInput = document.querySelector(["data-searchInput"]);

searchContainer.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cityName = searchInput.value;
    if(cityName === ""){
        return;
    }
    else{
        fetchSearchWeathreInfo(cityName);
    }
})

async function fetchSearchWeathreInfo(city){
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");
    
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");

        renderWeatherInfo(data);
    }
    catch(err){
        console.log("error occured", err)
    }
}