"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceFee = exports.CleaningFee = exports.PlatformFee = void 0;
class PlatformFee {
    constructor() {
        this.RATE = 0.0585; // 5.85%
    }
    calculate(amount) {
        return amount * this.RATE;
    }
}
exports.PlatformFee = PlatformFee;
class CleaningFee {
    constructor() {
        this.FIXED_AMOUNT = 50;
    }
    calculate(amount) {
        return this.FIXED_AMOUNT;
    }
}
exports.CleaningFee = CleaningFee;
class ServiceFee {
    constructor() {
        this.RATE = 0.03; // 3%
    }
    calculate(amount) {
        return amount * this.RATE;
    }
}
exports.ServiceFee = ServiceFee;
