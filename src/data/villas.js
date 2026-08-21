import hero1 from "../assets/hero/hero-1.jpeg";
import hero2 from "../assets/hero/hero-2.jpeg";
import hero3 from "../assets/hero/hero-3.jpeg";
import hero4 from "../assets/hero/hero-4.jpeg";
import hero5 from "../assets/hero/hero-5.jpeg";
import hero6 from "../assets/hero/hero-6.jpeg";

export const property = {
  id: "lush-current",
  name: "Lush Current",
  listingName: "Lush Current – 2 King Rooms + Balcony & Garden",
  location: "Ahangama West, Southern Province, Sri Lanka",
  shortLocation: "Ahangama West, Sri Lanka",
  beachDistance: "50 m from Zion Beach",
  townDistance: "1 km from Ahangama town",
  guests: 5,
  bedrooms: 2,
  beds: 2,
  bathrooms: 2,
  bedType: "2 king beds",
  // Existing website rate retained from your current project. Update whenever your direct-booking rate changes.
  price: 45000,
  rating: 5.0,
  reviewCount: 10,
  host: "Ramal",
  hostResponse: "Responds within an hour",
  checkIn: "11:00 AM – 4:00 PM",
  checkOut: "Before 10:00 AM",
  image: hero6,
  images: [hero4, hero6, hero3, hero1, hero2, hero5],
  description:
    "A spacious upstairs guesthouse with two king bedrooms, a private balcony, tropical garden access, outdoor dining and a shared kitchen — moments from the surf and sunsets of Zion Beach.",
  longDescription:
    "Relax in a spacious upstairs stay with two comfortable king-size bedrooms and cosy seating areas. Step onto the balcony for tropical breezes and garden views, prepare simple meals in the shared kitchen, or settle into the outdoor dining space. Lush Current is set just 50 metres from Zion Beach, surrounded by surf points, and approximately 1 km from Ahangama town.",
  guestAccess:
    "Guests have access to the upstairs accommodation, balcony, garden, outdoor dining area and shared kitchen for meal preparation. Each bedroom has access to a private bathroom.",
  amenities: [
    "Beach access",
    "Shared kitchen",
    "Wi-Fi",
    "Dedicated workspace",
    "Free parking on premises",
    "Private balcony",
    "Tropical garden",
    "Outdoor dining area",
    "Private bathrooms",
    "Pet friendly"
  ],
  nearby: [
    "Surfing — multiple points within walking distance",
    "Snorkelling & diving",
    "Paddleboarding",
    "Whale-watching tours",
    "Cafes, bars and yoga spots in Ahangama"
  ],
  airbnbUrl:
    "https://www.airbnb.com/rooms/1409341399803774200?unique_share_id=5a7f6f48-9ff9-4e8e-88c6-5fb0f1edae24&viralityEntryPoint=1&s=76"
};

export const villas = [property];

export const money = (value) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(value);
