"use strict";

let square = document.querySelector(".square");
let textWrapper = document.querySelector(".text__wrapper");
let text = document.querySelector(".text");
let squareRightBorder = document.querySelector(".square-border-right");
let logo = document.querySelector(".logo");
let canvas = document.querySelector("canvas");
let executedSquareRotation = false;
let executedCollapsingBorder = false;
let executedLittleBox = false;
let executedTextMoving = false;
let executedBigLogo = false;

// Small logo
let smallLogo = document.querySelector(".small-logo"); 
let smallLogoImg = document.querySelector(".small-logo-img");

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

// Bouncing arrow
let bouncingArrow = document.querySelector(".arrow-bouncing"); 
let bouncingArrowLink = document.querySelector(".arrow-bouncing-link");

square.addEventListener("animationend", squareRotationEnd);
hamburger.addEventListener("click", addActiveClass); 

function squareRotationEnd() {
    if (!executedSquareRotation) { 
        squareRightBorder.className += " pushed-border";
        text.className += " right-move";
        textWrapper.className += " left-move-text__wrapper";  
        textWrapper.style.right = "-130px";
        square.className += " left-move-square";      
        square.addEventListener("animationend", collapsingBorder);
    }
    executedSquareRotation = true;
}

function collapsingBorder() {
    if (!executedCollapsingBorder) { 
        squareRightBorder.className += " collapsed-border"; 
        squareRightBorder.addEventListener("animationend", littleBoxFadeOut);
    }
    executedCollapsingBorder = true;    
}

function littleBoxFadeOut() {
    if (!executedLittleBox) {         
        square.className += " fade-out fade-out-box";
        squareRightBorder.className += " fade-out fade-out-right-border";   
        square.addEventListener("animationend", textMovingDown);
    }
    executedLittleBox = true;    
}

function textMovingDown() {
    if (!executedTextMoving) {         
        // square.classList.remove("left-move-square");
        // square.className += " down-move-square";        
        textWrapper.className += " down-move-text__wrapper";
        textWrapper.addEventListener("animationend", bigLogoFadeIn);  
    }
    executedTextMoving = true;        
}

function bigLogoFadeIn() { 
    if (!executedBigLogo) {                 
        canvas.className += " body-bg";
        logo.className += " fade-in-logo";
        logo.addEventListener("animationend", addNavigation);  
    }   
    executedBigLogo = true;        
}

function addNavigation() {
    smallLogo.style.display = "block";
    smallLogoImg.className += " small-logo-animation"; 
    navMajor.style.display = "flex";
    navMinor.style.display = "flex";
    navHome.className += " nav-home-animation";
    navAboutUs.className += " nav-about-us-animation";
    navServices.className += " nav-services-animation";
    navTestimonials.className += " nav-testimonials-animation";
    navContacts.className += " nav-contacts-animation";
    navHamburger.className += " nav-hamburger-animation";
    bouncingArrow.style.display = "inline-block";
    bouncingArrowLink.className += " arrow-bouncing-link-animation";
}

function addActiveClass() {
    hamburger.classList.toggle("is-active");
    navWeb.className = navWeb.className !== "nav-web-fade-in" ? "nav-web-fade-in" : "nav-web-fade-out";
    navApp.className = navApp.className !== "nav-app-fade-in" ? "nav-app-fade-in" : "nav-app-fade-out" 
    navBusiness.className = navBusiness.className !== "nav-business-fade-in" ? "nav-business-fade-in" : "nav-business-fade-out";
}