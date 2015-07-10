'use strict';


var board = ['', '', '', '', '', '', '', '', ''];
var count = 0;



var getInput = function(player) {
  console.log(player + ', please choose a square.');
  return prompt();
};

var getPlayer1Name = function() {
    console.log('Player 1, what is your name?');
    var player1Name = prompt();
    return player1Name;
};

var getPlayer2Name = function() {
    console.log('Player 2, what is your name?');
    var player2Name = prompt();
    return player2Name;
};

// randomly selects player to be 'x' and go first
var setTurn = function(player1Name, player2Name) {
  var x;
  if (Math.random() < 0.5) {
    x = player1Name;
  } else {
    x = player2Name;
  }
  return x;
};


// checks if tile is available
var isAvailable = function(index) {
  if ((board[index] === 'x') || (board[index] === 'o')) {
    console.log('That square is taken, please choose another.');
    return false;
  } else {
    return true;
  }
};



// sets move for player x if tile is available
var setX = function(index) {
    return board[index] = 'x';
};


// sets move for player o if tile is available
var setO = function(index) {
    return board[index] = 'o';
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
    console.log('winner is x');
    return winner;
  } else if ((checkRow() === 'o' ) || (checkCol() === 'o') || (checkDiag() === 'o')) {
    winner = 'o';
    console.log('winner is o');
    return winner;
  } else if (count === 9) {
    winner = 'cats';
    console.log('no winner. cat\'s game');
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


// used when playing in console only
var playGame = function() {
  console.log('Lets play tic tac toe');
  var player1Name = getPlayer1Name();
  var player2Name = getPlayer2Name();
  var x;
  var o;
  if ((setTurn(player1Name, player2Name)) === player1Name) {
      x = player1Name;
      o = player2Name;
  } else {
      x = player2Name;
      o = player1Name;
  }
  while (checkWinner() === false) {
    if (count === 0 || (count % 2 === 0)) {
      var move = getInput(x);
      if (isAvailable(move) === true) {
        setX(move);
        console.log(board);
        count++;
        checkWinner();
      }
    } else {
      var move = getInput(o);
      if (isAvailable(move) === true) {
        setO(move);
        console.log(board);
        count++;
        checkWinner();
      }
    }
  }
};







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

