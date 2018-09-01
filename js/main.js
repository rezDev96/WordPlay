window.addEventListener('load', init);

// Global variables
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'why',
  'html',
  'css'
];

function init(){
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdowm every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 3000);
}

// Pick & show random word
function showWord(words){
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output word
  currentWord.innerHTML = words[randIndex];
}

// Start Match
function startMatch(){
  if(matchWords()){
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if(score === -1){
    scoreDisplay.innerHTML = 0;
  } else{
    scoreDisplay.innerHTML = score;
  }
}

// If words match
function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct';
    return true;
  } else{
    message.innerHTML = '';
    return false;
  }
}

// Countdown timer
function countdown(){
  // Make sure time is not run out
  if(time > 0){
    // Decrease time
    time--
  } else if(time === 0){
    // Game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}