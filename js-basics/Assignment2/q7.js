
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert feedback to lowercase.
let text = feedback.toLowerCase();

// Count words.
let words = feedback.trim().split(" ");
let wordCount = words.length;

console.log("Feedback: " + feedback);
console.log("Word Count: " + wordCount);

// Check for negative words.
if (text.includes("bad") || text.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
