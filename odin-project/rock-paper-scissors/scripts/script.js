'use strict';

// Object to store score between player and computer
let scores = {
  player: 0,
  computer: 0,
};

// The three options that can be chosen by the player
const options = ['rock', 'paper', 'scissors'];

// Object detailing the win conditions in key/pair values
const winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

// Generates a random choice from the 'options' array for the computer.
const getComputerChoice = () =>
  options[Math.floor(Math.random() * options.length)];

// element objects
const playerScoreId = document.querySelector('#player-score');
const computerScoreId = document.querySelector('#computer-score');
const displayWinnerId = document.querySelector('#display-winner');
const optionEl = document.querySelectorAll('.option');
const newGameBtn = document.querySelector('#new-game-btn');

// Propmts user to enter either rock, paper, or scissors.
// If the user enters a different value, they will be alerted to enter on of three choices
const getValidPlayerChoice = (playerChoice) => {
  const player = String(playerChoice.toLowerCase().trim());
  return player;
};

// Determines if the player or computer wins the round
const determineWinner = (player, computer) => {
  if (player === computer) {
    return `tie`;
  }
  if (winConditions[player] === computer) {
    return 'player';
  } else {
    return 'computer';
  }
};

// increments the winner's score by 1
const updateScores = (winner) => {
  scores[winner]++;
  const winnerText = `#${winner}-score`;
  document.querySelector(winnerText).textContent = scores[winner];
};

// Alerts the user if the user or computer won the round
const displayWinner = (winner, player, computer) => {
  displayWinnerId.textContent = `${
    winner === 'player'
      ? `You win! ${player} beats ${computer}`
      : `You lose! ${computer} beats ${player}`
  } `;
};

function round(player, computer) {
  const winner = determineWinner(player, computer);
  if (winner === 'tie') {
    displayWinnerId.textContent = 'tie';
    return 'tie';
  }
  updateScores(winner);
  displayWinner(winner, player, computer);
  return winner;
}

function game(playerChoice) {
  if (scores.player < 5 && scores.computer < 5) {
    let player = getValidPlayerChoice(playerChoice);
    let computer = getComputerChoice();
    round(player, computer);
  }
  if (scores.player >= 5 || scores.computer >= 5) {
    displayRoundWinner();
  }
}

function displayRoundWinner() {
  const winner =
    scores['player'] > scores['computer']
      ? `Player wins! Player: ${scores['player']}, Computer: ${scores['computer']}`
      : `Computer wins! Player: ${scores['player']}, Computer: ${scores['computer']}`;
  displayWinnerId.textContent = winner;
  scores['player'] > scores['computer']
    ? (displayWinnerId.style.color = 'green')
    : (displayWinnerId.style.color = 'red');
}

optionEl.forEach((option) => {
  option.addEventListener('click', (e) => {
    const playerChoice = e.target.textContent.trim();
    game(playerChoice);
    if (scores.player >= 5 || scores.computer >= 5) {
      option.setAttribute('disabled', 'true');
    }
  });
});

newGameBtn.addEventListener('click', (e) => {
  init();
});

function init() {
  scores = {
    player: 0,
    computer: 0,
  };
  playerScoreId.textContent = 0;
  computerScoreId.textContent = 0;
  displayWinnerId.textContent = 'Rock, paper, or scissors?';
  optionEl.forEach((option) => {
    option.removeAttribute('disabled');
  });
}
