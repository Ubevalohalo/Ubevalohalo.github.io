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
  while(true) {
    drawboard();
    //checks for which turn it is. player is X if isXturn is true, otherwise player is O
    const player = isXturn ? "X" : "O";
    //get input from user
    let input;//this stores the input once we validate it
    const val = await new Promise ((resolve) => 
      //this sends out a prompt for the user
      r1.question(`It's ${player}'s turn. \n Enter a number (1-9) or type q to quit.`
      )
    );
    if (val == 'q') process.exit(); //this ends the program if the user types q
    //check value input is valid
    if (isNaN(val) || Number(val) < 1 || Number(val) > 9){
      console.log("WRONG!! Enter a number between 1 and 9.");
      continue;
  } else {
      input = Number(val) - 1;
  }
    //make sure that the cell is not already taken
    if (board[input] === "X" || board[input] === "Y") continue;
    board[input] = player; //this puts the player's mark in the cell

    if (isWinner(input)){
      //if true then yes winner, if not then switch turns
    }
    isXturn = !isXturn; //this switches turns
  }
}

//check for a winner
function isWinner(current, vec = [0,0], count = 1){
//current is where we are at now on the board
//vector is what direction we are going to check 
//count is how many before we run into x
  const x = current % 3;
  const y = Math.floor(current / 3);
  const boardIndex = (y + vec[1]) * 3 + (x + vec[0]);
  if (boardIndex < 0 || boardIndex > 8) return false; //if we are out of bounds
  if (board[boardIndex] == current){
    //try left up 
    if (isWinner(current, [-1, -1], count)) return true;
    //try up 
    if (isWinner(current, [ 0, -1], count)) return true;
    //try right up 
    if (isWinner(current, [ 1, -1], count)) return true;
    //try left
    if (isWinner(current, [-1,  0], count)) return true; 
    //try right
    if (isWinner(current, [1,  0], count)) return true; 
    //try left down
    if (isWinner(current, [-1,  1], count)) return true; 
    //try down
    if (isWinner(current, [0,  1], count)) return true; 
    //try right down
    if (isWinner(current, [1,  1], count)) return true; 
  } else {
    if (board[boardIndex] == board[current]) {
      
    }
  }










//this draws the board
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

  console.log("\n-------------\n");

}

