const gridContainer = document.querySelector('.gridContainer');
let currentGridNum = 16;
let blackSelected = true;

makeGrid(16);
colorCells();

function makeGrid (gridNum){
    for (r = 0; r < gridNum; r++){
        let div1 = document.createElement('div');
        div1.className = "row";
        for (var j = 0; j < gridNum; j++){
            var div2 = document.createElement('div'); 
            div2.className = "cell";
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

function colorCells(color){
    const hoverEffect = document.querySelectorAll('.cell');
    hoverEffect.forEach(cell => {
    cell.addEventListener('mouseenter', (event) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        console.log(r, g, b);
        console.log(blackSelected);
        if (blackSelected == true){
        event.target.style.backgroundColor = 'black';
        } else if (blackSelected == false) {
        event.target.style.backgroundColor = rbg();
        } else {
            console.log("color error");
        }
    });
});
}

let blackButton = document.querySelector(".blackColor");
blackButton.addEventListener('click', () => {
    blackSelected = true;
})


let randomColorButton = document.querySelector(".randomColor");
randomColorButton.addEventListener('click', () => {
    blackSelected = false;
});

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

function rbg () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    } return color;
}

