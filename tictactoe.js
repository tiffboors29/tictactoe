'use strict';


// displays 'message' in alert box above boardgame
var displayAlert = function(message) {
  $('#alertBox').html(message);
};


// displays 'score' in scorebox in r-sidebar
var displayScore = function(score) {
  $('#scoreBox').html(score);
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
var isAvailable = function(tile) {
  if (tile.hasClass('x-layer') || tile.hasClass('o-layer')) {
    return false;
  } else {
    return true;
  }
};

// variables store wins to be displayed in scoreBox when same users
// play multiple games
var player1NameWins = 0;
var player2NameWins = 0;


$(document).ready(function() {

  // prompts for player names to be inputed in l-sidebar
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);
  var x = setTurn(player1Name, player2Name);

  displayAlert(x + ', You will be X. Please pick a square');

  // sets 'count' (turn count) at zero and the score of each player at 0
  var count = 0;
  var player1NameWins = 0;
  var player2NameWins = 0;


  // reloads page for brand new game with new/different players
  $('#newGame').on('click', function() {
    window.location.reload(true);
  });


  // clears board so same players can play again and scores are saved
  $('#playAgain').on('click', function() {

   // clears board to play again
   $('.default-tile').removeClass('o-layer');
   $('.default-tile').removeClass('x-layer');

    // randomly set x (the player who goes first)
    var x = setTurn(player1Name, player2Name);
    displayAlert(x + ', You will be X. Please pick a square');
    var count = 0;

    // checks tiles to determine if there's a winner
    var checkWinner = function(layer, player1, player2) {
      if (($('#tile1').hasClass(layer) && $('#tile2').hasClass(layer) && $('#tile3').hasClass(layer)) ||
          ($('#tile4').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile6').hasClass(layer)) ||
          ($('#tile7').hasClass(layer) && $('#tile8').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile1').hasClass(layer) && $('#tile4').hasClass(layer) && $('#tile7').hasClass(layer)) ||
          ($('#tile2').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile8').hasClass(layer)) ||
          ($('#tile3').hasClass(layer) && $('#tile6').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile1').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile3').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile7').hasClass(layer))) {
        if (player1 === player1Name) {
          player1NameWins++;
        } else {
          player2NameWins++;
        }
        displayScore(player1Name + ': ' + player1NameWins + ' ' + player2Name + ': ' + player2NameWins);
        $('.default-tile').off('click');
        displayAlert(player1 + ', You WON! Click "Play Again" to play again or "New Game" to restart');
      } else if ( count === 9 ) {
          $('.default-tile').off('click');
          displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game! Click "Play Again" to play again or "New Game" to restart');
      } else if (count < 9) {
        displayAlert(player2 + ', pick a square');
      }
    };

    // places x/o layers on clicked tiles
    $('.default-tile').on('click', function() {
      if (count === 0 || (count % 2 === 0)) {
        if (x === player1Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player1Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('x-layer');
            count++;
            checkWinner('x-layer', player1Name, player2Name);
          }
        } else if (x === player2Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player2Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('x-layer');
            count++;
            checkWinner('x-layer', player2Name, player1Name);
          }
        }
      } else {
        if (x === player1Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player2Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('o-layer');
            count++;
            checkWinner('o-layer', player2Name, player1Name);
          }
        } else if (x === player2Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player1Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('o-layer');
            count++;
            checkWinner('o-layer', player1Name, player2Name);
          }
        }
      }
    });
  });



    // checks tiles to determine if there's a winner
    var checkWinner = function(layer, player1, player2) {
      if (($('#tile1').hasClass(layer) && $('#tile2').hasClass(layer) && $('#tile3').hasClass(layer)) ||
          ($('#tile4').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile6').hasClass(layer)) ||
          ($('#tile7').hasClass(layer) && $('#tile8').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile1').hasClass(layer) && $('#tile4').hasClass(layer) && $('#tile7').hasClass(layer)) ||
          ($('#tile2').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile8').hasClass(layer)) ||
          ($('#tile3').hasClass(layer) && $('#tile6').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile1').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile9').hasClass(layer)) ||
          ($('#tile3').hasClass(layer) && $('#tile5').hasClass(layer) && $('#tile7').hasClass(layer))) {
        if (player1 === player1Name) {
          player1NameWins++;
        } else {
          player2NameWins++;
        }
        displayScore(player1Name + ': ' + player1NameWins + ' ' + player2Name + ': ' + player2NameWins);
        $('.default-tile').off('click');
        displayAlert(player1 + ', You WON! Click "Play Again" to play again or "New Game" to restart');
      } else if ( count === 9 ) {
          $('.default-tile').off('click');
          displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game! Click "Play Again" to play again or "New Game" to restart');
      } else if (count < 9) {
        displayAlert(player2 + ', pick a square');
      }
    };


    // places x/o layers on clicked tiles
    $('.default-tile').on('click', function() {
      if (count === 0 || (count % 2 === 0)) {
        if (x === player1Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player1Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('x-layer');
            count++;
            checkWinner('x-layer', player1Name, player2Name);
          }
        } else if (x === player2Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player2Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('x-layer');
            count++;
            checkWinner('x-layer', player2Name, player1Name);
          }
        }
      } else {
        if (x === player1Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player2Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('o-layer');
            count++;
            checkWinner('o-layer', player2Name, player1Name);
          }
        } else if (x === player2Name) {
          if (isAvailable($(this)) === false) {
            displayAlert(player1Name + ', that square is taken. Choose another.');
          } else {
            $(this).addClass('o-layer');
            count++;
            checkWinner('o-layer', player1Name, player2Name);
          }
        }
      }
    });



});

