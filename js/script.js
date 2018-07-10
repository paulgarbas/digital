"use strict";

let square = document.querySelector(".square");
let text = document.querySelector(".text");
let textWrapper = document.querySelector(".text__wrapper");
let executed = false;

square.addEventListener("animationend", squareAnimationEnd);
text.addEventListener("animationend", textAnimationEnd);

function squareAnimationEnd() {
    if (!executed) {
        text.className += " right-move"; 
        square.className += " left-move";
        textWrapper.className += " growing-width";
    }
    executed = true;
}

function textAnimationEnd() {
    text.className += " collapsing-border";
}

