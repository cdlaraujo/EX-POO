"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PricingService = void 0;
class PricingService {
    constructor(fees) {
        this.fees = fees;
    }
    applyFees(baseAmount) {
        const totalFees = this.fees.reduce((sum, fee) => {
            return sum + fee.calculate(baseAmount);
        }, 0);
        return baseAmount + totalFees;
    }
}
exports.PricingService = PricingService;
