export const products = [
  {
    id: "spf-50-sunscreen",
    name: "SPF 50 Sunscreen Lotion",
    brand: "SunGuard",
    category: "Skin Care",
    price: 850,
    rating: 4.8,
    image: "/products/sunscreen.svg",
    isPopular: true,
    description: "Lightweight sunscreen for daily summer protection with a non-sticky finish.",
    features: ["SPF 50 protection", "Water resistant", "Non-greasy texture", "Suitable for daily use"]
  },
  {
    id: "insulated-water-bottle",
    name: "Insulated Water Bottle",
    brand: "HydroPeak",
    category: "Hydration",
    price: 1250,
    rating: 4.7,
    image: "/products/bottle.svg",
    isPopular: true,
    description: "Keeps drinks cool during hot days, school, travel, and outdoor activities.",
    features: ["750ml capacity", "Keeps cold up to 12 hours", "Leak-proof cap", "BPA-free"]
  },
  {
    id: "portable-neck-fan",
    name: "Portable Neck Fan",
    brand: "BreezeMate",
    category: "Cooling Gadget",
    price: 1890,
    rating: 4.6,
    image: "/products/fan.svg",
    isPopular: true,
    description: "Hands-free rechargeable fan designed for commuting and outdoor summer use.",
    features: ["3 speed modes", "USB-C charging", "Quiet motor", "Lightweight design"]
  },
  {
    id: "uv-protection-sunglasses",
    name: "UV Protection Sunglasses",
    brand: "RayLite",
    category: "Accessories",
    price: 980,
    rating: 4.5,
    image: "/products/sunglasses.svg",
    isPopular: false,
    description: "Comfortable sunglasses with UV protection for bright sunny days.",
    features: ["UV400 protection", "Scratch-resistant lens", "Lightweight frame", "Unisex design"]
  },
  {
    id: "cooling-towel",
    name: "Instant Cooling Towel",
    brand: "ChillWave",
    category: "Outdoor",
    price: 420,
    rating: 4.4,
    image: "/products/towel.svg",
    isPopular: false,
    description: "Reusable cooling towel for workouts, travel, sports, and heat relief.",
    features: ["Quick cooling fabric", "Reusable", "Easy to carry", "Fast drying"]
  },
  {
    id: "aloe-vera-gel",
    name: "Aloe Vera Soothing Gel",
    brand: "NatureMist",
    category: "Skin Care",
    price: 650,
    rating: 4.6,
    image: "/products/aloe.svg",
    isPopular: false,
    description: "Soothing gel for skin hydration after sun exposure.",
    features: ["Aloe vera extract", "Cooling effect", "Quick absorbing", "No sticky feel"]
  },
  {
    id: "beach-sandals",
    name: "Comfort Beach Sandals",
    brand: "StepEase",
    category: "Footwear",
    price: 720,
    rating: 4.3,
    image: "/products/sandals.svg",
    isPopular: false,
    description: "Soft, washable sandals made for beach, pool, and casual summer use.",
    features: ["Soft sole", "Water friendly", "Anti-slip bottom", "Easy to clean"]
  },
  {
    id: "summer-cap",
    name: "Breathable Summer Cap",
    brand: "CoolShade",
    category: "Accessories",
    price: 560,
    rating: 4.5,
    image: "/products/cap.svg",
    isPopular: false,
    description: "Lightweight cap with breathable fabric for everyday sun shade.",
    features: ["Adjustable strap", "Breathable cotton", "Curved visor", "Easy fit"]
  }
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
