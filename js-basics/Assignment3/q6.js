"use strict";

const rows = 5; // Default number of rows
let pattern = "";

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern.trim());
    pattern = "";
}