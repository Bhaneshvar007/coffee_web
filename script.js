//  input bar display.

let searchbar = document.querySelector(".serchBar");
let inputBtn = document.querySelector(".searchIcon");
inputBtn.addEventListener("click", function () {
    searchbar.style.scale = "1";
    delevrySection.style.scale = "0"

    inputBtn.addEventListener("click", function () {
        searchbar.style.scale = "0";
    })
})

// Delevary Section.

let delevrySection = document.querySelector(".delevarySection");
let delevryBtn = document.querySelector(".DelevaryIcon");
delevryBtn.addEventListener("click", function () {
    delevrySection.style.scale = "1";
    searchbar.style.scale = "0";

    delevryBtn.addEventListener("click", function () {
        delevrySection.style.scale = "0"
    })
})

// full feald a contect section.

let nameEl = document.querySelector("#name")
let emailEl = document.querySelector("#email")
let numberEl = document.querySelector("#number")
let contectBtn = document.querySelector("#contectBtn")

contectBtn.addEventListener("click", () => {
    if ((nameEl.value = "") || (numberEl.value = "") || (emailEl.value = "")) {
        alert("Please enter the valid detail")
    }
    else {
        alert(nameEl.value + ",Your welcome")
    }
})

// nav section.

let navBar = document.querySelector(".midNav");
let menuIcon = document.querySelector("#MenuIcon");
let CroseIcon = document.querySelector("#CroseIcon");

menuIcon.addEventListener("click", () => {
    navBar.style.display = "flex";
    CroseIcon.style.display = "block";
    menuIcon.style.display = "none";

    
    CroseIcon.addEventListener("click", () => {
        navBar.style.display = "none";
        CroseIcon.style.display = "none";
        menuIcon.style.display = "block";   
    })
})