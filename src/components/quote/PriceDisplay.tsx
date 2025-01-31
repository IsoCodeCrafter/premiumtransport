import React from 'react';

interface Props {
  price: number;
}

export function PriceDisplay({ price }: Props) {
  if (!price) return null;

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="text-lg font-semibold text-center">
        Toplam Tutar: <span className="text-[#C5A572]">{price}₺</span>
      </div>
    </div>
  );
}