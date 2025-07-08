import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-96 bg-gray-900">
      <Image
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
        alt="Horizon Heaven Hotel"
        fill
        className="object-cover opacity-60"
        priority={true}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Horizon Heaven</h1>
          <p className="text-xl">A legacy of luxury and hospitality</p>
        </div>
      </div>
    </section>
  );
}
