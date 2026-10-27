"use strict";

document.getElementById("bookingForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const seats = Number(document.getElementById("seats").value);

        const namePattern = /^[A-Za-z ]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!namePattern.test(name)) {
            alert("Name must contain only alphabets.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Enter a valid email.");
            return;
        }

        if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
            alert("Seats must be between 1 and 10.");
            return;
        }

        const booking = { name, email, seats };

        document.getElementById("result").textContent =
            `Booking confirmed for ${booking.name}. Seats: ${booking.seats}. Email: ${booking.email}`;

        console.log(booking);
    });