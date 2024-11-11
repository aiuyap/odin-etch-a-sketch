let getSquareSize = (side) => 800 / side; //container is 800px per side
let getTotalBoxes = (side) => side * side;

let sideMaxCount = 16;
let squareSize = getSquareSize(sideMaxCount) 
let totalBoxes = getTotalBoxes(sideMaxCount);

createBoxes(totalBoxes, squareSize);

const changeSizeBtn = document.querySelector("#change-size");
changeSizeBtn.addEventListener("click", () => {
    const numOfSide = getSize();
    const squareSize = getSquareSize(numOfSide);
    const totalBoxes = getTotalBoxes(numOfSide);
    clearContainer();
    createBoxes(totalBoxes, squareSize);
});

function createBoxes (numOfBox, squareWH) {
    const boxContainer = document.querySelector("#container");
    const square = document.createElement("div");
    square.classList.add("square-style");
    square.style["width"] = squareWH.toString() + "px";
    square.style["height"] = squareWH.toString() + "px";

    for (let i = 0; i < numOfBox; i++) {

        boxContainer.appendChild(square.cloneNode());
    }
    addStyleToBoxes();
}

function addStyleToBoxes () {
    const allSquare = document.querySelectorAll(".square-style");

    for (let i = 0; i < allSquare.length; i++) {
        allSquare[i].addEventListener("mouseover", () => {
            changeColor(allSquare[i]); 
        });
    }
}

function changeColor (box) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    box.style["background-color"] = `#${randomColor}`;
}

function getSize () {
    const getInput = + prompt("Select how many tiles per side. Maximum of 100. (e.g 16 will be 16x16)")

    if (Number.isInteger(getInput) && getInput <= 100) {
        return getInput
    }
    else {
        alert("Invalid input. Please enter a number from 1-100");
        return getSize();
    }
}

function clearContainer () {
    const container = document.querySelector("#container");
    const boxes = document.querySelectorAll(".square-style");
    
    for(let i = 0; i < boxes.length; i++) {
        container.removeChild(boxes[i]);
    }
}