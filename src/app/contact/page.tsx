import HeroSection from "./_sections/HeroSection";
import ContactInformationSection from "./_sections/ContactInformationSection";
import QuickContactSection from "./_sections/QuickContactSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactInformationSection />
      <QuickContactSection />
    </div>
  );
}
