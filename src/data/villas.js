export const villas = [
  {
    id: "ocean",
    name: "Ocean View Villa",
    location: "Southern Coast, Sri Lanka",
    price: 45000,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    description: "A calm private retreat with open living spaces, a private pool and uninterrupted tropical views.",
    amenities: ["Private pool", "Breakfast", "Wi-Fi", "Air conditioning", "Housekeeping", "Garden"]
  },
  {
    id: "garden",
    name: "Garden Villa",
    location: "Southern Coast, Sri Lanka",
    price: 32000,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    description: "A bright, peaceful villa surrounded by greenery with generous indoor-outdoor living.",
    amenities: ["Pool access", "Wi-Fi", "Air conditioning", "Garden", "Housekeeping"]
  }
];

export const money = (value) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0
  }).format(value);