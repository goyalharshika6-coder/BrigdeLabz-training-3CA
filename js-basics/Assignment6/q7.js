function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    let start = Date.now();

    let result = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    for (let i = 0; i < result.length; i++) {
        if (result[i].status === "fulfilled") {
            console.log("Success:", result[i].value);
        } else {
            console.log("Failed:", result[i].reason);
        }
    }

    let end = Date.now();

    console.log("Total time:", (end - start) / 1000, "seconds");
}

loadDashboard();