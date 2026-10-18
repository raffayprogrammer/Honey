"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import { hotDeals, CURRENCY } from "@/data/products";

function useCountdown(hoursFromNow = 12) {
  const [left, setLeft] = useState("");
  useEffect(() => {
    const end = Date.now() + hoursFromNow * 3600 * 1000;
    const tick = () => {
      const diff = Math.max(0, end - Date.now());
      const h = Math.floor(diff / 3.6e6);
      const m = Math.floor((diff % 3.6e6) / 6e4);
      const s = Math.floor((diff % 6e4) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setLeft(`${pad(h)}:${pad(m)}:${pad(s)}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [hoursFromNow]);
  return left;
}

export default function HotDeals() {
  const countdown = useCountdown(14);

  return (
    <section id="deals" className="relative py-20 bg-honey-mesh">
      <div className="honeycomb absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-rose-600">
              <Flame size={16} className="fill-rose-500 text-rose-500" /> Limited
              Time
            </p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-cocoa-900 sm:text-5xl">
              Hot <span className="text-gradient-honey">Deals</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-honey-300 bg-cream-50 px-5 py-3 shadow-soft">
            <span className="text-sm font-medium text-cocoa-700">Ends in</span>
            <span className="font-mono text-2xl font-bold tabular-nums text-rose-600">
              {countdown || "00:00:00"}
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {hotDeals.map((deal, i) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-honey-200 bg-cream-50 shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 z-10 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white shadow">
                  {deal.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl font-bold text-cocoa-900">
                  {deal.title}
                </h3>
                <p className="mt-1 text-sm text-cocoa-700">{deal.subtitle}</p>

                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl font-bold text-honey-700">
                      {deal.price}
                      <span className="ml-1 text-sm font-sans">{CURRENCY}</span>
                    </span>
                    <span className="text-lg text-cocoa-700/50 line-through">
                      {deal.oldPrice}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-cocoa-900 px-5 py-2.5 text-sm font-semibold text-honey-200 transition hover:bg-cocoa-800">
                    Grab it
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
