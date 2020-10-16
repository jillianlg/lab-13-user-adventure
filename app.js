// import functions and grab DOM elements
import { saveDog } from './storage-utils.js';

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
        bd: 0,
        completed: {}
    });

    window.location.href = './map/';

});



// const stringyDog = JSON.stringify(dog);

// localStorage.setItem('dog', stringyDog);