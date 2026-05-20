import { House, Apartment, SharedRoom } from "./domain/Accommodation";
import { PlatformFee, CleaningFee, ServiceFee } from "./domain/Fee";
import { PricingService } from "./domain/PricingService";
import { InMemoryAccommodationRepository } from "./infra/InMemoryAccommodationRepository";
import { CreateBooking } from "./application/CreateBooking";

// --- Setup ---

const repository = new InMemoryAccommodationRepository();

repository.save(new House("1", "Casa na Praia", 300));
repository.save(new Apartment("2", "Apartamento Centro", 150));
repository.save(new SharedRoom("3", "Quarto Compartilhado Vila Madalena", 80));

const pricingService = new PricingService([
  new PlatformFee(),
  new ServiceFee(),
]);

const createBooking = new CreateBooking(repository, pricingService);

// --- Execução ---

const bookings = [
  createBooking.execute({ accommodationId: "1", days: 5 }),
  createBooking.execute({ accommodationId: "2", days: 3 }),
  createBooking.execute({ accommodationId: "3", days: 7 }),
];

for (const booking of bookings) {
  console.log("=".repeat(40));
  console.log(`Acomodação : ${booking.accommodation.name}`);
  console.log(`Diárias    : ${booking.days}`);
  console.log(`Preço base : R$ ${booking.basePrice.toFixed(2)}`);
  console.log(`Total      : R$ ${booking.totalPrice.toFixed(2)}`);
}

console.log("=".repeat(40));
