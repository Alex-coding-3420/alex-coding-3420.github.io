'use strict';

const choices = ['rock', 'paper', 'scissors'];
let scores = [0, 0];

const winCondition = {
  rock: 'scissors',
  scissors: 'paper',
  paper: 'rock',
};

function getValidPlayerChoice() {
  let player = '';

  while (!choices.includes(player)) {
    player = String(prompt('Rock, paper, or scissors?')).trim().toLowerCase();
    if (choices.includes(player)) {
      break;
    } else {
      alert('Invalid option. Please choose rock, paper, or scissors.');
    }
  }
  return player;
}

const getComputerChoice = () =>
  choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  const winner = determineWinner(player, computer);
  if (winner === 'tie') {
    alert('Tie! Please try again');
    return 'tie';
  }

  updateScores(winner);
  console.log(
    `${
      winner === 'player' ? 'You win!' : 'You lose!'
    } ${playerSelection} beats ${computerSelection}`
  );
  return winner;
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'tie';
  } else if (winCondition[player] === computer) {
    return 'player';
  } else {
    return 'computer';
  }
}

function updateScores(winner) {
  if (winner === 'player') {
    scores[0]++;
  } else if (winner === 'computer') {
    scores[1]++;
  }
}

function game() {
  scores = [0, 0];
  let i = 0;
  while (i < 5) {
    const playerChoice = getValidPlayerChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    console.log(`Player: ${scores[0]}, Computer: ${scores[1]}`);
    if (roundResult !== 'tie') {
      i++;
    }
  }
  alert(scores[0] > scores[1] ? 'Player Wins!' : 'Computer Wins!');
}

game();
