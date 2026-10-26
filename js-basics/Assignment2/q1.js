
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only if the employee is permanent.
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent Employee: ${isPermanent}`);
    console.log(`Total Salary: ₹${salary}`);
}

// Test both conditions.
calculateSalary(true);
calculateSalary(false);

// Change the global bonus and test again.
bonus = 7000;
console.log(`Updated Global Bonus: ₹${bonus}`);

calculateSalary(true);
