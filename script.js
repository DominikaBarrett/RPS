// import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats:['scissors','scissors']},
  paper: { name: 'Paper', defeats: ['rock','rock']},
  scissors: { name: 'Scissors', defeats: ['paper','paper']},
};

// zmienne globalne

let computerScoreNumber = 0;
let playerScoreNumber = 0;
let computerChoice = '';

// reset all 'seleceted' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected'); 
  });
  stopConfetti();
  removeConfetti();
}

// Reset Scaore and palyer and computer choice
function resetAll() {
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = computerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;


// compuetr choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
//  console.log('computer choice', computerChoiceNumber);
  if (computerChoiceNumber < 0.4) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.7) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  console.log('wybor komputera',computerChoice);
}



//add seleceted styling and computer choice 
function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = '---Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = '---Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = '---Scissors';
      break;
    default:
      break;
  }
}



// check resluts score dodanie do tablicy wyniku i textu  do tabllicy
function updateScore(playerChoice) {
  console.log(playerChoice, computerChoice);
  if (playerChoice === computerChoice) {
    console.log('pokaz', playerChoice, computerChoice);
    resultText.textContent = 'Its a tie!';
  } else {
    const choice = choices[playerChoice];
    console.log(choice.defeats.indexOf(computerChoice));
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = 'You won';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You lost';

      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

  



// call function for turns
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// passing player onclick

function select(playerChoice) {
  checkResult(playerChoice);
  //  add 'selected' styling and player choice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
     playerChoiceEl.textContent = '---Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
     playerChoiceEl.textContent = '---Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = '---Scissors';
      break;
    default:
      break;
  }
  console.log('wybor playera', playerChoice);
}
window.select = select;

// start game
resetAll();


