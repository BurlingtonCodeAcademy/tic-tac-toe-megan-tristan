let currentPlayer = "X";
let allCells = document.querySelectorAll(".cell");
let otherPlayer = "";
let start = document.getElementById("start");
let playerTurn = document.getElementById("player-turn");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");
let currentCell;
//player moves array
let xMoves = [];
let oMoves = [];
//total player moves array
let totalMoves = [];
//board object//
let gameBoard = {
  cell1: "X",
  cell2: "",
  cell3: "",
  cell4: "",
  cell5: "",
  cell6: "",
  cell7: "",
  cell8: "",
  cell9: "",
  playerMove(event) {
    //update/check the object
    if (!event.target.textContent) {
      //update the cell & switch players
      if (currentPlayer === "X") {
        event.target.textContent = "X";
        currentPlayer = "O";
        playerTurn.innerHTML = player2.value;
        xMoves.push(event.target)
      } else if (currentPlayer === "O") {
        event.target.textContent = "O";
        currentPlayer = "X";
        playerTurn.innerHTML = player1.value;
        oMoves.push(event.target)
      }
      checkWin();

      console.log(event.target);
    } else alert("You can't play there!");
  },
}

//functions

function checkWin() {
  //check to see if the player has a winning combination
  if (
    (xMoves.includes(cell1) &&
      xMoves.includes(cell2) &&
      xMoves.includes(cell3)) ||
    (xMoves.includes(cell4) &&
      xMoves.includes(cell5) &&
      xMoves.includes(cell6)) ||
    (xMoves.includes(cell7) &&
      xMoves.includes(cell8) &&
      xMoves.includes(cell9)) ||
    (xMoves.includes(cell1) &&
      xMoves.includes(cell4) &&
      xMoves.includes(cell7)) ||
    (xMoves.includes(cell2) &&
      xMoves.includes(cell5) &&
      xMoves.includes(cell8)) ||
    (xMoves.includes(cell3) &&
      xMoves.includes(cell6) &&
      xMoves.includes(cell9)) ||
    (xMoves.includes(cell1) &&
      xMoves.includes(cell5) &&
      xMoves.includes(cell9)) ||
    (xMoves.includes(cell3) && xMoves.includes(cell5) && xMoves.includes(cell7))
  ) {
    alert("Congratulations, " + player1.value + ", you won!!!");
  } else if (
    (oMoves.includes(cell1) &&
      oMoves.includes(cell2) &&
      oMoves.includes(cell3)) ||
    (oMoves.includes(cell4) &&
      oMoves.includes(cell5) &&
      oMoves.includes(cell6)) ||
    (oMoves.includes(cell7) &&
      oMoves.includes(cell8) &&
      oMoves.includes(cell9)) ||
    (oMoves.includes(cell1) &&
      oMoves.includes(cell4) &&
      oMoves.includes(cell7)) ||
    (oMoves.includes(cell2) &&
      oMoves.includes(cell5) &&
      oMoves.includes(cell8)) ||
    (oMoves.includes(cell3) &&
      oMoves.includes(cell6) &&
      oMoves.includes(cell9)) ||
    (oMoves.includes(cell1) &&
      oMoves.includes(cell5) &&
      oMoves.includes(cell9)) ||
    (oMoves.includes(cell3) && xMoves.includes(cell5) && xMoves.includes(cell7))
  ) {
    alert("Congratulations, " + player2.value + ", you won!!!");;
  } else if (totalMoves.length === 9) {
    alert('No winner :(');
  }
}

//event handlers

start.addEventListener("click", startFun);

function startFun(event) {
  for (let cell of allCells) {
    cell.addEventListener("click", gameBoard.playerMove);
    playerTurn.innerHTML = player1.value; 
  }
  start.disabled = true;
  console.log(player1.value);
  console.log(player2.value)
}
