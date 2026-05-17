import Link from "next/link";

const metrics = [
  ["3", "focused therapeutic segments"],
  ["Quality", "focused formulation portfolio"],
  ["Reliable", "supply coordination"],
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-35">
        <div className="h-full w-full bg-[radial-gradient(circle_at_25%_20%,#14b8a6_0,transparent_32%),radial-gradient(circle_at_75%_0,#38bdf8_0,transparent_28%),linear-gradient(135deg,#0f172a_0%,#0f766e_100%)]" />
      </div>

      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -right-28 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-teal-200">
            Focused Pharmaceutical Formulations
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Supporting healthcare with reliable therapeutic formulations.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Nova Bio-Pharma Pvt Ltd deals in selected pharmaceutical formulations across
            Orthopaedics, Gynaecology, and General Medicine, serving healthcare
            partners with quality-focused products and dependable coordination.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-slate-950 shadow-lg transition hover:bg-teal-100"
            >
              Explore Portfolio
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/35 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-white/10"
            >
              Send Inquiry
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL CARD */}
        <div className="relative">
          <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm" />

          <div className="relative mx-auto max-w-md">
            <div className="relative z-10 rounded-3xl border border-white/15 bg-white p-6 text-slate-950 shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                    Product Portfolio
                  </p>

                  <h2 className="mt-2 text-2xl font-black tracking-tight">
                    Therapeutic Focus
                  </h2>
                </div>

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                  Focused
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {metrics.map(([value, label]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-3xl font-black text-teal-700">
                      {value}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-600">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-20 mt-5 rounded-3xl bg-teal-400 p-5 text-slate-950 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em]">
                Core Segments
              </p>

              <p className="mt-2 text-2xl font-black leading-tight">
                Orthopaedics, Gynaecology & General Medicine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
