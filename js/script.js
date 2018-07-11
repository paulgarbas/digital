"use strict";

let squareRotates = document.querySelector(".square");
let squareMovesLeft = document.querySelector(".left-move");
let text = document.querySelector(".text");
let squareRightBorder = document.querySelector(".square-border-right");

let executed = false;

squareRotates.addEventListener("animationend", squareRotationEnd);

function squareRotationEnd() {
    if (!executed) { 
        squareRotates.className += " left-move";
        squareRotates.addEventListener("animationend", squareMovingEnd);
    }
    executed = true;
}

function squareMovingEnd() {
    squareRotates.style.borderRight = "none";
    text.className += " right-move";
    squareRightBorder.className += " pushed-border";
    squareRightBorder.addEventListener("animationend", collapsingBorder);
}

function collapsingBorder() {
    squareRightBorder.className += " collapsed-border";     
}

