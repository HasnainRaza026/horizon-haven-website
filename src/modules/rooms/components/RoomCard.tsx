import Image from "next/image";
import Link from "next/link";
import { Room } from "@/modules/rooms/types/roomType";
import { FiMaximize, FiUsers } from "react-icons/fi";
import { MdBed } from "react-icons/md";
import Button from "@/components/Button";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-64 group">
        <Image
          src={room.images}
          alt={room.name}
          fill
          placeholder="blur"
          blurDataURL={room.blurImageUrl}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 transition-all duration-300" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${room.price}/night
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {room.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
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
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${room.price}
            </span>
            <span className="text-gray-600 text-sm">/night</span>
          </div>
          <Link href={`/rooms/${room.id}`}>
            <Button color="blue" padding="px-6 py-2">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
