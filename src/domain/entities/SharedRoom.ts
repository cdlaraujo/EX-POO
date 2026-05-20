import { Accommodation } from "../interfaces/Accommodation";

export class SharedRoom implements Accommodation {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return this.pricePerNight * days;
  }
}
