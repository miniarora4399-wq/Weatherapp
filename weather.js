const apiKey ="ece37e9081d898c3e4914b448b124e97";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox   = document.querySelector(".search input");
const searchBtn   = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weathericon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404)
    {
      document.querySelector(".weather").style.display = "none";
      alert("Invalid city name");

    }
   else
   {
      
      const data = await response.json();
      console.log("data");

    document.querySelector(".city").innerHTML     = data.name;
    document.querySelector(".temp").innerHTML     = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML     = data.wind.speed + " Km/h";

    if(data.weather[0].main === "Clouds")
    {
       weatherIcon.src = "image/clouds.jpg";
    }
    else if(data.weather[0].main === "Clear")
    {
       weatherIcon.src = "image/clear.jpg";
    }
    else if(data.weather[0].main === "Rain")
    {
        weatherIcon.src = "image/rain.jpg";
    }
    else if(data.weather[0].main === "Drizzle")
    {
       weatherIcon.src = "image/drizzle.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    }
   }
    searchBtn.addEventListener("click", function(){
        checkWeather(searchBox.value);
    })


    