"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAccommodationRepository = void 0;
class InMemoryAccommodationRepository {
    constructor() {
        this.accommodations = new Map();
    }
    findById(id) {
        return this.accommodations.get(id);
    }
    save(accommodation) {
        this.accommodations.set(accommodation.id, accommodation);
    }
}
exports.InMemoryAccommodationRepository = InMemoryAccommodationRepository;
