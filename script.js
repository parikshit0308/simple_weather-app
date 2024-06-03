const inputBox = document.querySelector('.inp');
const searchBox = document.getElementById('but');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind');

const location1 = document.querySelector('.not-found');

const weather_body = document.querySelector('.weather-body');

const weather_info = document.querySelector('.weather-info');

async function checkWeather(city){
    const api_key = "e63fa5efe48c70d141cdd8447961b94f";
    // const lat ="28.81986";
    // const lon = "107.0661";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(url).then(response => response.json());

    console.log(weather_data);

    if(weather_data.cod === `404`){
        location1.style.display = "flex";
        weather_body.style.display = "none";
        weather_info.style.display = "none";
        console.log(`No weather found`);
    }else{
        location1.style.display = "none";
        weather_body.style.display = "flex";
        weather_info.style.display = "flex";
    }


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case "Clear":
            weatherImg.src = "/clear.png";
            break;
        case "Clouds":
            weatherImg.src = "/cloud.png";
            break;
        case "Rain":
            weatherImg.src = "/rain.png";
            break;
        case "Snow":
            weatherImg.src = "/snow.png";
            break;
        case "Thunderstorm":
            weatherImg.src = "/thunder.png";
            break;
        case "Drizzle":
            weatherImg.src = "/cloud.png";
            break;
        case "Mist":
            weatherImg.src = "/cloud.png";
            break;
        case "Haze":
            weatherImg.src = "/cloud.png";
            break;
        case "Fog":
            weatherImg.src = "/cloud.png";
    }

  
}

searchBox.addEventListener('click', () =>{
        checkWeather(inputBox.value);
});