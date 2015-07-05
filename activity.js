'use strict';

jQuery(document).ready(function() {
  $('#tileA').on('click', function() {
    $(this).text('x');
  });
});


$(document).ready(function() {
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').html(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').html(player2Name);
  newGame();
});

