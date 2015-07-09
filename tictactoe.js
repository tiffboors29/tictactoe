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
    var i = this.id;
    if (count === 0 || (count % 2 === 0)) {
      moveX($(this), x, o);
      board[i] = 'x';
      count++;
      checkWinner(count, 'x-layer', x, o);
      if (checkWinner(count, 'x-layer', x, o) === true) {
        (x === player1Name) ? player1NameWins++ : player2NameWins++;
      }
    } else {
      moveO($(this), x, o);
      board[i] = 'o';
      count++;
      if (checkWinner(count, 'o-layer', o, x) === true) {
        (o === player1Name) ? player1NameWins++ : player2NameWins++;
      }
    } console.log(board);
  });



  //////////////////////////////////////////////////////////////////////////////////////
  // clears board so same players can play again and scores are saved///////////////////
  $('#playAgain').on('click', function() {

    // clears board to play again
    $('.default-tile').removeClass('o-layer');
    $('.default-tile').removeClass('x-layer');

    // sets count to 0, board values at '' , randomly chooses player to be x and go first
    var count = 0;
    var x = setTurn(player1Name, player2Name);
    var o;
    (x === player1Name) ? (o = player2Name) : (o = player1Name);
    var board = ['', '', '', '', '', '', '', '', ''];

    // displays current score between the players
    displayScore(player1Name + ': ' + player1NameWins + ' ' + player2Name + ': ' + player2NameWins);

    // sets turn count
    var count = 0;

    // tells player x to go first
    displayAlert(x + ', You will be X. Please pick a square');


    // places x or o layers on clicked tiles
    $('.default-tile').on('click', function() {
      var i = this.id;
      if (count === 0 || (count % 2 === 0)) {
        moveX($(this), x, o);
        board[i] = 'x';
        count++;
        if (checkWinner(count, 'x-layer', x, o) === true) {
          (x === player1Name) ? player1NameWins++ : player2NameWins++;
        }
      } else {
        moveO($(this), x, o);
        board[i] = 'o';
        count++;
        if (checkWinner(count, 'o-layer', o, x) === true) {
          (o === player1Name) ? player1NameWins++ : player2NameWins++;
        }
      } console.log(board);
    });
  });



});

