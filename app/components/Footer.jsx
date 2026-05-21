import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/distributors", label: "Distributors" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

const segments = [
  "Orthopaedic Formulations",
  "Gynaecological Formulations",
  "General Medicine Formulations",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.16),transparent_34%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_0.9fr] lg:px-8">
        {/* BRAND */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white p-1 shadow-lg">
              <Image
                src="/nova.jpg"
                alt="Nova Bio-Pharma Pvt Ltd logo"
                width={58}
                height={58}
                className="h-12 w-12 rounded-xl object-contain"
              />
            </div>

            <div>
              <span className="block text-lg font-black tracking-tight">
                Nova Bio-Pharma Pvt Ltd
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-teal-300">
                Care Through Science
              </span>
            </div>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            A focused pharmaceutical company dealing in selected formulations
            across Orthopaedics, Gynaecology, and General Medicine.
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Supporting healthcare partners with dependable product access,
            responsive coordination, and quality-focused pharmaceutical
            solutions.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
            Company
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* THERAPEUTIC SEGMENTS */}
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
            Segments
          </h2>

          <div className="mt-5 flex flex-col gap-3 text-sm text-slate-300">
            {segments.map((segment) => (
              <span key={segment}>{segment}</span>
            ))}
          </div>
        </div>

        {/* REACH US */}
        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">
            Reach Us
          </h2>

          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>novabiopharmajdr@gmail.com</p>
            <p>+91 9460660918</p>
            <p>Jodhpur, Rajasthan, India</p>
          </div>

          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-teal-300"
          >
            Send Inquiry
          </Link>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Nova Bio-Pharma Pvt Ltd. All rights reserved.</p>
          <p>Pharmaceutical formulations across focused therapeutic segments.</p>
        </div>
      </div>
    </footer>
  );
}
