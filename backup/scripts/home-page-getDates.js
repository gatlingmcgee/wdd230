/* getDates.js */

const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified;

const state = 'Oklahoma, USA';
document.getElementById('state-placeholder').textContent = state;

var degreeSymbol = '\u00B0';
const weather = `80${degreeSymbol} - Sunshine`;
document.getElementById('weather-placeholder').textContent = weather;

/* let visits = localStorage.getItem('visits') || 1;
localStorage.setItem('visits', visits);
document.getElementById('visits-placeholder').textContent = visits; */


/* ---------------------------Dark Mode----------------------------- */

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const gridSection1 = document.getElementById('testing');
const gridSection2 = document.getElementById('testing2');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		main.style.background = "#333333";
        main.style.color = "#eee";
		modeButton.textContent = "🔆";
        gridSection1.style.background = "#8c8c8c";
        gridSection1.style.color = "#000"
        gridSection2.style.background = "#8c8c8c";
        gridSection2.style.color = "#000"
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
        gridSection1.style.background = "#eee";
        gridSection2.style.background = "#eee";
	}
});


/* ---------------------------Hamburger----------------------------- */

const button = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
	navigation.classList.toggle('open');
	button.classList.toggle('open');
});

// Function to adjust the position of the overlay
function adjustOverlayPosition() {
    const overlay = document.querySelector('.overlay');
    const isOpen = document.querySelector('#hamburger-menu').classList.contains('open');

    if (isOpen) {
        // Move the overlay when the hamburger menu is open
        overlay.style.left = '0';
    } else {
        // Reset the position when the hamburger menu is closed
        overlay.style.left = '-100%'; // Move the overlay off-screen
    }
}

// Event listener for the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    // Toggle the 'open' class on the hamburger menu button
    this.classList.toggle('open');
    // Call the adjustOverlayPosition function to adjust the position of the overlay
    adjustOverlayPosition();
});


/* ---------------------------Back Button----------------------------- */

function goBack() {
	window.history.back();
}

/* ---------------------------Number of visits----------------------------- */

const visitInformation = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitInformation.textContent = numberVisits;
} else {
	visitInformation.textContent = `\nYou're the first visitor. Hello!`;
}

numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);
