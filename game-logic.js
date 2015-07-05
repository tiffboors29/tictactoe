'use strict';

var player1 = 'x';  // turn 0
var player2 = 'o';  // turn 1
var turn = 0;

var tileA;
var tileB;
var tileC;
var tileD;
var tileE;
var tileF;
var tileG;
var tileH;
var tileI;



// places 'x' or 'o' in box when clicked
var newGame = function() {
  if (turn == 0, function(event) {
    event.preventDefault();
    console.log("Player 1, click on the square you want to play.");
    player1Move();
    getWin();
    turn == 1;
    player2Move();
    getWin();
    }
  });
};


var playGame = function() {
  while ( (tileA !== 'x' || 'o') &&
          (tileB !== 'x' || 'o') &&
          (tileC !== 'x' || 'o') &&
          (tileD !== 'x' || 'o') &&
          (tileE !== 'x' || 'o') &&
          (tileF !== 'x' || 'o') &&
          (tileG !== 'x' || 'o') &&
          (tileH !== 'x' || 'o') &&
          (tileI !== 'x' || 'o')  ) {
    newGame();
  }
};

var player1Move = function() {    // changes tile class to x-layer
  $('#tileA').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileA = 'x';
  });
  $('#tileB').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileB = 'x';
  });
  $('#tileC').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileC = 'x';
  });
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileD = 'x';
  });
  $('#tileE').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileE = 'x';
  });
  $('#tileF').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileF = 'x';
  });
  $('#tileG').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileG = 'x';
  });
  $('#tileH').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileH = 'x';
  });
  $('#tileI').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
    tileI = 'x';
  });
};

var player2Move = function() {  // changes tile class to o-layer
    $('#tileA').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileA = 'o';
  });
  $('#tileB').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileB = 'o';
  });
  $('#tileC').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileC = 'o';
  });
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileD = 'o';
  });
  $('#tileE').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileE = 'o';
  });
  $('#tileF').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileF = 'o';
  });
  $('#tileG').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileG = 'o';
  });
  $('#tileH').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileH = 'o';
  });
  $('#tileI').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
    tileI = 'o';
  });
};



// detects win or cat's game
var getWin = function() {
  var xWins;
  var oWins;
  if (tileA === tileB === tileC === 'x' ||  // first row
      tileD === tileE === tileF === 'x' ||  // second row
      tileG === tileH === tileI === 'x' ||  // third row
      tileA === tileD === tileG === 'x' ||  // first column
      tileB === tileE === tileH === 'x' ||  // second column
      tileC === tileF === tileI === 'x' ||  // last column
      tileA === tileE === tileI === 'x' ||  // diagnal R-L
      tileG === tileE === tileC === 'x' ||) { //diagnal L-R
    xWin += 1;
    console.log("Player 1 wins!");
    clearBoard();
    } else if (tileA === tileB === tileC === 'o' ||  // first row
      tileD === tileE === tileF === 'o' ||  // second row
      tileG === tileH === tileI === 'o' ||  // third row
      tileA === tileD === tileG === 'o' ||  // first column
      tileB === tileE === tileH === 'o' ||  // second column
      tileC === tileF === tileI === 'o' ||  // last column
      tileA === tileE === tileI === 'o' ||  // diagnal R-L
      tileG === tileE === tileC === 'o' ||) { //diagnal L-R
    oWin += 1;
    console.log("Player 2 wins!");
    clearBoard();
    } else if (a !== null && b !== null && c !== null && // if all tiles are filled
      d !== null && e !== null && f !== null && // but there are no winners
      g !== null && h !== null && i !== null) { // it's a cat's game
    console.log("Cat\'s Game. No Winners!")
  }
};

// sets tile values back to empty strings
var clearBoard = function() {
  tileA = "";
  tileB = "";
  tileC = "";
  tileD = "";
  tileE = "";
  tileF = "";
  tileG = "";
  tileH = "";
  tileI = "";
  xWin = 0;
  oWin = 0;
  newGame();
};

$(document).ready(function() {
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').html(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').html(player2Name);
  newGame();
});

