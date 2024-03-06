const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {

    if (input.value != '') {
        input.focus();
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌'
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    input.focus();
    input.value = ''

});

button.addEventListener('click', () => {
});

/* --------------------------------------------- */

/* To select an HTML element from the document - using the querySelector method.
This line of code selects the first instance of an article element from the document and assigns the element as a reference to the variable named article.
const article = document.querySelector('article');

/* To change the innerHTML property of an existing element.
This line of code uses an existing variable that has already selected an element and changes its innerHTML property value.
/*article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent does not.';

/* To change the inline CSS style of an element.
This line of code changes the text-align CSS property of the selected element.
article.style.textAlign = 'right';

/* To change an attribute of an element.
This line of code adds and attribute class to the element and gives it a value.
article.setAttribute('class', 'active');

/* To create an element.
This line of code creates a new <p> element and stores it in the variable named paragraph.
const paragraph = document.createElement('p');
paragraph.textContent = "We hope you enjoyed the ride.";

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

article.appendChild(linkPara);

/* To append an element with additional content or elements.
These lines of code add content to the end of the article element.
article.appendChild(paragraph);
article.append('Hello World Addition!');

/* To remove an element from the document.
These lines of code remove the paragraph from the article and then, the article itself.
article.removeChild(linkPara);
/* linkPara.remove(); */ /* Not supported on old browsers, so it is not recommended
linkPara.parentNode.removeChild(linkPara); */