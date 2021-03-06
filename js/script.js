"use strict";

// Main logo and background
let rightMove = document.querySelector(".right-move");
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
let isClicked = false;

// Small logo
let smallLogo = document.querySelector(".small-logo"); 
let smallLogoImg = document.querySelector(".small-logo-img");

// Major navigation desktop
// let navMajorWrapper = document.querySelector(".navigation-major__wrapper");
let desktopVersion = document.querySelector(".desktop-version");
// let indexNavMajor = document.querySelector(".index-navigation-major");
// let navMajor = document.querySelector(".navigation-major");
let navMajorDesktop = document.querySelector(".navigation-major-desktop");
let navHome = document.querySelector(".nav-home");
let navAboutUs = document.querySelector(".nav-about-us");
let navServices = document.querySelector(".nav-services");
let navTestimonials = document.querySelector(".nav-testimonials");
let navContacts = document.querySelector(".nav-contacts");
let navHamburgerDesktop = document.querySelector(".nav-hamburger-desktop");
let indexNavHamburgerDesktop = document.querySelector(".index-nav-hamburger-desktop");
let hamburgerDesktop = document.querySelector(".hamburger-desktop");

// Major navigation mobile
let navMajorMobile = document.querySelector(".navigation-major-mobile");
let navHomeMobile = document.querySelector(".nav-home-mobile");
let navAboutUsMobile = document.querySelector(".nav-about-us-mobile");
let navServicesMobile = document.querySelector(".nav-services-mobile");
let navTestimonialsMobile = document.querySelector(".nav-testimonials-mobile");
let navContactsMobile = document.querySelector(".nav-contacts-mobile");
let navHamburgerMobile = document.querySelector(".nav-hamburger-mobile");
let hamburgerMobile = document.querySelector(".hamburger-mobile");

// Minor navigation desktop
let navMinor = document.querySelector(".navigation-minor");
let navWeb = document.querySelector(".nav-web");
let navApp = document.querySelector(".nav-app");
let navBusiness = document.querySelector(".nav-business");

// Minor navigation mobile
let navMobile = document.querySelector(".navigation-mobile");
let navWebMobile = document.querySelector(".nav-web-mobile");
let navAppMobile = document.querySelector(".nav-app-mobile");
let navBusinessMobile = document.querySelector(".nav-business-mobile");

// Bouncing arrow
let bouncingArrow = document.querySelector(".arrow-bouncing"); 
let bouncingArrowLink = document.querySelector(".arrow-bouncing-link");

let url = window.location.pathname;
let filename = url.substring(url.lastIndexOf("/") + 1);

