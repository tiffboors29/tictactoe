'use strict';



$(document).ready(function() {

  // gets names from players to use throughout the game
  var player1Name = getPlayer1Name();
  $('#player1-name').text(player1Name);
  var player2Name = getPlayer2Name();
  $('#player2-name').text(player2Name);


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


  // FIX message//////////////
  // clears board of x/o css classes
  var showClearBoard = function() {
    $('.default-tile').removeClass('o-layer');
    $('.default-tile').removeClass('x-layer');
  };


  // randomly selects player to be x and go first
  var x = setTurn(player1Name, player2Name);
  var o;
  if (x === player1Name) {
    o = player2Name;
  } else {
    o = player1Name;
  }


  // starts # of wins per player at 0
  var player1NameWins = 0;
  var player2NameWins = 0;


  // alerts x to start the game with the first move
  displayAlert(x + ', you are x. Pick a square.');


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
        displayAlert(x + ', pick a square');
      } else {
        displayAlert(o + ', pick a square');
      }
    } else if (checkWinner() === 'x') {
      $('.default-tile').off('click');
      displayAlert(x + ', YOU WON! Click "Play Again" to play the same user or "New Game" to restart.');
    } else if (checkWinner() === 'o') {
      $('.default-tile').off('click');
      displayAlert(o + ', YOU WON! Click "Play Again" to play the same user or "New Game" to restart.');
    } else if (checkWinner() ===  'cats') {
      $('.default-tile').off('click');
      displayAlert('Draw! No Winners! Click "Play Again" to play the same user or "New Game" to restart.');
    }
  });


});







// $('#playComp').on('click', function() {


//   };





// var board = ['', '', '', '', '', '', '', '', ''];

// var compMove = function(layer, token) {

//   // find's the empty tile on the board
//   var indices = [];
//   var element = '';
//   var idx = board.indexOf(element);
//   var emptyTile;
//   while (idx != -1) {
//     indices.push(idx);
//     idx = board.indexOf(element, idx + 1);
//   }



//   if ((board[0] === board[1]) || (board[5] === board[8]) || (board[6] === board[4])) {
//     if (isAvailable($('.tile2')) === false) {
//       // addClass('layer') to an empty tile
//     } else {
//       $('.tile2').addClass('layer');
//       board[2] = token;
//     }
//   } else if ((board[1] === board[2]) || (board[3] === board[6])) {
//     $('.tile0').addClass('layer');
//     board[0] = token;
//   } else if ((board[0] === board[2]) || (board[4] === board[7])) {
//     $('.tile1').addClass('layer');
//     board[1] = token;
//   } else if ((board[3] === board[4]) || (board[2] === board[8])) {
//     $('.tile5').addClass('layer');
//     board[5] = token;
//   } else if ((board[3] === board[5]) || (board[1] === board[7]) || (board[0] === board[8]) || (board[2] === board[6])) {
//     $('.tile4').addClass('layer');
//     board[4] = token;
//   } else if ((board[4] === board[5]) || (board[0] === board[6])) {
//     $('.tile3').addClass('layer');
//     board[3] = token;
//   } else if ((board[6] === board[7]) || (board[0] === board[4]) || (board[2] === board[5])) {
//     $('.tile8').addClass('layer');
//     board[8] = token;
//   } else if ((board[6] === board[8]) || (board[1] === board[4])) {
//     $('.tile7').addClass('layer');
//     board[7] = token;
//   } else if ((board[7] === board[8]) || (board[2] === board[4])) {
//     $('.tile6').addClass('layer');
//     board[6] = token;
//   } else if (board[0] === board[3]) {
//     $('.tile6').addClass('layer');


// };







