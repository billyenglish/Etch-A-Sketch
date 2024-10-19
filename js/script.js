const createGrid = function (cols, rows) {
    const gridContainer = document.querySelector(".etch-a-sketch");

    for (let cell = 0; cell < cols * rows; cell++) {
        const createCell = document.createElement("div");
        createCell.setAttribute("class", "cell active");
        createCell.style.border = ".1rem solid black";
        createCell.style.height = `calc(100% / ${cols})`;
        createCell.style.width = `calc(100% / ${rows})`;
        gridContainer.appendChild(createCell);

    }

    return gridContainer;
}

createGrid(16, 16);

const gridCells = document.querySelectorAll(".cell");
const gridButton = document.querySelector("#grid-button");


const defaultColor = function () {
    gridCells.forEach((cells) => {
        cells.addEventListener("mouseover", () => {
            cells.style.transition = "2s ease-in";
            cells.style.scale = "1.1";
            cells.style.backgroundColor = "black";
        });
    });
}

defaultColor();

gridButton.addEventListener("click", () => {
    gridCells.forEach((cells) => {
        cells.style.border !== ""
            ? (gridButton.textContent = 'Grid Off', cells.style.border = "")
            : (gridButton.textContent = 'Grid On', cells.style.border = ".1rem solid #000");      
    })
});
