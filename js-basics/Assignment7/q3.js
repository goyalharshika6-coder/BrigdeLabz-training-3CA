const steps = document.querySelectorAll(".step");

// Show selected step
function showStep(number) {

    steps.forEach(function (step) {
        step.classList.remove("active");
    });

    document.getElementById("step" + number).classList.add("active");
}

// Step 1 validation
document.getElementById("next1").addEventListener("click", function () {

    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name");
    } else {
        showStep(2);
    }

});

// Step 2 validation
document.getElementById("next2").addEventListener("click", function () {

    let email = document.getElementById("email").value.trim();

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter valid email");
    } else {
        showStep(3);
    }

});

// Back buttons
document.getElementById("back2").addEventListener("click", function () {
    showStep(1);
});

document.getElementById("back3").addEventListener("click", function () {
    showStep(2);
});

// Final submission
document.getElementById("submit").addEventListener("click", function () {

    let password = document.getElementById("password").value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    steps.forEach(function (step) {
        step.style.display = "none";
    });

    document.getElementById("summary").innerHTML =
        "<h3>Form Completed Successfully</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Email: " + email + "</p>";
});

showStep(1);