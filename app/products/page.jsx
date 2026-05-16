import Image from "next/image";
import Link from "next/link";
import PageIntro from "../components/PageIntro";
import { productCategories } from "../data/productCategories";

export const metadata = {
  title: "Products | NovaBio Pharma",
  description:
    "Explore NovaBio Pharma product portfolio across orthopaedic formulations, gynaecological formulations, and general therapeutic formulations.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Product Portfolio"
        title="Reliable pharmaceutical formulations across focused therapeutic segments."
        description="Our product portfolio is focused on Orthopaedics, Gynaecology, and General Medicine. Select any category to view its product list, descriptions, and images."
      />

      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 opacity-0 transition group-hover:opacity-100" />

              <div className="relative h-48 overflow-hidden bg-slate-100">
                <Image
                  src={category.image}
                  alt={`${category.title} category`}
                  width={640}
                  height={420}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg">
                  0{index + 1}
                </span>
              </div>

              <div className="p-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                  {category.shortTitle}
                </p>

                <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                  {category.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {category.intro}
                </p>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold leading-6 text-slate-700">
                  View product list, descriptions, and category image.
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-300">
            Product Inquiry
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Looking for a specific formulation or therapeutic category?
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-300">
            Share your requirement with our team. We can assist with portfolio
            availability, product documentation, packaging requirements, and
            supply timelines.
          </p>
        </div>
      </section>
    </>
  );
}
