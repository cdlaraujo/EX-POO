import { Accommodation } from "../interfaces/Accommodation";
import { PricingService } from "./PricingService";

export class Booking {
  public readonly basePrice: number;
  public readonly totalPrice: number;

  constructor(
    public readonly accommodation: Accommodation,
    public readonly days: number,
    pricingService: PricingService
  ) {
    this.basePrice = accommodation.calculatePrice(days);
    this.totalPrice = pricingService.applyFees(this.basePrice);
  }
}
