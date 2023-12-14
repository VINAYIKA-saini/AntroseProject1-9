const apiKey = '7d939c06ec5105a806c2ab1ca5838e9d'; // Replace with your OpenWeatherMap API key
const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weather-description');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    getWeatherData(city);
  } else {
    alert('Please enter a city name');
  }
});

async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Failed to fetch weather data. Please try again.');
  }
}

function displayWeatherData(data) {
  cityName.textContent = data.name;
  const iconCode = data.weather[0].icon;
  weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
}
