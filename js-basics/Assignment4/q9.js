"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        // Accept coupons such as SAVE20 or DISC10
        const pattern = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(pattern);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Invalid discount percentage.");
            return this.getTotal();
        }

        const discount = this.getTotal() * discountPercent / 100;
        const finalTotal = this.getTotal() - discount;

        console.log(`Original Total: ₹${this.getTotal()}`);
        console.log(`Discount: ${discountPercent}%`);
        console.log(`Discount Amount: ₹${discount}`);
        console.log(`Final Total: ₹${finalTotal}`);

        return finalTotal;
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.addItem("Keyboard", 1000, 1);

console.log("Cart Items:", cart.items);
console.log("Total:", cart.getTotal());

// Try a coupon
cart.applyCoupon("SAVE20");