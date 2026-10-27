"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let errors = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        data.age = Number(data.age);

        if (!Number.isFinite(data.age)) {
            throw new Error("Invalid age");
        }

        cleanData.push(data);
        console.log(`Line ${i + 1}: Valid JSON`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

const under18 = cleanData.filter(person => person.age < 18);

console.log("Clean data:", cleanData);
console.log("Errors:", errors);
console.log("Users under 18:", under18);