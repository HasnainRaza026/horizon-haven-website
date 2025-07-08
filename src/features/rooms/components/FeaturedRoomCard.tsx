import Image from "next/image";
import Link from "next/link";
import { Room } from "../types/roomType";
import { FiUsers } from "react-icons/fi";

export default function FeaturedRoomCard({ room }: { room: Room }) {
  return (
    <div
      key={room.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64">
        <Image
          src={room.images[0]}
          alt={room.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${room.price}/night
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <FiUsers className="w-4 h-4 mr-1" />
            {room.capacity} guests
          </div>
          <Link
            href={`/rooms/${room.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
