const gridContainer = document.querySelector('.gridContainer');
let currentGridNum = 16;

makeGrid(16);
colorCells();

function makeGrid (gridNum){
    for (r = 0; r < gridNum; r++){
        let div1 = document.createElement('div');
        div1.className = "row";
        for (var j = 0; j < gridNum; j++){
            var div2 = document.createElement('div'); 
            div2.className = "cell";
            div2.style.width = "25px";
            div2.style.height = "25px";
            div2.style.border = "2px solid black";
            div2.style.background = "grey";
            div2.style.display = 'inline-block';
            div2.style.margin = '1px';
            div1.appendChild(div2);
            }
        document.querySelector('.gridContainer').appendChild(div1);
        }   
}

let newGrid = document.querySelector(".newGrid");
newGrid.addEventListener('click', () => {
    eraseGrid();
    createGrid(currentGridNum); /*need to fix*/
})

function eraseGrid(){
    gridContainer.innerHTML = '';
}

function colorCells(){
    const hoverEffect = document.querySelectorAll('.cell');
hoverEffect.forEach(cell => {
    cell.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "green";
        console.log('cell entered');
    });
});
}

let grid16button = document.querySelector(".grid16");
grid16button.addEventListener('click', () => {
    createGrid(16);
    currentGridNum = 16;
})

let grid32button = document.querySelector(".grid32");
grid32button.addEventListener('click', () => {
    createGrid(32);
    currentGridNum = 32;
})

let grid64button = document.querySelector(".grid64");
grid64button.addEventListener('click', () => {
    createGrid(64);
    currentGridNum = 64;
})

function createGrid (int){
    eraseGrid();
    makeGrid(int);
    colorCells();
}