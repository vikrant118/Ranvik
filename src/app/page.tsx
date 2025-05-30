
import HeroSection from '@/components/sections/hero-section';
import AboutUsSection from '@/components/sections/about-us-section';
import CarOptionsSection from '@/components/sections/car-options-section';
import TourPackagesSection from '@/components/sections/tour-packages-section';
import PopularToursSection from '@/components/sections/popular-tours-section';
import BookingSection from '@/components/sections/booking-section';
import TrustedPartnerSection from '@/components/sections/trusted-partner-section'; // Import the new section

export default function Home() {
  return (
    <>
      <HeroSection />
      <BookingSection />
      <AboutUsSection />
      <CarOptionsSection />
      <TourPackagesSection />
      <PopularToursSection />
      <TrustedPartnerSection /> {/* Add the new section here */}
    </>
  );
}
