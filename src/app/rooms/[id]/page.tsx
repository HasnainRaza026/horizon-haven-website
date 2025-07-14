import { rooms } from "@/modules/rooms/data/roomData";
import { notFound } from "next/navigation";
import RoomDetail from "@/modules/rooms/components/RoomDetail";
import { getBase64 } from "@/lib/getLocalBase64";

export default async function RoomDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const room = rooms.find((room) => room.id === params.id);
  const blurImage = await getBase64(room?.images || "");

  if (!room) {
    notFound();
  }
  return <RoomDetail room={room} blurImage={blurImage || room.images} />;
}
