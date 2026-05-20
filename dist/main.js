"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accommodation_1 = require("./domain/Accommodation");
const Fee_1 = require("./domain/Fee");
const PricingService_1 = require("./domain/PricingService");
const InMemoryAccommodationRepository_1 = require("./infra/InMemoryAccommodationRepository");
const CreateBooking_1 = require("./application/CreateBooking");
// --- Setup ---
const repository = new InMemoryAccommodationRepository_1.InMemoryAccommodationRepository();
repository.save(new Accommodation_1.House("1", "Casa na Praia", 300));
repository.save(new Accommodation_1.Apartment("2", "Apartamento Centro", 150));
repository.save(new Accommodation_1.SharedRoom("3", "Quarto Compartilhado Vila Madalena", 80));
const pricingService = new PricingService_1.PricingService([
    new Fee_1.PlatformFee(),
    new Fee_1.ServiceFee(),
]);
const createBooking = new CreateBooking_1.CreateBooking(repository, pricingService);
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
