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

function displayForecastResults(data) {
    if (data.list && data.list.length > 0) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const afterTomorrow = new Date(today);
        afterTomorrow.setDate(today.getDate() + 2);
        const thirdDay = new Date(today);
        thirdDay.setDate(today.getDate() + 3);

        const nextThreeDaysForecast = data.list.filter(item => {
            const forecastDate = new Date(item.dt * 1000);
            return forecastDate.getDate() === tomorrow.getDate() ||
                forecastDate.getDate() === afterTomorrow.getDate() ||
                forecastDate.getDate() === thirdDay.getDate();
        });

        nextThreeDaysForecast.forEach(item => {
            const forecastDate = new Date(item.dt * 1000);
            let dayId;
            if (forecastDate.getDate() === tomorrow.getDate()) {
                dayId = 'day1';
            } else if (forecastDate.getDate() === afterTomorrow.getDate()) {
                dayId = 'day2';
            } else if (forecastDate.getDate() === thirdDay.getDate()) {
                dayId = 'day3';
            }

            const figureElement = document.getElementById(dayId);
            const tempForecast = figureElement.querySelector('.tempForecast');
            const forecastIcon = figureElement.querySelector('.forecastIcon');
            const forecastCaptionDesc = figureElement.querySelector('.forecastCaptionDesc');
            const dayName = figureElement.querySelector('.day');

            tempForecast.innerHTML = `${Math.round(item.main.temp)}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;
            const desc = item.weather[0].description;
            forecastIcon.setAttribute('src', iconsrc);
            forecastIcon.setAttribute('alt', desc);
            forecastCaptionDesc.textContent = ` ${capitalizeCaption(desc)}`;

            const options = { month: 'short', day: 'numeric' };
            dayName.innerHTML = forecastDate.toLocaleString('en-EN', options);
        });
    }
}

function capitalizeCaption(phrase) {
    let words = phrase.split(' '); //we separate the phrase in words by the space " "
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    } // we iterate through every element (words) and capitalized the 0 character.
    let capitalizedPhrase = words.join(" "); // then we put them all together

    return capitalizedPhrase
};