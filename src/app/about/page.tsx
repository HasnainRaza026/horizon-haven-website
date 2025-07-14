import HeroSection from "../../sections/about/HeroSection";
import StorySection from "../../sections/about/StorySection";
import ValuesSection from "../../sections/about/ValuesSection";
import AwardsSection from "../../sections/about/AwardsSection";
import LocationSection from "../../sections/about/LocationSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <AwardsSection />
      <LocationSection />
    </div>
  );
}
