
import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const galleryImages = [
  {
    id: 1,
    src: '/assets/g1.jpg',
    alt: 'VIP Transfer Hizmeti'
  },
  {
    id: 2,
    src: '/assets/g2.jpg',
    alt: 'Lüks Transfer'
  },
  {
    id: 3,
    src: '/assets/g3.jpg',
    alt: 'Havalimanı Transfer'
  },
  {
    id: 4,
    src: '/assets/g4.jpg',
    alt: 'Özel Transfer'
  },
  {
    id: 5,
    src: '/assets/g5.jpg',
    alt: 'VIP Taşımacılık'
  },
  {
    id: 6,
    src: '/assets/g6.jpg',
    alt: 'Lüks Araç'
  },
  {
    id: 7,
    src: '/assets/g7.jpg',
    alt: 'Premium Transfer'
  },
  {
    id: 8,
    src: '/assets/g8.jpg',
    alt: 'Konforlu Seyahat'
  },
  {
    id: 9,
    src: '/assets/g9.jpg',
    alt: 'VIP Hizmet'
  },
  {
    id: 10,
    src: '/assets/g10.jpg',
    alt: 'Özel VIP Transfer'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri</h2>
          <p className="text-lg text-gray-600">VIP transfer hizmetlerimizden özel anlar</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-square bg-white group"
            >
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                wrapperClassName="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}