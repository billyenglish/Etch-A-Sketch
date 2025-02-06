const createGrid = function(cols, rows) {
    let gridContainer = document.querySelector(".etch-a-sketch");
    gridContainer.innerHTML = "";

    for (let cell = 0; cell < cols * rows; cell++) {
        const createCell = document.createElement("div");
        createCell.setAttribute("class", "cell active");
        createCell.style.border = "1px solid black";
        createCell.style.height = `calc(100% / ${rows})`;
        createCell.style.width = `calc(100% / ${cols})`;
        gridContainer.appendChild(createCell);

    }

    return;
}

createGrid(16, 16);

const colorSelect = document.querySelector("#color-selector");
const gridSlider = document.querySelector("#grid-range");
const gridButton = document.querySelector("#grid-button");
const gridColor = document.querySelector("#grid-color");
const randomColor = document.querySelector("#random-color");
const darkMode = document.querySelector("#dark-mode");
const clearGrid = document.querySelector("#clear-grid");
const resetGrid = document.querySelector("#reset-grid");
const gridSizeDisplay = document.querySelector('.grid-size');

const defaultColor = function() {
    const gridCells = document.querySelectorAll('.cell');

    gridCells.forEach((cells) => {
        cells.addEventListener("mouseover", () => {
            cells.style.backgroundColor = "black";
            cells.style.transition = "3s ease-in";
        });
    });
}

defaultColor();

const selectColor = function() {
    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((cells) => {
        cells.addEventListener("mouseover", () => {
            cells.style.backgroundColor = colorSelect.value;
        });
    });
}

gridColor.addEventListener("click", selectColor);

randomColor.addEventListener("click", () => {
    const randomPalette = "0123456789ABCDEF";
    let genRandomColor = "#";

    for (let i = 0; i < 6; i++) {
        genRandomColor += randomPalette[Math.floor(Math.random() * 16)];
    }

    console.log(genRandomColor);

    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = genRandomColor;
        });
    });
});

const gridSize = function() {
    const gridSize = gridSlider.value;
    gridSizeDisplay.innerHTML = `Grid Size: ${gridSize} X ${gridSize}`;
    createGrid(gridSize, gridSize);
    defaultColor();
}

gridSlider.addEventListener("input", gridSize);

const toggleGrid = function() {
    const gridCells = document.querySelectorAll(".cell");

    gridCells.forEach((cells) => {
        cells.style.border ? cells.style.border = "" : cells.style.border = "1px solid black";
    })
}

gridButton.addEventListener("click", toggleGrid);

const resetGridDisplay = function() {
    createGrid(16, 16);
    gridSizeDisplay.innerHTML = `Grid Size: 16 X 16`;
    defaultColor();
    colorSelect.value = "#000000";
}

resetGrid.addEventListener("click", resetGridDisplay);