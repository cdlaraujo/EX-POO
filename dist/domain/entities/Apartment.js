"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    constructor(id, name, pricePerNight) {
        this.id = id;
        this.name = name;
        this.pricePerNight = pricePerNight;
    }
    calculatePrice(days) {
        return (this.pricePerNight + Apartment.CONDO_FEE_PER_NIGHT) * days;
    }
}
exports.Apartment = Apartment;
Apartment.CONDO_FEE_PER_NIGHT = 25;
