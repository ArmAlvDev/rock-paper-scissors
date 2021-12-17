const computerHand = function() {
  const hand = ['ROCK', 'PAPER', 'SCISSORS'];
  return hand[Math.floor(Math.random() * hand.length)];
};

function decideBestHand(player, computer = computerHand()) {
  let gameHand;

  if (player === computer) {
    return gameHand = {player:false, computer:false, message:'It\'s a tie!'};
  }

  if (player === 'ROCK' && computer === 'SCISSORS' 
    || player === 'PAPER' && computer === 'ROCK' 
    || player === 'SCISSORS' && computer === 'PAPER') {
      return gameHand = {player:true, computer:false, message:`You Win! ${player} beats ${computer}`};
  } else {
    return gameHand = {player:false, computer:true, message:`You Lose! ${computer} beats ${player}`};
  }
}

function playRound(player) {
  const roundHand = decideBestHand(player);

  if (roundHand.player) {
    computerLifes -= 1;
    resultHand.textContent = `${roundHand.message}`;
    score.textContent = `PlayerLifes: ${playerLifes} ComputerLifes: ${computerLifes}`;
  } else if (roundHand.computer){
    playerLifes -= 1;
    resultHand.textContent = `${roundHand.message}`;
    score.textContent = `PlayerLifes: ${playerLifes} ComputerLifes: ${computerLifes}`;
  } else {
    resultHand.textContent = `${roundHand.message}`;
    score.textContent = `PlayerLifes: ${playerLifes} ComputerLifes: ${computerLifes}`;
  }
}

function decideWinnerGame() {
  if (playerLifes === 0 || computerLifes == 0) {
    const weapons = document.querySelectorAll('.weapon');
    if (playerLifes) {
      alert('You Won!');
    } else {
      alert('You Lost!');
    }
    weapons.forEach(weapon => {
      weapon.disabled = true;
    });
  }
}

function playGame(e) {
  const button = document.querySelector(`button[id="${e.target.id}"]`);
  if (!button) {
    return
  }
  
  playRound(button.textContent.toUpperCase());
  decideWinnerGame();
}

function playAgain(e) {
  location.reload();
}

let playerLifes = 5;
let computerLifes = 5;

const message = document.querySelector('.message');
const score = document.querySelector('.score');
score.textContent = `PlayerLifes: ${playerLifes} ComputerLifes: ${computerLifes}`;
const resultHand = document.querySelector('.resultHand');
resultHand.textContent = 'You haven\'t played yet. Waiting for your choice';

const reset = document.querySelector('button[class="reset"]');

window.addEventListener('click', playGame);
reset.addEventListener('click', playAgain);