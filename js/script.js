const gridContainer = document.querySelector("#grid-container");
const colorButton = document.querySelector('#color-button');
const colorPickerInput = document.querySelector('#color-picker');
const randomColorButton = document.querySelector('#random-color');
const eraseButton = document.querySelector("#erase-cell");
const inputRange = document.querySelector("#grid-size");
const gridDisplay = document.querySelector("#grid-display");

let isGridActive = true;

function createGrid(cols, rows) {
    for (let cell = 0; cell < 256; cell++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridContainer.appendChild(gridCell);
        gridCell.style.height = `calc(100% / ${cols})`;
        gridCell.style.width = `calc(100% / ${rows})`;
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

