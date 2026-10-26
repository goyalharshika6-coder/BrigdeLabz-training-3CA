
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;
let discountedTotal = 0;

// Calculate the original total.
for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
}

// Apply category discounts.
for (let i = 0; i < cart.length; i++) {
    let price = cart[i].price;

    if (cart[i].category == "electronics") {
        price = price - (price * 10 / 100);
    } else if (cart[i].category == "fashion") {
        price = price - (price * 5 / 100);
    }

    discountedTotal = discountedTotal + price;
}

// Apply an extra discount if the original total exceeds 50000.
if (total > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
}

console.log("Original Total: " + total);
console.log("Final Total: " + discountedTotal.toFixed(2));
