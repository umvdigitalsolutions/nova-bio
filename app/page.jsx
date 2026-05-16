import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import { productCategories } from "./data/productCategories";

export default function Home() {
  const services = [
    {
      title: "Orthopaedic Drug Formulations",
      text: "A focused range of pharmaceutical formulations used in orthopaedic care, including bone, joint, pain, inflammation, and musculoskeletal support segments.",
    },
    {
      title: "Gynaecological Drug Formulations",
      text: "Quality-focused pharmaceutical formulations catering to women's healthcare and gynaecological therapeutic requirements.",
    },
    {
      title: "General Therapeutic Formulations",
      text: "A dependable portfolio of general pharmaceutical formulations used for routine prescriptions and everyday healthcare needs.",
    },
  ];

  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-700">
              What We Deliver
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Focused pharmaceutical solutions for dependable healthcare.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              We deal in selected pharmaceutical formulations across three
              focused therapeutic segments: Orthopaedics, Gynaecology, and
              General Medicine.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 opacity-0 transition group-hover:opacity-100" />

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-200">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-black text-slate-950">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-300">
              Therapeutic Segments
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Focused portfolio coverage.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              Click a segment to open its product list, images, and category
              details.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950 shadow-lg transition hover:bg-teal-300"
            >
              View Product Range
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="relative h-40 overflow-hidden bg-slate-900">
                  <Image
                    src={category.image}
                    alt={`${category.title} category`}
                    width={640}
                    height={420}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xl font-black text-white">
                    {category.title}
                  </span>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {category.intro}
                  </p>

                  <span className="mt-5 inline-flex text-sm font-black text-teal-200">
                    Open category
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
