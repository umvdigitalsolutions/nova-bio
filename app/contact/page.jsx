import PageIntro from "../components/PageIntro";

export const metadata = {
  title: "Contact Us | NovaBio Pharma",
  description:
    "Contact NovaBio Pharma for pharmaceutical formulation inquiries, distributor partnerships, institutional supply, and healthcare collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact Us"
        title="Let’s discuss your pharmaceutical formulation requirements."
        description="Reach our team for product availability, distributor partnerships, institutional requirements, documentation support, and supply-related inquiries across Orthopaedics, Gynaecology, and General Medicine."
      />

      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                Registered Office
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                NovaBio Pharma
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Jodhpur, Rajasthan, India
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                Contact Details
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Get in Touch
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                info@novabiopharma.com
              </p>

              <p className="leading-7 text-slate-600">+91 98765 43210</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                Business Hours
              </p>

              <h2 className="mt-3 text-2xl font-black text-slate-950">
                Office Timing
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Monday to Saturday, 9:30 AM to 6:30 PM
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-700">
                Inquiry Form
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Send Your Requirement
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Please share your requirement related to pharmaceutical
                formulations, distributor association, institutional supply, or
                product documentation.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold text-slate-700">
                Full Name
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>

              <label className="text-sm font-bold text-slate-700">
                Email Address
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>

              <label className="text-sm font-bold text-slate-700">
                Phone Number
                <input
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  name="phone"
                  placeholder="+91"
                  type="tel"
                />
              </label>

              <label className="text-sm font-bold text-slate-700">
                Inquiry Type
                <select
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                  name="type"
                  defaultValue="Product availability"
                >
                  <option>Product availability</option>
                  <option>Distributor partnership</option>
                  <option>Institutional supply</option>
                  <option>Product documentation</option>
                  <option>General inquiry</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block text-sm font-bold text-slate-700">
              Therapeutic Segment
              <select
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                name="segment"
                defaultValue="Orthopaedic Segment"
              >
                <option>Orthopaedic Segment</option>
                <option>Gynaecology Segment</option>
                <option>General Medicine Segment</option>
                <option>Multiple Segments</option>
              </select>
            </label>

            <label className="mt-5 block text-sm font-bold text-slate-700">
              Message
              <textarea
                className="mt-2 min-h-40 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                name="message"
                placeholder="Please mention your product requirement, quantity, location, documentation needs, or partnership inquiry."
              />
            </label>

            <button
              className="mt-6 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-black text-white shadow-lg transition hover:bg-teal-700"
              type="submit"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
