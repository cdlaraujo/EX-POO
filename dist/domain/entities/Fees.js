"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceFee = exports.CleaningFee = exports.PlatformFee = void 0;
class PlatformFee {
    calculate(amount) {
        return amount * PlatformFee.RATE;
    }
}
exports.PlatformFee = PlatformFee;
PlatformFee.RATE = 0.0585; // 5.85%
class CleaningFee {
    constructor(fixedAmount) {
        this.fixedAmount = fixedAmount;
    }
    calculate(_amount) {
        return this.fixedAmount;
    }
}
exports.CleaningFee = CleaningFee;
class ServiceFee {
    constructor(rate) {
        this.rate = rate;
    }
    calculate(amount) {
        return amount * this.rate;
    }
}
exports.ServiceFee = ServiceFee;
