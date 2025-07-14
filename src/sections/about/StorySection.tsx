import { getBase64 } from "@/lib/getLocalBase64";
import Image from "next/image";

export default async function StorySection() {
  const image = await getBase64(
    "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
  );
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 1985, Horizon Heaven Hotel has been a beacon of luxury
              and comfort in Paradise City for nearly four decades. What started
              as a vision to create an intimate, boutique experience has evolved
              into one of the most cherished hospitality destinations in the
              region.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to exceptional service, attention to detail, and
              creating unforgettable experiences has earned us a loyal following
              of guests who return year after year. With only 8 carefully
              designed rooms, we maintain the intimate atmosphere that makes
              every guest feel like family.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">39</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-gray-600">Happy Guests</div>
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
              blurDataURL={image}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
