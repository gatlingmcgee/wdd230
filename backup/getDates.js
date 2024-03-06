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

let visits = localStorage.getItem('visits') || 1;
localStorage.setItem('visits', visits);
document.getElementById('visits-placeholder').textContent = visits;

