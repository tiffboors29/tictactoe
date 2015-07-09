'use strict';

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



// sets move for player x if tile is available
var moveX = function($this, x, o) {
  if (isAvailable($(this)) === false) {
      displayAlert(x + ', that square is taken. Choose another.');
    } else {
      $this.addClass('x-layer');
    }
};


// sets move for player o if tile is available
var moveO = function($this, x, o) {
  if (isAvailable($(this)) === false) {
      displayAlert(o + ', that square is taken. Choose another.');
    } else {
      $this.addClass('o-layer');
    }
};



// checks tiles to determine if there's a winner; alerts if cat's game or players should continue
var checkWinner = function(count, layer, player1, player2) {
  var winStatus;
  if (($('.tile0').hasClass(layer) && $('.tile1').hasClass(layer) && $('.tile2').hasClass(layer)) || // 1st row
      ($('.tile3').hasClass(layer) && $('.tile4').hasClass(layer) && $('.tile5').hasClass(layer)) || // 2nd row
      ($('.tile6').hasClass(layer) && $('.tile7').hasClass(layer) && $('.tile8').hasClass(layer)) || // 3rd row
      ($('.tile0').hasClass(layer) && $('.tile3').hasClass(layer) && $('.tile6').hasClass(layer)) || // 1st col
      ($('.tile1').hasClass(layer) && $('.tile4').hasClass(layer) && $('.tile7').hasClass(layer)) || // 2nd col
      ($('.tile2').hasClass(layer) && $('.tile5').hasClass(layer) && $('.tile8').hasClass(layer)) || // 3rd col
      ($('.tile0').hasClass(layer) && $('.tile4').hasClass(layer) && $('.tile8').hasClass(layer)) || // diag L-R
      ($('.tile2').hasClass(layer) && $('.tile4').hasClass(layer) && $('.tile6').hasClass(layer))) { // diag R-L
    $('.default-tile').off('click');
    displayAlert(player1 + ', You WON! Click "Play Again" to play again or "New Game" to restart');
    winStatus = true;
  } else if (count === 9) {
      displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game! Click "Play Again" to pagain or "New Game" to restart');
  } else if (count < 9) {
    displayAlert(player2 + ', pick a square');
  } return winStatus;
};




