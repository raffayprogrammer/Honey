"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Droplets, ArrowRight, Star } from "lucide-react";

// 3D canvas is client-only (WebGL) — skip SSR and show a warm fallback.
const HoneyJar3D = dynamic(() => import("./HoneyJar3D"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-honey-200 border-t-honey-500" />
    </div>
  ),
});

const stats = [
  { value: "100%", label: "Raw & Unprocessed" },
  { value: "40+", label: "Single-Origin Jars" },
  { value: "12k+", label: "Happy Customers" },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-honey-mesh pt-36 pb-16 sm:pt-40 lg:pt-44"
    >
      <div className="honeycomb absolute inset-0 opacity-70" />
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-20 top-32 h-72 w-72 rounded-full bg-honey-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-honey-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <motion.span
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-honey-300 bg-cream-50/70 px-4 py-1.5 text-sm font-semibold text-honey-700"
          >
            <Leaf size={15} /> Harvested in the UAE · Back to Nature
          </motion.span>

          <motion.h1
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 font-serif text-5xl font-bold leading-[1.05] text-cocoa-900 sm:text-6xl lg:text-7xl"
          >
            Liquid Gold,
            <br />
            <span className="text-gradient-honey">Pure & Raw.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-md text-lg text-cocoa-700/90"
          >
            From Sidr mountains to Manuka forests — single-origin honey, bottled
            raw and delivered to your door. No heat, no additives, just nature.
          </motion.p>

          <motion.div
            custom={3}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#bestsellers"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-honey-500 to-honey-600 px-7 py-3.5 font-semibold text-white shadow-soft transition hover:shadow-glow"
            >
              Shop Honey
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#deals"
              className="inline-flex items-center gap-2 rounded-full border border-honey-300 bg-cream-50/70 px-7 py-3.5 font-semibold text-cocoa-800 transition hover:border-honey-500 hover:bg-honey-100"
            >
              View Hot Deals
            </a>
          </motion.div>

          {/* trust row */}
          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-7 flex flex-wrap items-center gap-5 text-sm text-cocoa-700"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-honey-600" /> Lab-tested
              purity
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Droplets size={16} className="text-honey-600" /> Cold-extracted
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star size={16} className="fill-honey-400 text-honey-400" /> 4.9/5
              (3,400+ reviews)
            </span>
          </motion.div>

          {/* stats */}
          <motion.div
            custom={5}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-honey-200 bg-cream-50/60 p-4 text-center"
              >
                <div className="font-serif text-2xl font-bold text-honey-700">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-cocoa-700">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 3D jar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[440px] sm:h-[520px] lg:h-[620px]"
        >
          <div className="absolute inset-0 m-auto h-[70%] w-[70%] rounded-full bg-gradient-to-br from-honey-300/40 to-honey-500/20 blur-2xl" />
          <HoneyJar3D />
          <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-honey-200 bg-cream-50/80 px-4 py-1.5 text-xs font-medium text-cocoa-700 backdrop-blur">
            Drag to spin the jar ✨
          </div>
        </motion.div>
      </div>
    </section>
  );
}