if (filename === "index.html") {
    square.addEventListener("animationend", squareRotationEnd);
    hamburgerDesktop.addEventListener("click", addDesktopActiveClass); 
    
    function squareRotationEnd() {
        if (!executedSquareRotation) { 
            squareRightBorder.className += " pushed-border";
            text.className += " right-move";
            textWrapper.className += " left-move-text__wrapper";     
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
            addNavigation(); 
            square.addEventListener("animationend", textMovingDown);
        }
        executedLittleBox = true;    
    }
    
    function textMovingDown() {
        if (!executedTextMoving) {               
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
        navMajorDesktop.style.display = "flex";
        navMinor.style.display = "flex";
        navMajorMobile.style.display = "flex";    
        navMobile.style.display = "flex";    
        indexNavHamburgerDesktop.className += " nav-hamburger-animation";
        indexNavHamburgerDesktop.style.pointerEvents = "auto";
        navHamburgerMobile.className += " nav-hamburger-animation";    
        navHamburgerMobile.style.pointerEvents = "auto";
        smallLogoImg.addEventListener("animationend", addNavigationSections);      
    }
    
    function addNavigationSections() {
        navHome.className += " nav-home-animation";
        navAboutUs.className += " nav-about-us-animation";
        navServices.className += " nav-services-animation";
        navTestimonials.className += " nav-testimonials-animation";
        navContacts.className += " nav-contacts-animation";
        navHome.addEventListener("animationend", activateSectionsPointer);      
    }

} else {    
    window.addEventListener("load", addNavigation);
    
    function addNavigation() {
        smallLogo.style.display = "block";
        smallLogoImg.className += " small-logo-animation";    
        navMajorDesktop.style.display = "flex";
        navMajorMobile.style.display = "flex";    
        navMobile.style.display = "flex";    
        navHamburgerDesktop.className += " nav-hamburger-animation";
        navHamburgerDesktop.style.pointerEvents = "auto";
        navHamburgerMobile.className += " nav-hamburger-animation";    
        navHamburgerMobile.style.pointerEvents = "auto";
        smallLogoImg.addEventListener("animationend", addNavigationSections);      
    }

    function addNavigationSections() {
        navHome.className += " nav-home-animation";
        navAboutUs.className += " nav-about-us-animation";
        navServices.className += " nav-services-animation";
        navTestimonials.className += " nav-testimonials-animation";
        navContacts.className += " nav-contacts-animation";
        navHome.addEventListener("animationend", activateSectionsPointer);      
    }
}

hamburgerMobile.addEventListener("click", addMobileActiveClass); 


function addDesktopActiveClass(event) {
    hamburgerDesktop.classList.toggle("is-active");
    
    // Activates cursor: pointer for Desktop minor navigation only after it appears
    if (hamburgerDesktop.classList.contains("is-active")) {
        navBusiness.addEventListener("animationend", activateMinorNavigationPointer);   
    // Deactivates - after it disappears          
    } else {
        navBusiness.addEventListener("animationend", deactivateMinorNavigationPointer);      
    }
    
    window.addEventListener("resize", resetNavigation);
    
    // Navigation appears/disappears
    navWeb.className = navWeb.className !== "nav-web-fade-in" ? "nav-web-fade-in" : "nav-web-fade-out";
    navApp.className = navApp.className !== "nav-app-fade-in" ? "nav-app-fade-in" : "nav-app-fade-out" 
    navBusiness.className = navBusiness.className !== "nav-business-fade-in" ? "nav-business-fade-in" : "nav-business-fade-out";
}

function addMobileActiveClass() {
    hamburgerMobile.classList.toggle("is-active");
    
    // Activates cursor: pointer for Mobile navigation only after it appears
    if (hamburgerMobile.classList.contains("is-active")) {
        if (filename === "index.html") {
            navBusinessMobile.addEventListener("animationend", activateMinorNavigationPointer);    
        } else {
            navContactsMobile.addEventListener("animationend", activateMinorNavigationPointer);                
        }
    // Deactivates - after it disappears  
    } else {
        if (filename === "index.html") {
            navBusinessMobile.addEventListener("animationend", deactivateMinorNavigationPointer);      
        } else {
            navContactsMobile.addEventListener("animationend", deactivateMinorNavigationPointer);                  
        }
    }

    window.addEventListener("resize", resetNavigation);

    // Navigation appears/disappears
    navHomeMobile.className = navHomeMobile.className !== "nav-home-mobile-fade-in" ? "nav-home-mobile-fade-in" : "nav-home-mobile-fade-out";
    navAboutUsMobile.className = navAboutUsMobile.className !== "nav-about-us-mobile-fade-in" ? "nav-about-us-mobile-fade-in" : "nav-about-us-mobile-fade-out";
    navServicesMobile.className = navServicesMobile.className !== "nav-services-mobile-fade-in" ? "nav-services-mobile-fade-in" : "nav-services-mobile-fade-out";
    navTestimonialsMobile.className = navTestimonialsMobile.className !== "nav-testimonials-mobile-fade-in" ? "nav-testimonials-mobile-fade-in" : "nav-testimonials-mobile-fade-out";
    navContactsMobile.className = navContactsMobile.className !== "nav-contacts-mobile-fade-in" ? "nav-contacts-mobile-fade-in" : "nav-contacts-mobile-fade-out";   
    if (filename === "index.html") {
        navWebMobile.className = navWebMobile.className !== "nav-web-mobile-fade-in" ? "nav-web-mobile-fade-in" : "nav-web-mobile-fade-out";
        navAppMobile.className = navAppMobile.className !== "nav-app-mobile-fade-in" ? "nav-app-mobile-fade-in" : "nav-app-mobile-fade-out" 
        navBusinessMobile.className = navBusinessMobile.className !== "nav-business-mobile-fade-in" ? "nav-business-mobile-fade-in" : "nav-business-mobile-fade-out";
    }
}

// Activates cursor: pointer for Desktop version's major navigation
function activateSectionsPointer() {
    navMajorDesktop.style.pointerEvents = "auto";
}

function activateMinorNavigationPointer() {
    if (filename === "index.html") {
        navMinor.style.pointerEvents = "auto";      // Activates cursor in index page: pointer for Desktop minor navigation     
        navMobile.style.pointerEvents = "auto";     // Activates cursor in index page: pointer for Mobile navigation
    } else {     
        navMobile.style.pointerEvents = "auto";     // Activates cursor: pointer for Mobile navigation
    }
}

function deactivateMinorNavigationPointer() {
    if (filename === "index.html") {
        navMinor.style.pointerEvents = "none";      // Deactivates cursor in index page: pointer for Desktop minor navigation 
        navMobile.style.pointerEvents = "none";     // Deactivates cursor in index page: pointer for Mobile navigation
    } else {
        navMobile.style.pointerEvents = "none";     // Deactivates cursor: pointer for Mobile navigation
    }
}

// Resets navigation when the browser window resizes
function resetNavigation() {
    if (filename === "index.html") {
        navWeb.className = "navWeb";
        navApp.className = "navWeb";
        navBusiness.className = "navWeb";
    }

    navHomeMobile.className = "navHomeMobile";
    navAboutUsMobile.className = "navAboutUsMobile";
    navServicesMobile.className = "navServicesMobile";
    navTestimonialsMobile.className = "navTestimonialsMobile";
    navContactsMobile.className = "navContactsMobile";
    if (filename === "index.html") {
        navWebMobile.className = "navWebMobile";
        navAppMobile.className = "navAppMobile";
        navBusinessMobile.className = "navBusinessMobile";
    }

    // Resets hamburger
    hamburgerDesktop.classList.remove("is-active");  
    hamburgerMobile.classList.remove("is-active");
}
