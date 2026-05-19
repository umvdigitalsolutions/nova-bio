import Link from "next/link";
import PageIntro from "../components/PageIntro";

const distributionChannels = [
  {
    no: 1,
    place: "Jaipur",
    firm: "Satyam Associates (C&F)",
    contactPerson: "Mr. Prem Gujar",
    phone: "9602836166",
  },
  {
    no: 2,
    place: "Alwar",
    firm: "United Medical Agency",
    contactPerson: "Mr. Vikas",
    phone: "9694666033",
  },
  {
    no: 3,
    place: "Ajmer",
    firm: "Medicine Trader’s",
    contactPerson: "Mr. Raju Bhai",
    phone: "7742028130",
  },
  {
    no: 4,
    place: "Bharatpur",
    firm: "Arya Distributor’s",
    contactPerson: "Mr. Mahender",
    phone: "9460334532",
  },
  {
    no: 5,
    place: "Barmer",
    firm: "Pushkarna Medicose",
    contactPerson: "Mr. Sumit",
    phone: "8147239995",
  },
  {
    no: 6,
    place: "Kota",
    firm: "Nagar Medical & Surgical Agency",
    contactPerson: "Mr. Kaushal Nagar",
    phone: "9414276536",
  },
  {
    no: 7,
    place: "Jaipur",
    firm: "Bhagwati Pharma",
    contactPerson: "Mr. Prahlad",
    phone: "9414442118",
  },
  {
    no: 8,
    place: "Jodhpur",
    firm: "Medicenter",
    contactPerson: "Mr. Pranjal",
    phone: "9820730652",
  },
  {
    no: 9,
    place: "Jodhpur",
    firm: "Kataria Medical Agency",
    contactPerson: "Mr. Gautam Kataria",
    phone: "9828016012",
  },
  {
    no: 10,
    place: "Jalore",
    firm: "Shree Ram Medical Agency",
    contactPerson: "Mr. Mahender",
    phone: "9549376842",
  },
  {
    no: 11,
    place: "Jaisalmer",
    firm: "Rukhsana Medicose",
    contactPerson: "Mr. Asgar Khan",
    phone: "9462249045",
  },
  {
    no: 12,
    place: "Tonk",
    firm: "Shree Ram Medical Agency",
    contactPerson: "Mr. Raja Babu",
    phone: "9214494600",
  },
  {
    no: 13,
    place: "Udaipur",
    firm: "Yash Pharma",
    contactPerson: "Mr. Ajay Aggarwal",
    phone: "7014764916",
  },
  {
    no: 14,
    place: "Udaipur",
    firm: "Ganpati Enterprises",
    contactPerson: "Mr. Gaurav Joshi",
    phone: "7737177776",
  },
];

const partnershipStrengths = [
  {
    title: "Focused Portfolio",
    text: "Selected formulations across Orthopaedics, Gynaecology, and General Medicine help distributors work with clear therapeutic coverage.",
  },
  {
    title: "Responsive Coordination",
    text: "Our team supports product availability updates, order coordination, documentation follow-up, and dispatch-related communication.",
  },
  {
    title: "Long-Term Association",
    text: "We value steady distributor relationships built around trust, market support, transparent communication, and reliable service.",
  },
];

const requirements = [
  "Pharmaceutical distribution experience",
  "Valid drug license and GST details",
  "Clear market coverage area",
  "Commitment to ethical business practices",
];

const supportAreas = [
  "Product availability coordination",
  "Segment-wise portfolio guidance",
  "Dispatch and supply communication",
  "Documentation assistance",
];

export const metadata = {
  title: "Distributors | Nova Bio-Pharma Pvt Ltd",
  description:
    "Explore Nova Bio-Pharma Pvt Ltd distribution channel and distributor network across Rajasthan.",
};

export default function DistributorsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Distribution Channel"
        title="Nova Bio-Pharma Private Limited distribution network."
        description="Our distribution channel supports product availability and coordinated supply across key locations in Rajasthan through trusted pharmaceutical partners."
      />

      {/* DISTRIBUTION CHANNEL TABLE */}
      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-700">
              Distributor Network
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Authorised distribution channel across Rajasthan.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Nova Bio-Pharma Pvt Ltd works through an organised distribution
              network to support availability, communication, and market reach
              across important healthcare locations.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
            <div className="border-b border-slate-200 bg-slate-950 px-6 py-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">
                Nova Biopharma Private Limited
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight">
                Distribution Channel
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse text-left">
                <thead>
                  <tr className="bg-slate-100 text-xs uppercase tracking-[0.16em] text-slate-700">
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      No
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Place
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Distribution Partner
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Contact Person
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Contact Number
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {distributionChannels.map((channel) => (
                    <tr
                      key={`${channel.no}-${channel.firm}`}
                      className="transition hover:bg-teal-50/70"
                    >
                      <td className="border-b border-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
                        {channel.no}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-sm font-black uppercase text-slate-950">
                        {channel.place}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-sm font-bold text-slate-800">
                        {channel.firm}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-sm font-semibold text-slate-700">
                        {channel.contactPerson}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-sm font-black text-teal-700">
                        <a href={`tel:${channel.phone}`}>{channel.phone}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {requirements.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 text-sm font-black leading-6 text-slate-800 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-3 text-sm font-black text-white shadow-lg transition hover:bg-teal-700"
          >
            Apply for Distribution
          </Link>
        </div>
      </section>

      {/* PARTNERSHIP SUPPORT */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">
              Partnership Support
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Practical support for distributor partners.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              Our distributor coordination is designed around clear product
              information, segment-wise focus, and timely communication.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partnershipStrengths.map((item) => (
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm font-black leading-6 text-white backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}