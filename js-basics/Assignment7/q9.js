const form = document.getElementById("myForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

let submitted = false;

// Validate form
function validateForm() {

    let valid = true;

    if (name.value.trim() === "") {

        document.getElementById("nameError").textContent =
            "Name is required";

        valid = false;

    } else {

        document.getElementById("nameError").textContent = "";

    }

    if (!email.value.includes("@")) {

        document.getElementById("emailError").textContent =
            "Enter valid email";

        valid = false;

    } else {

        document.getElementById("emailError").textContent = "";

    }

    if (password.value.length < 6) {

        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters";

        valid = false;

    } else {

        document.getElementById("passwordError").textContent = "";

    }

    return valid;
}

// Stop form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    submitted = true;

    if (validateForm()) {

        document.getElementById("success").textContent =
            "Form Submitted Successfully";

        form.reset();
        submitted = false;

    }

});

// Remove errors when user corrects input
[name, email, password].forEach(function (input) {

    input.addEventListener("input", function () {

        if (submitted) {
            validateForm();
        }

    });

});