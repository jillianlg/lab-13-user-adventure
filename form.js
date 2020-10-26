// import functions and grab DOM elements
import { saveDog } from './data/storage-utils.js';

const form = document.getElementById('form');
// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // console.log(data.get('name'), data.get('breed'));
    saveDog({
        name: data.get('name'),
        breed: data.get('breed'),
        treats: 0,
        baddog: 0,
        completed: {}
    });

    // window.location.href = '../map/';
    window.location.href = '../map/index.html';

});
