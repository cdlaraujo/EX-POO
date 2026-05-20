import { Accommodation } from "../domain/Accommodation";
import { AccommodationRepository } from "../domain/AccommodationRepository";

export class InMemoryAccommodationRepository implements AccommodationRepository {
  private accommodations: Map<string, Accommodation> = new Map();

  findById(id: string): Accommodation | undefined {
    return this.accommodations.get(id);
  }

  save(accommodation: Accommodation): void {
    this.accommodations.set(accommodation.id, accommodation);
  }
}
