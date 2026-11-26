// Q3 - Interactive FAQ

$(document).ready(function () {

    // Click question to toggle answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });

    // Hover changes question color
    $(".question").hover(
        function () {
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "black");
        }
    );

    // Double click collapses all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });

    // Focus highlights parent question
    $("input").focus(function () {
        $(this).parent().find(".question").css("background-color", "yellow");
    });

    // Blur resets background color
    $("input").blur(function () {
        $(this).parent().find(".question").css("background-color", "");
    });

});