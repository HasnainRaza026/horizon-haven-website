import Button from "@/components/Button";
import FeaturedRoomCard from "@/features/rooms/components/FeaturedRoomCard";
import { rooms } from "@/features/rooms/data/roomData";
import Link from "next/link";

export default function FeaturedRoomsSection() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured Rooms
          </h2>
          <p className="text-xl text-gray-600">
            Discover comfort and elegance in our thoughtfully designed spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <FeaturedRoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/rooms">
            <Button
              color="blue"
              textSize="text-lg"
              fontWeight="font-semibold"
              padding="px-8 py-3"
            >
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
