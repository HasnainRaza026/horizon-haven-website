export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "room" | "hotel" | "service";
}
