const buttons = document.querySelectorAll("button");

// Change theme
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let theme = button.getAttribute("data-theme");

        document.body.setAttribute("class", theme);
        document.body.setAttribute("data-theme", theme);

    });

});