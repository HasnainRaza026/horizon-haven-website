import HeroSection from "./_sections/HeroSection";
import QuickStatsSection from "./_sections/QuickStatsSection";
import AboutSection from "./_sections/AboutSection";
import AmenitiesSection from "./_sections/AmenitiesSection";
import LocationSection from "./_sections/LocationSection";
import CTASection from "./_sections/CTASection";
import FeaturedRoomsSection from "./_sections/FeaturedRoomsSection";

export default function Home() {
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
