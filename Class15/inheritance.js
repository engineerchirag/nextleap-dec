class Car {
    constructor(model, name) {
        this.model = model;
        this.name = name;
        this.getBasicDetails = function() {
            return `Car name is ${this.name} and model is ${this.model}`;
        }
    }
}

class SuperCar extends Car{
    constructor(model, name, price) {
        super(model, name);
        this.price = price;
    }

    getTotalPrice(tax) {
        return this.price + this.price * tax * 0.01;
    }
}

const BMWCar = new SuperCar('iX', 'BMW', 12100000);
const MercedesCar = new SuperCar('A', 'Mercedes', 11100000);
