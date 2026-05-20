export interface Accommodation {
  id: string;
  name: string;
  pricePerNight: number;
  calculatePrice(days: number): number;
}
