"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    showCar() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Price: ₹" + this.price);
    }
}
const car1 = new Car("Hyundai", "Creta", 1500000);
car1.showCar();
