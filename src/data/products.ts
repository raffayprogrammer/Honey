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
  color: string; // honey shade, used for accents
  image: string; // /products/prod-XX.jpeg
  blurb: string;
};

export const CURRENCY = "AED";

export const products: Product[] = [
  {
    id: "royal-sidr",
    name: "Royal Sidr Honey",
    type: "Sidr / Jujube",
    origin: "Mountain Sidr",
    price: 189,
    oldPrice: 230,
    weight: "500g",
    rating: 4.9,
    reviews: 412,
    badge: "Bestseller",
    tags: ["Raw", "Premium", "Immunity"],
    color: "#4A2A0A",
    image: "/products/prod-16.jpeg",
    blurb: "Dark, caramel-rich mountain Sidr — our flagship jar.",
  },
  {
    id: "uae-sidr",
    name: "UAE Local Sidr Honey",
    type: "Sidr / Jujube",
    origin: "United Arab Emirates",
    price: 159,
    oldPrice: 195,
    weight: "500g",
    rating: 4.8,
    reviews: 356,
    badge: "Bestseller",
    tags: ["Local", "UAE", "Energy"],
    color: "#B5771C",
    image: "/products/prod-08.jpeg",
    blurb: "Nature's gift from the heart of the UAE.",
  },
  {
    id: "black-seed",
    name: "Black Seed Honey",
    type: "Infused",
    origin: "Nigella Sativa",
    price: 139,
    oldPrice: 165,
    weight: "400g",
    rating: 4.8,
    reviews: 207,
    badge: "Bestseller",
    tags: ["Immunity", "Energy"],
    color: "#2E1C08",
    image: "/products/prod-05.jpeg",
    blurb: "Raw honey folded with cold-pressed black seed.",
  },
  {
    id: "saffron",
    name: "Saffron Honey",
    type: "Infused",
    origin: "Pure Saffron",
    price: 219,
    oldPrice: 260,
    weight: "400g",
    rating: 4.8,
    reviews: 141,
    badge: "Limited",
    tags: ["Luxury", "Saffron"],
    color: "#B5751C",
    image: "/products/prod-02.jpeg",
    blurb: "Infused with pure saffron — nature's finest gift.",
  },
  {
    id: "litchi",
    name: "Litchi Honey",
    type: "Fruit Honey",
    origin: "Litchi Blossom",
    price: 95,
    oldPrice: 115,
    weight: "500g",
    rating: 4.7,
    reviews: 233,
    badge: "New",
    tags: ["Fruity", "Antioxidant"],
    color: "#A1341C",
    image: "/products/prod-01.jpeg",
    blurb: "Sweet, fruity litchi honey — energy in every drop.",
  },
  {
    id: "cinnamon",
    name: "Cinnamon Honey",
    type: "Infused",
    origin: "With Cinnamon",
    price: 109,
    oldPrice: 129,
    weight: "400g",
    rating: 4.6,
    reviews: 188,
    tags: ["Metabolism", "Warming"],
    color: "#7A3B10",
    image: "/products/prod-04.jpeg",
    blurb: "Honey with cinnamon to burn fats and warm the body.",
  },
  {
    id: "yemeni",
    name: "Yemeni Honey",
    type: "Mountain",
    origin: "Yemen Mountains",
    price: 175,
    oldPrice: 210,
    weight: "500g",
    rating: 4.8,
    reviews: 198,
    badge: "Limited",
    tags: ["Mountain", "Premium"],
    color: "#D99A28",
    image: "/products/prod-10.jpeg",
    blurb: "Pure mountain honey from the Yemeni highlands.",
  },
  {
    id: "samar",
    name: "Local Samar Honey",
    type: "Samar",
    origin: "UAE Desert — Umbrella Thorn",
    price: 149,
    oldPrice: 180,
    weight: "500g",
    rating: 4.7,
    reviews: 164,
    badge: "New",
    tags: ["Desert", "Local"],
    color: "#2A1808",
    image: "/products/prod-20.jpeg",
    blurb: "From the umbrella thorn tree of the UAE desert.",
  },
  {
    id: "raspberry",
    name: "Russian Raspberry Honey",
    type: "Fruit Honey",
    origin: "Russia",
    price: 105,
    oldPrice: 125,
    weight: "500g",
    rating: 4.6,
    reviews: 152,
    badge: "New",
    tags: ["Fruity", "Antioxidant"],
    color: "#9E2B2B",
    image: "/products/prod-11.jpeg",
    blurb: "Nature's sweetest gift from the heart of Russia.",
  },
  {
    id: "lemon-ginger",
    name: "Lemon & Ginger Honey",
    type: "Herbal",
    origin: "Organic Blend",
    price: 99,
    oldPrice: 119,
    weight: "400g",
    rating: 4.7,
    reviews: 211,
    tags: ["Immunity", "Digestion"],
    color: "#8A7A1A",
    image: "/products/prod-12.jpeg",
    blurb: "Organic lemon & ginger honey for daily immunity.",
  },
  {
    id: "flower",
    name: "Multi Floral Honey",
    type: "Wildflower",
    origin: "Spring Blossoms",
    price: 79,
    oldPrice: 95,
    weight: "500g",
    rating: 4.6,
    reviews: 264,
    tags: ["Multifloral", "Mild"],
    color: "#C8701E",
    image: "/products/prod-14.jpeg",
    blurb: "Spring-season multifloral honey — soft and golden.",
  },
  {
    id: "ginger",
    name: "Ginger Honey",
    type: "Herbal",
    origin: "Organic Ginger",
    price: 95,
    oldPrice: 110,
    weight: "400g",
    rating: 4.7,
    reviews: 189,
    tags: ["Throat", "Digestion"],
    color: "#9A5A14",
    image: "/products/prod-15.jpeg",
    blurb: "Soothes the throat and aids digestion naturally.",
  },
  {
    id: "mint",
    name: "Mint Honey",
    type: "Herbal",
    origin: "Organic Mint",
    price: 95,
    oldPrice: 110,
    weight: "400g",
    rating: 4.6,
    reviews: 143,
    tags: ["Fresh", "Digestion"],
    color: "#3C2E0E",
    image: "/products/prod-19.jpeg",
    blurb: "Fresh organic mint honey — nature's freshness.",
  },
  {
    id: "black-honey",
    name: "Black Honey",
    type: "Dark Honey",
    origin: "Natural Forests",
    price: 119,
    oldPrice: 145,
    weight: "500g",
    rating: 4.7,
    reviews: 176,
    tags: ["Rich", "Minerals"],
    color: "#1F1305",
    image: "/products/prod-06.jpeg",
    blurb: "Rich, dark forest honey packed with minerals.",
  },
  {
    id: "white-honey",
    name: "Russian White Honey",
    type: "Rare",
    origin: "Cotton & Sainfoin, Russia",
    price: 189,
    oldPrice: 220,
    weight: "400g",
    rating: 4.8,
    reviews: 97,
    badge: "Limited",
    tags: ["Creamy", "Joint Care"],
    color: "#BBA981",
    image: "/products/prod-21.jpeg",
    blurb: "Creamy white honey from cotton & sainfoin flowers.",
  },
];

