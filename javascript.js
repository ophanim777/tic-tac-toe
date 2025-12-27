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

})();