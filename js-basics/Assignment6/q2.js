console.log("Start");

// setTimeout is a macrotask
setTimeout(() => {
    console.log("SetTimeout callback");
}, 0);

// Promise is a microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("End");

// First synchronous code runs.
// Then microtasks run.
// After that macrotasks run.
// So Promise callback comes before setTimeout.