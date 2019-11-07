const container = document.querySelector('#site');
const blockHolder = document.createElement("div");
gridAndCells(16);

function gridCreator(num) {
    blockHolder.classList.add("blockHolder");
    blockHolder.style.display = "grid";
    blockHolder.style.height = "100%";
    blockHolder.style.paddingTop = "20px";
    blockHolder.style.gridTemplateColumns = `repeat(${num} , 1fr)`;
    container.appendChild(blockHolder);
}

function cellCreator(num) {

    for (let i = 0; i < num; i++) {
        cell = document.createElement("div");
        cell.className = "cell";
        cell.style.border = "1px solid black";
        cell.style.brigntness = "(100%)";
        blockHolder.appendChild(cell);
    }
}

function gridAndCells(num) {
    document.querySelectorAll('.cell').forEach(e => e.remove()); // May not work on some browsers?
    gridCreator(num);
    num = num * num;
    cellCreator(num);
    randomColorCell();  
}

function newGrid(){
    let num = prompt("Insert a number for the rows and columns of the new grid.");
    gridAndCells(num);
}

function randomColorCell() {
    let multipleCells = document.querySelectorAll(".cell");
    for (let i = 0; i < multipleCells.length; i++) {
        let singleCell = multipleCells[i]
        singleCell.addEventListener("mouseover", function () {
            multipleCells[i].style.backgroundColor = randomColor();
        });
    }
    return
}

function randomColor() {
    let hexa = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexa[Math.floor(Math.random() * 16)];
    }
    return color;
}






  