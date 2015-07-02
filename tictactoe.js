'use strict';


var gameboard = [
          [null, null, null],
          [null, null, null],
          [null, null, null]];


// sets x at certain tile
var getXmove = function(row, col) {
  return (gameboard[row][col] = 'x') || getInput();
};

// sets o at certain tile
var getOmove = function(row, col) {
  return (gameboard[row][col] = 'o') || getInput();
};


var getInput = function() {
  console.log('Your turn. Please pick a square.');
  return prompt();
};



// not sure where these arguments get passed in
var getWinner = function(playerX, playerO) {
  var winner;
  if (gameboard[0][0] === gameboard[0][1] === gameboard[0][2] === 'o' ||
      gameboard[0][0] === gameboard[1][1] === gameboard[2][2] === 'o' ||
      gameboard[0][0] === gameboard[1][0] === gameboard[2][0] === 'o' ||
      gameboard[0][1] === gameboard[1][1] === gameboard[2][1] === 'o' ||
      gameboard[0][2] === gameboard[1][2] === gameboard[2][2] === 'o' ||
      gameboard[0][2] === gameboard[1][1] === gameboard[2][0] === 'o' ||
      gameboard[1][0] === gameboard[1][1] === gameboard[1][2] === 'o' ||
      gameboard[2][0] === gameboard[2][1] === gameboard[2][2] === 'o') {
    winner = playerO;
  }
  if (gameboard[0][0] === gameboard[0][1] === gameboard[0][2] === 'x' ||
      gameboard[0][0] === gameboard[1][1] === gameboard[2][2] === 'x' ||
      gameboard[0][0] === gameboard[1][0] === gameboard[2][0] === 'x' ||
      gameboard[0][1] === gameboard[1][1] === gameboard[2][1] === 'x' ||
      gameboard[0][2] === gameboard[1][2] === gameboard[2][2] === 'x' ||
      gameboard[0][2] === gameboard[1][1] === gameboard[2][0] === 'x' ||
      gameboard[1][0] === gameboard[1][1] === gameboard[1][2] === 'x' ||
      gameboard[2][0] === gameboard[2][1] === gameboard[2][2] === 'x') {
    winner = playerX;
  }
  if (a !== null && b !== null && c !== null &&
      d !== null && e !== null && f !== null &&
      g !== null && h !== null && i !== null) {
    winner = 'Cat\'s Game';
  }
  return winner;
};


var playGame = function() {
  console.log('Let\'s play tic tac toe!');
  var playerXwins= 0;
  var playerOwins= 0;

  while (playerXwins < 1 && playerOwins < 1) {
    var winner = getWinner(playerX, playerO);
    var playerX = getXmove();
    var playerO = getOmove();

    if (winner === playerX ) {
      console.log('Player X Wins!');
      playerXwins += 1;
    } else if (winner === playerO) {
      console.log('Player O Wins!');
      playerOwins += 1;
    } else {
      console.log('Cat\'s Game: No Winners!');
    }
  }
  return [playerXwins, playerOwins];
};

var bestOfFive = function () {
  console.log('Let\'s play tic tac toe best of five!');
  var player1wins= 0;
  var player2wins= 0;

  while (player1wins < 3 && player2wins < 3) {
    var player1Move = getPlayer1Move();
    var getPlayer2Move = getPlayer2Move;
    var winner = getWinner(player1Move, player2Move);
    var player1Wins = 0;
    var player2Wins = 0;

    if (winner === player1) {
      console.log('Player 1 Wins this match! ' + 'The score is ' + 'Player 1: ' + player1wins + ' Player 2: ' + player2wins);
      player1wins += 1;
    } else if (winner === player2) {
      console.log('Player 2 Wins this match! ' + 'The score is ' + 'Player 1: ' + player1wins + ' Player 2: ' + player2wins);
      player2wins += 1;
    }
  }
  if (player1wins === 3) {
    console.log('Player 1 Wins the Game!');
  } else if (player2wins === 3) {
    console.log('Player 2 Wins the Game!');
  } else {
      console.log('Cat\'s Game: No Winners!');
  }
  return [player1wins, player2wins];
};
