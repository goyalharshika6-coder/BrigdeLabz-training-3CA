const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

// Update character counter
message.addEventListener("input", function () {

    let remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

// Prevent extra typing
message.addEventListener("keydown", function (event) {

    let allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ];

    if (message.value.length >= 100 && !allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});

// Reset counter
resetButton.addEventListener("click", function () {

    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";

});