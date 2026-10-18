"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function BestSelling() {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="bestsellers" className="relative py-20 bg-honey-mesh">
      <div className="honeycomb absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-600">
              Customer Favourites
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Best <span className="text-gradient-honey">Selling</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {[-1, 1].map((d) => (
              <button
                key={d}
                onClick={() => scroll(d as 1 | -1)}
                aria-label={d === -1 ? "previous" : "next"}
                className="grid h-11 w-11 place-items-center rounded-full border border-honey-300 bg-cream-50 text-honey-700 transition hover:bg-honey-500 hover:text-white"
              >
                {d === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            ))}
          </div>
        </div>

        {/* horizontal snap scroller */}
        <div
          ref={scroller}
          className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="w-[270px] shrink-0 snap-start"
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
