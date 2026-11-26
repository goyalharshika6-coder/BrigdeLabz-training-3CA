const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxLength = 100;

// Update character counter
message.addEventListener("input", function () {

    let remaining = maxLength - message.value.length;

    counter.textContent = remaining + " characters remaining";

    counter.className = "";

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

// Prevent extra typing
message.addEventListener("keydown", function (event) {

    let allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab"
    ];

    if (message.value.length >= 100 && !allowedKeys.includes(event.key)) {
        event.preventDefault();
    }
});

// Reset counter
resetButton.addEventListener("click", function () {

    message.value = "";
    counter.textContent = "100 characters remaining";
    counter.className = "";

});
//checkbox selection :-
document.querySelector("#btn").addEventListener("click",)
console.log(checkoutput);
let file = document.querySelector("input[type=file]");
console.log(file.files)
document.querySelector("img").src = URL.createrObjectURL(file.files[0]); 6
//timers and timeouts
//setTimeout(callback, timeout, args)
let timeout = seTtimeout((a) =>{
    console.log("timeout", a)
}, 2000, "hello");

}
let count = 0;
let interval = setInterval(()==>{
    console.log("interval")
    document.querySelector("button").textContent = ++count
    let inteval = setInterval(() => {
        document.querySelector("body").style.background = 'rgb(${Math.random()*88}, ${Math.random()*233}, ${Math.random()*111})'
    }, 100)
}
//promise;
let pro = new Promise((resolved, reject) => {
    setTimeout(()=> {
        //reject("failed");
        resolve("passed");
    }, 1000);
})
console.log(pro);
//then, catch
pro.then((result)=>{console.log(result) })
pro.catch((err => { con
})   
let pro1 = new Promise((resolve, reject) =>)