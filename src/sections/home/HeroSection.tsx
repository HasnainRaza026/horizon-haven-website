import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
          alt="Horizon Heaven Hotel"
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Horizon Heaven</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Where luxury meets comfort in paradise
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/rooms">
            <Button
              color="blue"
              textSize="text-lg"
              fontWeight="font-semibold"
              padding="px-8 py-3"
            >
              Book Your Stay
            </Button>
          </Link>
          <Link href="/about">
            <Button
              color="white"
              textSize="text-lg"
              fontWeight="font-semibold"
              padding="px-8 py-3"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
