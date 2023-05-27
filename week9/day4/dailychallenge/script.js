function getSunriseTime(latitude, longitude) {
  const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results.sunrise);
}

document
  .getElementById("cityForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const city1Lat = document.getElementById("city1Lat").value;
    const city1Long = document.getElementById("city1Long").value;
    const city2Lat = document.getElementById("city2Lat").value;
    const city2Long = document.getElementById("city2Long").value;

    const promise1 = getSunriseTime(city1Lat, city1Long);
    const promise2 = getSunriseTime(city2Lat, city2Long);

    Promise.all([promise1, promise2])
      .then((results) => {
        const [sunriseCity1, sunriseCity2] = results;
        document.getElementById("sunriseTime").innerHTML = `
        <p>Sunrise Time for City 1: ${sunriseCity1}</p>
        <p>Sunrise Time for City 2: ${sunriseCity2}</p>
      `;
      })
      .catch((error) => {
        document.getElementById("sunriseTime").innerHTML =
          "Error retrieving sunrise time.";
        console.log(error);
      });
  });
