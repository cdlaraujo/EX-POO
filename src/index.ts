import { House } from "./domain/entities/House";
import { Apartment } from "./domain/entities/Apartment";
import { SharedRoom } from "./domain/entities/SharedRoom";
import { PlatformFee, CleaningFee, ServiceFee } from "./domain/entities/Fees";
import { PricingService } from "./domain/entities/PricingService";
import { Booking } from "./domain/entities/Booking";
import { InMemoryAccommodationRepository } from "./infra/repositories/InMemoryAccommodationRepository";
import { CreateBooking } from "./application/use-cases/CreateBooking";

// --- Setup: acomodações ---
const house = new House("1", "Casa na Praia", 300);
const apartment = new Apartment("2", "Apartamento Centro", 200);
const sharedRoom = new SharedRoom("3", "Quarto Compartilhado Hostel", 80);

// --- Setup: repositório ---
const repository = new InMemoryAccommodationRepository();
repository.save(house);
repository.save(apartment);
repository.save(sharedRoom);

// --- Setup: taxas e serviço de preço ---
const pricingService = new PricingService([
  new PlatformFee(),
  new ServiceFee(0.03),
]);

// --- Caso de uso ---
const createBooking = new CreateBooking(repository, pricingService);

// --- Execução ---
const accommodations = [
  { accommodationId: "1", days: 5 },
  { accommodationId: "2", days: 3 },
  { accommodationId: "3", days: 7 },
];

for (const input of accommodations) {
  const booking: Booking = createBooking.execute(input);
  console.log(`\n📍 ${booking.accommodation.name}`);
  console.log(`   Dias: ${booking.days}`);
  console.log(`   Preço base: R$ ${booking.basePrice.toFixed(2)}`);
  console.log(`   Total com taxas: R$ ${booking.totalPrice.toFixed(2)}`);
}
