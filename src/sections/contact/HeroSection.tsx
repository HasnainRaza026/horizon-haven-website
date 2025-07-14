import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-96 bg-gray-900">
      <Image
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
        alt="Contact Horizon Heaven Hotel"
        fill
        priority
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We&#39;re here to help make your stay perfect
          </p>
        </div>
      </div>
    </section>
  );
}
