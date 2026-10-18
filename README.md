# RoyalHoney 🍯

A premium honey e-commerce landing page built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, **Framer Motion**, and a real **3D honey jar**
rendered with **react-three-fiber + drei**.

## Sections

- **Sticky glass navbar** — announcement bar, Shop-by-Category mega menu, live search, wishlist/cart badges, mobile menu.
- **Hero** — animated copy + an interactive **3D glass honey jar** (drag to spin) with a wooden dipper and floating light.
- **Marquee** — scrolling trust strip.
- **Shop By Category** — 8 animated category tiles with custom SVG icons.
- **Best Selling** — horizontal snap carousel of product cards (hover lift, badges, discounts, ratings).
- **Hot Deals** — 3 bundle deals with a **live countdown timer** and floating jars.
- **Benefits** — "Royal Honey Helps You For" with an animated honeycomb centerpiece.
- **Footer** — newsletter signup, link columns, contact, socials.

All honey jars are drawn procedurally (3D primitives + SVG) — **no image assets
required**, so the whole site is self-contained.

## Run it

Needs **~1.5 GB free disk** for `node_modules` + `.next` build cache.

```bash
cd C:\royal-honey
npm install
npm run dev
```

Open http://localhost:3000

### Build for production

```bash
npm run build
npm start
```

## Tech

| Concern        | Choice                                |
| -------------- | ------------------------------------- |
| Framework      | Next.js 14.2 (App Router)             |
| Language       | TypeScript                            |
| Styling        | Tailwind CSS 3.4 (custom honey theme) |
| Animation      | Framer Motion 11                      |
| 3D             | three.js + @react-three/fiber + drei  |
| Icons          | lucide-react                          |
| Fonts          | Lora (serif) + Raleway (sans)         |

## Customize

- **Products / categories / deals** → `src/data/products.ts` (single source of truth).
- **Colors** → `tailwind.config.ts` (`honey`, `cream`, `cocoa` scales).
- **3D jar** (shape, honey color, lighting) → `src/components/HoneyJar3D.tsx`.

## Notes

- The 3D canvas is loaded with `dynamic(..., { ssr: false })` so it never runs on
  the server, and it respects `prefers-reduced-motion`.
- Swap product `color` values in `products.ts` to retint both the card SVG jars
  and the hero 3D jar.
