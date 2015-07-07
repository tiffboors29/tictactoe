'use strict';

// displays 'message' in alert box above boardgame
var displayAlert = function(message) {
  $('#alertBox').html(message);
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




//// document ready ///////////

$(document).ready(function() {

  // prompts for player names to be inputed in l-sidebar
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);

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
      $('.default-tile').off('click');
      displayAlert(player1 + ', You WON! Click "New Game" to play again');
    } else if ( count === 9 ) {
        $('.default-tile').off('click');
      displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game! Click "New Game" to play again');
    } else if (count < 9) {
      displayAlert(player2 + ', pick a square');
    }
  };

  // FIX ME (NOT WORKING)
  // detects if tile is filled or empty
  var isAvailableTile = function($this) {
    if ($(this).hasClass('x-layer') || $(this).hasClass('o-layer')) {
      displayAlert('Please select a blank square');
      return false;
    } else {
      return true;
    }
  };


  // places x/o layers on clicked tiles
  $('.default-tile').on('click', function() {
    if (count === 0 || (count % 2 === 0)) {
      if (isAvailableTile($(this)) === true) {
        if (x === player1Name) {
          $(this).addClass('x-layer');
          count++;
          checkWinner('x-layer', player1Name, player2Name);
        } else if (x === player2Name) {
          $(this).addClass('x-layer');
          count++;
          checkWinner('x-layer', player2Name, player1Name);
        }
      }
    } else {
     if (isAvailableTile($(this)) === true) {
        if (x === player1Name) {
          $(this).addClass('o-layer');
          count++;
          checkWinner('o-layer', player2Name, player1Name);
        } else if (x === player2Name) {
          $(this).addClass('o-layer');
          count++;
          checkWinner('o-layer', player1Name, player2Name);
        }
      }
    }
  });

  $('#newGame').on('click', function() {
  window.location.reload(true);
  });

});

