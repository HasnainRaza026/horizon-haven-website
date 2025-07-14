"use client";

import Image from "next/image";
import { FiArrowLeft, FiMaximize, FiStar, FiUsers } from "react-icons/fi";
import { Room } from "../types/roomType";
import { MdBed } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RoomDetail({
  room,
  blurImage,
}: {
  room: Room;
  blurImage: string;
}) {
  const router = useRouter();
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookingSuccess = () => {
    setShowBookingForm(false);
    // router.push("/reservations?success=true");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span>Back to Rooms</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={room.images}
                alt={room.name}
                fill
                placeholder="blur"
                blurDataURL={blurImage}
                className="object-cover"
              />
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {room.name}
              </h1>
              <div className="flex items-center space-x-4 text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <FiUsers className="w-4 h-4" />
                  <span>{room.capacity} guests</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MdBed className="w-4 h-4" />
                  <span>{room.bedType}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FiMaximize className="w-4 h-4" />
                  <span>{room.size}</span>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {room.description}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Room Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Room Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">
                    ${room.price}
                  </div>
                  <div className="text-gray-600">per night</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">5.0 rating</div>
                </div>
              </div>

              <button
                onClick={() => setShowBookingForm(true)}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Book This Room
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Book {room.name}
                </h2>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* <BookingForm room={room} onSuccess={handleBookingSuccess} /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
