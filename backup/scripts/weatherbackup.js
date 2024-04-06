const forecastUrl = '//api.openweathermap.org/data/2.5/forecast?lat=36.06&lon=-95.80&appid=25baae6a81058afccd7517c966ed3aed&units=imperial';


async function forecastApiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecastResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

forecastApiFetch();

// Function to display weather data on the webpage
async function displayWeatherData() {
    const weatherData = await forecastApiFetch();
    if (weatherData) {
        // Display current temperature and weather description
        const currentTempElement = document.querySelector('.current-temp');
        const currentWeatherElement = document.querySelector('.current-weather');
        currentTempElement.textContent = `${Math.round(weatherData.main.temp)}°F`;
        currentWeatherElement.textContent = weatherData.weather[0].description;

        // Display 3-day forecast
        const forecastData = await fetch(forecastUrl);
        if (forecastData.ok) {
            const forecastJson = await forecastData.json();
            const forecastList = forecastJson.list;
            const forecastContainer = document.getElementById('forecastContainer');

            for (let i = 0; i < 3; i++) {
                const forecast = forecastList[i];
                const forecastDate = new Date(forecast.dt * 1000);
                const dayElement = document.querySelector(`#day${i + 1} .day`);
                const iconElement = document.querySelector(`#day${i + 1} .forecastIcon`);
                const tempElement = document.querySelector(`#day${i + 1} .tempForecast`);
                const captionElement = document.querySelector(`#day${i + 1} .forecastCaptionDesc`);

                dayElement.textContent = forecastDate.toLocaleDateString('en-US', { weekday: 'short' });
                iconElement.src = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                iconElement.alt = forecast.weather[0].description;
                tempElement.textContent = `${Math.round(forecast.main.temp)}°F`;
                captionElement.textContent = forecast.weather[0].description;
            }
        }
    }
}

// Call the function to display weather data
displayWeatherData();
