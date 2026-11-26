// Q4 - Special Offer Banner

$(document).ready(function () {

    // Hide all banners
    $("#hide").click(function () {
        $(".banner").hide();
    });

    // Show all banners
    $("#show").click(function () {
        $(".banner").show();
    });

    // Slide up banners
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    // Slide down banners
    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });

    // Fade out banners
    $("#fadeOut").click(function () {
        $(".banner").fadeOut(500);
    });

    // Fade in banners
    $("#fadeIn").click(function () {
        $(".banner").fadeIn(500);
    });

    let index = 0;
    let timer = null;

    // Rotate banners every 5 seconds
    function rotateBanner() {

        $(".banner").hide();

        $(".banner").eq(index).fadeIn(500);

        index = (index + 1) % $(".banner").length;
    }

    // Start automatic rotation
    function startRotation() {

        if (timer !== null) return;

        rotateBanner();

        timer = setInterval(rotateBanner, 5000);

        $("#status").text("Rotation is running.");
    }

    // Stop automatic rotation
    function stopRotation() {

        clearInterval(timer);
        timer = null;

        $("#status").text("Rotation is stopped.");
    }

    $("#start").click(startRotation);
    $("#stop").click(stopRotation);

    // Start when page loads
    startRotation();

});