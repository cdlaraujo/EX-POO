"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedRoom = exports.Apartment = exports.House = void 0;
class House {
    constructor(id, name, pricePerNight) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
        this.CLEANING_FEE = 80;
    }
    calculatePrice(days) {
        return this.pricePerNight * days + this.CLEANING_FEE;
    }
}
exports.House = House;
class Apartment {
    constructor(id, name, pricePerNight) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
        this.CONDO_FEE_PER_NIGHT = 15;
    }
    calculatePrice(days) {
        return (this.pricePerNight + this.CONDO_FEE_PER_NIGHT) * days;
    }
}
exports.Apartment = Apartment;
class SharedRoom {
    constructor(id, name, pricePerNight) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
    }
    calculatePrice(days) {
        return this.pricePerNight * days;
    }
}
exports.SharedRoom = SharedRoom;
