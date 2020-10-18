import { getDog } from '../data/storage-utils.js';
import isBad from './is-bad.js';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const baddog = document.getElementById('bad-dog');
    const treats = document.getElementById('treats');

    /* initialize: load and parse json with dog from local storage */
    const dog = getDog();

    // if there's no dog
    if (!dog) {
        // no dog? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = dog.name;
    avatar.src = '../assets/' + dog.breed + '.png';
    treats.textContent = treats.gold;

    // if they're bad, say so in the header
    if (isBad(dog)) {
        baddog.textContent = 'BAD DOG!';
    }
    else {
        // otherwise show the bad dog status
        baddog.textContent = dog.baddog;
    }

}

export default loadProfile;