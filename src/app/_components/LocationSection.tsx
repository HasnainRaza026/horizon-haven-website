import { getBase64 } from "@/lib/getLocalBase64";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export default async function LocationSection() {
  const imageLocationSec = await getBase64(
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Perfect Location
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Paradise City, our hotel offers easy
              access to pristine beaches, world-class shopping, and vibrant
              nightlife. Everything you need for the perfect getaway is just
              steps away.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  5 minutes to Paradise Beach
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">10 minutes to city center</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">15 minutes to airport</span>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
              alt="Hotel Location"
              fill
              placeholder="blur"
              blurDataURL={imageLocationSec}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
