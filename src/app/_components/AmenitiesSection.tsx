import { hotelAmenities } from "@/data/amenities";

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600">
            Every detail designed for your comfort and enjoyment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotelAmenities.map((amenity) => (
            <div key={amenity.id} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{amenity.name}</h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
