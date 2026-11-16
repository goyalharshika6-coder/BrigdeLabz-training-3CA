const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

// Track mouse position
box.addEventListener("mousemove", function (event) {

    coordinates.textContent =
        "X: " + event.clientX +
        " Y: " + event.clientY;

});

// Double click to create red dot
box.addEventListener("dblclick", function (event) {

    let dot = document.createElement("div");

    dot.className = "dot";

    let position = box.getBoundingClientRect();

    dot.style.left = (event.clientX - position.left) + "px";
    dot.style.top = (event.clientY - position.top) + "px";

    box.appendChild(dot);

});