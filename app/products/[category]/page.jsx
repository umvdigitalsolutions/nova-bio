import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductCategory, productCategories } from "../../data/productCategories";

export function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category: slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    return {
      title: "Category Not Found | Nova Bio-Pharma Pvt Ltd",
    };
  }

  return {
    title: `${category.shortTitle} Products | Nova Bio-Pharma Pvt Ltd`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category: slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Link
              href="/products"
              className="text-sm font-bold uppercase tracking-[0.22em] text-teal-300 transition hover:text-white"
            >
              Products
            </Link>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              {category.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {category.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <Image
              src={category.image}
              alt={`${category.title} product category`}
              width={427}
              height={293}
              priority
              className="h-72 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-700">
              Product List
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {category.shortTitle} formulations
            </h2>
            <p className="mt-4 leading-8 text-slate-600">{category.intro}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {category.products.map((product, index) => (
              <article
                key={product.name}
                className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl sm:grid-cols-[140px_1fr]"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={category.image}
                    alt={product.name}
                    width={427}
                    height={293}
                    className="h-36 w-full object-cover sm:h-full"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
                    0{index + 1}
                  </span>
                </div>

                <div className="py-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700">
                    {category.shortTitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
