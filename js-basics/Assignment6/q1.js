function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Water boiled");
                resolve();
            } else {
                reject("Water boiling failed");
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee brewed");
                resolve();
            } else {
                reject("Coffee brewing failed");
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Coffee poured into cup");
                resolve();
            } else {
                reject("Coffee pouring failed");
            }
        }, 1500);
    });
}

// Running all steps one by one
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log(error);
    });