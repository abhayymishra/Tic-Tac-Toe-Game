const btns = document.querySelectorAll("#btn");
const result = document.getElementById("result");
console.log(btns);
let xClicked = false;
let gameEnded = false;

btns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function checkForWin() {
  const board = Array.from(btns).map((btn) => btn.textContent);

  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let combo of winningCombo) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameEnded = true;
      result.textContent = `The Winner is ${board[a]}`;
      return;
    }
  }

  if (!board.includes("")) {
    gameEnded = true;
    result.textContent = "It's a tie match";
    return;
  }
}

function handleClick(e) {
  if (!gameEnded && !e.target.textContent) {
    if (!xClicked) {
      e.target.textContent = "X";
      xClicked = true;
    } else {
      e.target.textContent = "O";
      xClicked = false;
    }
    this.removeEventListener("click", handleClick);
    checkForWin();
  }
}
