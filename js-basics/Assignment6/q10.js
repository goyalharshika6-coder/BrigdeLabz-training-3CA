function takeOrder() {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 1: Order taken");
                resolve();
            } else {
                reject("Order taking failed");
            }
        }, time);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 2: Food prepared");
                resolve();
            } else {
                reject("Food preparation failed");
            }
        }, time);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 3: Package ready");
                resolve();
            } else {
                reject("Packing failed");
            }
        }, time);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 4: Out for delivery");
                resolve();
            } else {
                reject("Dispatch failed");
            }
        }, time);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Delivery completed!");
                resolve();
            } else {
                reject("Delivery failed");
            }
        }, time);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");

        // await waits for the current step to finish.
        // The next step starts only after the previous one succeeds.

        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();

    } catch (error) {
        // If any step fails, the remaining steps will not run.
        console.log("Pipeline failed!");
    }
}

runPipeline();