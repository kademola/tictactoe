let currentPlayer = "X"; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll(".grid-cell");
// Loop over each element in our cellElementArray:
for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
  const currentCellElement = cellElementArray[elementIndex];
  // Add an event listener to the currentCellElement:
  currentCellElement.addEventListener("click", function (event) {
    const clickedCellElement = event.target;

    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      playerXSelections.push(Number(clickedCellElement.id));
      playerXSelections.sort();
      currentPlayer = "O";
      checkForWin(winningCombinations, playerXSelections);
    } else {
      clickedCellElement.innerHTML = "O";
      playerOSelections.push(Number(clickedCellElement.id));
      playerOSelections.sort();
      currentPlayer = "X";
      checkForWin(winningCombinations, playerOSelections);
    }
    // Log the ID of the cell which was just clicked:
    // console.log("You clicked on cell number: " + clickedCellElement.id);
  });
}

function checkForWin(winningCombinations, playerSelections) {
  for (let x = 0; x < winningCombinations.length; x++) {
    let currentCombo = winningCombinations[x];
    let matches = 0;
    for (let y = 0; y < currentCombo.length; y++) {
      let currentComboNum = currentCombo[y];
      if (playerSelections.includes(currentComboNum)) {
        matches++;
      }
      if (matches === 3) {
        console.log("You Win");
        return true;
      }
    }
  }
  return false;
}
