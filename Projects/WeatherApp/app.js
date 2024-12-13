const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("data-searchWeather"); 

const userContainer = document.querySelector("weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchContainer = document.querySelector("data-searchForm");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".show-weather-container");

// variables neede

let currentTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currentTab.classList.add("current-tab");

currentTab.classList.remove("current-tab")

// define switchTab() function
function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
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

let element = document.createElement('p')
element.textContent = "this is a para";
document.body.appendChild(element);
console.log("element")