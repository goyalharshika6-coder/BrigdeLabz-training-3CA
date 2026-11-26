// Q7 - Search Courses

$(document).ready(function () {

    // keyup event filters courses while typing
    $("#search").keyup(function () {

        const value = $(this).val().toLowerCase();

        let count = 0;

        $(".course").each(function () {

            const text = $(this).text().toLowerCase();

            // Check whether course matches search
            if (text.includes(value)) {

                $(this).show();

                count++;

                // Highlight matched courses using CSS
                if (value !== "") {
                    $(this).css({
                        "background-color": "yellow",
                        "border": "2px solid orange"
                    });
                } else {
                    $(this).css({
                        "background-color": "",
                        "border": ""
                    });
                }

            } else {

                // Hide courses that do not match
                $(this).hide();

            }

        });

        // Display total matched courses
        $("#count").text("Matching Courses: " + count);

    });

    // Clear search and show all courses
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").show();

        $(".course").css({
            "background-color": "",
            "border": ""
        });

        $("#count").text("Matching Courses: " + $(".course").length);

    });

    // Display initial course count
    $("#count").text("Matching Courses: " + $(".course").length);

});