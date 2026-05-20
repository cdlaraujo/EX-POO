import { Fee } from "../interfaces/Fee";

export class PlatformFee implements Fee {
  private static readonly RATE = 0.0585; // 5.85%

  calculate(amount: number): number {
    return amount * PlatformFee.RATE;
  }
}

export class CleaningFee implements Fee {
  constructor(private readonly fixedAmount: number) {}

  calculate(_amount: number): number {
    return this.fixedAmount;
  }
}

export class ServiceFee implements Fee {
  constructor(private readonly rate: number) {}

  calculate(amount: number): number {
    return amount * this.rate;
  }
}
