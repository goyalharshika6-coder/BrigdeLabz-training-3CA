
const marks = [90, 85, 88, 78, 92];
const totalSubjects = marks.length;
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

const average = totalMarks / totalSubjects;
const percentage = (totalMarks / (totalSubjects * 100)) * 100;

// Check whether any subject has marks below 35.
const failed = marks.some(mark => mark < 35);

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85 && !failed) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
