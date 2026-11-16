const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const largeImage = document.getElementById("largeImage");

// Open image
gallery.addEventListener("click", function (event) {

    if (event.target.tagName === "IMG") {

        largeImage.src = event.target.src;
        modal.style.display = "flex";

    }

});

// Close modal
modal.addEventListener("click", function () {

    modal.style.display = "none";

});

// Stop event propagation
largeImage.addEventListener("click", function (event) {

    event.stopPropagation();

});