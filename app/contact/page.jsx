import PageIntro from "../components/PageIntro";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | Nova Bio-Pharma Pvt Ltd",
  description:
    "Contact Nova Bio-Pharma Pvt Ltd for pharmaceutical formulation inquiries, distributor partnerships, institutional supply, and healthcare collaboration.",
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
                Nova Bio-Pharma Pvt Ltd
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
                novabiopharmajdr@gmail.com
              </p>

              <p className="leading-7 text-slate-600">+91 9460660918</p>
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

          <ContactForm />
        </div>
      </section>
    </>
  );
}
