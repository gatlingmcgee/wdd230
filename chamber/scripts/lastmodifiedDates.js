const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified;

/* ---------------------------First Visit Message----------------------------- */

const visitInformation = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("numberVisits-ls")) || 0;

if (numberVisits !== 0) {
	visitInformation.textContent = numberVisits;
} else {
	visitInformation.textContent = `\nWelcome! Let us know if you have any questions.`;
}

numberVisits++;

localStorage.setItem("numberVisits-ls", numberVisits);

/* ---------------------------Last Visit Date----------------------------- */

const lastVisitDate = localStorage.getItem("lastVisitDate");

if (lastVisitDate) {
    const timeDiff = Date.now() - new Date(lastVisitDate);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    const welcomeMessage = `You last visited ${daysDiff} days ago.`;
    document.querySelector(".message").textContent = welcomeMessage;
}

localStorage.setItem("lastVisitDate", new Date().toISOString());

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


