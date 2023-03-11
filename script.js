let container = document.querySelector(".container");
const button = document.querySelector("header button");
button.addEventListener("click", changeGridSize);
// Default grids per side = 16
makeSketchpad(16);

function makeSketchpad(gridRatio) {
  // Make a sketchpad with x number of grids per side with two-dimensional loop
  for (let i = 0; i < gridRatio; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridRatio; j++) {
      const column = document.createElement("div");
      column.classList.add("column");
      column.addEventListener("mouseover", addColor);
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

function changeGridSize() {
  const userPrompt = +prompt("Please enter grid size: ");
  if (!Number.isInteger(userPrompt) || userPrompt > 100) return;
  // Remove the old container and make a new one with the correct size
  document.body.removeChild(container);
  const newSketchpad = document.createElement("div");
  newSketchpad.classList.add("container");
  // Replace the container with the new one and append it to body
  container = newSketchpad;
  document.body.appendChild(container);
  makeSketchpad(userPrompt);
}

function addColor() {
  this.classList.add("sketch");
}
