import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { QuoteForm } from './QuoteForm';
import { calculateTotalPrice } from '../../utils/pricing';
import type { QuoteFormData } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    selectedVehicle: '',
    selectedDuration: '',
    totalPrice: 0
  });

  const handleSubmit = async (data: QuoteFormData) => {
    try {
      // E-posta gönderimi burada yapılacak
      toast.success('Teklifiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.');
      onClose();
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
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
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Hızlı Teklif Al</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <QuoteForm onSubmit={handleSubmit} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}