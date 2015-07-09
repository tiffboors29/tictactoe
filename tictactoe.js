'use strict';





$(document).ready(function() {


  // prompts for player names to be inputed in l-sidebar
  var player1Name = prompt('Player 1, what is your name?');
  $('#player1-name').text(player1Name);
  var player2Name = prompt('Player2, what is your name?');
  $('#player2-name').text(player2Name);

  // randomly selects which player will be x and go first
  var x = setTurn(player1Name, player2Name);
  var o;
  (x === player1Name)? (o = player2Name) : (o = player1Name);


  // sets turn count and the score of each player at 0 and board values at ''
  var player1NameWins = 0;
  var player2NameWins = 0;
  var count = 0;
  var board = ['', '', '', '', '', '', '', '', ''];



  // tells player x to make the first move
  displayAlert(x + ', You will be X. Please pick a square');



  // places x or o layers on clicked tiles
  $('.default-tile').on('click', function() {
    var i = $(this).attr('id');
      if (count === 0 || count %2 === 0) {
        if (isAvailable(i) === false) {
          displayAlert('That square is taken. ' + x + ', choose another.');
        } else {
          $(this).addClass('x-layer');
          console.log(i);
          setX(i);
          console.log(board);
          count++;
          if (checkWinner() === false) {
            displayAlert(o + ', your turn. Pick a square.');
          } else {
            checkWinner();
            displayAlert(winner + ', YOU WON!');
          }
        }
      } else {
        if (isAvailable(i) === false) {
          displayAlert('That square is taken. ' + o + ', choose another.');
          $(this).addClass('o-layer');
          console.log(i);
          setO(i);
          console.log(board);
          count++;
          if (checkWinner() === false) {
            displayAlert(o + ', your turn. Pick a square.');
          } else {
            checkWinner();
            displayAlert(winner + ', YOU WON!');
          }
        }
      }
  });



  //////////////////////////////////////////////////////////////////////////////////////
  // clears board so same players can play again and scores are saved///////////////////
  $('#playAgain').on('click', function() {

    // // clears board to play                 // added to activity.js
    // $('.default-tile').removeClass('o-layer');
    // $('.default-tile').removeClass('x-layer');
    showClearBoard();


    // sets count to 0, board values at '' , randomly chooses player to be x and go first
    var count = 0;
    var x = setTurn(player1Name, player2Name);
    var o;
    (x === player1Name) ? (o = player2Name) : (o = player1Name);
    var board = ['', '', '', '', '', '', '', '', ''];

    // displays current score between the players
    displayScore(player1Name + ': ' + player1NameWins + ' ' + player2Name + ': ' + player2NameWins);

    // tells player x to go first
    displayAlert(x + ', You will be X. Please pick a square');


    // places x or o layers on clicked tiles
    $('.default-tile').on('click', function() {
      var i = $(this).attr('id');
      if (count === 0 || count %2 === 0) {
        if (isAvailable(i) === false) {
          displayAlert('That square is taken. ' + x + ', choose another.');
        } else {
          $(this).addClass('x-layer');
          console.log(i);
          setX(i);
          console.log(board);
          count++;
          if (checkWinner() === false) {
            displayAlert(o + ', your turn. Pick a square.');
          } else {
            checkWinner();
            displayAlert(winner + ', YOU WON!');
          }
        }
      } else {
        if (isAvailable(i) === false) {
          displayAlert('That square is taken. ' + o + ', choose another.');
          $(this).addClass('o-layer');
          console.log(i);
          setO(i);
          console.log(board);
          count++;
          if (checkWinner() === false) {
            displayAlert(o + ', your turn. Pick a square.');
          } else {
            checkWinner();
            displayAlert(winner + ', YOU WON!');
          }
        }
      }
    });

  });



});

