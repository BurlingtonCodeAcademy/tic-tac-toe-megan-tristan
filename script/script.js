//variable definition
let currentPlayer = "X";
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
//buttons 
let start = document.getElementById("start");
//status elements to display
let playerTurn = document.getElementById("player-turn");
let timer = document.getElementById("timer");
let timeElapsed;
//define cells 
let allCells = document.querySelectorAll(".cell");
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
    //check to see if there is content in the cell already 
    if (!event.target.textContent) {
      //update the cell & switch players
      if (currentPlayer === "X") {
        event.target.textContent = "X";
        //switch players 
        currentPlayer = "O";
        playerTurn.innerHTML = "It's " + player2.value + "'s turn";
        //add this move to the player's array
        let item = event.target;
        let html = item.outerHTML.toString();
        newItem = html.slice(9, 14);
        xMoves.push(newItem);
        console.log(xMoves); 
        //add it to the total moves
        totalMoves.push(event.target);
        //function 
      } else if (currentPlayer === "O") {
        event.target.textContent = "O";
        //switch players 
        currentPlayer = "X";
        playerTurn.innerHTML = "It's " + player1.value + "'s turn";
        //add this move to the player's array
        let item = event.target;
        let html = item.outerHTML.toString();
        newItem = html.slice(9, 14);
        oMoves.push(newItem);
        //add it to the total moves
        totalMoves.push(event.target);
        //function 
      }
      checkWin();
      //ask player to play somewhere else 
    } else alert("You can't play there!");
  },
};

function checkWin() {
  //check to see if the player has a winning combination - if they do, then highlight the winning cells, set an alert, and stop the timer
  if (
    xMoves.includes("cell1") &&
    xMoves.includes("cell2") &&
    xMoves.includes("cell3")
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
    xMoves.includes("cell4") &&
    xMoves.includes("cell5") &&
    xMoves.includes("cell6")
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
    xMoves.includes("cell7") &&
    xMoves.includes("cell8") &&
    xMoves.includes("cell9")
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
    xMoves.includes("cell1") &&
    xMoves.includes("cell4") &&
    xMoves.includes("cell7")
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
    xMoves.includes("cell2") &&
    xMoves.includes("cell5") &&
    xMoves.includes("cell8")
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
    xMoves.includes("cell3") &&
    xMoves.includes("cell6") &&
    xMoves.includes("cell9")
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
    xMoves.includes("cell1") &&
    xMoves.includes("cell5") &&
    xMoves.includes("cell9")
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
    xMoves.includes("cell3") &&
    xMoves.includes("cell5") &&
    xMoves.includes("cell7")
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
    oMoves.includes("cell1") &&
    oMoves.includes("cell2") &&
    oMoves.includes("cell3")
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
    oMoves.includes("cell4") &&
    oMoves.includes("cell5") &&
    oMoves.includes("cell6")
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
    oMoves.includes("cell7") &&
    oMoves.includes("cell8") &&
    oMoves.includes("cell9")
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
    oMoves.includes("cell1") &&
    oMoves.includes("cell4") &&
    oMoves.includes("cell7")
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
    oMoves.includes("cell2") &&
    oMoves.includes("cell5") &&
    oMoves.includes("cell8")
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
    oMoves.includes("cell3") &&
    oMoves.includes("cell6") &&
    oMoves.includes("cell9")
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
    oMoves.includes("cell1") &&
    oMoves.includes("cell5") &&
    oMoves.includes("cell9")
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
    oMoves.includes("cell3") &&
    oMoves.includes("cell5") &&
    oMoves.includes("cell7")
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
  }
}
//start the game 
function startFun(event) {
  if (player1.value && player2.value) {
    //turn each cell into a clickable cell
    for (let cell of allCells) {
      cell.addEventListener("click", gameBoard.playerMove);
    }
    //display whose turn it is
    playerTurn.style.border = "3px double black"
    playerTurn.innerHTML = "It's " + player1.value + "'s turn!";
    //disable the start button 
    start.disabled = true;
    //start the timer 
    timeElapsed = setInterval(counter, 1000);
  } else alert("Please enter a name for Player 1 and Player 2!");
}
let count = 0; 
let counter = () => {
  timer.textContent = count++;	  
  timer.textContent = count++;
};

//event handlers

//make the start button start the game 
start.addEventListener("click", startFun);

