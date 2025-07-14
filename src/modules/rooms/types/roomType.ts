export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string;
  blurImageUrl: string;
  features: string[];
  size: string;
  bedType: string;
  available: boolean;
}
