function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'fb7c338c7eddfd945996e44419666325'; 

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      document.getElementById('weather-container').innerHTML = 'Error fetching weather. Please try again.';
    });
}

function displayWeather(data) {
  const weatherContainer = document.getElementById('weather-container');
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;

  const weatherHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Weather: ${weatherDescription}</p>
  `;

  weatherContainer.innerHTML = weatherHTML;
}
