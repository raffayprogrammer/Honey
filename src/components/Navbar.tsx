"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  Truck,
} from "lucide-react";
import { categories } from "@/data/products";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement bar */}
      <div className="bg-cocoa-900 text-cream-100 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-honey-200">Follow Us:</span>
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="rounded-full p-1 text-cream-100/80 transition hover:bg-honey-500/20 hover:text-honey-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <div className="mx-auto flex items-center gap-2 md:mx-0">
            <Truck size={16} className="text-honey-300" />
            <span>
              Free Shipping{" "}
              <strong className="rounded bg-honey-500/20 px-1.5 py-0.5 text-honey-200">
                Above 199 AED
              </strong>{" "}
              Inside UAE
            </span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span>🇦🇪 English</span>
            <span className="text-honey-300">·</span>
            <span>AED</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-cream-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3">
          {/* Logo */}
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-honey-400 to-honey-600 text-cocoa-900 shadow-glow">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M12 2c-1 2.5-3 4-3 6a3 3 0 0 0 6 0c0-2-2-3.5-3-6Z" />
                <path d="M5 13h14l-1.5 7.5A2 2 0 0 1 15.5 22h-7a2 2 0 0 1-2-1.5L5 13Z" />
              </svg>
            </span>
            <span className="font-serif text-xl font-bold leading-none text-cocoa-900">
              Royal<span className="text-gradient-honey">Honey</span>
              <span className="block text-[9px] font-sans font-semibold tracking-[0.3em] text-honey-700">
                BACK TO NATURE
              </span>
            </span>
          </a>

          {/* Shop by category */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-honey-500 to-honey-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105"
            >
              Shop By Category
              <ChevronDown
                size={16}
                className={`transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div
                onMouseLeave={() => setOpen(false)}
                className="absolute left-0 top-full mt-2 grid w-80 grid-cols-2 gap-1 rounded-2xl border border-honey-200 bg-cream-50 p-2 shadow-soft"
              >
                {categories.map((c) => (
                  <a
                    key={c.id}
                    href="#categories"
                    className="rounded-xl px-3 py-2 text-sm font-medium text-cocoa-800 transition hover:bg-honey-100"
                  >
                    {c.name}
                    <span className="ml-1 text-xs text-honey-600">
                      ({c.count})
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="relative hidden flex-1 md:block">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-honey-600"
            />
            <input
              type="text"
              placeholder="Search for Sidr, Manuka, honeycomb…"
              className="w-full rounded-full border border-honey-200 bg-cream-50 py-2.5 pl-11 pr-4 text-sm text-cocoa-900 outline-none transition placeholder:text-honey-700/50 focus:border-honey-400 focus:ring-2 focus:ring-honey-300"
            />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-2">
            {[
              { Icon: Heart, label: "wishlist", count: 2 },
              { Icon: User, label: "account" },
              { Icon: ShoppingCart, label: "cart", count: 3 },
            ].map(({ Icon, label, count }) => (
              <button
                key={label}
                aria-label={label}
                className="relative grid h-11 w-11 place-items-center rounded-xl border border-honey-200 bg-cream-50 text-cocoa-800 transition hover:border-honey-400 hover:bg-honey-100"
              >
                <Icon size={19} />
                {count ? (
                  <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-honey-500 text-[10px] font-bold text-white">
                    {count}
                  </span>
                ) : null}
              </button>
            ))}
            <button
              aria-label="menu"
              onClick={() => setMenu((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-honey-200 bg-cream-50 text-cocoa-800 lg:hidden"
            >
              {menu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menu && (
          <div className="border-t border-honey-200 bg-cream-50 px-4 py-3 lg:hidden">
            <div className="relative mb-3 md:hidden">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-honey-600"
              />
              <input
                placeholder="Search honey…"
                className="w-full rounded-full border border-honey-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href="#categories"
                  onClick={() => setMenu(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-cocoa-800 hover:bg-honey-100"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
