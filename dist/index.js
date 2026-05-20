"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const House_1 = require("./domain/entities/House");
const Apartment_1 = require("./domain/entities/Apartment");
const SharedRoom_1 = require("./domain/entities/SharedRoom");
const Fees_1 = require("./domain/entities/Fees");
const PricingService_1 = require("./domain/entities/PricingService");
const InMemoryAccommodationRepository_1 = require("./infra/repositories/InMemoryAccommodationRepository");
const CreateBooking_1 = require("./application/use-cases/CreateBooking");
// --- Setup: acomodações ---
const house = new House_1.House("1", "Casa na Praia", 300);
const apartment = new Apartment_1.Apartment("2", "Apartamento Centro", 200);
const sharedRoom = new SharedRoom_1.SharedRoom("3", "Quarto Compartilhado Hostel", 80);
// --- Setup: repositório ---
const repository = new InMemoryAccommodationRepository_1.InMemoryAccommodationRepository();
repository.save(house);
repository.save(apartment);
repository.save(sharedRoom);
// --- Setup: taxas e serviço de preço ---
const pricingService = new PricingService_1.PricingService([
    new Fees_1.PlatformFee(),
    new Fees_1.ServiceFee(0.03),
]);
// --- Caso de uso ---
const createBooking = new CreateBooking_1.CreateBooking(repository, pricingService);
// --- Execução ---
const accommodations = [
    { accommodationId: "1", days: 5 },
    { accommodationId: "2", days: 3 },
    { accommodationId: "3", days: 7 },
];
for (const input of accommodations) {
    const booking = createBooking.execute(input);
    console.log(`\n📍 ${booking.accommodation.name}`);
    console.log(`   Dias: ${booking.days}`);
    console.log(`   Preço base: R$ ${booking.basePrice.toFixed(2)}`);
    console.log(`   Total com taxas: R$ ${booking.totalPrice.toFixed(2)}`);
}
