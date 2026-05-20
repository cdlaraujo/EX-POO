import { Accommodation } from "../interfaces/Accommodation";

export class Apartment implements Accommodation {
  private static readonly CONDO_FEE_PER_NIGHT = 25;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return (this.pricePerNight + Apartment.CONDO_FEE_PER_NIGHT) * days;
  }
}
