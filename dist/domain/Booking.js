"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
class Booking {
    constructor(accommodation, days, pricingService) {
        this.accommodation = accommodation;
        this.days = days;
        this.basePrice = accommodation.calculatePrice(days);
        this.totalPrice = pricingService.applyFees(this.basePrice);
    }
}
exports.Booking = Booking;
