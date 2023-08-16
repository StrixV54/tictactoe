let playerSymbol = "X";
let gameEnded = false;

function reset() {
  playerSymbol = "X";
  location.reload();
}

// document.getElementById("reset").addEventListener("click", function () {
//   playerSymbol = "X";
//   location.reload();
// });

function play() {
  let winPos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).addEventListener("click", checkBlock);
  }

  function checkBlock() {
    if (this.innerHTML === "" && !gameEnded) {
      this.innerHTML = playerSymbol;
      this.classList.add(playerSymbol.toLowerCase());
      // this.innerHTML = playerSymbol.toLowerCase();
    }
    checkWin();
    playerSymbol = playerSymbol === "X" ? "O" : "X";
    document.getElementById("turn").innerHTML = "Turn: Player-" + playerSymbol;
  }

  function checkWin() {
    for (let i = 0; i < winPos.length; i++) {
      if (
        document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][2]).innerHTML === playerSymbol
      ) {
        document.getElementById(winPos[i][0]).classList.add("win");
        document.getElementById(winPos[i][1]).classList.add("win");
        document.getElementById(winPos[i][2]).classList.add("win");
        gameEnded = true;

        setTimeout(function () {
          alert(playerSymbol + " wins!");
        }, 500);
        setTimeout(function () {
          reset();
        }, 1000);
      }
    }
  }
}

play();
