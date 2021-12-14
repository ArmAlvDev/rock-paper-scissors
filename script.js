/*The program is going to take a selection from a player 
and play it against the computer; depending on the winner,
the program will update the corresponding lifes; the program
ends when one of players has no more lifes.*/

// Initialize player's lifes
let playerLifes = 5;
// Initialize computer's lifes
let computerLifes = 5;
// Start the game in a loop (while lifes > 0))
while (playerLifes > 0 && computerLifes > 0) {
  // Initialize player's hand
  const playerHand = function() {
    let hand = prompt('Play your hand');
    return hand.toUpperCase();      
  };
  // Initialize computer's hand
  const computerHand = function() {
    const hand = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomNumber = Math.floor(Math.random()*3);
    return hand[randomNumber]
  };
  /*Compute a decision procedure to determine the best hand {
    gameHand keeps the best hand
  }*/
  function decideBestHand(player = playerHand(), computer = computerHand()) {
    let gameHand;
    
    if (player === computer) {
      gameHand = {player:false, computer:false, message:'It\'s a tie!'};
    }

    if (player === 'ROCK' && computer === 'SCISSORS' 
      || player === 'PAPER' && computer === 'ROCK' 
      || player === 'SCISSORS' && computer === 'PAPER') {
        return gameHand = {player:true, computer:false, message:`You Win! ${player} beats ${computer}`};
    } else {
      return gameHand = {player:false, computer:true, message:`You Lose! ${computer} beats ${player}`};
    }
  }
  // Update lifes and declare the best hand of the round 
  function playRound() {
    const gameHand = decideBestHand()
    if (gameHand.player) {
      computerLifes -= 1;
      return gameHand.message;
    } else if (gameHand.computer){
      playerLifes -= 1;
      return gameHand.message;
    } else {
      return gameHand.message;
    }
  }
  console.log(playRound())
}
// Decide the winner of the game
if (playerLifes) {
  console.log('Great! You won')
} else {
  console.log('Oh no! The computer won')
}
