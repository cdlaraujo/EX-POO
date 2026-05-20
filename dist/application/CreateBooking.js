"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBooking = void 0;
const Booking_1 = require("../domain/Booking");
class CreateBooking {
    constructor(repository, pricingService) {
        this.repository = repository;
        this.pricingService = pricingService;
    }
    execute(input) {
        const accommodation = this.repository.findById(input.accommodationId);
        if (!accommodation) {
            throw new Error(`Accommodation with id "${input.accommodationId}" not found.`);
        }
        return new Booking_1.Booking(accommodation, input.days, this.pricingService);
    }
}
exports.CreateBooking = CreateBooking;
