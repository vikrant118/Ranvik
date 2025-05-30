
import type { TourPackageType, PopularTourType } from '@/types';
import { MapPin, Briefcase, Route, MountainSnow, Building2, Landmark, Zap, ShipWheel, Tent } from 'lucide-react'; // Example icons

export const tourPackagesData: TourPackageType[] = [
  {
    id: 'udaipur',
    name: 'Udaipur Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/08/UDAIPUR.jpg',
    dataAiHint: 'udaipur lakes',
    icon: ShipWheel,
    description: 'Explore the city of lakes.'
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/08/1571301931_Jaisalmer.jpg.jpg',
    dataAiHint: 'jaisalmer desert',
    icon: Tent,
    description: 'Discover the Golden City.'
  },
  {
    id: 'jaipur',
    name: 'Jaipur Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/08/amerblog.jpg',
    dataAiHint: 'jaipur palace',
    icon: Building2,
    description: 'Experience the Pink City.'
  },
  {
    id: 'jaipur-same-day',
    name: 'Jaipur Same Day Tours',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/09/one-day-jaipur-sightseeing-tour.jpeg',
    dataAiHint: 'jaipur daytrip',
    icon: Zap,
    description: 'Quick trips from Jaipur.'
  },
  {
    id: 'golden-triangle',
    name: 'Golden Triangle Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/09/jaipur-golden.jpeg',
    dataAiHint: 'india triangle',
    icon: Landmark,
    description: 'Delhi, Agra, and Jaipur.'
  },
  {
    id: 'jaipur-sightseeing',
    name: 'Jaipur Sightseeing Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/09/jaipur-sightseeing-taxi.jpeg',
    dataAiHint: 'jaipur citytour',
    icon: Building2,
    description: 'See the best of Jaipur.'
  },
  {
    id: 'ajmer-pushkar',
    name: 'Ajmer Pushkar Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/09/ajmer-pushkar.webp',
    dataAiHint: 'ajmer pushkar',
    icon: Landmark,
    description: 'Spiritual journey.'
  },
  {
    id: 'khatushyamji',
    name: 'Khatushyam ji Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/Khatu_Shyam_Temple-e1697863739604.jpg',
    dataAiHint: 'khatushyamji temple',
    icon: Landmark,
    description: 'Visit the holy shrine.'
  },
  {
    id: 'salasar-balaji',
    name: 'Salasar Balaji Tour',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/download-e1697863989847.jpeg',
    dataAiHint: 'salasar balaji',
    icon: Landmark,
    description: 'Pilgrimage to Balaji.'
  },
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/download-1.jpeg',
    dataAiHint: 'chardham yatra',
    icon: MountainSnow,
    description: 'The four holy abodes.'
  },
  {
    id: 'rani-sati',
    name: 'Rani Sati Jhunjhunu',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/know-history-of-rani-sati-temple-jhunjhunu-e1697865136828.jpg',
    dataAiHint: 'rani sati',
    icon: Landmark,
    description: 'Visit the historic temple.'
  },
  {
    id: 'himachal-pradesh-trip',
    name: 'Himachal Pradesh Trip',
    image: 'https://jaibhawanicab.in/wp-content/uploads/2023/10/Mountains_Manali_Himachal_Pradesh.jpg',
    dataAiHint: 'himachal pradesh mountains',
    icon: MountainSnow,
    description: 'Explore the scenic beauty of Himachal Pradesh.'
  },
];

export const popularToursData: PopularTourType[] = [
  { id: 'jaipur-agra', name: 'Jaipur to Agra Taxi', icon: Route },
  { id: 'jaipur-kota', name: 'Jaipur to Kota Taxi', icon: Route },
  { id: 'jaipur-udaipur', name: 'Jaipur to Udaipur Taxi', icon: Route },
  { id: 'jaipur-chittoor', name: 'Jaipur to Chittoor Taxi', icon: Route },
  { id: 'jaipur-delhi', name: 'Jaipur to Delhi Taxi', icon: Route },
  { id: 'jaipur-ranthambore', name: 'Jaipur to Ranthambore Taxi', icon: Route },
  { id: 'jaipur-pushkar', name: 'Jaipur to Pushkar Taxi', icon: Route },
  { id: 'jaipur-sawariya', name: 'Jaipur to Sawariya Seth Taxi', icon: Route },
  { id: 'jaipur-bikaner', name: 'Jaipur to Bikaner Taxi', icon: Route },
  { id: 'jaipur-ajmer', name: 'Jaipur to Ajmer Taxi', icon: Route },
  { id: 'jaipur-khatushyamji', name: 'Jaipur to Khatushyam Ji Taxi', icon: Route },
  { id: 'jaipur-salasar', name: 'Jaipur to Salasar Balaji Taxi', icon: Route },
  { id: 'jaipur-sikar', name: 'Jaipur to Sikar Taxi', icon: Route },
  { id: 'jaipur-sawai', name: 'Jaipur to Sawai Madhopur Taxi', icon: Route },
  { id: 'jaipur-jodhpur', name: 'Jaipur to Jodhpur Taxi', icon: Route },
  // Note: Khatushyamji, Salasar Balaji, Rani Sati Jhunjhunu are repeated from tour packages,
  // but listed as "Jaipur to..." here, so kept as distinct popular taxi routes.
  { id: 'jaipur-khatushyamji-route', name: 'Jaipur to Khatushyamji', icon: Route },
  { id: 'jaipur-salasar-route', name: 'Jaipur to Salasar Balaji', icon: Route },
  { id: 'jaipur-rani-sati-route', name: 'Jaipur to Rani Sati Jhunjhunu', icon: Route },
];
