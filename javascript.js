const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const getBoard = () => board;
  const placeMark = (index, mark) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  };
  const resetBoard = () => {
  board = ["", "", "", "", "", "", "", "", ""];
};
  return { getBoard, placeMark, resetBoard };

})();

const Player = (name, mark) => {
  return { name, mark };
};

const GameController = (() => {
    let player1 = Player("Player 1", "X");
    let player2 = Player("Player 2", "O");
    let currentPlayer = player1;
    let gameOver = false;
    
    const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

const switchPlayer = () => {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
};

const checkWinner = () => {
    const board = Gameboard.getBoard();
    return winningCombos.some(combo =>
      combo.every(index => board[index] === currentPlayer.mark)
    );
  };

})();