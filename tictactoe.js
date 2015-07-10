'use strict';





$(document).ready(function() {


  // gets names from players to use throughout the game
  var player1Name = getPlayer1Name();
  $('#player1-name').text(player1Name);
  var player2Name = getPlayer2Name();
  $('#player2-name').text(player2Name);


  // starts # of wins per player
  var player1NameWins = 0;
  var player2NameWins = 0;


  // reloads page for brand new game with new/different players
  $('#newGame').on('click', function() {
    window.location.reload(true);
  });

  // displays 'message' in alert box above boardgame
  var displayAlert = function(message) {
    $('#alertBox').html(message);
  };


  // displays 'score' in scorebox in r-sidebar
  var displayScore = function(score) {
    $('#scoreBox').html(score);
  };

  // randomly selects player to be x and go first
  var x = setTurn(player1Name, player2Name);
  var o;
  if (x === player1Name) {
    o = player2Name;
  } else {
    o = player1Name;
  }


  // alerts x to start the game with the first move
  displayAlert(x + ', you are x. Pick an empty square.');


  // creates click handler and directs game flow
  // using functions from game-logic.js
  $('.default-tile').on('click', function() {
    var i = $(this).attr('id');
    if (count === 0 || (count % 2 === 0)) {
        if (isAvailable(i) === true) {
          $(this).addClass('x-layer');
          setX(i);
          count++
          console.log(i, board);
        }
    } else {
      if (isAvailable(i) === true) {
          $(this).addClass('o-layer');
          setO(i);
          count++;
          console.log(i, board);
      }
    }
    // checks for winners, cats or to continue game
    if (checkWinner() === false) {
      if (count === 0 || (count % 2 === 0)) {
        displayAlert('Player X-' + x + ', pick an empty square');
      } else {
        displayAlert('Player O-' + o + ', pick an empty square');
      }
    } else if (checkWinner() === 'x') {
      if (x === player1Name) {
        player1NameWins +=1;
      } else {
        player2NameWins +=1;
      }
      displayAlert(x + ', YOU WON! Click "Play Again" to play the same user or "New Game" to restart.');
      $('.x-layer').addClass('win-tile-x');
    } else if (checkWinner() === 'o') {
      if (o === player1Name) {
        player1NameWins +=1;
      } else {
        player2NameWins +=1;
      }
      displayAlert(o + ', YOU WON! Click "Play Again" to play the same user or "New Game" to restart.');
      $('.o-layer').addClass('win-tile-o');
    } else if (checkWinner() ===  'cats') {
      displayAlert('Draw! No Winners! Click "Play Again" to play the same user or "New Game" to restart.');
    }
  });




  //////////////////////////////////////////////////////////////////
  // clears board so same players can play again and scores are saved
  $('#playAgain').on('click', function() {

    board = ['', '', '', '', '', '', '', '', ''];
    count = 0;
    $('.default-tile').removeClass('o-layer');
    $('.default-tile').removeClass('x-layer');
    $('.default-tile').removeClass('win-tile-x');
    $('.default-tile').removeClass('win-tile-o');

    console.log(board);

    // randomly selects player to be x and go first
    var x = setTurn(player1Name, player2Name);
    var o;
    if (x === player1Name) {
      o = player2Name;
    } else {
      o = player1Name;
    }

    // displays current score between the players
    displayScore(player1Name + ': ' + player1NameWins + ' ' + player2Name + ': ' + player2NameWins);

    // tells player x to go first
    displayAlert(x + ', You will be X. Please pick a square');
  });

});

