import adventures from '../data.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');

const searchParams = new URLSearchParams(window.location.search);

// console.log(searchParams.get('id'));

const id = searchParams.get('id');

const adventure = findById(adventures, id);

// console.log(adventure);

const h2 = document.createElement('h2');

h2.textContent = adventure.title;

section.appendChild(h2);

console.log(adventure.choices);