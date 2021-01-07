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
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';

// reset all 'seleceted' icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
    
  });
}

// compuetr choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
//  console.log('computer choice', computerChoiceNumber);
  if (computerChoiceNumber < 0.4) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  // console.log(computerChoice);
}

// add seleceted styling and computer choice 
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
// call function for turn
function checkResult() {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
}

// passing player onclick

function select(playerChoice) {
  checkResult();
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
}
