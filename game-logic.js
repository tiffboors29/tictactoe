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
    $(this).text(player1);
    boardcheck();
    getWin();
    turn == 1;
    player2Move();
    boardcheck();
    getWin();
    }
  });
};

var player1Move = function() {    // changes tile class to x-layer
  $('#tileA').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileB').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileC').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileE').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileF').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileH').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
  $('#tileI').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
  }
};

var player2Move = function() {  // changes tile class to o-layer
    $('#tileA').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileB').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileC').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileE').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileF').on('click', function() {s
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileD').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileH').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
  $('#tileI').on('click', function() {
    $(this).removeClass('default-tile').addClass('o-layer');
  }
};

// detects what is inside each tile
var boardcheck = function() {
  tileA = $('#tileA').html();
  tileB = $('#tileB').html();
  tileC = $('#tileC').html();
  tileD = $('#tileD').html();
  tileE = $('#tileE').html();
  tileF = $('#tileF').html();
  tileG = $('#tileG').html();
  tileH = $('#tileH').html();
  tileI = $('#tileI').html();
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
    } else if (a !== null && b !== null && c !== null && // if all tiles are filled
      d !== null && e !== null && f !== null && // but there are no winners
      g !== null && h !== null && i !== null) { // it's a cat's game
    console.log("Cat\'s Game. No Winners!")
  }
};

var clearBoard = function() {
  tileA = $('#tileA').text("");
  tileB = $('#tileB').text("");
  tileC = $('#tileC').text("");
  tileD = $('#tileD').text("");
  tileE = $('#tileE').text("");
  tileF = $('#tileF').text("");
  tileG = $('#tileG').text("");
  tileH = $('#tileH').text("");
  tileI = $('#tileI').text("");
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

