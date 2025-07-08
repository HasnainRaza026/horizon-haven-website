import { getBase64 } from "@/lib/getLocalBase64";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";

export default async function AboutSection() {
  const imageAboutSec = await getBase64(
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience Unparalleled Luxury
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Nestled in the heart of paradise, Horizon Heaven Hotel offers an
              intimate boutique experience with only 8 carefully designed rooms.
              Each space is crafted to provide the perfect blend of modern
              luxury and timeless elegance.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FiCheck className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Personalized concierge service
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCheck className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Premium amenities in every room
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCheck className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  Breathtaking ocean and garden views
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FiCheck className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">
                  World-class dining experience
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
              alt="Hotel Interior"
              width={600}
              height={400}
              placeholder="blur"
              blurDataURL={imageAboutSec}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
