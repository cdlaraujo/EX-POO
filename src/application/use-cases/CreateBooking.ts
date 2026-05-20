import { Booking } from "../../domain/entities/Booking";
import { PricingService } from "../../domain/entities/PricingService";
import { AccommodationRepository } from "../../domain/interfaces/AccommodationRepository";

export interface CreateBookingInput {
  accommodationId: string;
  days: number;
}

export class CreateBooking {
  constructor(
    private readonly repository: AccommodationRepository,
    private readonly pricingService: PricingService
  ) {}

  execute(input: CreateBookingInput): Booking {
    const accommodation = this.repository.findById(input.accommodationId);

    if (!accommodation) {
      throw new Error(`Accommodation with id "${input.accommodationId}" not found.`);
    }

    return new Booking(accommodation, input.days, this.pricingService);
  }
}
