const gridContainer = document.querySelector('.gridContainer');

makeGrid(16);

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
    let gridNum = window.prompt("How big would you like your grid? (16 - 100)")
    eraseGrid();
    makeGrid(gridNum);
})

function eraseGrid(){
    gridContainer.innerHTML = '';
}