import { useState, useEffect } from 'react';
import { calculateTotalPrice } from '../utils/pricing';
import type { QuoteFormData } from '../types';

export function useQuoteForm(onSubmit: (data: QuoteFormData) => void) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    selectedVehicle: '',
    selectedDuration: '',
    totalPrice: 0
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (formData.selectedVehicle && formData.selectedDuration) {
      const price = calculateTotalPrice(formData.selectedVehicle, formData.selectedDuration);
      setTotalPrice(price);
    }
  }, [formData.selectedVehicle, formData.selectedDuration]);

  const handleChange = (field: keyof QuoteFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...formData, totalPrice });
  };

  return { formData, totalPrice, handleChange, handleSubmit };
}