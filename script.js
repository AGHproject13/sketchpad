const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 16; j++) {
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
