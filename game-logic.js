'use strict';

// // randomly selects player 1 or 2 to go first
// var setTurn = function() {
//   var r = Math.random();
//   if (r > 0.5) {
//     turn = player1;
//   } else {
//     turn = player2;
//   }
//   return turn;
// };

// var tileAvailable = function(tile) {
//   if (tile !== 'x' && tile !== 'o') {
//     return true;
//   }
// };

// var player1Move = function() {
//   $('#alertBox').html('Player 1, pick a box!');
//   $('.default-tile').on('click', function() {
//     if (isAvailableTile($(this))) { // if tile is available
//       $(this).addClass('x-layer');  //calls player1Move   with arguments
//       count++;  //increases count by 1
//       checkWinner();
//       player2Move();
//     }
//   });
// };

// var player2Move = function() {
//   $('#alertBox').html('Player 2, pick a box!');
//   $('.default-tile').on('click', function() {
//     if (isAvailableTile($(this))) { // if tile is available
//       $(this).addClass('o-layer');  //calls player1Move   with arguments
//       count++;        //increases count by 1
//       checkWinner();
//     }
//   });
// };



//   var hasWon = function(move) {
//     if (($('#tile1').hasClass(move) && $('#tile2').hasClass(move) && $('#tile3').hasClass(move)) ||
//         ($('#tile4').hasClass(move) && $('#tile5').hasClass(move) && $('#tile6').hasClass(move)) ||
//         ($('#tile7').hasClass(move) && $('#tile8').hasClass(move) && $('#tile9').hasClass(move)) ||
//         ($('#tile1').hasClass(move) && $('#tile4').hasClass(move) && $('#tile7').hasClass(move)) ||
//         ($('#tile2').hasClass(move) && $('#tile5').hasClass(move) && $('#tile8').hasClass(move)) ||
//         ($('#tile3').hasClass(move) && $('#tile6').hasClass(move) && $('#tile9').hasClass(move)) ||
//         ($('#tile1').hasClass(move) && $('#tile5').hasClass(move) && $('#tile9').hasClass(move)) ||
//         ($('#tile3').hasClass(move) && $('#tile5').hasClass(move) && $('#tile7').hasClass(move))) {
//       return true;
//     }
//   };

//   var checkWinner = function() {
//     if (count < 5) {
//       return;
//     }
//     if (hasWon('x-layer')) {
//       xWins();
//     } else if (hasWon('o-layer')) {
//       oWins();
//     } else if (count === 9) {
//       cats();
//     }
//   };

//   var xWins = function() {
//     $('#alertBox').html('Player 1 Wins!');
//     reset();
//   };

//   var oWins = function() {
//     $('#alertBox').html('Player 2 Wins!');
//     reset();
//   };

//   var cats = function() {
//     $('#alertBox').html('Cat\'s Game. No Winners!');
//     reset();
//   };





// // sets tile values back to empty strings
// var clearBoard = function() {
//   tileA = "";
//   tileB = "";
//   tileC = "";
//   tileD = "";
//   tileE = "";
//   tileF = "";
//   tileG = "";
//   tileH = "";
//   tileI = "";
//   xWin = 0;
//   oWin = 0;
//   newGame();
// };
