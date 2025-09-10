// DOM elements
const cityInput = document.getElementById("cityInput");
const celsiusTemp = document.getElementById("tempC");
const farenTemp = document.getElementById("tempF");
const currentWeather = document.getElementById("currentWeather");
const checkButton = document.getElementById("checkButton");

// Weather code mapping (Open-Meteo standard)
const weatherDescriptions = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    celsiusTemp.textContent = "--";
    farenTemp.textContent = "--";
    currentWeather.textContent = "Please enter a city.";
    return;
  }

  try {
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}`
    );
    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      celsiusTemp.textContent = "--";
      farenTemp.textContent = "--";
      currentWeather.textContent = "City not found.";
      return;
    }
    const { latitude, longitude } = geoData.results[0];

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();
    const weather = weatherData.current_weather;

    if (!weather) {
      celsiusTemp.textContent = "--";
      farenTemp.textContent = "--";
      currentWeather.textContent = "Weather data unavailable.";
      return;
    }

    celsiusTemp.textContent = weather.temperature;
    farenTemp.textContent = ((weather.temperature * 9) / 5 + 32).toFixed(1);
    currentWeather.textContent =
      weatherDescriptions[weather.weathercode] || "Unknown condition";
  } catch (err) {
    celsiusTemp.textContent = "--";
    farenTemp.textContent = "--";
    currentWeather.textContent = "Error fetching weather.";
  }
}

checkButton.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") getWeather();
});
