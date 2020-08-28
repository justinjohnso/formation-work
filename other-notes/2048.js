// https://play2048.co/

// direction: left | up | down | right

function swapAlongDiagonal(board) {
    for ( var i = 0; i < board.length; i++) {
      for (var j = 0; j < i; j++) {
        // swap board[i][j] with board[j][i]
  
        // a, b = b, a
        
        [board[i][j], board[j][i]] = [board[j][i], board[i][j]];
      
      }
    }
    return board;
  }
  
  function applyMove(board, direction) {
    
    if (direction === 'up' || direction === 'down') {
      board = swapAlongDiagonal(board);
    }
    
    if (direction === 'left' || direction === 'up') {
      for (let i = 0; i < board.length; i++) {
        board[i] = updateArr(board[i]);
      }
    } else if (direction === 'right' || direction === 'down') {
      for (let i = 0; i < board.length; i++) {
        board[i] = updateArr(board[i].reverse()).reverse();
      }
    }
    
    if (direction === 'up' || direction === 'down') {
      board = swapAlongDiagonal(board);
    }
    
    return board;
  }
  
  
  printBoard(applyMove(
    [
      [4, 0, 4, 4],
      [2, 2, 2, 2],
      [0, 2, 4, 0],
      [2, 2, 4, 0]
    ],
    'down'
  ));
  
  // let board = [
  //   [4, 0, 4, 4],
  //   [2, 2, 2, 2],
  //   [0, 2, 4, 0],
  //   [2, 2, 4, 0]
  // ]
  
  // printBoard(board)
  // board = swapAlongDiagonal(board)
  // console.log('swap:::');
  // printBoard(board);
  
  // mirror along diagonal:
  // [4, 2, 0, 2]
  // [0, 2, 2, 2]
  // [4, 2, 4, 4]
  // [4, 2, 0, 0]
  
  // updateArr([4, 0, 4, 4]) -> [8, 4, 0, 0]
  // updateArr([0, 2, 0, 0]) -> [2, 0, 0, 0]
  // updateArr([0, 2, 4, 0]) -> [2, 4, 0, 0]
  // updateArr([2, 2, 4, 0]) -> [4, 4, 0, 0]
  
  function updateArr(row) { // alwys fall to the 'left' (lower value indices)
    // const result = row.filter(val => val > 0);
    const result = []; 
    let wasSquished = false;
    
    for (let i = 0; i < row.length; i++){
      if (row[i] !== 0){
        if (result[result.length - 1] == row[i] && !wasSquished){
          wasSquished = true;
          result[result.length - 1] += row[i]
        } else {
          wasSquished = false;
          result.push(row[i])
        }
      }
    }
         
    for (let i = 0; i < 4; i++) {
      if (!result[i]) result[i] = 0;
    }
    
    return result;
  }
  
  function printBoard(board) {
    board.forEach(row => {
      console.log(row.join(' '));
    });
  }