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
  drawBoard(board);
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
        console.log('cell ' + cellNumber);
      }
    }
  }
assignCellNumbers(board);

  //end cell identification function--------------------------------------------------------------------



  //end of the entire game
}
ticTacToeGame();
/*terminal nodes
  1: put this in the terminal to get in the right folder
    cd portfolioProjects\ticTacToe
  2: run the file 
    node TTT.js
  3. 

*/