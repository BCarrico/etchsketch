const gridContainer = document.querySelector('.gridContainer');

let rowNum = 16;
let columnNum = 16;


makeGrid(16);

function makeGrid (gridNum){
    for (r = 0; r < gridNum; r++){
        let div1 = document.createElement('div');
        for (var j = 0; j < gridNum; j++){
            var div2 = document.createElement('div'); 
            div2.style.width = "25px";
            div2.style.height = "25px";
            div2.style.background = "red";
            div2.style.display = 'inline-block';
            div2.style.margin = '1px';
            div1.appendChild(div2);
            }
        document.querySelector('.gridContainer').appendChild(div1);
    }
}

