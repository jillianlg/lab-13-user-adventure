import { adventures } from '../adventures.js';
import { findById } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);

// console.log(searchParams.get('id'));

const id = searchParams.get('id');

const adventure = findById(adventures, id);

console.log(adventure);
