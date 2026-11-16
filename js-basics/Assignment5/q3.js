const user = {
    name: "Harshika",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Using normal function
const user2 = {
    name: "Harshika",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();