const isWin = (board, symbol) => {
  return board[0].every((cell) => cell === symbol);
};

export const gameStatus = (board) => {
  if (isWin(board, "X")) {
    return "X";
  }
  if (isWin(board, "O")) {
    return "O";
  }
};
