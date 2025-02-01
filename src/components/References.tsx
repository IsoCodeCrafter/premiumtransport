import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import type { Reference } from '../types';

const references: Reference[] = [
  {
    id: 'r1',
    name: 'Mehmet Yılmaz',
    company: 'İstanbul Turizm',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    comment: 'Mükemmel hizmet! Şoför son derece profesyonel ve dakikti. Mercedes S-Class kusursuzdu.',
    rating: 5
  },
  {
    id: 'r2',
    name: 'Ayşe Kaya',
    company: 'Kaya Organizasyon',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    comment: 'Havalimanı transferinden günlük turlara kadar kusursuz bir deneyim. Kesinlikle tavsiye ederim.',
    rating: 5
  },
  {
    id: 'r3',
    name: 'Ali Demir',
    company: 'Demir Turizm',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    comment: 'VIP hizmet gerçekten üst düzeydi. Profesyonel sürücüler ve lüks araçlar seyahatimizi özel kıldı.',
    rating: 5
  },
  {
    id: 'r4',
    name: 'Zeynep Arslan',
    company: 'Arslan Events',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    comment: 'Düğün organizasyonumuz için VIP transfer hizmeti aldık. Her şey kusursuzdu.',
    rating: 5
  },
  {
    id: 'r5',
    name: 'Ahmet Çelik',
    company: 'Çelik Turizm',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    comment: 'Antalya\'nın en iyi transfer firması. Güvenilir ve kaliteli hizmet.',
    rating: 5
  }
];

// Referansları çoğaltma
const allReferences = [...references, ...references, ...references].map((ref, index) => ({
  ...ref,
  id: `${ref.id}-${index}`
}));

export default function References() {
  return (
    <section id="references" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Müşteri Referanslarımız</h2>
          <p className="text-lg text-gray-600">Müşterilerimizin değerli yorumları</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          className="pb-12"
        >
          {allReferences.map((reference) => (
            <SwiperSlide key={reference.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 h-full"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={reference.image}
                    alt={reference.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{reference.name}</h3>
                    <p className="text-gray-600 text-sm">{reference.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(reference.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic line-clamp-4">{reference.comment}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}