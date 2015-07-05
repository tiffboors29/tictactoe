'use strict';


// prompts players for names and places names in boxes on l-sidebar
jQuery(document).ready(function() {
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);
  newGame();
});



jQuery(document).ready(function() {
  $('#tileA').on('click', function() {
    $(this).removeClass('default-tile').addClass('x-layer');
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
});

