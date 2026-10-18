"use client";

import { motion } from "framer-motion";
import { Star, Heart, Plus } from "lucide-react";
import JarIllustration from "./JarIllustration";
import { CURRENCY, type Product } from "@/data/products";

const badgeStyles: Record<string, string> = {
  Bestseller: "bg-honey-500 text-white",
  New: "bg-emerald-600 text-white",
  Raw: "bg-cocoa-800 text-honey-200",
  Limited: "bg-rose-600 text-white",
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-honey-200 bg-cream-50 shadow-soft"
    >
      {/* media */}
      <div className="relative overflow-hidden bg-gradient-to-br from-honey-100 to-cream-200 p-6">
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-bold shadow ${
                badgeStyles[product.badge]
              }`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-700">
              -{discount}%
            </span>
          )}
        </div>

        <button
          aria-label="add to wishlist"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-cream-50/90 text-cocoa-700 opacity-0 shadow transition hover:text-rose-500 group-hover:opacity-100"
        >
          <Heart size={16} />
        </button>

        <div className="mx-auto h-40 w-28 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105">
          <JarIllustration color={product.color} className="h-full w-full drop-shadow-md" />
        </div>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1 text-honey-500">
          <Star size={14} className="fill-current" />
          <span className="text-sm font-semibold text-cocoa-800">
            {product.rating}
          </span>
          <span className="text-xs text-cocoa-700/60">
            ({product.reviews})
          </span>
          <span className="ml-auto text-xs font-medium text-honey-700">
            {product.weight}
          </span>
        </div>

        <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-cocoa-900">
          {product.name}
        </h3>
        <p className="mt-0.5 text-xs text-cocoa-700/70">{product.origin}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-full bg-honey-100 px-2 py-0.5 text-[11px] font-medium text-honey-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold text-cocoa-900">
                {product.price}
                <span className="ml-1 text-xs font-sans text-honey-700">
                  {CURRENCY}
                </span>
              </span>
              {product.oldPrice && (
                <span className="text-sm text-cocoa-700/50 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-honey-500 to-honey-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-105 active:scale-95">
            <Plus size={16} /> Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
