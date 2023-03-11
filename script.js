const container = document.querySelector(".container");
const gridRatio = 48;
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

function addColor() {
  this.classList.add("sketch");
}
