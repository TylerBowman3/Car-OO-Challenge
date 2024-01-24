class CarStats {
    constructor(make,model,year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep!";
    }
    toString() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car extends CarStats {
    constructor(make,model,year) {
        super(make,model,year);
    }
    numWheels() {
        return 4;
    }
}

class Motorcycle extends CarStats {
    constructor(make,model,year) {
        super(make,model,year);
    }
    numWheels() {
        return 2;
    }
    revEngine() {
        return "VROOOMM!";
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        if (!(vehicle instanceof CarStats)) {
            return "Sorry, only vehicles allowed.";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, the gargage is full.";
        }
        this.vehicles.push(vehicle);
        return "Vehicle put into garage.";
    }
}


    