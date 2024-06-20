const gridContainer = document.querySelector("#grid-container");
const colorButton = document.querySelector('#color-button');
const colorPickerInput = document.querySelector('#color-picker');
const randomColorButton = document.querySelector('#random-color');
const eraseButton = document.querySelector("#erase-cell");
const clearGrid = document.querySelector("#clear-grid");
const inputRange = document.querySelector("#grid-size");
const gridDisplay = document.querySelector("#grid-display");

let isGridActive = true;

function createGrid(cols, rows) {
    gridContainer.innerHTML = "";

    for (let cell = 0; cell < cols * rows; cell++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridContainer.appendChild(gridCell);
        gridCell.style.height = `calc(100% / ${rows})`;
        gridCell.style.width = `calc(100% / ${cols})`;
    }

    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => {
        gridCell.addEventListener("click", () => {
            if (isGridActive) {
                gridCell.style.backgroundColor = "black";
            }
        });
    })
}

createGrid(16, 16);

/* Function Creates selected Color from Input. */

function gridColor() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => {
        gridCell.addEventListener("click", () => {
            if (isGridActive) {
                gridCell.style.backgroundColor = colorPickerInput.value;
            }
        });
    });
};

colorButton.addEventListener("click", gridColor);

/* Function Creates Random color randomly generated. */

function randomColor() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => {
        gridCell.addEventListener("click", () => {
            if (isGridActive) {
                gridCell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            }
        });
    });
};

randomColorButton.addEventListener("click", randomColor);

/* Function to Erase individual grid Cell at a time. */

function eraseCell() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => {
        gridCell.addEventListener("click", () => {
            if (isGridActive) {
                gridCell.style.backgroundColor = "";
            }
        });
    });
}

eraseButton.addEventListener("click", eraseCell);

/* Function to Erase grid at once */

function eraseGrid() {
    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(gridCell => {
        gridCell.style.backgroundColor = "";
    })
}

clearGrid.addEventListener("click", eraseGrid);

/* Function resizes the grid with input range slider */

function resizeGrid() {
    const gridSize = parseInt(inputRange.value);
    createGrid(gridSize, gridSize);
    gridDisplay.innerHTML = `<p>Grid Size: ${gridSize} x ${gridSize}</p>`
}

inputRange.addEventListener("input", resizeGrid);
