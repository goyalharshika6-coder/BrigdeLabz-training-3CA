
const currentSalary = 30000;
const annualIncrementRate = 10;
let salary = currentSalary;

const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary by the annual increment rate.
    salary *= 1 + annualIncrementRate / 100;
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: `₹${salary.toLocaleString("en-IN")}`
    });
}

console.table(salaryReport);
