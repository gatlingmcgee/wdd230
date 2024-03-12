const currentYearElement = document.getElementById('currentYear');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = document.lastModified;

function goBack() {
	window.history.back();
}