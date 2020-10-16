import adventures from '../data.js';
import { getDog, saveDog } from '../storage-utils.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

// console.log(searchParams.get('id'));

const id = searchParams.get('id');

const adventure = findById(adventures, id);

// console.log(adventure);

const h2 = document.createElement('h2');

h2.textContent = adventure.title;

section.appendChild(h2);

// console.log(adventure.choices);
// console.log(adventure.title);

const form = document.createElement('form');
section.appendChild(form);

adventure.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = 'choice.id';
    radio.name = 'choices';

    label.append(radio, span);

    form.appendChild(label);

});

const button = document.createElement('button');

button.textContent = 'Start Adventure';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const checked = document.querySelectorAll(':checked');

    const selection = checked.value;

    const choice = findById(adventure.choices, selection);
    console.log(choice);

    const dog = getDog();
    dog.baddog += choice.baddog;
    dog.treats += choice.treats;

    console.log(dog);

    saveDog(dog);
});

form.appendChild(button);
