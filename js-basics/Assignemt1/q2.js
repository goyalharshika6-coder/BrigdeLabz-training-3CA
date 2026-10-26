
const userName = "Harshika";
const age = 21;
const isStudent = true;
const subjects = ["Java", "JavaScript", "DBMS"];
const user = { name: "Harshika", city: "Moradabad" };
const middleName = null;
let address;

const report = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects.join(", "), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: String(middleName) },
    { Label: "Address", Value: String(address), Type: typeof address }
];

// Print the complete report in one table.
console.table(report);
