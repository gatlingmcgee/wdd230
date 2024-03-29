/* ---------------------------Directory----------------------------- */

const baseURL = "https://gatlingmcgee.github.io/wdd230/";
const membersURL = "https://gatlingmcgee.github.io/wdd230/chamber/data/members.json";

const ulElement = document.querySelector('#members-list');

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    const members = data.members;
    console.log(data);
	console.log("hello")
    displayMembers(members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let liElement = document.createElement('li');

        liElement.textContent = `${member.name}: `;

        let aElement = document.createElement('a');
        aElement.href = member.url;
        aElement.textContent = member.name;
        aElement.target = '_blank';
        liElement.appendChild(aElement);

        ulElement.appendChild(liElement);
    });
}
  
getMembers();
