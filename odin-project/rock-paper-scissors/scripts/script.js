'use strict';

let scores = {
  player: 0,
  computer: 0,
};
const options = ['rock', 'paper', 'scissors'];
const winConditions = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

const getComputerChoice = () =>
  options[Math.floor(Math.random() * options.length)];

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

const updateScores = (winner) => {
  scores[winner]++;
};

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
