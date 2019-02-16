const gameboard = document.getElementById('tictactoeContainer');
const squares = document.querySelectorAll('.square');
const squareID = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"];
let myTurn = true;
const boardValues = {
  tl: "",
  tc: "",
  tr: "",
  cl: "",
  cc: "",
  cr: "",
  bl: "",
  bc: "",
  br: ""
};

// Array of 8 possible winning combos
    // from top left - 3 combos (index+1, +3, +4)
    // from top center - 1 combo (+3)
    // from top right - 2 combos (+2, +3)
    // from center left - 1 combo (+1)
    // from bottom left - 1 combo (+1)


(function makeGameBoard() {
  const spaces = 8;
  for( let i = 0; i <= spaces; i += 1) {
    let square = `
      <div class="square" id="${squareID[i]}"></div>
    `;
    gameboard.innerHTML += square;
  }
})();


// Add X and O to board after clicking squares
gameboard.addEventListener('click', (square) => {
  let sign = !myTurn ? "O" : "X";
  // Add X or O to the square clicked
  document.getElementById(square.target.id).innerHTML = `<span class="xo-sign">${sign}</span>`;
  // Change myTurn boolean to opposite value of current value
  myTurn = !myTurn;
  addBoardValue(square.target.id, sign);
});

const addBoardValue = (target, sign) => {
  boardValues[target] = sign;
  console.log(boardValues);
  checkWinner(boardValues)
}

const checkWinner = (valueObject) => {
    console.log(squares)
}
