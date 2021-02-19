let currentPlayer = "X";
let allCells = document.querySelectorAll(".cell");
let start = document.getElementById("start");
let playerTurn = document.getElementById("player-turn");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let timer = document.getElementById("timer");
let timeElapsed;

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
  playerMove(event) {
    //update/check the object
    if (!event.target.textContent) {
      //update the cell & switch players
      if (currentPlayer === "X") {
        event.target.textContent = "X";
        currentPlayer = "O";
        playerTurn.innerHTML = "It's " + player2.value + "'s turn";
        xMoves.push(event.target);
        totalMoves.push(event.target);
        cleanTarget(xMoves);
      } else if (currentPlayer === "O") {
        event.target.textContent = "O";
        currentPlayer = "X";
        playerTurn.innerHTML = "It's " + player1.value + "'s turn";
        oMoves.push(event.target);
        totalMoves.push(event.target);
      }
      checkWin();
    } else alert("You can't play there!");
  },
};

//functions
/*winningCombos = [[cell1, cell2, cell3], [cell4, cell5, cell6]]
//xMoves & oMoves change to array of cell strings 
for (let i=0; i<winningCombos.length; i++) {
  if xMoves.includes(winningCombos[i]) {
    xWin()
  } else if yMoves 
}*/

function checkWin() {
  //check to see if the player has a winning combination
  if (
    xMoves.includes(cell1) &&
    xMoves.includes(cell2) &&
    xMoves.includes(cell3)
  ) {
    cell1.style.backgroundColor = "red";
    cell2.style.backgroundColor = "red";
    cell3.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell4) &&
    xMoves.includes(cell5) &&
    xMoves.includes(cell6)
  ) {
    cell4.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell6.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell7) &&
    xMoves.includes(cell8) &&
    xMoves.includes(cell9)
  ) {
    cell7.style.backgroundColor = "red";
    cell8.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell1) &&
    xMoves.includes(cell4) &&
    xMoves.includes(cell7)
  ) {
    cell1.style.backgroundColor = "red";
    cell4.style.backgroundColor = "red";
    cell7.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell2) &&
    xMoves.includes(cell5) &&
    xMoves.includes(cell8)
  ) {
    cell2.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell8.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell3) &&
    xMoves.includes(cell6) &&
    xMoves.includes(cell9)
  ) {
    cell3.style.backgroundColor = "red";
    cell6.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell1) &&
    xMoves.includes(cell5) &&
    xMoves.includes(cell9)
  ) {
    cell1.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    xMoves.includes(cell3) &&
    xMoves.includes(cell5) &&
    xMoves.includes(cell7)
  ) {
    cell3.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell7.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player1.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell1) &&
    oMoves.includes(cell2) &&
    oMoves.includes(cell3)
  ) {
    cell1.style.backgroundColor = "red";
    cell2.style.backgroundColor = "red";
    cell3.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell4) &&
    oMoves.includes(cell5) &&
    oMoves.includes(cell6)
  ) {
    cell4.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell6.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell7) &&
    oMoves.includes(cell8) &&
    oMoves.includes(cell9)
  ) {
    cell7.style.backgroundColor = "red";
    cell8.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell1) &&
    oMoves.includes(cell4) &&
    oMoves.includes(cell7)
  ) {
    cell1.style.backgroundColor = "red";
    cell4.style.backgroundColor = "red";
    cell7.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell2) &&
    oMoves.includes(cell5) &&
    oMoves.includes(cell8)
  ) {
    cell2.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell8.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell3) &&
    oMoves.includes(cell6) &&
    oMoves.includes(cell9)
  ) {
    cell3.style.backgroundColor = "red";
    cell6.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell1) &&
    oMoves.includes(cell5) &&
    oMoves.includes(cell9)
  ) {
    cell1.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell9.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (
    oMoves.includes(cell3) &&
    oMoves.includes(cell5) &&
    oMoves.includes(cell7)
  ) {
    cell3.style.backgroundColor = "red";
    cell5.style.backgroundColor = "red";
    cell7.style.backgroundColor = "red";
    setTimeout(function () {
      alert(
        `Congratulations, ${player2.value}, you won!!! It took you ${count} seconds!`
      );
    }, 1000);
    clearInterval(timeElapsed);
  } else if (totalMoves.length === 9) {
    alert("No winner :(");
    clearInterval(timeElapsed);
    document.getElementById(
      "play-again"
    ).innerHTML = `<button id="play-another-game" type="submit">Play Again!</button>`;
  }
}

//event handlers

start.addEventListener("click", startFun);

function startFun(event) {
  if (player1.value && player2.value) {
    for (let cell of allCells) {
      cell.addEventListener("click", gameBoard.playerMove);
    }
    playerTurn.style.border = "3px double black"
    playerTurn.innerHTML = "It's " + player1.value + "'s turn!";
    start.disabled = true;
    timeElapsed = setInterval(counter, 1000);
  } else alert("Please enter a name for Player 1 and Player 2!");
}

let count = 0;
let counter = () => {
  timer.textContent = count++;
};

let newXArray = [];
let cleanTarget = (obj) => {
  let item = obj[0];
  let html = item.outerHTML.toString();
  newItem = html.slice(9, 14);
  console.log(newItem);
  newXArray.push(newItem);
  xMoves.shift(obj);
  console.log(newXArray);
  newXArray = Array.from(newXArray)

};

newArray = ["cell1", "cell3", "cell5"]

winnerCombos = [["cell1", "cell2", "cell"], ]