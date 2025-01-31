import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Car, User, Phone, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendQuoteEmail } from '../utils/email';
import type { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const vehicles = [
  { id: 'v1', name: 'Mercedes-Benz Vito VIP', pricePerHour: 750 },
  { id: 'v2', name: 'BMW 7 Serisi', pricePerHour: 1000 },
  { id: 'v3', name: 'Mercedes-Benz S Class', pricePerHour: 1200 }
];

const durations = [
  { id: 'd1', name: '4 Saat', value: 4 },
  { id: 'd2', name: '8 Saat', value: 8 },
  { id: 'd3', name: '12 Saat', value: 12 },
  { id: 'd4', name: 'Tam Gün (24 Saat)', value: 24 }
];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedVehicle: '',
    selectedDuration: ''
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (formData.selectedVehicle && formData.selectedDuration) {
      const vehicle = vehicles.find(v => v.id === formData.selectedVehicle);
      const duration = durations.find(d => d.id === formData.selectedDuration);
      
      if (vehicle && duration) {
        setTotalPrice(vehicle.pricePerHour * duration.value);
      }
    }
  }, [formData.selectedVehicle, formData.selectedDuration]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validasyonu
    if (!formData.name || !formData.email || !formData.phone || 
        !formData.selectedVehicle || !formData.selectedDuration) {
      toast.error('Lütfen tüm alanları doldurunuz');
      return;
    }

    setIsSubmitting(true);

    try {
      const quoteData: QuoteFormData = {
        ...formData,
        totalPrice
      };

      // E-posta gönderimi
      await sendQuoteEmail(quoteData);
      
      toast.success('Teklifiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.');
      onClose();
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Hızlı Teklif Al</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Kişisel Bilgiler */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline-block mr-1" />
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
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
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
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
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
                  required
                />
              </div>

              {/* Araç Seçimi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Car className="w-4 h-4 inline-block mr-1" />
                  Araç Seçimi
                </label>
                <div className="space-y-2">
                  {vehicles.map((vehicle) => (
                    <label
                      key={vehicle.id}
                      className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                        formData.selectedVehicle === vehicle.id
                          ? 'border-[#C5A572] bg-[#C5A572]/10'
                          : 'border-gray-200 hover:border-[#C5A572]'
                      }`}
                    >
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="vehicle"
                          value={vehicle.id}
                          checked={formData.selectedVehicle === vehicle.id}
                          onChange={(e) => setFormData({ ...formData, selectedVehicle: e.target.value })}
                          className="mr-3"
                        />
                        <span>{vehicle.name}</span>
                      </div>
                      <span className="text-[#C5A572] font-semibold">{vehicle.pricePerHour}₺/saat</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Süre Seçimi */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="w-4 h-4 inline-block mr-1" />
                  Süre Seçimi
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {durations.map((duration) => (
                    <label
                      key={duration.id}
                      className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition ${
                        formData.selectedDuration === duration.id
                          ? 'border-[#C5A572] bg-[#C5A572]/10'
                          : 'border-gray-200 hover:border-[#C5A572]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="duration"
                        value={duration.id}
                        checked={formData.selectedDuration === duration.id}
                        onChange={(e) => setFormData({ ...formData, selectedDuration: e.target.value })}
                        className="mr-3"
                      />
                      <span>{duration.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Toplam Fiyat */}
              {totalPrice > 0 && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-lg font-semibold text-center">
                    Toplam Tutar: <span className="text-[#C5A572]">{totalPrice}₺</span>
                  </div>
                </div>
              )}

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-[#C5A572] hover:bg-[#B89355] text-white rounded-lg transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Teklif Al'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}