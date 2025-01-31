import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../utils/constants';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Callıoğlu Transfer'
      };

      const response = await emailjs.send(
        'service_callı',
        'template_rdu7b23',
        templateParams,
        'EJBvKCNIZ4F4eKhEI'
      );

      if (response.status === 200) {
        toast.success('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Form gönderimi başarısız:', error);
      toast.error('Bir hata oluştu. Lütfen tekrar deneyiniz.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
          <p className="text-lg text-gray-600">7/24 hizmetinizdeyiz</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A572] p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefon</div>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-gray-600 hover:text-[#C5A572]">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A572] p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">E-posta</div>
                    <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-[#C5A572]">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A572] p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Adres</div>
                    <div className="text-gray-600">{ADDRESS}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-[#C5A572] p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Çalışma Saatleri</div>
                    <div className="text-gray-600">7/24 Hizmet</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Bize Ulaşın</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#C5A572] focus:border-[#C5A572]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C5A572] hover:bg-[#B89355] text-white py-3 rounded-lg transition duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}