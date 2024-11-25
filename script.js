const navbarMenu = document.querySelector(".navbar .link");
const hamburger = document.querySelector(".hamburger");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn")
const signupLoginlink = formPopup.querySelectorAll(".button-link");

//show modile menu
hamburger.addEventListener("click",() => {
    navbarMenu.classList.toggle("show-menu");
});

//hide mobile
hideMenuBtn.addEventListener("click",() => hamburger.click());

//show login 
showPopupBtn.addEventListener("click",() => {
    document.body.classList.toggle("show-popup");
});

//hide login popup
hidepopupBtn.addEventListener("click",() => showPopupBtn.click());

// show or hide sign up form
signupLoginlink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' :
        'remove']('show-sign-up');
    })
})