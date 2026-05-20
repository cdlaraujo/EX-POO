import { Accommodation } from "../interfaces/Accommodation";

export class House implements Accommodation {
  private static readonly CLEANING_FEE = 80;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return this.pricePerNight * days + House.CLEANING_FEE;
  }
}
