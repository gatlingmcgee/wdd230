const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified;

/* ---------------------------Last Visit Message----------------------------- */

const visitInformation = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitInformation.textContent = numberVisits;
} else {
	visitInformation.textContent = `\nYou're the first visitor. Hello!`;
}

numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);

/* ---------------------------Hamburger----------------------------- */

const button = document.querySelector('#hamburger-menu');
const navigation = document.querySelector('.navigation');

button.addEventListener('click', () => {
	navigation.classList.toggle('open');
	button.classList.toggle('open');
});

/* ---------------------------Go Back----------------------------- */

function goBack() {
	window.history.back();
}


