function ticTacToeGame(){
  //this function makes the grid--------------------------------------------------------------------
  const board = [
  [' ', ' ', 'O'],
  [' ', ' ', ' '],
  [' ', 'X', ' ']
  ];

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
  // console.log(board[2][1]);
  // console.log(board[0][2]);
  //function to assign a number value to each cell--------------------------------------------------------------------
  function assignCellNumbers(){
    for (let boardRow = 0; boardRow < board; boardRow++){
      for (let cell = 0; cell < matrix; cell++){
        let cellNumber = cell++;
        console.log(cellNumber);
      }
    }
  }
assignCellNumbers();


  //end cell identification function--------------------------------------------------------------------
}
ticTacToeGame();