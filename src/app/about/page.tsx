import HeroSection from "./_sections/HeroSection";
import StorySection from "./_sections/StorySection";
import ValuesSection from "./_sections/ValuesSection";
import AwardsSection from "./_sections/AwardsSection";
import LocationSection from "./_sections/LocationSection";

export default function About() {
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
