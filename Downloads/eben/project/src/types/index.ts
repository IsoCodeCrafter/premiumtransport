export interface Vehicle {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  features: string[];
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  selectedVehicle: string;
  selectedDuration: string;
  totalPrice: number;
}

export interface Reference {
  id: string;
  name: string;
  company: string;
  image: string;
  comment: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}