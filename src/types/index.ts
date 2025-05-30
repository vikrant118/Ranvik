import type { LucideIcon } from 'lucide-react';

export interface CarType {
  id: string;
  name: string;
  description?: string; // Optional description like (Sedan), (SUV)
  image: string;
  dataAiHint: string;
  capacity: number;
  baseFarePerKm: number;
  icon: LucideIcon;
}

export interface TourPackageType {
  id: string;
  name: string;
  image: string;
  dataAiHint: string;
  icon: LucideIcon;
  description?: string;
}

export interface PopularTourType {
  id: string;
  name: string;
  icon: LucideIcon;
}
