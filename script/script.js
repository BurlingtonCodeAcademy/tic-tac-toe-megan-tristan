//Need to fix For Loop

//---------------------variable definition-----------------------------//
let currentPlayer = "X";
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

//buttons
let start = document.getElementById("start");
let playerWrapper = document.getElementById("player-wrapper");
let playerButt = document.getElementById("player-butt");
let computerButt = document.getElementById("computer-butt");
let reset = document.getElementById("reset");

//form display
let collapseForm = document.getElementById("form-wrapper");
let p2Comp = document.getElementById("p2Comp");

//status elements to display
let playerTurn = document.getElementById("player-turn");
let timer = document.getElementById("timer");
let timeElapsed;
let credit = document.getElementById("credit");
//timer elements
let hundredthSec = document.getElementById("hundredth-sec");
let seconds = document.getElementById("seconds");
let minutes = document.getElementById("minutes");

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

//look up table to translate from string to variable
let cellKey = {
  cell1: cell1,
  cell2: cell2,
  cell3: cell3,
  cell4: cell4,
  cell5: cell5,
  cell6: cell6,
  cell7: cell7,
  cell8: cell8,
  cell9: cell9,
};
//array for each player to record their moves
let xMoves = [];
let oMoves = [];

//total player moves array
let totalMoves = [];

//---------------------board object-----------------------------//
let gameBoard = {
  //player vs. player game
  playerMove(event) {
    //check to see if there is content in the cell already
    if (!event.target.textContent) {
      if (currentPlayer === "X") {
        //update the cell
        event.target.textContent = "X";
        //switch players
        currentPlayer = "O";
        //display whose turn it is
        playerTurn.innerHTML = "It's " + player2.value + "'s turn";
        //clean up & add this move to the player's array
        let item = event.target;
        item = item.outerHTML.toString();
        item = item.slice(9, 14);
        xMoves.push(item);
        //add it to the total moves
        totalMoves.push(event.target);
        //function
      } else if (currentPlayer === "O") {
        //update the cell
        event.target.textContent = "O";
        //switch players
        currentPlayer = "X";
        playerTurn.innerHTML = "It's " + player1.value + "'s turn";
        //add this move to the player's array
        let item = event.target;
        item = item.outerHTML.toString();
        item = item.slice(9, 14);
        oMoves.push(item);
        //add it to the total moves
        totalMoves.push(event.target);
        //function
      }
      checkWin();
      //ask player to play somewhere else if there is already something in the cell
    } else alert("You can't play there!");
  },

  //player vs. computer game
  computerMove(event) {
    //human goes first/is Player X
    if (currentPlayer === "X") {
      //only allow to put X in cell if it's empty
      if (!event.target.textContent) {
        //update cell
        event.target.textContent = "X";
        //switch players
        currentPlayer = "O";
        playerTurn.innerHTML = "It's the " + player2.value + "'s turn";
        //clean up & add this move to the player's array
        let item = event.target;
        item = item.outerHTML.toString();
        item = item.slice(9, 14);
        xMoves.push(item);
        //add it to the total moves
        totalMoves.push(event.target);
        //check to see if there is a winning combo
        checkWin();
        //trigger computer move
        setTimeout(function () {
          gameBoard.computerMove(event);
        }, 1500);
      }
      //ask player to play somewhere else if the cell is not empty
      else alert("You can't play there!");
    } else if (currentPlayer === "O") {
      //choose a random number between 0 and 8
      let cellNum = Math.floor(Math.random() * 9);
      //turn this into an index to randomly select a cell for computer to play in
      let compChoice = allCells[cellNum];
      //only fill in the cell if it is "false" because it's empty
      if (!compChoice.textContent) {
        compChoice.textContent = "O";
        //switch players
        currentPlayer = "X";
        playerTurn.innerHTML = "It's " + player1.value + "'s turn";
        //clean up & add this move to the player's array
        let item = compChoice;
        item = item.outerHTML.toString();
        item = item.slice(9, 14);
        oMoves.push(item);
        //add it to the total moves
        totalMoves.push(event.target);
        //check to see if there is a winning combo
        checkWin();
        //if there is already something in the cell, trigger the computer choice function again
      } else if (compChoice.textContent) {
        gameBoard.computerMove(event);
      }
    }
  },
};

//all the winning combos
let winningArrays = [
  ["cell1", "cell2", "cell3"],
  ["cell4", "cell5", "cell6"],
  ["cell7", "cell8", "cell9"],
  ["cell1", "cell4", "cell7"],
  ["cell2", "cell5", "cell8"],
  ["cell3", "cell6", "cell9"],
  ["cell1", "cell5", "cell9"],
  ["cell3", "cell5", "cell7"],
];

