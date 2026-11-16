function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}

// Promise.all waits for both servers
Promise.all([serverA(), serverB()])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log(error);
    });

// Promise.race gives the first settled result
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });