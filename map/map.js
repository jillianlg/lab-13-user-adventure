import adventures from '../data.js';
import { getDog } from '../data/storage-utils.js';
import isBad from '../general/is-bad.js';
import loadProfile from '../general/load-profile.js';
import createAdventureLink from './create-adventure-link.js';
import { hasCompletedAllAdventures } from './all-completed.js';
import checkCompleted from './check-completed.js';

// load the header on every page but the home page
loadProfile();

// go grab the user from localStorage
const dog = getDog();

// if they're dead, or if they've completed all the quests
if (isBad(dog) || hasCompletedAllAdventures(adventures, dog)) {
    // send them to the results page
    window.location = '../results';
}

const nav = document.getElementById('adventures');

for (let i = 0; i < adventures.length; i++) {
    // for every quest
    const adventure = adventures[i];
    let adventureDisplay = null;

    // if the user has completed it
    if (dog.completed[adventure.id]) {
        // make a completed adventure display (with a checkmark)
        adventureDisplay = checkCompleted(adventure);
    } else {
        // otherwiese, make a link to the quest
        adventureDisplay = createAdventureLink(adventure);
    }
    nav.appendChild(adventureDisplay);
}
// const ul = document.querySelector('ul');

// adventures.forEach(adventure => {
//     const li = document.createElement('li');
//     const link = document.createElement('a');

//     li.appendChild(link);

//     link.textContent = adventure.title;
//     // link.href = `/adventures/?id=${adventure.id}`;
//     link.href = `./?id=${adventure.id}`;

//     ul.append(li);
// }); 
