"use strict";

let squareBox = document.querySelector(".square--box");
let squareText = document.querySelector(".square--text");

squareBox.addEventListener("animationend", endFunction);

function endFunction() {
    squareBox.style.borderRight = "none";
    squareText.className += " right-move";
}

