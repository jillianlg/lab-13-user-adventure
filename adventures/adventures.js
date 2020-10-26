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

