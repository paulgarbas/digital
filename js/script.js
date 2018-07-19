"use strict";

let square = document.querySelector(".square");
let textWrapper = document.querySelector(".text__wrapper");
let text = document.querySelector(".text");
let squareRightBorder = document.querySelector(".square-border-right");
let logo = document.querySelector(".logo");
let canvas = document.querySelector("canvas");
let executed = false;

// Major navigation
let navMajor = document.querySelector(".navigation-major");
let navHome = document.querySelector(".nav-home");
let navAboutUs = document.querySelector(".nav-about-us");
let navServices = document.querySelector(".nav-services");
let navTestimonials = document.querySelector(".nav-testimonials");
let navContacts = document.querySelector(".nav-contacts");
let navHamburger = document.querySelector(".nav-hamburger");
let hamburger = document.querySelector(".hamburger");

// Minor navigation
let navMinor = document.querySelector(".navigation-minor");
let navWeb = document.querySelector(".nav-web");
let navApp = document.querySelector(".nav-app");
let navBusiness = document.querySelector(".nav-business");

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
    square.addEventListener("animationend", fading);  
}

function fading() { 
    canvas.className += " body-bg";
    logo.className += " fade-in-logo";
    square.className += " fade-out fade-out-box";
    squareRightBorder.className += " fade-out fade-out-right-border";   
    square.addEventListener("animationend", addNavigation);      
}

function addNavigation() {
    navMajor.style.display = "flex";
    navMinor.style.display = "flex";
    navHome.className += " nav-home-animation";
    navAboutUs.className += " nav-about-us-animation";
    navServices.className += " nav-services-animation";
    navTestimonials.className += " nav-testimonials-animation";
    navContacts.className += " nav-contacts-animation";
    navHamburger.className += " nav-hamburger-animation";
    
}

function addActiveClass() {
    hamburger.classList.toggle("is-active");
    navWeb.className = navWeb.className !== "nav-web-fade-in" ? "nav-web-fade-in" : "nav-web-fade-out";
    navApp.className = navApp.className !== "nav-app-fade-in" ? "nav-app-fade-in" : "nav-app-fade-out" 
    navBusiness.className = navBusiness.className !== "nav-business-fade-in" ? "nav-business-fade-in" : "nav-business-fade-out";
}