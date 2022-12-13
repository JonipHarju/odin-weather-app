const cityInput = document.getElementById("cityForm");
const fetchDataButton = document.getElementById("fetchButton");
const weatherDataField = document.getElementById("weatherData");
const cityName = document.getElementById("name");
const countryName = document.getElementById("country");
const temperature = document.getElementById("temperature");
const temperatureType = document.getElementById("temperatureType");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const body = document.body;
const key = "7c7dbb4b70c9ce1cc2f0199c27bcd077";

// funtion to get the url with the right city and temperature units
function getUrl(city, units) {
  if (units === "celsius") {
    units = "metric";
  } else {
    units = "imperial";
  }
  console.log("units");
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${key}`;
}

//function that calls the getWeather with getUrl as parameter and gives getUrl city and units parameters
function getCityAndUnitData() {
  let city = cityInput.value;
  let units = temperatureType.value;
  getWeather(getUrl(city, units));
}

//function to fetch the weather data from the server and then processes it
function getWeather(cityUrl) {
  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      cityName.innerHTML = `City: ${response.name}`;
      countryName.innerHTML = `Country: ${response.sys.country}`;
      temperature.innerHTML = `Temperature: ${response.main.temp}`;
      feelsLike.innerHTML = `Feels Like: ${response.main.feels_like}`;
      humidity.innerHTML = `humidity is ${response.main.humidity}%`;
      changeColor(response.main.temp);
    })
    .catch(function (error) {
      alert(error);
    });
}

function changeColor(temperature) {
  if (temperatureType.value === "celsius") {
    if (temperature > 0 && temperature < 10) {
      body.style.color = "white";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    } else if (temperature < 0) {
      body.style.color = "black";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1548097160-627fd636ee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    } else if (temperature > 10) {
      body.style.color = "black";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1616875734609-dfa1554b20cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    }
  } else {
    if (temperature > 32 && temperature < 50) {
      body.style.color = "white";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    } else if (temperature < 32) {
      body.style.color = "black";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1548097160-627fd636ee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    } else if (temperature > 50) {
      body.style.color = "black";

      body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1616875734609-dfa1554b20cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80)";
    }
  }
}

// event listener to start the opeartion to get weather
fetchDataButton.addEventListener("click", getCityAndUnitData);