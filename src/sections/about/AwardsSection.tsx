import { FiAward, FiHeart, FiStar } from "react-icons/fi";

export default function AwardsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600">
            Honored for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FiStar className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5-Star Rating</h3>
            <p className="text-gray-600">
              Consistently rated 5 stars by guests on all major platforms
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FiAward className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Boutique Hotel</h3>
            <p className="text-gray-600">
              Paradise City Tourism Board Award 2023
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <FiHeart className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guest Choice Award</h3>
            <p className="text-gray-600">
              Recognized for exceptional guest satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
