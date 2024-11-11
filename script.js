let sideMaxCount = 16;
let squareSize = 800 / sideMaxCount; //container is 800px per side

createBoxes();
addStyleToBoxes(squareSize);



function createBoxes () {
    const boxContainer = document.querySelector("#container");
    const square = document.createElement("div");
    square.classList.add("squareStyle");

    for (let i = 0; i < 256; i++) {

        boxContainer.appendChild(square.cloneNode());
    }
}

function addStyleToBoxes (squareWH) {
    const allSquare = document.querySelectorAll(".squareStyle");

    for (let i = 0; i < allSquare.length; i++) {
        allSquare[i].addEventListener("mouseover", () => {
            allSquare[i].style["background-color"] = "#F2613F"; 
        });
        allSquare[i].style["width"] = squareWH.toString() + "px";
        allSquare[i].style["height"] = squareWH.toString()+ "px";
    }
}