export type Product = {
  id: string;
  name: string;
  type: string;
  origin: string;
  price: number;
  oldPrice?: number;
  weight: string;
  rating: number;
  reviews: number;
  badge?: "Bestseller" | "New" | "Raw" | "Limited";
  tags: string[];
  color: string; // hex of the honey in the jar, used by 3D + cards
  blurb: string;
};

export const CURRENCY = "AED";

export const products: Product[] = [
  {
    id: "sidr-royal",
    name: "Royal Sidr Honey",
    type: "Sidr / Jujube",
    origin: "Hadramout, Yemen",
    price: 189,
    oldPrice: 220,
    weight: "500g",
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    tags: ["Raw", "Single-Origin", "Immunity"],
    color: "#7A3B06",
    blurb: "Dark, caramel-rich mountain Sidr — our most-loved jar.",
  },
  {
    id: "manuka-umf15",
    name: "Manuka Honey UMF 15+",
    type: "Manuka",
    origin: "North Island, New Zealand",
    price: 265,
    oldPrice: 310,
    weight: "340g",
    rating: 4.8,
    reviews: 298,
    badge: "Limited",
    tags: ["UMF Certified", "Antibacterial"],
    color: "#B5751C",
    blurb: "Lab-verified UMF 15+ potency for daily wellness.",
  },
  {
    id: "acacia-raw",
    name: "Pure Acacia Honey",
    type: "Acacia",
    origin: "Carpathian Forests",
    price: 95,
    oldPrice: 115,
    weight: "500g",
    rating: 4.7,
    reviews: 531,
    badge: "Raw",
    tags: ["Slow-Crystallizing", "Mild"],
    color: "#E7B63D",
    blurb: "Light, glass-clear and gently sweet — a family favourite.",
  },
  {
    id: "blackseed-honey",
    name: "Black Seed Honey",
    type: "Infused",
    origin: "Blend • UAE",
    price: 139,
    oldPrice: 165,
    weight: "400g",
    rating: 4.8,
    reviews: 207,
    badge: "New",
    tags: ["Nigella Sativa", "Energy"],
    color: "#4A2A0A",
    blurb: "Raw honey folded with cold-pressed black seed oil.",
  },
  {
    id: "wildflower-raw",
    name: "Wildflower Raw Honey",
    type: "Wildflower",
    origin: "Highland Meadows",
    price: 79,
    oldPrice: 92,
    weight: "500g",
    rating: 4.6,
    reviews: 644,
    tags: ["Unfiltered", "Multifloral"],
    color: "#C88A1E",
    blurb: "A full-bodied floral jar straight from the comb.",
  },
  {
    id: "comb-honey",
    name: "Natural Honeycomb",
    type: "Comb",
    origin: "Emirates Apiary",
    price: 149,
    oldPrice: 175,
    weight: "400g",
    rating: 4.9,
    reviews: 183,
    badge: "Bestseller",
    tags: ["Cut Comb", "Pure Wax"],
    color: "#D99A28",
    blurb: "Edible comb in liquid gold — exactly as the bees made it.",
  },
  {
    id: "royal-jelly",
    name: "Royal Jelly + Honey",
    type: "Bee Product",
    origin: "Emirates Apiary",
    price: 175,
    oldPrice: 199,
    weight: "250g",
    rating: 4.7,
    reviews: 142,
    tags: ["Fresh", "Vitality"],
    color: "#EBC14A",
    blurb: "Fresh royal jelly blended into raw honey for a daily boost.",
  },
  {
    id: "lavender-honey",
    name: "Lavender Blossom Honey",
    type: "Monofloral",
    origin: "Provence, France",
    price: 109,
    oldPrice: 129,
    weight: "400g",
    rating: 4.6,
    reviews: 221,
    badge: "New",
    tags: ["Aromatic", "Calming"],
    color: "#D9A733",
    blurb: "Delicate lavender perfume over soft golden honey.",
  },
];

export const bestSellers = products.filter((p) => p.badge === "Bestseller" || p.rating >= 4.8);

export type Category = {
  id: string;
  name: string;
  count: number;
  color: string;
  icon: "jar" | "comb" | "drop" | "bee" | "leaf" | "gift";
};

export const categories: Category[] = [
  { id: "sidr", name: "Sidr Honey", count: 12, color: "#7A3B06", icon: "jar" },
  { id: "manuka", name: "Manuka", count: 8, color: "#B5751C", icon: "drop" },
  { id: "raw", name: "Raw & Unfiltered", count: 21, color: "#E08C13", icon: "comb" },
  { id: "comb", name: "Honeycomb", count: 6, color: "#D99A28", icon: "comb" },
  { id: "bee", name: "Bee Products", count: 14, color: "#C8891B", icon: "bee" },
  { id: "infused", name: "Infused Honey", count: 9, color: "#4A2A0A", icon: "leaf" },
  { id: "gifts", name: "Luxury Gifts", count: 11, color: "#F0A830", icon: "gift" },
  { id: "organic", name: "Organic Range", count: 17, color: "#A16207", icon: "leaf" },
];

export type Deal = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  tag: string;
  color: string;
  productIds: string[];
};

export const hotDeals: Deal[] = [
  {
    id: "immunity-trio",
    title: "Immunity Trio Bundle",
    subtitle: "Sidr + Manuka + Black Seed",
    price: 499,
    oldPrice: 679,
    tag: "Save 26%",
    color: "#7A3B06",
    productIds: ["sidr-royal", "manuka-umf15", "blackseed-honey"],
  },
  {
    id: "golden-duo",
    title: "Golden Breakfast Duo",
    subtitle: "Acacia + Wildflower Raw",
    price: 149,
    oldPrice: 207,
    tag: "Save 28%",
    color: "#E7B63D",
    productIds: ["acacia-raw", "wildflower-raw"],
  },
  {
    id: "comb-luxury",
    title: "Comb & Jelly Luxury Box",
    subtitle: "Honeycomb + Royal Jelly gift set",
    price: 289,
    oldPrice: 374,
    tag: "Save 23%",
    color: "#D99A28",
    productIds: ["comb-honey", "royal-jelly"],
  },
];
