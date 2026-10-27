"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    // NaN, blank strings, and strings with units are invalid.
    let isInvalid =
        (typeof value === "string" && value.trim() === "") ||
        Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "NaN") ||
        (typeof value === "string" && value.trim() === "100px");

    console.log(`Original: ${String(value)}`);
    console.log(`Number: ${numberValue}, Boolean: ${booleanValue}, String: "${stringValue}"`);

    if (isInvalid) {
        invalidNumbers.push(value);
        console.log("Status: Invalid number");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid number");
    }

    console.log("-------------------");
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);