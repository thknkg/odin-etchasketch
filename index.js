const grid = document.getElementById("grid");
document.getElementById("gridsize").addEventListener("click", displayGrid);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// on load set default grid
window.onload = (event) =>  {
    defaultGrid();
};

// set default 16x16 grid
function defaultGrid() {
    resetGrid();
    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.addEventListener("mousedown", draw);
        cell.addEventListener("mouseover", draw)
        // cell.innerText = (i + 1);
        grid.appendChild(cell).className = "grid-item";
    }
}

// remove any preexisting grid cells
function resetGrid() {
    document.getElementById("grid").innerHTML = "";
    grid.style.setProperty("--grid-rows", 16);
    grid.style.setProperty("--grid-cols", 16);
}

// function to display a grid of size i x i, where i is user input from 1-100
function displayGrid() {

    // get user input for size
    function getSize() {
        let userInput = prompt("Enter a number to determine the length of sides of the grid.");
        
        // if invalid input given return false
        if (userInput > 64 || userInput <= 0) {
            alert("Please enter a number between 1 and 100.");
            defaultGrid();
            return false;
        };
        
        // else return given value
        if (userInput <= 64 && userInput > 0) {
            defaultGrid();
            return userInput;
        };
    }
    
    let size = getSize();

    // if a valid number was given
    if (size !== false) {
        
        // function to draw the grid based on the user's suggested size
        function makeGrid(size) {
            document.getElementById("grid").innerHTML = "";
            grid.style.setProperty("--grid-rows", size);
            grid.style.setProperty("--grid-cols", size)
            for (let i = 0; i < size * size; i++) {
                const cell = document.createElement("div");
                cell.addEventListener("mousedown", draw);
                cell.addEventListener("mouseover", draw)
                // cell.innerText = (i + 1);
                grid.appendChild(cell).className = "grid-item";
            }
        }
    
    makeGrid(size);
    
    };
}

function draw(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = "#393a37"
}

const knob = document.querySelector(".knob");

function calculateDegree(e) {

}

// addEventListener("drag", (event) => {}); 
// make random parts of screen get erased as it is shaken

// let gridCells = document.querySelectorAll(".grid-item");
// gridCells.forEach(function(cell) {
//     cell.addEventListener("hover", function(){
//         this.classList.add("hover");
//     })

// })