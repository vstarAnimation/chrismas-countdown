const form = document.querySelector("form");
const eField = form.querySelector(".email");
const eInput = eField.querySelector("input");
const pField = form.querySelector(".password");
const pInput = pField.querySelector("input");
const passToggleBtn = document.getElementById("password-icon");

form.onsubmit = (e) => {
    e.preventDefault(); // Preventing the default submit action


    (eInput.value === "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value === "") ? pField.classList.add("shake", "error") : checkPass();

    
    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    // Validate email and password on input
    eInput.onkeyup = () => { checkEmail(); };
    pInput.onkeyup = () => { checkPass(); };

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

    function checkPass() { // Check password validation
        if (pInput.value === "") { // If password is empty
            pField.classList.add("error");
            pField.classList.remove("valid");
            const errorTxt = pField.querySelector(".error-txt");
            errorTxt.innerText = "Password can't be blank";
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    // Redirect user if both fields are valid
    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        // Replace `form.getAttribute("action")` with your login endpoint
        window.location.href = "chirstmas.html";
    }
};


// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "bi bi-unlock" : "bi bi-lock";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});
