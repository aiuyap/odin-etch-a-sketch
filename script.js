let sideMaxCount = 16;
const squareSize = 800 / sideMaxCount; //container is 800px per side
let totalBoxes = sideMaxCount * sideMaxCount;


createBoxes(totalBoxes, squareSize);



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
    let randomColor = Math.floor(Math.random()*16777215).toString(16);

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