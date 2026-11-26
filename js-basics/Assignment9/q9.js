jq1(document).ready(function () {

    const slides = [
        "Slide 1: Welcome to Dashboard",
        "Slide 2: Check Your Notifications",
        "Slide 3: View Your Activities",
        "Slide 4: Check Your Progress",
        "Slide 5: Have a Great Day!"
    ];

    let index = 0;

    // Version 1 handles carousel slider rotation
    jq1("#nextSlide").click(function () {

        index = (index + 1) % slides.length;

        jq1("#slideText").text(slides[index]);

    });

    // Version 1 highlights active widget
    jq1("#activeWidget").click(function () {

        jq1(".widget").removeClass("active");

        jq1(this).addClass("active");

    });

    // Display first jQuery version
    jq1("#versionInfo").text(
        "jQuery Version 1: " + jq1.fn.jquery
    );

});


// jq2 represents jQuery version 3.6.0
jq2(document).ready(function () {

    // Version 2 manages modal popup
    jq2("#openModal").click(function () {

        jq2("#modal").fadeIn();

    });

    jq2("#closeModal").click(function () {

        jq2("#modal").fadeOut();

    });

    // Version 2 attaches tooltip on hover
    jq2("#tooltipWidget").hover(

        function () {

            jq2(this).append(
                "<p class='tooltipText'>This is a tooltip message.</p>"
            );

        },

        function () {

            jq2(this).find(".tooltipText").remove();

        }

    );

    // Display second jQuery version
    jq2("#versionInfo").append(
        " | jQuery Version 2: " + jq2.fn.jquery
    );

});