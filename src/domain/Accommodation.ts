export interface Accommodation {
  id: string;
  name: string;
  pricePerNight: number;
  calculatePrice(days: number): number;
}

export class House implements Accommodation {
  private readonly CLEANING_FEE = 80;

  constructor(
    public id: string,
    public name: string,
    public pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return this.pricePerNight * days + this.CLEANING_FEE;
  }
}

export class Apartment implements Accommodation {
  private readonly CONDO_FEE_PER_NIGHT = 15;

  constructor(
    public id: string,
    public name: string,
    public pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return (this.pricePerNight + this.CONDO_FEE_PER_NIGHT) * days;
  }
}

export class SharedRoom implements Accommodation {
  constructor(
    public id: string,
    public name: string,
    public pricePerNight: number
  ) {}

  calculatePrice(days: number): number {
    return this.pricePerNight * days;
  }
}
