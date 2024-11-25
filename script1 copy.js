const form = document.querySelector("form");
const eField = form.querySelector("email");
const eInput = eField.querySelector("input")
const pField = form.querySelector("password");
const pInput = pField.querySelector("input");
const passToggleBtn = document.getElementById("password");

form.onsubmit = (e) =>{
    e.preventdefault();
    //prevehting tbe submit
    //if the email and paaswrord are empty 
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

    setTimeout( () => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    },500) 

    eInput.onkeyup = () => {checkEmail();}//calling check email function
    pInput.onkeyup = () => {checkPass();}// callin check pass function

    function checkEmail() {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;//patern foor gmail
        if (!eInput.value.match(pattern)) { // if pattn is not matched
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-text");
            // if email value is not empty show pleasebemter a valid email 
            (eInput.value !== "") ? errorTxt.innerText = "enter a valid email address" : errorTxt.innerText = "email can't be blank";
            }else{
                eField.classList.remove("error");
                eField.classList.add("valid");
            }
    }
    function checkPass() { // check passwpord functyuion
        if (!pInput.value == "") { //if pass is empty the error remove valid classs
            pField.classList.add("error");
            pField.classList.remove("valid");
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
        passToggleBtn.className = pInput.type === "password" ? "bi bi-eye-slash icons" : "bi bi-eye icons";
        pInput.type = pInput.type = "password" ? "text" : "password";
    });