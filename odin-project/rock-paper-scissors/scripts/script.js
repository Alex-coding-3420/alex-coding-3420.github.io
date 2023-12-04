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

// Propmts user to enter either rock, paper, or scissors.
// If the user enters a different value, they will be alerted to enter on of three choices
const getValidPlayerChoice = () => {
  let player = '';
  while (!options.includes(player)) {
    player = String(prompt('Rock, Paper, or Scissors?')).toLowerCase().trim();
    if (options.includes(player)) {
      break;
    } else {
      alert('Invalid option. Please choose from the following options');
    }
  }
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
};

// Alerts the user if the user or computer won the round
const displayWinner = (winner, player, computer) => {
  alert(
    `${
      winner === 'player'
        ? `You win! ${player} beats ${computer}`
        : `You lose! ${computer} beats ${player}`
    } `
  );
};

function round(player, computer) {
  const winner = determineWinner(player, computer);
  if (winner === 'tie') {
    alert('tie');
    return 'tie';
  }
  updateScores(winner);
  displayWinner(winner, player, computer);
  return winner;
}

function game() {
  scores = {
    player: 0,
    computer: 0,
  };
  let rounds = 0;
  while (rounds < 5) {
    let player = getValidPlayerChoice();
    let computer = getComputerChoice();
    console.log(`player ${player}`, `computer ${computer}`);
    let roundResult = round(player, computer);
    if (roundResult !== 'tie') {
      rounds++;
    }
  }
  alert(
    scores['player'] > scores['computer']
      ? `Player wins! Player: ${scores['player']}, Computer: ${scores['computer']}`
      : `Computer wins! Player: ${scores['player']}, Computer: ${scores['computer']}`
  );
}
game();
