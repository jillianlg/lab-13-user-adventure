import adventures from '../data.js';

// console.log(adventures);



const ul = document.querySelector('ul');

adventures.forEach(adventure => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = adventure.title;
    link.href = `./adventures/?id=${adventure.id}`;

    ul.append(li);
}); 
