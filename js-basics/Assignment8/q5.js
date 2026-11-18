class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0
        ) {
            throw new Error("Please enter a valid distance.");
        }

        return Number(this.distance) * 10;
    }
}

let driver = new Driver("Amit", 4.8, "Car", "UP21AB1234");

let trip = new Trip("Moradabad", "Delhi", 150);

try {
    console.log("Driver:", driver.name);
    console.log("Rating:", driver.rating);
    console.log("Vehicle:", driver.vehicle);

    console.log("From:", trip.fromLocation);
    console.log("To:", trip.toLocation);
    console.log("Distance:", trip.distance, "km");

    console.log("Total Fare: Rs.", trip.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}

try {
    let trip2 = new Trip("Delhi", "Agra", -20);
    console.log(trip2.calculateFare());

} catch (error) {
    console.log("Error:", error.message);
}
