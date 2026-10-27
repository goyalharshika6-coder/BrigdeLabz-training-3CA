"use strict";

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    let isValid = true;

    function validate(input, errorId, condition, message) {
        const error = document.getElementById(errorId);

        if (condition) {
            input.style.border = "2px solid green";
            error.textContent = "";
        } else {
            input.style.border = "2px solid red";
            error.textContent = message;
            isValid = false;
        }
    }

    validate(name, "nameError", /^[A-Za-z]+$/.test(name.value),
        "Name must contain only alphabets.");

    validate(email, "emailError",
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
        "Enter a valid email.");

    validate(phone, "phoneError", /^\d{10}$/.test(phone.value),
        "Phone must contain exactly 10 digits.");

    validate(password, "passwordError",
        /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/.test(password.value),
        "Password needs uppercase, number and special character.");

    document.getElementById("result").textContent =
        isValid ? "Registration successful!" : "Please correct the errors.";
});