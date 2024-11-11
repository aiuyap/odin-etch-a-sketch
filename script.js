const boxContainer = document.querySelector("#container");
const square = document.createElement("div");
square.classList.add("squareStyle");

for (let i = 0; i < 256; i++) {

    boxContainer.appendChild(square.cloneNode());
}

const allSquare = document.querySelectorAll(".squareStyle");

for (let i = 0; i < allSquare.length; i++) {
    allSquare[i].addEventListener("mouseover", () => {
        allSquare[i].style["background-color"] = "#F2613F";
    });
}