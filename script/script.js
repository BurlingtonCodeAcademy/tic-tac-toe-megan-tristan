//variables
let currentPlayer = "X";
let allCells = document.querySelectorAll(".cell");
let otherPlayer = "";
let start = document.getElementById("start");

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

let xMoves =[]
let oMoves = []
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
        xMoves.push(event.target)
        console.log(xMoves)
      } else if (currentPlayer === "O") {
        event.target.textContent = "O";
        currentPlayer = "X";
      }
      console.log(event.target);
    } else alert("You can't play there!");
}
};
//event handlers

start.addEventListener("click", startFun);


function startFun(event) {
  for (let cell of allCells) {
    cell.addEventListener("click", gameBoard.playerMove);
  }
  start.disabled = true;
}
