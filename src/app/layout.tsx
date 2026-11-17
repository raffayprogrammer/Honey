import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pak Honey — Pure, Raw & Single-Origin Honey | Sharjah, UAE",
  description:
    "Pak Honey Trading — premium raw honey, Sidr, Manuka, honeycomb and bee products. Visit us at Shop No. 15 & 16, Al Andalus Complex, Opposite Al Mubarak Center, Arouba Street, Sharjah, UAE. Delivered across the UAE.",
  keywords: [
    "honey",
    "raw honey",
    "sidr honey",
    "manuka honey",
    "honeycomb",
    "organic honey UAE",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
