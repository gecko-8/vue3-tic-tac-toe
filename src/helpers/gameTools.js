const States = {
  NONE: 'none',
  X: 'x',
  O: 'o'
}

const getCleanGame = () => {
  return {
    currentPlayer: States.X,
    complete: false,
    winner: States.NONE,
    winnerCells: null,
    moves: 0,
    board: [
      [States.NONE, States.NONE, States.NONE],
      [States.NONE, States.NONE, States.NONE],
      [States.NONE, States.NONE, States.NONE]
    ]
  };
}

const cloneGame = (game) => {
  return  {
    ...game,
    board: [[...game.board[0]], [...game.board[1]], [...game.board[2]]]
  }
}

const getWinnerArray = (winners) => {
  let results = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ];

  winners.forEach(winner => {
    results[winner.x][winner.y] = true;
  });

  return results;
 }

const testPlayerWin = (board, player) => {
  if (board[0][0] === player && board[0][1] === player && board[0][2] === player)
    return [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }];
  if (board[1][0] === player && board[1][1] === player && board[1][2] === player)
    return [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }];
  if (board[2][0] === player && board[2][1] === player && board[2][2] === player)
    return [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }];
  if (board[0][0] === player && board[1][0] === player && board[2][0] === player)
    return [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }];
  if (board[0][1] === player && board[1][1] === player && board[2][1] === player)
    return [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }];
  if (board[0][2] === player && board[1][2] === player && board[2][2] === player)
    return [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }];
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player)
    return [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }];
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player)
    return [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }];

  return null;
}

const testGameComplete = (game) => {
  // Test for a win state
  const testX = testPlayerWin(game.board, States.X);
  if (testX)
    return { winner: States.X, winnerCells: getWinnerArray(testX) };

  const testO = testPlayerWin(game.board, States.O);
  if (testO)
    return { winner: States.O, winnerCells: getWinnerArray(testO) };

  // Test for the scratch case
  if (game.moves === 9)
    return { winner: null, winnerCells: [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]};
    
  return null;
}

export {
  States,
  getCleanGame,
  cloneGame,
  testGameComplete
}