"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldPlus,
  HeartPulse,
  Moon,
  Sun,
  Sparkles,
} from "lucide-react";

const left = [
  { icon: Zap, title: "Natural Energy", desc: "Fast-burning natural sugars" },
  { icon: ShieldPlus, title: "Immunity Support", desc: "Antioxidants & enzymes" },
  { icon: HeartPulse, title: "Soothes Throat", desc: "A time-honoured remedy" },
];
const right = [
  { icon: Moon, title: "Better Sleep", desc: "A calming nightly spoon" },
  { icon: Sun, title: "Rich in Antioxidants", desc: "Fights free radicals" },
  { icon: Sparkles, title: "Glowing Skin", desc: "Natural humectant" },
];

function Pill({
  icon: Icon,
  title,
  desc,
  align,
  delay,
}: {
  icon: typeof Zap;
  title: string;
  desc: string;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`flex items-center gap-3 rounded-2xl border border-honey-200 bg-cream-50 px-4 py-3 shadow-soft ${
        align === "right" ? "flex-row-reverse text-right" : ""
      }`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-honey-100 text-honey-700">
        <Icon size={20} />
      </span>
      <div>
        <div className="font-serif font-semibold text-cocoa-900">{title}</div>
        <div className="text-xs text-cocoa-700/70">{desc}</div>
      </div>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-cocoa-900 py-20 text-cream-100">
      <div className="honeycomb absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-center font-serif text-4xl font-bold sm:text-5xl">
          Pak Honey Helps{" "}
          <span className="text-gradient-honey">You For</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-cream-100/70">
          One spoon a day — nature&apos;s oldest wellness ritual, backed by raw
          enzymes and antioxidants.
        </p>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-5">
            {left.map((b, i) => (
              <Pill key={b.title} {...b} align="left" delay={i * 0.1} />
            ))}
          </div>

          {/* center visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto grid h-64 w-64 place-items-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-honey-400/40 to-honey-600/10 blur-2xl" />
            <div className="absolute inset-4 animate-float rounded-full border border-honey-400/30" />
            <svg viewBox="0 0 120 120" className="relative h-48 w-48">
              <defs>
                <radialGradient id="combglow" cx="50%" cy="40%" r="60%">
                  <stop offset="0" stopColor="#F7C15B" />
                  <stop offset="1" stopColor="#C8891B" />
                </radialGradient>
              </defs>
              {Array.from({ length: 7 }).map((_, i) => {
                const angle = (i / 7) * Math.PI * 2;
                const cx = 60 + Math.cos(angle) * (i === 6 ? 0 : 26);
                const cy = 56 + Math.sin(angle) * (i === 6 ? 0 : 26);
                return (
                  <polygon
                    key={i}
                    points="0,-12 10,-6 10,6 0,12 -10,6 -10,-6"
                    transform={`translate(${cx} ${cy})`}
                    fill="url(#combglow)"
                    stroke="#7A4A08"
                    strokeWidth="1.5"
                    opacity={i === 6 ? 1 : 0.9}
                  />
                );
              })}
            </svg>
            <span className="absolute bottom-0 rounded-full bg-honey-500 px-4 py-1.5 text-sm font-bold text-cocoa-900">
              100% Raw
            </span>
          </motion.div>

          <div className="flex flex-col gap-5">
            {right.map((b, i) => (
              <Pill key={b.title} {...b} align="right" delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
