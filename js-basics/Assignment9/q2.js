// Q2 - Product Highlight

$(document).ready(function () {

    // Click on product to highlight it
    $(".product").click(function (event) {

        if ($(event.target).hasClass("favorite")) {
            return;
        }

        $(".product").removeClass("highlight");
        $(this).addClass("highlight");

        // Check stock using data attribute
        if ($(this).attr("data-stock") === "out") {
            alert("Sorry! This product is out of stock.");
        }
    });

    // Hover to show product details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );

    // Toggle favorite class
    $(".favorite").click(function (event) {

        event.stopPropagation();

        $(this).toggleClass("selected");

        if ($(this).hasClass("selected")) {
            $(this).text("♥ Favorited");
        } else {
            $(this).text("♡ Favorite");
        }
    });

    // Attribute selector for discounted products
    $('.product[data-discount]').css({
        "background-color": "#fff0d9",
        "border": "2px solid orange"
    });

});