// Q5 - Team Members Directory

$(document).ready(function () {

    // Click manager to highlight all direct reports
    $(".manager").click(function (event) {

        if ($(event.target).hasClass("contactBtn")) {
            return;
        }

        $(this).siblings(".report").toggleClass("highlight");

    });

    // .next() selects the contact information after the button
    $(".contactBtn").click(function () {

        $(this).next(".contact").slideToggle();

    });

    // .children() selects direct employee elements of a department
    $(".department-title").click(function () {

        $(this).parent().children(".employee").css(
            "background-color", "lightblue"
        );

    });

    // Select a random employee and highlight its siblings
    $("#randomEmployee").click(function () {

        const employees = $(".employee");

        const randomIndex = Math.floor(Math.random() * employees.length);

        const selectedEmployee = employees.eq(randomIndex);

        $(".employee").removeClass("selected highlight");

        selectedEmployee.addClass("selected");

        selectedEmployee.siblings(".employee").addClass("highlight");

    });

    // .parent() and .find() collapse or expand the team
    $("#toggleTeam").click(function () {

        $(this).parent().find("#teamContent").slideToggle();

    });

});