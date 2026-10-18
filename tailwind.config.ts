import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF8",
          100: "#FFF8EC",
          200: "#FCEFD6",
        },
        honey: {
          50: "#FFF7E6",
          100: "#FEEBC2",
          200: "#FBD894",
          300: "#F7C15B",
          400: "#F0A830",
          500: "#E08C13",
          600: "#C8891B",
          700: "#A16207",
          800: "#7A4A08",
          900: "#5A3707",
        },
        cocoa: {
          700: "#4A3524",
          800: "#33241A",
          900: "#211610",
        },
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(122, 74, 8, 0.25)",
        glow: "0 0 60px -10px rgba(240, 168, 48, 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drip: {
          "0%": { transform: "translateY(-4px) scaleY(0.9)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(26px) scaleY(1.1)", opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        drip: "drip 2.4s ease-in infinite",
      },
    },
  },
  plugins: [],
};

export default config;
