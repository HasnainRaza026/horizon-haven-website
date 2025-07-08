import { getBase64 } from "@/lib/getLocalBase64";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";

export default async function LocationSection() {
  const image = await getBase64(
    "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
  );

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-xl text-gray-600">
            Perfectly positioned in the heart of Paradise City
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    Located at 123 Ocean Drive, we&#39;re just minutes away from
                    the best attractions, restaurants, and entertainment
                    Paradise City has to offer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Easy Access</h3>
                  <p className="text-gray-600">
                    15 minutes from Paradise International Airport, with
                    complimentary shuttle service available for all guests.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiMapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Nearby Attractions
                  </h3>
                  <p className="text-gray-600">
                    Paradise Beach, City Museum, Shopping District, and Marina
                    are all within walking distance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
              alt="Hotel Location"
              fill
              placeholder="blur"
              blurDataURL={image}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
