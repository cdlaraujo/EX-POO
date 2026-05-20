import { Accommodation } from "./Accommodation";

export interface AccommodationRepository {
  findById(id: string): Accommodation | undefined;
  save(accommodation: Accommodation): void;
}
