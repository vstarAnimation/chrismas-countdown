const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");
const passToggleBtn = document.getElementById("password-icon");

form.onsubmit = (e) => {
    e.preventdefault();
    //prevehting tbe submit
    //if the email and paaswrord are empty 
    (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value === "") ? pField.classList.add("shake", "error") : checkPass();


    setTimeout( () => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    },500);

    eInput.onkeyup = () => { checkEmail(); };//calling check email function
    pInput.onkeyup = () => { checkPass(); };// callin check pass function

    function checkEmail() {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Pattern for email validation
        if (!eInput.value.match(pattern)) { // If pattern does not match
            eField.classList.add("error");
            eField.classList.remove("valid");
            const errorTxt = eField.querySelector(".error-txt");
            errorTxt.innerText = eInput.value !== "" ? "Enter a valid email address" : "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }
    function checkPass() { // check passwpord functyuion
        if (pInput.value == "") { //if pass is empty the error remove valid classs
            pField.classList.add("error");
            pField.classList.remove("valid");
            // con
            const errorTxt = pField.querySelector(".error-txt");
            errorTxt.innerText = "Password can't be blank";
        }else{
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }
    // if efield and pfield  doesnt contain error class 
    if (pInput.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");// redirect iser to thr specific url 
    };
};
//toggling pqassword visibility
    passToggleBtn.addEventListener('click', () => {
        passToggleBtn.className = pInput.type === "password" ? "bi bi-eye-slash" : "bi bi-eye";
        pInput.type = pInput.type = "password" ? "text" : "password";
    });
