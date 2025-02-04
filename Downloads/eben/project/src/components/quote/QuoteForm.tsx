import React from 'react';
import { VehicleSelect } from './VehicleSelect';
import { DurationSelect } from './DurationSelect';
import { ContactInfo } from './ContactInfo';
import { PriceDisplay } from './PriceDisplay';
import { FormButtons } from './FormButtons';
import { useQuoteForm } from '../../hooks/useQuoteForm';
import type { QuoteFormData } from '../../types';

interface QuoteFormProps {
  onSubmit: (data: QuoteFormData) => void;
}

export function QuoteForm({ onSubmit }: QuoteFormProps) {
  const { formData, totalPrice, handleChange, handleSubmit } = useQuoteForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <ContactInfo formData={formData} onChange={handleChange} />
      <VehicleSelect value={formData.selectedVehicle} onChange={handleChange} />
      <DurationSelect value={formData.selectedDuration} onChange={handleChange} />
      <PriceDisplay price={totalPrice} />
      <FormButtons />
    </form>
  );
}