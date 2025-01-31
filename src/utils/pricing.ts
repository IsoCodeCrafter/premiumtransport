import { VEHICLES, DURATIONS } from './constants';

export function calculateTotalPrice(vehicleId: string, durationId: string): number {
  const vehicle = VEHICLES.find(v => v.id === vehicleId);
  const duration = DURATIONS.find(d => d.id === durationId);

  if (!vehicle || !duration) return 0;
  return vehicle.pricePerHour * duration.value;
}