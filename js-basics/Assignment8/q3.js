function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    let discount = (this.price * percent) / 100;
    return this.price - discount;
};

let p1 = new Product("Laptop", 50000);
let p2 = new Product("Mobile", 20000);
let p3 = new Product("Headphones", 3000);

console.log("Product:", p1.name);
console.log("Original Price:", p1.price);
console.log("After 10% Discount:", p1.applyDiscount(10));

console.log("------------------");

console.log("Product:", p2.name);
console.log("Original Price:", p2.price);
console.log("After 20% Discount:", p2.applyDiscount(20));

console.log("------------------");

console.log("Product:", p3.name);
console.log("Original Price:", p3.price);
console.log("After 15% Discount:", p3.applyDiscount(15));
