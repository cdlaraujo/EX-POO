import { Booking } from "../domain/Booking";
import { AccommodationRepository } from "../domain/AccommodationRepository";
import { PricingService } from "../domain/PricingService";

export interface CreateBookingInput {
  accommodationId: string;
  days: number;
}

export class CreateBooking {
  constructor(
    private repository: AccommodationRepository,
    private pricingService: PricingService
  ) {}

  execute(input: CreateBookingInput): Booking {
    const accommodation = this.repository.findById(input.accommodationId);

    if (!accommodation) {
      throw new Error(`Accommodation with id "${input.accommodationId}" not found.`);
    }

    return new Booking(accommodation, input.days, this.pricingService);
  }
}
