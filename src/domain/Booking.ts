import { Accommodation } from "./Accommodation";
import { PricingService } from "./PricingService";

export class Booking {
  public basePrice: number;
  public totalPrice: number;

  constructor(
    public accommodation: Accommodation,
    public days: number,
    pricingService: PricingService
  ) {
    this.basePrice = accommodation.calculatePrice(days);
    this.totalPrice = pricingService.applyFees(this.basePrice);
  }
}
