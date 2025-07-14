import HeroSection from "../sections/home/HeroSection";
import QuickStatsSection from "../sections/home/QuickStatsSection";
import AboutSection from "../sections/home/AboutSection";
import AmenitiesSection from "../sections/home/AmenitiesSection";
import LocationSection from "../sections/home/LocationSection";
import CTASection from "../sections/home/CTASection";
import FeaturedRoomsSection from "../sections/home/FeaturedRoomsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <QuickStatsSection />
      <AboutSection />
      <FeaturedRoomsSection />
      <AmenitiesSection />
      <LocationSection />
      <CTASection />
    </div>
  );
}
