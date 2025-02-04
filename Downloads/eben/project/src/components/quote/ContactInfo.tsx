import React from 'react';
import { User, Mail, Phone } from 'lucide-react';
import type { QuoteFormData } from '../../types';

interface Props {
  formData: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: string) => void;
}

export function ContactInfo({ formData, onChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline-block mr-1" />
            Ad Soyad
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline-block mr-1" />
            Telefon
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail className="w-4 h-4 inline-block mr-1" />
          E-posta
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
          required
        />
      </div>
    </div>
  );
}