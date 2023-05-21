document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
  const currentWeatherContainer = document.querySelector("#currentWeather");
  const cityForm = document.querySelector("#cityForm");
  const cityInput = document.querySelector("#cityInput");
  const changeUnitButton = document.querySelector("#changeUnitButton");
  const errorPopup = document.querySelector("#errorPopup");

  cityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city !== "") {
      fetchWeatherData(city);
    }
    cityInput.value = "";
  });

  function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weatherCard = createWeatherCard(data);
          currentWeatherContainer.appendChild(weatherCard);
        } else {
          showErrorPopup("City not found!");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        showErrorPopup("An error occurred while fetching weather data.");
      });
  }

  function createWeatherCard(data) {
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");

    const cityName = data.name;
    const countryName = data.sys.country;
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const sunriseTimestamp = data.sys.sunrise;
    const sunsetTimestamp = data.sys.sunset;

    weatherCard.innerHTML = `
      <h2>${cityName}, ${countryName}</h2>
      <p>${weatherDescription}</p>
      <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">
      <div class="info">
        <p>Temperature: ${kelvinToCelsius(
          temperature
        )}°C / ${kelvinToFahrenheit(temperature)}°F</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>Sunrise: ${formatTimestamp(sunriseTimestamp)}</p>
        <p>Sunset: ${formatTimestamp(sunsetTimestamp)}</p>
      </div>
      <button class="delete-button">X</button>
    `;

    const deleteButton = weatherCard.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      weatherCard.remove();
    });

    return weatherCard;
  }

  function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  function kelvinToFahrenheit(kelvin) {
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  }

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  }

  function showErrorPopup(errorMessage) {
    errorPopup.innerHTML = `<p>${errorMessage}</p>`;
    errorPopup.style.display = "block";
    setTimeout(function () {
      errorPopup.style.display = "none";
    }, 3000);
  }

  changeUnitButton.addEventListener("click", function () {
    const weatherCards = document.querySelectorAll(".weather-card");
    weatherCards.forEach(function (card) {
      const temperatureElement = card.querySelector(".info p:first-child");
      const currentTemperature = temperatureElement.textContent;
      const unit = currentTemperature.includes("°C") ? "°F" : "°C";
      const temperatureInFahrenheit = convertTemperature(
        currentTemperature,
        unit
      );
      temperatureElement.textContent = `Temperature: ${temperatureInFahrenheit}${unit}`;
    });
  });

  function convertTemperature(temperatureString, unit) {
    const temperature = parseInt(temperatureString);
    if (unit === "°C") {
      return Math.round((temperature * 9) / 5 + 32);
    } else {
      return Math.round(((temperature - 32) * 5) / 9);
    }
  }


  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeatherDataByLocation(latitude, longitude);
      },
      function (error) {
        console.log("Geolocation error:", error);
        showErrorPopup("Unable to retrieve user's location.");
      }
    );
  } else {
    console.log("Geolocation is not supported by this browser.");
    showErrorPopup("Geolocation is not supported by this browser.");
  }

  function fetchWeatherDataByLocation(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          const weatherCard = createWeatherCard(data);
          currentWeatherContainer.appendChild(weatherCard);
        } else {
          showErrorPopup(
            "Weather information for your location could not be found."
          );
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        showErrorPopup(
          "An error occurred while fetching weather data for your location."
        );
      });
  }
});
