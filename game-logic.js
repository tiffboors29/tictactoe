'use strict';

// var setTurn = function(player1Name, player2Name) {
//     var x;
//     var o;
//     if (Math.random() < 0.5) {
//       x = player1Name;
//     } else {
//       x = player2Name;
//     }
//     return x;
//   };

//   // checks if tile is available
//   var isAvailable = function(tile) {
//     if (tile.hasClass('x-layer') || tile.hasClass('o-layer')) {
//       return false;
//     } else {
//       return true;
//     }
//   };



$(document).ready(function() {

  // randomly selects player to be 'x' and go first
  var setTurn = function(player1Name, player2Name) {
    var x;
    var o;
    if (Math.random() < 0.5) {
      x = player1Name;
    } else {
      x = player2Name;
    }
    return x;
  };

  // checks if tile is available
  var isAvailable = function(tile) {
    if (tile.hasClass('x-layer') || tile.hasClass('o-layer')) {
      return false;
    } else {
      return true;
    }
  };

  var x = setTurn(player1Name, player2Name);
  var o;
  if (x === player1Name) {
    o = player2Name;
  } else {
    o = player1Name;
  }

});
