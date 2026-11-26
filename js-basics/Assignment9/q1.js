// Q1 - Welcome Page Greeting

$(document).ready(function () {

    // Get the current hour
    const hour = new Date().getHours();

    let message;

    // Display greeting according to time
    if (hour < 12) {
        message = "Good Morning! Welcome to our website.";
    }
    else if (hour < 17) {
        message = "Good Afternoon! Welcome to our website.";
    }
    else {
        message = "Good Evening! Welcome to our website.";
    }

    // Display greeting on page load
    $("#greeting").text(message);


    // Change Greeting button
    $("#changeGreeting").click(function () {

        const quotes = [
            "Believe in yourself and keep moving forward!",
            "Every small step takes you closer to success.",
            "Great things happen when you stay consistent.",
            "Your only limit is your mindset.",
            "Never stop learning and growing."
        ];

        // Select a random motivational quote
        const randomIndex = Math.floor(Math.random() * quotes.length);

        $("#greeting").text(quotes[randomIndex]);

    });


    // Toggle welcome message visibility
    $("#toggleWelcome").click(function () {

        $("#welcomeMessage").toggle(400);

    });


    // Show alert when greeting is clicked
    $("#greeting").click(function () {

        alert("Thank you for visiting our website!");

    });

});