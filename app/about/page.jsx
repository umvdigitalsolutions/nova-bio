import PageIntro from "../components/PageIntro";

const values = [
  "Quality-focused product selection",
  "Transparent supply communication",
  "Reliable pharmaceutical partnerships",
  "Long-term healthcare relationships",
];

const highlights = [
  {
    title: "Quality",
    text: "Our product portfolio is reviewed with focus on documentation, reliability, and therapeutic relevance.",
  },
  {
    title: "Access",
    text: "We work to support consistent availability of essential pharmaceutical formulations across focused therapeutic segments.",
  },
  {
    title: "Service",
    text: "Clear communication and responsive coordination help our partners plan their pharmaceutical requirements with confidence.",
  },
];

export const metadata = {
  title: "About Us | Nova Bio-Pharma Pvt Ltd",
  description:
    "Learn about Nova Bio-Pharma Pvt Ltd, a quality-focused pharmaceutical company dealing in orthopaedic, gynaecological, and general medicine formulations.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Nova Bio-Pharma"
        title="A focused pharmaceutical company built on quality, reliability, and trust."
        description="Nova Bio-Pharma Pvt Ltd deals in selected pharmaceutical formulations across Orthopaedics, Gynaecology, and General Medicine, supporting healthcare partners with dependable product access and responsive service."
      />

      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              To make dependable pharmaceutical formulations easier to access.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              We combine pharmaceutical understanding, partner coordination,
              and practical supply support to serve healthcare professionals,
              distributors, pharmacies, and institutional partners.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our work is focused on selected therapeutic segments including
              Orthopaedics, Gynaecology, and General Medicine.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
              What Guides Our Work
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Built around focused product selection and reliable healthcare
              partnerships.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                    0{index + 1}
                  </div>

                  <span className="text-lg font-black leading-7 text-slate-950">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Focused, reliable, and healthcare-oriented.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              We aim to support healthcare partners with pharmaceutical
              formulations that are relevant, dependable, and backed by clear
              communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <div className="mb-6 h-11 w-11 rounded-2xl bg-teal-400/20 ring-1 ring-teal-300/30" />

                <h2 className="text-2xl font-black">{item.title}</h2>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
