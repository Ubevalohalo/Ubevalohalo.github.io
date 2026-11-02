/*
function ticTacToeGame(){
  //this function makes the grid--------------------------------------------------------------------
  const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
  ];
  const matrix = '';
  function drawBoard(matrix) {
    //matrix is just the board rows. this loops through every row in the board, index 0, 1, 2
    matrix.forEach((row, index) => {
      // Join items with a vertical pipe divider
      console.log(` ${row.join(' | ')} `);
      
      // Print a horizontal separator between rows (but not after the last row)
      if (index < matrix.length - 1) {
        console.log('-----------');
      }
    });
    return matrix;
  }

  //end grid function--------------------------------------------------------------------


  //this is how you access each cell
  // console.log(board[2][2]);
  // console.log(board.length);


  //function to assign a number value to each cell--------------------------------------------------------------------
  function assignCellNumbers(board){
    let cellNumber = 0;
    for (let r = 0; r < board.length; r++){
      for (let c = 0; c < board[r].length; c++){
        cellNumber++
        // console.log('cell ' + cellNumber);
      }
    }
  }
assignCellNumbers(board);
  //end cell identification function--------------------------------------------------------------------


  //function to manipulate cell contents
  function placeMark(cellNumber, mark) {
    const row = Math.floor((cellNumber - 1) / 3);
    const col = (cellNumber - 1) % 3;
    board[row][col] = mark;
  }
placeMark(5, 'X');
  //end of the entire game
drawBoard(board);
}

ticTacToeGame();



*/
/*terminal nodes
  1: put this in the terminal to get in the right folder
    cd portfolioProjects\ticTacToe
  2: run the file 
    node TTT.js
  3. 

*/



//this gets the input from the terminal
const realine = require("node:readline");

//variables to keep track of
let isXturn = true;
const board = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

//get input from user
const r1 = readline.createInterface({
  input: process.stdin, //this meanas the input is coming from the keyboard
  output: process.stdout //the information comes out in the terminal
});

//when the code starts
start();
async function start(){ //async because we need to wait for the user input
  while(true){
    drawboard();
  }
}
function drawboard(){
  console.clear();
  console.log("\n-------------");

  for (let i in board){
    if (i > 0 && i % 3 == 0){
      console.log("\n-------------");
    }
    const n = board[i];
    if (i % 3 !=0) process.stdout.write(" |");
    else process.stdout.write("|");
    process.stdout.write(` ${n}`);
  }

  conesole.log("\n-------------\n");

}