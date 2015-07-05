'use strict';



// prompts players for names and places names in boxes on l-sidebar
jQuery(document).ready(function() {
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);
  $('.default-tile').on('click', function() {
    $(this).addClass();
  });
});

$('#tileA').on('click', function() {
  $(this).addClass('o-layer');
});


