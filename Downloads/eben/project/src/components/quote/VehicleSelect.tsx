import React from 'react';
import { Car } from 'lucide-react';
import { VEHICLES } from '../../utils/constants';

interface Props {
  value: string;
  onChange: (field: string, value: string) => void;
}

export function VehicleSelect({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Car className="w-4 h-4 inline-block mr-1" />
        Araç Seçimi
      </label>
      <div className="space-y-2">
        {VEHICLES.map((vehicle) => (
          <label
            key={vehicle.id}
            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
              value === vehicle.id
                ? 'border-[#C5A572] bg-[#C5A572]/10'
                : 'border-gray-200 hover:border-[#C5A572]'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="vehicle"
                value={vehicle.id}
                checked={value === vehicle.id}
                onChange={(e) => onChange('selectedVehicle', e.target.value)}
                className="mr-3"
              />
              <span>{vehicle.name}</span>
            </div>
            <span className="text-[#C5A572] font-semibold">{vehicle.pricePerHour}₺/saat</span>
          </label>
        ))}
      </div>
    </div>
  );
}