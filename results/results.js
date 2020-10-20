import loadProfile from '../general/load-profile.js';
import { getDog } from '../data/storage-utils.js';
import scoreBaddog from './score-baddog.js';
import scoreTreats from './score-treats.js';
import { badDogMessages, averageDogMessages, goodDogMessages } from './messages.js';


loadProfile();

const dog = getDog();

const storyDisplay = document.getElementById('story-display');

const baddogResult = scoreBaddog(dog.baddog);
const treatsResult = scoreTreats(dog.treats);
const baddogMessage = badDogMessages[baddogResult];

let treatsMessages = null;
if (baddogResult === 'naughty') {
    treatsMessages = averageDogMessages;
}
else {
    treatsMessages = goodDogMessages;
}

const treatMessages = treatsMessages[treatsResult];

let story = 'You, ';
story += dog.name + ' the ' + dog.breed + ', had a very adventurious day. ';
story += baddogMessage + ' and ' + treatMessages + '.';

storyDisplay.textContent = story;