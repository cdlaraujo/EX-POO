"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedRoom = void 0;
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
