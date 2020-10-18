import { getDog } from '../data/storage-utils.js';
import isBad from './is-bad.js';

function loadProfile() {
    /* reference needed DOM elements */
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const baddog = document.getElementById('bad-dog');
    const treats = document.getElementById('treats');

    /* initialize: load and parse json with user from local storage */
    const dog = getDog();

    // if there's no user
    if (!dog) {
        // no user? go back to sign up:
        window.location = './';
    }

    // copy data from object to DOM properties:
    name.textContent = dog.name;
    avatar.src = '../assets/avatars/' + dog.breed + '.png';
    treats.textContent = treats.gold;

    // if they're bad, say so in the header
    if (isBad(dog)) {
        baddog.textContent = 'BAD DOG!!!';
    }
    else {
        // otherwise show the bad dog status
        baddog.textContent = dog.baddog;
    }

}

export default loadProfile;