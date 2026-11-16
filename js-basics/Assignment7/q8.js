const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

// Close dropdown using capturing phase
document.addEventListener("click", function (event) {

    if (!dropdownButton.contains(event.target) &&
        !options.contains(event.target)) {

        options.style.display = "none";

    }

}, true);

// Show and hide dropdown
dropdownButton.addEventListener("click", function (event) {

    event.stopPropagation();

    if (options.style.display === "block") {

        options.style.display = "none";

    } else {

        options.style.display = "block";

    }

});

// Select option
options.addEventListener("click", function (event) {

    if (event.target.tagName === "P") {

        dropdownButton.textContent = event.target.textContent;

        options.style.display = "none";

    }

});