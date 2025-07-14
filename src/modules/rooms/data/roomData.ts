import { Room } from "../types/roomType";

export const rooms: Room[] = [
  {
    id: "1",
    name: "Ocean View Suite",
    description:
      "Luxurious suite with panoramic ocean views and premium amenities. Perfect for romantic getaways.",
    price: 299,
    capacity: 2,
    amenities: [
      "Ocean View",
      "King Bed",
      "Private Balcony",
      "Mini Bar",
      "Spa Bath",
    ],
    images: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    features: [
      "Free WiFi",
      "Room Service",
      "Air Conditioning",
      "Flat Screen TV",
    ],
    size: "45 sqm",
    bedType: "King Bed",
    available: false,
  },
  {
    id: "2",
    name: "Garden Deluxe",
    description:
      "Elegant room overlooking lush gardens with modern comfort and style.",
    price: 199,
    capacity: 2,
    amenities: ["Garden View", "Queen Bed", "Work Desk", "Coffee Machine"],
    images: "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
    features: ["Free WiFi", "Room Service", "Air Conditioning", "Work Space"],
    size: "35 sqm",
    bedType: "Queen Bed",
    available: true,
  },
  {
    id: "3",
    name: "Executive Suite",
    description:
      "Spacious suite with separate living area, perfect for business travelers and extended stays.",
    price: 399,
    capacity: 4,
    amenities: [
      "City View",
      "Separate Living Area",
      "Two Bathrooms",
      "Dining Area",
    ],
    images: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    features: [
      "Free WiFi",
      "Room Service",
      "Air Conditioning",
      "Executive Lounge Access",
    ],
    size: "65 sqm",
    bedType: "King Bed + Sofa Bed",
    available: true,
  },
  {
    id: "4",
    name: "Cozy Standard",
    description:
      "Comfortable and affordable room with all essential amenities for a pleasant stay.",
    price: 129,
    capacity: 2,
    amenities: [
      "City View",
      "Double Bed",
      "Compact Design",
      "Essential Amenities",
    ],
    images: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    features: [
      "Free WiFi",
      "Air Conditioning",
      "Flat Screen TV",
      "Daily Housekeeping",
    ],
    size: "25 sqm",
    bedType: "Double Bed",
    available: true,
  },
  {
    id: "5",
    name: "Family Room",
    description:
      "Spacious family room with separate sleeping areas and kid-friendly amenities.",
    price: 249,
    capacity: 4,
    amenities: [
      "Family Friendly",
      "Separate Sleeping Areas",
      "Kids Amenities",
      "Extra Space",
    ],
    images: "https://images.pexels.com/photos/271640/pexels-photo-271640.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271640/pexels-photo-271640.jpeg",
    features: [
      "Free WiFi",
      "Room Service",
      "Air Conditioning",
      "Baby Crib Available",
    ],
    size: "40 sqm",
    bedType: "Queen Bed + Bunk Beds",
    available: true,
  },
  {
    id: "6",
    name: "Penthouse Suite",
    description:
      "Ultimate luxury with private terrace, premium amenities, and stunning panoramic views.",
    price: 599,
    capacity: 2,
    amenities: [
      "Private Terrace",
      "Panoramic Views",
      "Premium Amenities",
      "Butler Service",
    ],
    images: "https://images.pexels.com/photos/271641/pexels-photo-271641.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271641/pexels-photo-271641.jpeg",
    features: [
      "Free WiFi",
      "Butler Service",
      "Premium Amenities",
      "Private Terrace",
    ],
    size: "80 sqm",
    bedType: "King Bed",
    available: true,
  },
  {
    id: "7",
    name: "Business Class",
    description:
      "Modern room designed for business travelers with work-friendly amenities.",
    price: 179,
    capacity: 2,
    amenities: [
      "Work Desk",
      "Business Center Access",
      "High-Speed Internet",
      "Meeting Space",
    ],
    images: "https://images.pexels.com/photos/271642/pexels-photo-271642.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271642/pexels-photo-271642.jpeg",
    features: [
      "Free WiFi",
      "Work Desk",
      "Air Conditioning",
      "Business Center Access",
    ],
    size: "30 sqm",
    bedType: "Queen Bed",
    available: true,
  },
  {
    id: "8",
    name: "Romantic Escape",
    description:
      "Intimate room with romantic ambiance, perfect for couples and special occasions.",
    price: 259,
    capacity: 2,
    amenities: [
      "Romantic Ambiance",
      "Champagne Welcome",
      "Rose Petals",
      "Special Lighting",
    ],
    images: "https://images.pexels.com/photos/271700/pexels-photo-271700.jpeg",
    blurImageUrl:
      "https://images.pexels.com/photos/271700/pexels-photo-271700.jpeg",
    features: [
      "Free WiFi",
      "Room Service",
      "Romantic Setup",
      "Special Amenities",
    ],
    size: "32 sqm",
    bedType: "King Bed",
    available: true,
  },
];
