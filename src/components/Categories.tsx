"use client";

import { motion } from "framer-motion";
import { categories, type Category } from "@/data/products";

function CatIcon({ icon, color }: { icon: Category["icon"]; color: string }) {
  const common = { width: 30, height: 30, stroke: color, strokeWidth: 1.8, fill: "none" };
  switch (icon) {
    case "comb":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 2l4 2.3v4.6L12 11l-4-2.1V4.3L12 2zM5 8l4 2.3v4.6L5 17l-4-2.1v-4.6L5 8zm14 0l4 2.3v4.6L19 17l-4-2.1v-4.6L19 8zM12 13l4 2.3v4.6L12 22l-4-2.1v-4.6L12 13z" />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 3c3 4 6 6.5 6 10a6 6 0 1 1-12 0c0-3.5 3-6 6-10z" />
        </svg>
      );
    case "bee":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <ellipse cx="12" cy="14" rx="4" ry="6" />
          <path d="M8 12h8M8 15h8M12 8V5M9 6l-3-2M15 6l3-2" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 20c0-8 6-14 16-14 0 10-6 16-16 14zM4 20c3-4 6-6 10-7" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 11h16v9H4zM3 7h18v4H3zM12 7V3M8 7a2 2 0 1 1 4 0M16 7a2 2 0 1 0-4 0" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M8 3h8l-1 4h2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7h2L8 3z" />
        </svg>
      );
  }
}

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
              className="group flex flex-col items-center rounded-3xl border border-honey-200 bg-cream-50 p-6 text-center shadow-soft transition hover:border-honey-400"
            >
              <span
                className="grid h-20 w-20 place-items-center rounded-full transition group-hover:scale-110"
                style={{ background: `${c.color}1a` }}
              >
                <CatIcon icon={c.icon} color={c.color} />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-cocoa-900">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-honey-700">{c.count} products</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
