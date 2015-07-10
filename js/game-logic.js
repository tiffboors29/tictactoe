'use strict';

var board = ['', '', '', '', '', '', '', '', ''];
var count = 0;


var getPlayer1Name = function() {
  var player1Name = prompt('Player 1, what is your name?');
  return player1Name;
};

var getPlayer2Name = function() {
  var player2Name = prompt('Player 2, what is your name?');
  return player2Name;
};

// randomly selects player to be 'x' and go first
var setTurn = function(player1Name, player2Name) {
  var x;
  if (Math.random() < 0.5) {
    x = player1Name;
  } else {
    x = player2Name;
  }
  return x;
};


// checks if tile is available
var isAvailable = function(index) {
  var tileStatus;
  if ( board[index] !== '') {
    tileStatus = false;
  } else {
    tileStatus = true;
  }
  return tileStatus;
};


// sets move for player x if tile is available
var setX = function(index) {
    return board[index] = 'x';
};


// sets move for player o if tile is available
var setO = function(index) {
    return board[index] = 'o';
};



// checks tiles to determine if there's a winner or cat's game
var checkWinner = function(){
  var winner;
  if ((checkRow() === 'x' ) || (checkCol() === 'x') || (checkDiag() === 'x')) {
    winner = 'x';
  } else if ((checkRow() === 'o' ) || (checkCol() === 'o') || (checkDiag() === 'o')) {
    winner = 'o';
    console.log('winner is o');
  } else if (count === 9) {
    winner = 'cats';
  } else {
    winner = false;
  }
  return winner;
};


// checks rows for a winner
var checkRow = function() {
  var winsRow;
  if ((board[0] === board[1] && board[1] === board[2] && board[2] === 'x') ||
      (board[3] === board[4] && board[4] === board[5] && board[5] === 'x') ||
      (board[6] === board[7] && board[7] === board[8] && board[8] === 'x')) {
    winsRow = 'x';
  } else if ((board[0] === board[1] && board[1] === board[2] && board[2] === 'o') ||
              (board[3] === board[4] && board[4] === board[5] && board[5] === 'o') ||
              (board[6] === board[7] && board[7] === board[8] && board[8] === 'o')){
    winsRow = 'o';
  } else {
    winsRow = false;
  }
  return winsRow;
};

// checks columns for a winner
var checkCol = function() {
  var winsCol;
  if ((board[0] === board[3] && board[3] === board[6] && board[6] === 'x') ||
      (board[1] === board[4] && board[4] === board[7] && board[7] === 'x') ||
      (board[2] === board[5] && board[5] === board[8] && board[8] === 'x')) {
    winsCol = 'x';
  } else if ((board[0] === board[3] && board[3] === board[6] && board[6] === 'o') ||
              (board[1] === board[4] && board[4] === board[7] && board[7] === 'o') ||
              (board[2] === board[5] && board[5] === board[8] && board[8] === 'o')) {
    winsCol = 'o';
  } else {
    winsCol = false;
  }
  return winsCol;
};

// checks diagnals for a winner
var checkDiag = function() {
  var winsDiag;
  if ((board[0] === board[4] && board[4] === board[8] && board[8] === 'x') ||
      (board[2] === board[4] && board[4] === board[6] && board[6] === 'x')) {
    winsDiag = 'x';
  } else if ((board[0] === board[4] && board[4] === board[8] && board[8] === 'o') ||
            (board[2] === board[4] && board[4] === board[6] && board[6] === 'o')) {
    winsDiag = 'o';
  } else {
    winsDiag = false;
  }
  return winsDiag;
};