export const bestSellers = products.filter(
  (p) => p.badge === "Bestseller" || p.rating >= 4.8
);

export type Category = {
  id: string;
  name: string;
  count: number;
  color: string;
  image: string;
};

export const categories: Category[] = [
  { id: "sidr", name: "Sidr Honey", count: 6, color: "#4A2A0A", image: "/products/prod-16.jpeg" },
  { id: "saffron", name: "Saffron & Luxury", count: 4, color: "#B5751C", image: "/products/prod-02.jpeg" },
  { id: "black", name: "Black & Dark Honey", count: 7, color: "#2E1C08", image: "/products/prod-05.jpeg" },
  { id: "fruit", name: "Fruit Honey", count: 5, color: "#9E2B2B", image: "/products/prod-11.jpeg" },
  { id: "herbal", name: "Herbal & Infused", count: 9, color: "#8A7A1A", image: "/products/prod-12.jpeg" },
  { id: "immunity", name: "Immunity Boosters", count: 6, color: "#3A2A0A", image: "/products/prod-09.jpeg" },
  { id: "energy", name: "Energy & Vitality", count: 5, color: "#7A4A10", image: "/products/prod-17.jpeg" },
  { id: "rare", name: "Rare & White", count: 3, color: "#BBA981", image: "/products/prod-21.jpeg" },
];

export type Deal = {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  oldPrice: number;
  tag: string;
  color: string;
  image: string;
};

export const hotDeals: Deal[] = [
  {
    id: "immunity-mix",
    title: "Immunity Booster Mix",
    subtitle: "Honey with ginger, tulsi, black seed, rosemary & mint",
    price: 199,
    oldPrice: 260,
    tag: "Save 23%",
    color: "#3A2A0A",
    image: "/products/prod-09.jpeg",
  },
  {
    id: "power-honey",
    title: "Married People Power Honey",
    subtitle: "Ginseng, royal jelly, propolis, bee pollen & dates",
    price: 249,
    oldPrice: 320,
    tag: "Save 22%",
    color: "#7A4A10",
    image: "/products/prod-17.jpeg",
  },
  {
    id: "royal-gift",
    title: "Royal Gift Box",
    subtitle: "Royal Sidr + Saffron honey luxury set",
    price: 379,
    oldPrice: 480,
    tag: "Save 21%",
    color: "#4A2A0A",
    image: "/products/prod-16.jpeg",
  },
];
