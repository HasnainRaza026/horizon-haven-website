import HeroSection from "./_components/HeroSection";
import QuickStatsSection from "./_components/QuickStatsSection";
import AboutSection from "./_components/AboutSection";
import AmenitiesSection from "./_components/AmenitiesSection";
import LocationSection from "./_components/LocationSection";
import CTASection from "./_components/CTASection";
import FeaturedRoomsSection from "./_components/FeaturedRoomsSection";

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
