import { Fee } from "./Fee";

export class PricingService {
  constructor(private fees: Fee[]) {}

  applyFees(baseAmount: number): number {
    const totalFees = this.fees.reduce((sum, fee) => {
      return sum + fee.calculate(baseAmount);
    }, 0);

    return baseAmount + totalFees;
  }
}
