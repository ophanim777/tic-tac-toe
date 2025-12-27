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

})();