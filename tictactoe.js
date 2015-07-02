'use strict';

// gets player1 to choose either x or o
var getPlayer1Token = function() {
  console.log('Player 1, please choose either x or o');
  return prompt();
};

// sets player2 to either 'o' or 'x' depending on what
// player1 chose
var setPlayer2Token = function() {
  var player1 = getPlayer1Token();
  var player2;
  if (player1 === 'o') {
    console.log('Player 1 chose o. Player 2, you will be x.');
    player2 = 'x';
  } else {
    console.log('Player 1 chose x. Player 2, you will be o.');
    player2 = 'o';
  }
  return player2;
};


var getInput = function() {
  console.log('Your turn. Please pick a square.');
  return prompt();
};

// gets player1's move
// prompt's player for input if move is not placed
var getPlayer1Move = function(move) {
  return move || getInput();
};

// gets player2's move
// prompt's player for input if move is not placed
var getPlayer2Move = function(move) {
  return move || getInput();
};

var getWinner = function(player1Move, player2Move) {
  var winner;
  if (r1t1 === r1t2 === r1t3 === 'o' ||
      r1t1 === r2t2 === r3t3 === 'o' ||
      r1t1 === r2t1 === r3t1 === 'o' ||
      r1t2 === r2t2 === r3t2 === 'o' ||
      r1t3 === r2t2 === r3t1 === 'o' ||
      r1t3 === r2t3 === r3t3 === 'o' ||
      r2t1 === r2t2 === r2t3 === 'o' ||
      r3t1 === r3t2 === r3t3 === 'o') {
    if (player1 === 'o') {
      winner = player1;
    } else {  // else 'o' must be player2
      winner = player2;
    }
  if (r1t1 === r1t2 === r1t3 === 'x' ||
      r1t1 === r2t2 === r3t3 === 'x' ||
      r1t1 === r2t1 === r3t1 === 'x' ||
      r1t2 === r2t2 === r3t2 === 'x' ||
      r1t3 === r2t2 === r3t1 === 'x' ||
      r1t3 === r2t3 === r3t3 === 'x' ||
      r2t1 === r2t2 === r2t3 === 'x' ||
      r3t1 === r3t2 === r3t3 === 'x') {
    if (player1 === 'x') {
      winner = player1;
    } else {  // else 'x' must be player2
      winner = player2;
    }
  }
  // need to write cat's game scenario
  return winner;
};
