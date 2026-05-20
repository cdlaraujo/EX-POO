export interface Fee {
  calculate(amount: number): number;
}

export class PlatformFee implements Fee {
  private readonly RATE = 0.0585; // 5.85%

  calculate(amount: number): number {
    return amount * this.RATE;
  }
}

export class CleaningFee implements Fee {
  private readonly FIXED_AMOUNT = 50;

  calculate(amount: number): number {
    return this.FIXED_AMOUNT;
  }
}

export class ServiceFee implements Fee {
  private readonly RATE = 0.03; // 3%

  calculate(amount: number): number {
    return amount * this.RATE;
  }
}
