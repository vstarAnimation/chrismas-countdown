const hamburger = document.querySelector(".hamburger");
const navbarMenu = document.querySelector(".navbar .link");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLinks = formPopup.querySelectorAll(".button-link a");
const blurBgOverlay = document.querySelector(".blur-bg-overlay");

// Show mobile
hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
    blurBgOverlay.style.display = navbarMenu.classList.contains("show-menu") ? "block" : "none";
});

// Hide mobile
hideMenuBtn.addEventListener("click", () => {
    navbarMenu.classList.remove("show-menu");
    blurBgOverlay.style.display = "none";
});

// Show popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});


blurBgOverlay.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
    navbarMenu.classList.remove("show-menu");
    blurBgOverlay.style.display = "none";
});

signupLoginLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (link.id === "signup-link") {
            formPopup.classList.add("show-signup");
        } else {
            formPopup.classList.remove("show-signup");
        }
    });
});
