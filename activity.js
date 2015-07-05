'use strict';


jQuery(document).ready(function() {

  // prompts for player names to be inputed in l-sidebar
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);

  // sets starting count of filled tiles at 0
  var count = 0;



  // detects if tile is filled or empty
  var isAvailableTile = function($this) {
    if (! $(this).hasClass('x-layer') && ! $(this).hasClass('o-layer')) {
      return true;
    }
  };

  // FIX ME
  $('#newGame').on('click', function() {
    $('.x-layer').removeClass('x-layer');   // removes x layer classes
    $('.o-layer').removeClass('o-layer');   // removes o layer classes
    $('.default-tile').attr('data-move', '');
    count = 0;                   // resets count to zero
  });

  var reset = function() {
    $('.x-layer').removeClass('x-layer');   // removes x layer classes
    $('.o-layer').removeClass('o-layer');   // removes o layer classes
    $('.default-tile').attr('data-move', '');
    count = 0;                   // resets count to zero
  };

  var player1Move = function() {
    $('#alertBox').html('Player 1, pick a box!');
    $('.default-tile').on('click', function() {
      if (isAvailableTile($(this))) { // if tile is available
        $(this).addClass('x-layer');  //calls player1Move   with arguments
        count++;  //increases count by 1
        checkWinner();
        player2Move();
      }
    });
  };

   var player2Move = function() {
    $('#alertBox').html('Player 2, pick a box!');
    $('.default-tile').on('click', function() {
      if (isAvailableTile($(this))) { // if tile is available
        $(this).addClass('o-layer');  //calls player1Move   with arguments
        count++;        //increases count by 1
        checkWinner();
      }
    });
  };



  var hasWon = function(move) {
    if (($('#tile1').hasClass(move) && $('#tile2').hasClass(move) && $('#tile3').hasClass(move)) ||
        ($('#tile4').hasClass(move) && $('#tile5').hasClass(move) && $('#tile6').hasClass(move)) ||
        ($('#tile7').hasClass(move) && $('#tile8').hasClass(move) && $('#tile9').hasClass(move)) ||
        ($('#tile1').hasClass(move) && $('#tile4').hasClass(move) && $('#tile7').hasClass(move)) ||
        ($('#tile2').hasClass(move) && $('#tile5').hasClass(move) && $('#tile8').hasClass(move)) ||
        ($('#tile3').hasClass(move) && $('#tile6').hasClass(move) && $('#tile9').hasClass(move)) ||
        ($('#tile1').hasClass(move) && $('#tile5').hasClass(move) && $('#tile9').hasClass(move)) ||
        ($('#tile3').hasClass(move) && $('#tile5').hasClass(move) && $('#tile7').hasClass(move))) {
      return true;
    }
  };

  var checkWinner = function() {
    if (count < 5) {
      return;
    }
    if (hasWon('x-layer')) {
      xWins();
    } else if (hasWon('o-layer')) {
      oWins();
    } else if (count === 9) {
      cats();
    }
  };

  var xWins = function() {
    $('#alertBox').html('Player 1 Wins!');
    reset();
  };

  var oWins = function() {
    $('#alertBox').html('Player 2 Wins!');
    reset();
  };

  var cats = function() {
    $('#alertBox').html('Cat\'s Game. No Winners!');
    reset();
  };

});

