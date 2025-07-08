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
          <Link
            href="/rooms"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Your Room
          </Link>
          <a
            href="tel:+1234567890"
            className="bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Call +1 (234) 567-8900
          </a>
        </div>
      </div>
    </section>
  );
}
