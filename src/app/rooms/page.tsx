import RoomGrid from "@/modules/rooms/components/RoomGrid";
import { rooms } from "@/modules/rooms/data/roomData";
import { addBluredDataUrls } from "@/lib/getLocalBase64";

export default async function RoomsPage() {
  const blurImages = await addBluredDataUrls(rooms.map((room) => room.images));
  const roomsWithBlurImages = rooms.map((room, index) => ({
    ...room,
    blurImageUrl: blurImages[index] || room.images,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of beautifully designed rooms, each
              offering unique features and premium amenities for your perfect
              stay.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <RoomGrid rooms={roomsWithBlurImages} />
      </div>
    </div>
  );
}
