"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingService = void 0;
class PricingService {
    constructor(fees) {
        this.fees = fees;
    }
    applyFees(basePrice) {
        const totalFees = this.fees.reduce((sum, fee) => sum + fee.calculate(basePrice), 0);
        return basePrice + totalFees;
    }
}
exports.PricingService = PricingService;
