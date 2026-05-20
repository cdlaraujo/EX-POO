"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryAccommodationRepository = void 0;
class InMemoryAccommodationRepository {
    constructor() {
        this.store = new Map();
    }
    findById(id) {
        return this.store.get(id);
    }
    save(accommodation) {
        this.store.set(accommodation.id, accommodation);
    }
}
exports.InMemoryAccommodationRepository = InMemoryAccommodationRepository;
