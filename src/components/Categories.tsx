"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

export default function Categories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-honey-600">
            Explore
          </p>
          <h2 className="mt-2 font-serif text-4xl font-bold text-cocoa-900 sm:text-5xl">
            Shop By <span className="text-gradient-honey">Category</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.a
              key={c.id}
              href="#bestsellers"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-honey-200 bg-cream-50 shadow-soft transition hover:border-honey-400"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/80 via-cocoa-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <h3 className="font-serif text-lg font-bold text-cream-50 drop-shadow">
                    {c.name}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-honey-500/90 px-3 py-0.5 text-xs font-semibold text-cocoa-900">
                    {c.count} products
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
