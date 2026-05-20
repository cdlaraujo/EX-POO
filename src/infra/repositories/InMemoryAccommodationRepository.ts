import { Accommodation } from "../../domain/interfaces/Accommodation";
import { AccommodationRepository } from "../../domain/interfaces/AccommodationRepository";

export class InMemoryAccommodationRepository implements AccommodationRepository {
  private store: Map<string, Accommodation> = new Map();

  findById(id: string): Accommodation | undefined {
    return this.store.get(id);
  }

  save(accommodation: Accommodation): void {
    this.store.set(accommodation.id, accommodation);
  }
}
