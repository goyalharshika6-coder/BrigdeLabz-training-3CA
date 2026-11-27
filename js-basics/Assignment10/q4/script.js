let users = document.getElementById("users");
let orders = document.getElementById("orders");
let products = document.getElementById("products");
let message = document.getElementById("message");

Promise.all([
    fetch("http://localhost:3004/users"),
    fetch("http://localhost:3004/orders"),
    fetch("http://localhost:3004/products")
])

.then(function(responses) {

    return Promise.all(responses.map(function(response) {

        if (!response.ok) {
            throw new Error("API failed");
        }

        return response.json();

    }));

})

.then(function(data) {

    users.textContent = data[0].length;
    orders.textContent = data[1].length;
    products.textContent = data[2].length;

})

.catch(function() {

    message.textContent = "Some data could not be loaded.";

    if (users.textContent === "Loading...") {
        users.textContent = "Not Available";
    }

    if (orders.textContent === "Loading...") {
        orders.textContent = "Not Available";
    }

    if (products.textContent === "Loading...") {
        products.textContent = "Not Available";
    }

});