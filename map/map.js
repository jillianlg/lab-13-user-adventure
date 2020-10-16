import adventures from '../data.js';

// console.log(adventures);

const ul = document.querySelector('ul');

adventures.forEach(adventure => {
    const link = document.createElement('a');

    link.textContent = adventure.title;
    link.href = `/adventure/?id=${adventure.id}`;

    ul.append(link);
}); 
