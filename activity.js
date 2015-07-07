'use strict';

// function displays message in alert box above boardgame
var displayAlert = function(message) {
  $('#alertBox').html(message);
};



jQuery(document).ready(function() {

  // prompts for player names to be inputed in l-sidebar
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);


  displayAlert(player1Name + ', pick a square');

  var count = 0;

  // places x/o layers on clicked tiles
  $('.default-tile').on('click', function() {
    if (count === 0 || (count % 2 === 0)) {
      if (isAvailableTile($(this)) === true) {
        $(this).addClass('x-layer');
        count++;
        checkWinner('x-layer', player1Name, player2Name);
      }
    } else {
     if (isAvailableTile($(this)) === true) {
        $(this).addClass('o-layer');
        count++;
        checkWinner('0-layer', player2Name, player1Name);
      }
    }
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
      $('.default-tile').off('click');
      displayAlert(player1 + ', You WON!');
    } else if ( count === 9 ) {
      $('.default-tile').off('click');
      displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game!');
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

});



// NEED RESTART GAME FUNCTION
// NEED NEW GAME BUTTON TO CLICK