function checkWin() {
  //check to see if the player has a winning combination - if they do, then highlight the winning cells, set an alert, and stop the timer
  //loop through the arrays
  for (let i = 0; i < winningArrays.length; i++) {
    //check to see if array of player X's moves has a winning array by looping through each sub-array
    if (
      xMoves.includes(winningArrays[i][0].toString()) &&
      xMoves.includes(winningArrays[i][1].toString()) &&
      xMoves.includes(winningArrays[i][2].toString())
    ) {
      //identify which were the winning cells
      let winningCell1 = winningArrays[i][0];
      let winningCell2 = winningArrays[i][1];
      let winningCell3 = winningArrays[i][2];
      //change color of winning cells
      cellKey[winningCell1].style.backgroundColor = "red";
      cellKey[winningCell2].style.backgroundColor = "red";
      cellKey[winningCell3].style.backgroundColor = "red";
      //message if player won in less than a minute
      if (minutes.innerHTML == 00) {
        playerTurn.textContent = `Congratulations, ${player1.value}, you won!!! It took you ${seconds.innerHTML} seconds!`;

        //message if player won in over a minute
      } else if (minutes.innerHTML !== 0) {
        playerTurn.textContent = `Congratulations, ${player1.value}, you won!!! It took you ${minutes.innerHTML} minutes and ${seconds.innerHTML} seconds!`;
      }
      //stop the timer and show reset button
      clearInterval(timeElapsed);
      credit.style.display = "block";
      reset.style.display = "block";
    }
    //check to see if array of player O's moves has a winning array by looping through
    else if (
      //check to see if array of player O's moves has a winning array by looping through each sub-array
      oMoves.includes(winningArrays[i][0].toString()) &&
      oMoves.includes(winningArrays[i][1].toString()) &&
      oMoves.includes(winningArrays[i][2].toString())
    ) {
      //identify winning cells
      let winningCell1 = winningArrays[i][0];
      let winningCell2 = winningArrays[i][1];
      let winningCell3 = winningArrays[i][2];
      //change color of winning cells
      cellKey[winningCell1].style.backgroundColor = "red";
      cellKey[winningCell2].style.backgroundColor = "red";
      cellKey[winningCell3].style.backgroundColor = "red";
      //adjust message if player won in less than a minute, give winning message, stop timer
      if (minutes.innerHTML == 00) {
        playerTurn.textContent = `Congratulations, ${player2.value}, you won!!! It took you ${seconds.innerHTML} seconds!`;
      }
      //adjust message if player won in more than a minute, give winning message, stop timer
      else if (minutes.innerHTML !== 0) {
        playerTurn.textContent = `Congratulations, ${player2.value}, you won!!! It took you ${minutes.innerHTML} minutes and ${seconds.innerHTML} seconds!`;
      }
      //stop the timer and show reset button
      clearInterval(timeElapsed);
      credit.style.display = "block";
      reset.style.display = "block";
    }
  }
  //if no winning combos in either array & 9 cells are filled, it's a tie:
  if (totalMoves.length === 9) {
    playerTurn.textContent = "No winner :(";
    clearInterval(timeElapsed);
    credit.style.display = "block";
    reset.style.display = "block";
  }
}

//------------------EVENTS-------------------------------//

//Event Listeners://
//make the start button start the game
start.addEventListener("click", startFun);
//player vs. player game - make reveal two player form
playerButt.addEventListener("click", revealForm);
//player vs. comp game - make reveal computer form
computerButt.addEventListener("click", revealForm2);
//reset button
reset.addEventListener("click", resetGame);

//Event Handlers://

//reset game button
function resetGame() {
  location.reload();
}

//player v player
function revealForm() {
  //adds style to the player v player button so that the form appears allowing player to input name
  collapseForm.style.display = "block";
  player2.value = "Player 2";
  playerWrapper.style.display = "none"; //collapses player v player button
  computerButt.style.display = "none";
}
//player v computer
function revealForm2() {
  computerButt.style.display = "none";
  player2.style.display = "none";
  player2.value = "Computer";
  p2Comp.textContent = "Player 2: Computer";
  collapseForm.style.display = "block";
  playerWrapper.style.display = "none"; //collapses player v player button
}

let counter = () => {
  //increase hundredths of seconds while less than 100
  if (hundredthSec.innerHTML < 100) {
    hundredthSec.innerHTML++;
    //if hit 60 seconds, increase to minute, if hit 100 hundredths of a second, increase to one second
  } else if (seconds.innerHTML == 59 && hundredthSec.innerHTML == 100) {
    seconds.innerHTML++;
    minutes.innerHTML++;
    seconds.innerHTML = 0;
    hundredthSec.innerHTML = 0;
    //this statement is useful before seconds hit 59
  } else if (hundredthSec.innerHTML == 100) {
    seconds.innerHTML++;
    hundredthSec.innerHTML = 0;
  }
};

//Start Game
function startFun(event) {
  event.preventDefault();
  //computer vs player game - begin game if player entered their name
  if (player1.value && player2.value === "Computer") {
    for (let cell of allCells) {
      //make each cell clickable
      cell.addEventListener("click", gameBoard.computerMove);
    }

    //display whose turn it is
    playerTurn.style.border = "5px double #66FCF1";

    playerTurn.innerHTML = "It's " + player1.value + "'s turn!";
    //disable the start button
    start.disabled = true;
    //start the timer, make go off every 10/1000 = 1/100 second
    timeElapsed = setInterval(counter, 10);
    //player vs. player game - begin when they've entered names for both players
  } else if (player1.value && player2.value) {
    //turn each cell into a clickable cell
    for (let cell of allCells) {
      cell.addEventListener("click", gameBoard.playerMove);
    }
    //display whose turn it is
    playerTurn.style.border = "5px double #66FCF1";

    playerTurn.innerHTML = "It's " + player1.value + "'s turn!";
    //disable the start button
    start.disabled = true;
    //start the timer, make go off every 10/1000 = 1/100 second
    timeElapsed = setInterval(counter, 10);
    //if player doesn't enter name for player vs. player game, alert them to
  } else if (!player1.value && player2.value === "Computer") {
    alert("Please enter a name for Player 1!");
    //enter a name for player 1 and player 2 if have not
  } else alert("Please enter a name for Player 1 and Player 2!");
}
