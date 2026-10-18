"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

const cols = [
  {
    title: "Shop",
    links: ["Sidr Honey", "Manuka", "Raw & Unfiltered", "Honeycomb", "Gift Sets"],
  },
  {
    title: "About",
    links: ["Our Story", "Beekeepers", "Sustainability", "Lab Reports", "Blog"],
  },
  {
    title: "Help",
    links: ["Shipping", "Returns", "FAQ", "Track Order", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cocoa-900 pt-16 text-cream-100">
      <div className="honeycomb absolute inset-0 opacity-20" />

      {/* newsletter */}
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-honey-500 to-honey-600 p-8 text-center text-cocoa-900 shadow-glow sm:flex-row sm:text-left">
          <div className="flex-1">
            <h3 className="font-serif text-2xl font-bold">
              Get 10% off your first jar
            </h3>
            <p className="mt-1 text-cocoa-900/80">
              Join the hive for harvest updates and sweet deals.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full rounded-full border-0 bg-cream-50 px-5 py-3 text-cocoa-900 outline-none ring-honey-700/30 focus:ring-2"
            />
            <button className="inline-flex items-center gap-2 rounded-full bg-cocoa-900 px-6 py-3 font-semibold text-honey-200 transition hover:bg-cocoa-800">
              <Send size={16} /> Join
            </button>
          </form>
        </div>

        {/* links */}
        <div className="relative mt-14 grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-honey-400 to-honey-600 text-cocoa-900">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2c-1 2.5-3 4-3 6a3 3 0 0 0 6 0c0-2-2-3.5-3-6Z" />
                  <path d="M5 13h14l-1.5 7.5A2 2 0 0 1 15.5 22h-7a2 2 0 0 1-2-1.5L5 13Z" />
                </svg>
              </span>
              <span className="font-serif text-xl font-bold">
                Royal<span className="text-honey-400">Honey</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream-100/70">
              Pure, raw, single-origin honey and bee products — harvested with
              care and delivered across the UAE.
            </p>
            <div className="mt-5 space-y-2 text-sm text-cream-100/70">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-honey-400" /> Dubai, United
                Arab Emirates
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-honey-400" /> +971 4 000 0000
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-honey-400" /> hello@royalhoney.ae
              </p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-serif text-lg font-semibold text-honey-300">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-cream-100/70">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-honey-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-cream-100/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
          <p className="text-sm text-cream-100/60">
            © {new Date().getFullYear()} RoyalHoney. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-9 w-9 place-items-center rounded-full border border-cream-100/15 text-cream-100/70 transition hover:border-honey-400 hover:text-honey-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
