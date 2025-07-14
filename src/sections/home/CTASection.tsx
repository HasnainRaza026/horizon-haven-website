import Button from "@/components/Button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready for Your Perfect Stay?
        </h2>
        <p className="text-xl mb-8">
          Book now and experience the luxury you deserve
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/rooms">
            <Button
              color="white"
              padding="px-8 py-3"
              textSize="text-lg"
              fontWeight="font-semibold"
            >
              Book Your Room
            </Button>
          </Link>
          <a href="tel:+1234567890">
            <Button
              color="blue"
              customStyles="bg-blue-700 hover:bg-blue-800"
              padding="px-8 py-3"
              textSize="text-lg"
              fontWeight="font-semibold"
            >
              Call +1 (234) 567-8900
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
