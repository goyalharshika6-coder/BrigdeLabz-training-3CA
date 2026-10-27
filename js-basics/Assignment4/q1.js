"use strict";

// Create Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount() {
        this.price = this.price - (this.price * 10 / 100);
    }

    // Display product details
    displayDetails() {
        return `${this.name} | Price: ₹${this.price} | Category: ${this.category}`;
    }
}

// Create product objects
const product1 = new Product(1, "Laptop", 50000, "Electronics");
const product2 = new Product(2, "Mouse", 500, "Accessories");
const product3 = new Product(3, "Phone", 15000, "Electronics");

// Store products in array
const products = [product1, product2, product3];

// Apply discount to first product
product1.applyDiscount();

// Display all products
for (let product of products) {
    console.log(product.displayDetails());
}

// Filter products with price above 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("Products above ₹1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));