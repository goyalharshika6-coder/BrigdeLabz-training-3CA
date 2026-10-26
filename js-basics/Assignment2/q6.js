
let count = 0;

// Increase the counter.
function increment() {
    count++;
    console.log("Count: " + count);
}

// Decrease the counter.
function decrement() {
    count--;
    console.log("Count: " + count);
}

// Nested function to display the current count.
function showCount() {
    function display() {
        console.log("Current Count: " + count);
    }

    display();
}

// Simulate button clicks.
increment();
increment();
decrement();
showCount();
