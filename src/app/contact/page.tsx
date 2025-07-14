import HeroSection from "../../sections/contact/HeroSection";
import ContactInformationSection from "../../sections/contact/ContactInformationSection";
import QuickContactSection from "../../sections/contact/QuickContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ContactInformationSection />
      <QuickContactSection />
    </div>
  );
}
