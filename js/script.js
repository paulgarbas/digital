"use strict";

let square = document.querySelector(".square");
let textWrapper = document.querySelector(".text__wrapper");
let text = document.querySelector(".text");
let squareRightBorder = document.querySelector(".square-border-right");
let logo = document.querySelector(".logo");
let canvas = document.querySelector("canvas");
let hamburger = document.querySelector(".hamburger");

let executed = false;

square.addEventListener("animationend", squareRotationEnd);
hamburger.addEventListener("click", addActiveClass);

function squareRotationEnd() {
    if (!executed) { 
        squareRightBorder.className += " pushed-border";
        text.className += " right-move";
        textWrapper.className += " left-move-text__wrapper";  
        square.className += " left-move-square";      
        square.addEventListener("animationend", collapsingBorder);
    }
    executed = true;
}

function collapsingBorder() {
    squareRightBorder.className += " collapsed-border"; 
    squareRightBorder.addEventListener("animationend", textMovingDown)
}

function textMovingDown() {
    square.classList.remove("left-move-square");
    square.className += " down-move-square";        
    textWrapper.className += " down-move-text__wrapper";
    square.addEventListener("animationend", fading)  ;  
}

function fading() { 
    canvas.className += " body-bg";
    logo.className += " fade-in-logo";
    square.className += " fade-out fade-out-box";
    squareRightBorder.className += " fade-out fade-out-right-border";     
}

function addActiveClass() {
    hamburger.classList.toggle("is-active");
}