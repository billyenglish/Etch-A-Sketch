const createGrid = function () {
    const gridContainer = document.querySelector(".etch-a-sketch");

    for (let cell = 0; cell < 16 * 16; cell++) {
        const createCell = document.createElement("div");
        createCell.setAttribute("class", "cell");
        createCell.style.border = "1px solid black";
        createCell.style.height = `calc(${cell * 100}%)`;
        createCell.style.width = `calc(${cell * 100}%)`;
        gridContainer.appendChild(createCell);

    }

    return gridContainer;
}

createGrid();