const gameboard = document.getElementById('tictactoeContainer');
const squares = document.querySelectorAll('.square');
const winnerBoard = document.querySelector('#winnerBoard');
const squareID = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"];
let myTurn = true;
let numberOfPLays = 0; // start comparing when > 4
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

const boardIDs = ["tl", "tc", "tr", "cl", "cc", "cr", "bl", "bc", "br"];

const winningCombos = [
  ["tl", "tc", "tr"],
  ["tl", "cl", "bl"],
  ["tl", "cc", "br"],
  ["tc", "cc", "br"],
  ["tr", "cr", "br"],
  ["tr", "cc", "bl"],
  ["cl", "cc", "cr"],
  ["bl", "bc", "br"]
];

// 8 possible winning combos
    // from top left - 3 combos (["tl", "tc", "tr"], ["tl", "cl", "bl"], ["tl", "cc", "br"])
    // from top center - 1 combo (["tc", "cc", "br"])
    // from top right - 2 combos (["tr", "cr", "br"], ["tr", "cc", "bl"])
    // from center left - 1 combo (["cl", "cc", "cr"])
    // from bottom left - 1 combo (["bl", "bc", "br"])


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
  // Keep track of where Xs and Os are; seen in console only
  addBoardValues(square.target.id, sign);
  numberOfPLays += 1;
});

const addBoardValues = (target, sign) => {
  boardValues[target] = sign;
  checkWinner(boardValues)
}

const checkWinner = () => {
  for (let i = 0; i < winningCombos.length; i++) {
    const [ sp1, sp2, sp3 ] = winningCombos[i];
    for (let key in boardValues) {
      if (boardValues[sp1]
         &&
         boardValues[sp1] === boardValues[sp2]
         &&
         boardValues[sp2] === boardValues[sp3]) {
          let winner = boardValues[sp1];
          setTimeout(winngMsg, 1000, winner);
          return boardValues[sp1];
         }
    }
  }
}

const winngMsg = (winner) => {
  winnerBoard.innerHTML = `<h1>Winner is <span id="winnerSymbol">${winner}</span></h1>`;
}
