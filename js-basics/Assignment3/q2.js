"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

try {
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        if (!employee.name || employee.salary === undefined ||
            employee.years === undefined) {
            throw new Error("Missing employee information");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or years");
        }

        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        } else {
            bonus = salary * 0.05;
        }

        console.log(`Employee: ${employee.name}`);
        console.log(`Salary: ₹${salary}`);
        console.log(`Experience: ${years} years`);
        console.log(`Bonus: ₹${bonus}`);
        console.log("-------------------");
    }
} catch (error) {
    console.log("Error:", error.message);
}