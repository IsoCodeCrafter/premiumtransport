import React from 'react';
import { Clock } from 'lucide-react';
import { DURATIONS } from '../../utils/constants';

interface Props {
  value: string;
  onChange: (field: string, value: string) => void;
}

export function DurationSelect({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <Clock className="w-4 h-4 inline-block mr-1" />
        Süre Seçimi
      </label>
      <div className="grid grid-cols-2 gap-4">
        {DURATIONS.map((duration) => (
          <label
            key={duration.id}
            className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition ${
              value === duration.id
                ? 'border-[#C5A572] bg-[#C5A572]/10'
                : 'border-gray-200 hover:border-[#C5A572]'
            }`}
          >
            <input
              type="radio"
              name="duration"
              value={duration.id}
              checked={value === duration.id}
              onChange={(e) => onChange('selectedDuration', e.target.value)}
              className="mr-3"
            />
            <span>{duration.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}