"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
class House {
    constructor(id, name, pricePerNight) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
    }
    calculatePrice(days) {
        return this.pricePerNight * days + House.CLEANING_FEE;
    }
}
exports.House = House;
House.CLEANING_FEE = 80;
