import adventures from '../data/data.js';
import { getDog, saveDog } from '../data/storage-utils.js';
import { findById } from '../general/find-by-id.js';
import loadProfile from '../general/load-profile.js';
import scoreAdventure from './score-adventure.js';
import createChoice from './create-choice.js';

// load profile from local storage and update header 
loadProfile();

// go grab the query parameter from the URL
const searchParams = new URLSearchParams(window.location.search);

// get the adventure id from the URL
const adventureId = searchParams.get('id');
// go use old faithful to find our adventure
const adventure = findById(adventures, adventureId);

// if there's no such adventure return to the map
if (!adventure) {
    // window.location = '../map';
    window.location = '../map/index.html';
}

const title = document.getElementById('title');
const image = document.getElementById('image');
// where the audio file would go if I were using audio
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

// use the adventure that we found in the data array to update the dom
title.textContent = adventure.title;
image.src = '../assets/' + adventure.image;
// where the audio file would go if I were using audio
description.textContent = adventure.description;

// for each of the adventure's choices
for (let index = 0; index < adventure.choices.length; index++) {
    const choice = adventure.choices[index];
    // go make a choice dom element
    const choiceToDOM = createChoice(choice);
    // and append that choice
    choices.appendChild(choiceToDOM);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // get dog choice
    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choice');
    // use find by id search the data array for the choice
    const choice = findById(adventure.choices, choiceId); 

    // get dog out of local storage
    const dog = getDog();
    // generate a score and manipulate dog state
    scoreAdventure(choice, adventure.id, dog);
    // save dog
    saveDog(dog);

     // update UI
    // audio.src = '../assets/audio-file/' + adventure.action;
    choiceForm.classList.add('hidden');
    result.classList.remove('hidden');
    resultDescription.textContent = choice.results;

    // reload profile for new stats
    loadProfile();
});

// const section = document.querySelector('section');

// const h2 = document.createElement('h2');

// h2.textContent = adventure.title;

// section.appendChild(h2);

// const form = document.createElement('form');
// section.appendChild(form);

// adventure.choices.forEach(choice => {
//     const label = document.createElement('label');
//     const span = document.createElement('span');

//     span.textContent = choice.description;

//     const radio = document.createElement('input');
//     radio.type = 'radio';
//     radio.value = choice.id;
//     radio.name = 'choices';

//     label.append(radio, span);

//     form.appendChild(label);

// });

// const button = document.createElement('button');

// button.textContent = 'Start Adventure';

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
    
//     const checked = document.querySelector(':checked');

//     const selection = checked.value;

//     const choice = findById(adventure.choices, selection);

//     const dog = getDog();
//     dog.baddog += choice.baddog;
//     dog.treats += choice.treats;

//     dog.completed[id] = true;

//     saveDog(dog);

//     if (dog.baddog <= 30 || hasCompletedAllAdventures(dog, adventures)) {
//         window.location.href = '../results/';
//     }

// });

// form.appendChild(button);
