import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageOptimized({ src, alt, className }: ImageOptimizedProps) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      className={className}
      wrapperClassName="w-full h-full"
    />
  );
}