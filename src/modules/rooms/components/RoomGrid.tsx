import RoomCard from "./RoomCard";
import { Room } from "../types/roomType";
import { FiFilter } from "react-icons/fi";

export default function RoomGrid({ rooms }: { rooms: Room[] }) {
  return (
    <div className="space-y-6">
      {/* Room Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {rooms.length === 0 && (
        <div className="text-center py-12">
          <FiFilter className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No rooms found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters to see more rooms.
          </p>
        </div>
      )}
    </div>
  );
}
