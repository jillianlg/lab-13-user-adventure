import adventures from '../data.js';
import { getDog } from '../storage-utils.js';

// console.log(adventures);

const dog = getDog();

function hasCompletedAllAdventures(_dog) {
    for (let i = 0; i < adventures.length; i++) {
        const quest = quest[i];

        if(!_dog.completed[adventures.id]) {
            return false;
        }
    }
    return true;
}

if (dog.baddog <= 30 || hasCompletedAllAdventures(dog)) {
    window.location.href = './results/';
}

const ul = document.querySelector('ul');

adventures.forEach(adventure => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = adventure.title;
    link.href = `/adventures/?id=${adventure.id}`;

    ul.append(li);
}); 
