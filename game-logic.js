'use strict';



// var player1;
// var player2;
// var turn;
// var tileA, tileB, tileC, tileD, tileE, tileF, tileG, tileH, tileI;


// var setTurn = function() {  // randomly selects player 1 or 2 to go first
//   var r = Math.random();
//   if (r > 0.5) {
//     turn = player1;
//   } else {
//     turn = player2;
//   }
//   return turn;
// };


// var playGame = function() {
//   while ( ($('#tileA').html !== 'x' || 'o') &&
//           ($('#tileB').html !== 'x' || 'o') &&
//           ($('#tileC').html !== 'x' || 'o') &&
//           ($('#tileD').html !== 'x' || 'o') &&
//           ($('#tileE').html !== 'x' || 'o') &&
//           ($('#tileF').html !== 'x' || 'o') &&
//           ($('#tileG').html !== 'x' || 'o') &&
//           ($('#tileH').html !== 'x' || 'o') &&
//           ($('#tileI').html !== 'x' || 'o')  ) {
//     setTurn();
//     if (turn === player1) {
//       getPlayer1Move();
//     } else {
//       getPlayer2Move();
//   }
//   }
// };


// var getPlayer1Move = function() {
//   $('#alertBox').html('Player 1, click on the square you want to play.');

//   if ( $('#tileA').click) {
//     $('#tileA').addClass('x-layer');
//     tileA = 'x';
//   } else if ($('#tileB').click) {
//     $('#tileB').addClass('x-layer');
//     tileB = 'x';
//   } else if ($('#tileC').click) {
//     $('#tileC').addClass('x-layer');
//     tileC = 'x';
//   } else if ($('#tileD').click) {
//     $('#tileD').addClass('x-layer');
//     tileD = 'x';
//   } else if ($('#tileE').click) {
//     $('#tileE').addClass('x-layer');
//     tileE = 'x';
//   } else if ($('#tileF').click) {
//     $('#tileF').addClass('x-layer');
//     tileF = 'x';
//   } else if ($('#tileG').click) {
//     $('#tileG').addClass('x-layer');
//     tileG = 'x';
//   } else if ($('#tileH').click) {
//     $('#tileH').addClass('x-layer');
//     tileH = 'x';
//   } else if ($('#tileI').click) {
//     $('#tileI').addClass('x-layer');
//     tileI = 'x';
//   }
// };

// var getPlayer2Move = function() {
//   $('#alertBox').html('Player 2, click on the square you want to play.');

//   if ( $('#tileA').click) {
//     $('#tileA').addClass('o-layer');
//   } else if ($('#tileB').click) {
//     $('#tileB').addClass('o-layer');
//   } else if ($('#tileC').click) {
//     $('#tileC').addClass('o-layer');
//   } else if ($('#tileD').click) {
//     $('#tileD').addClass('o-layer');
//   } else if ($('#tileE').click) {
//     $('#tileE').addClass('o-layer');
//   } else if ($('#tileF').click) {
//     $('#tileF').addClass('o-layer');
//   } else if ($('#tileG').click) {
//     $('#tileG').addClass('o-layer');
//   } else if ($('#tileH').click) {
//     $('#tileH').addClass('o-layer');
//   } else if ($('#tileI').click) {
//     $('#tileI').addClass('o-layer');
//   }
// };






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





// var getWin = function() {
//   var xWins;
//   var oWins;
//   if (tileA === tileB === tileC === 'x' ||  // first row
//       tileD === tileE === tileF === 'x' ||  // second row
//       tileG === tileH === tileI === 'x' ||  // third row
//       tileA === tileD === tileG === 'x' ||  // first column
//       tileB === tileE === tileH === 'x' ||  // second column
//       tileC === tileF === tileI === 'x' ||  // last column
//       tileA === tileE === tileI === 'x' ||  // diagnal R-L
//       tileG === tileE === tileC === 'x' ||) { //diagnal L-R
//     xWin += 1;
//     console.log("Player 1 wins!");
//     clearBoard();
//     } else if (tileA === tileB === tileC === 'o' ||  // first row
//       tileD === tileE === tileF === 'o' ||  // second row
//       tileG === tileH === tileI === 'o' ||  // third row
//       tileA === tileD === tileG === 'o' ||  // first column
//       tileB === tileE === tileH === 'o' ||  // second column
//       tileC === tileF === tileI === 'o' ||  // last column
//       tileA === tileE === tileI === 'o' ||  // diagnal R-L
//       tileG === tileE === tileC === 'o' ||) { //diagnal L-R
//     oWin += 1;
//     console.log("Player 2 wins!");
//     clearBoard();
//     } else if (a !== null && b !== null && c !== null && // if all tiles are filled
//       d !== null && e !== null && f !== null && // but there are no winners
//       g !== null && h !== null && i !== null) { // it's a cat's game
//     console.log("Cat\'s Game. No Winners!")
//   }
// };



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



