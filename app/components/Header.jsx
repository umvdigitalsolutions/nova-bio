"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/distributors", label: "Distributors" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Nova Bio-Pharma Pvt Ltd home"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            <Image
              src="/nova.jpg"
              alt="Nova Bio-Pharma Pvt Ltd logo"
              width={58}
              height={58}
              priority
              className="h-11 w-11 rounded-xl object-contain"
            />
          </div>

          <span className="min-w-0">
            <span className="block truncate text-base font-black tracking-tight text-slate-950 sm:text-lg">
              Nova Bio-Pharma Pvt Ltd
            </span>
            <span className="block truncate text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700 sm:text-xs">
              Care Through Science
            </span>
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-teal-700 md:inline-flex"
        >
          Partner With Us
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm md:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-slate-950 transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded-full bg-slate-950 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-slate-950 transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-xl md:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-teal-700"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
