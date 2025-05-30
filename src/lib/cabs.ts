
import type { CarType } from '@/types';
import { Car, CarFront, Bus, Users } from 'lucide-react'; // Users might be for capacity display, Bus for larger vehicles

// Placeholder icons, can be refined
const SedanIcon = CarFront;
const SuvIcon = Bus; // Using Bus as a generic for larger vehicles, can be more specific if better icons exist
const MpvIcon = Bus; // Or CarVan if available & more suitable
const TravellerIcon = Bus;
const HatchbackIcon = Car;


export const ourCabsData: CarType[] = [
  {
    id: 'dzire',
    name: 'Swift Dzire',
    description: '(Sedan)',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/dzire.jpg',
    dataAiHint: 'sedan car',
    capacity: 4,
    baseFarePerKm: 0.7,
    icon: SedanIcon,
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    description: '(New Model)',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/new-ertiga-removebg-preview.png',
    dataAiHint: 'mpv car',
    capacity: 6,
    baseFarePerKm: 0.9,
    icon: MpvIcon,
  },
  {
    id: 'crysta',
    name: 'Innova Crysta',
    description: '(SUV)',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/toyotainnova-removebg-preview.png',
    dataAiHint: 'suv innova',
    capacity: 7,
    baseFarePerKm: 1.2,
    icon: SuvIcon,
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    description: '',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2020/12/tempo-traveller-tempo-traveller-500x500-removebg-preview.png',
    dataAiHint: 'minibus van',
    capacity: 12,
    baseFarePerKm: 1.8,
    icon: TravellerIcon,
  },
  {
    id: 'etios',
    name: 'Etios',
    description: '',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/07/toyota-etios-car-rental-services-removebg-preview-1.png',
    dataAiHint: 'compact sedan',
    capacity: 4,
    baseFarePerKm: 0.65,
    icon: SedanIcon, // Or HatchbackIcon if more appropriate
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    description: '',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/image-removebg-preview-1.png',
    dataAiHint: 'kia mpv',
    capacity: 7,
    baseFarePerKm: 1.0,
    icon: MpvIcon,
  },
];
