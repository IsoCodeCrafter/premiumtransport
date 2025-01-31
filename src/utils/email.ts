import emailjs from '@emailjs/browser';
import type { QuoteFormData } from '../types';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendQuoteEmail = async (formData: QuoteFormData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      vehicle: formData.selectedVehicle,
      duration: formData.selectedDuration,
      total_price: formData.totalPrice,
      to_name: 'Callıoğlu Transfer'
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return true;
    }
    throw new Error('Email gönderilemedi');
  } catch (error) {
    console.error('Email gönderimi başarısız:', error);
    throw error;
  }
};