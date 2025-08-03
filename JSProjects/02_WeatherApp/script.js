document.addEventListener('DOMContentLoaded',()=>{
    const cityInput=document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "c37a742ad3f1d370559d2ff11f9ee7bf"; //env variables

    getWeatherBtn.addEventListener('click',async ()=>{
        const city =cityInput.value.trim();
        if(!city) return;

        //it may throw an error
        //server/databases is always in another continent

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }


    })

    async function fetchWeatherData(city){
        //gets data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response =await fetch(url);
        console.log(typeof response);
        console.log("Response", response);
        
        if(!response.ok){
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data){
        //display
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name;
         temperature.textContent = `Temperature : ${main.temp}`;
         description.textContent = `Weather : ${weather[0].description}`;

        //unlock the dsiplay
        weatherInfo.classList.remove('hidden')
        errorMessage.classList.add('hidden')
       
    }

    function showError(){
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

});