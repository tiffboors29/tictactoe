'use strict';


var board = ['', '', '', '', '', '', '', '', ''];
var count = 0;

var getInput = function() {
  console.log('Please choose a square.');
  return prompt();
};


// randomly selects player to be 'x' and go first
var setTurn = function(player1Name, player2Name) {
  var x;
  var o;
  if (Math.random() < 0.5) {
    x = player1Name;
    o = player2Name;
  } else {
    x = player2Name;
    o = player1Name
  }
  return x, o;
};


// checks if tile is available
var isAvailable = function(index) {
  if ((board[index] === 'x') || (board[index] === 'o')) {
    return false;
  } else {
    return true;
  }
};



// sets move for player x if tile is available
var setX = function(index) {
  if (isAvailable(index) === false) {
      return false;
    } else {
      return board[index] = 'x';
      // $this.addClass('x-layer');
    }
};


// sets move for player o if tile is available
var setO = function(index) {
  if (isAvailable(index) === false) {
      return false;
    } else {
      return board[index] = 'o';
      // $this.addClass('o-layer');
    }
};

// get player x's move
var getMoveX = function(move) {
  return move || getInput();
};

// get player o's move
var getMoveO = function(move) {
  return move || getInput();
};


// checks tiles to determine if there's a winner or cat's game
var checkWinner = function(){
  var winner;
  if ((checkRow() === 'x' ) || (checkCol() === 'x') || (checkDiag() === 'x')) {
    winner = 'x';
    // console.log('winner is x');
    return winner;
  } else if ((checkRow() === 'o' ) || (checkCol() === 'o') || (checkDiag() === 'o')) {
    winner = 'o';
    // console.log('winner is o');
    return winner;
  } else if (count === 9) {
    winner = 'cats';
    // console.log('no winner. cat\'s game');
    return winner;
  } else {
    return false;
  }
};


// checks rows for a winner
var checkRow = function() {
  if ((board[0] === board[1] && board[1] === board[2] && board[2] === 'x') ||
      (board[3] === board[4] && board[4] === board[5] && board[5] === 'x') ||
      (board[6] === board[7] && board[7] === board[8] && board[8] === 'x')) {
      return 'x';
  } else if ((board[0] === board[1] && board[1] === board[2] && board[2] === 'o') ||
              (board[3] === board[4] && board[4] === board[5] && board[5] === 'o') ||
              (board[6] === board[7] && board[7] === board[8] && board[8] === 'o')){
      return 'o';
  } else {
    return false;
  }
};

// checks columns for a winner
var checkCol = function() {
  if ((board[0] === board[3] && board[3] === board[6] && board[6] === 'x') ||
      (board[1] === board[4] && board[4] === board[7] && board[7] === 'x') ||
      (board[2] === board[5] && board[5] === board[8] && board[8] === 'x')) {
    return 'x';
  } else if ((board[0] === board[3] && board[3] === board[6] && board[6] === 'o') ||
              (board[1] === board[4] && board[4] === board[7] && board[7] === 'o') ||
              (board[2] === board[5] && board[5] === board[8] && board[8] === 'o')) {
    return 'o';
  } else {
    return false;
  }
};

// checks diagnals for a winner
var checkDiag = function() {
  if ((board[0] === board[4] && board[4] === board[8] && board[8] === 'x') ||
      (board[2] === board[4] && board[4] === board[6] && board[6] === 'x')) {
    return 'x';
  } else if ((board[0] === board[4] && board[4] === board[8] && board[8] === 'o') ||
            (board[2] === board[4] && board[4] === board[6] && board[6] === 'o')) {
    return 'o';
  } else {
    return false;
  }
};



var playGame = function() {
  console.log('Lets play tic tac toe');
  while (checkWinner() === false) {
    if (count === 0 || (count % 2 === 0)) {
      setX(getMoveX());
      count++;
      checkWinner();
    } else {
      setO(getMoveO());
      count++;
      checkWinner();
    }
  }
};









$('.default-tile').off('click');
    displayAlert(player1 + ', You WON! Click "Play Again" to play again or "New Game" to restart');


 displayAlert('Sorry '+ player1 + ' & ' + player2 + ', Cat\'s Game! Click "Play Again" to pagain or "New Game" to restart');


 displayAlert(player2 + ', pick a square');

// ////// manual modual pattern

// function ...return is only thing accessible

// return {
//   methods
// }


// var glfunc = fucntion() {



//   reutn {
//     a: ___,
//     b: __
//   }
// }

// var x = glfunc();

// x.a();
// x.b();

// var _a = function(){};

// return { a: _a}


// var game = (function(){
//   var _a = (function() {

//   return {
//     a: _a,
//     b: _b
//   };
// });

  // Immediately Invoked Function Expression (iffy) --define and invoke in one swoop
// --return is object we want publicly accessible
// game.a();




// game logic
//   iswinner


// UI
//   show move

