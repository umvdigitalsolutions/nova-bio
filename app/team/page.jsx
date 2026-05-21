"use client";

import { useState } from "react";
import Image from "next/image";
import PageIntro from "../components/PageIntro";

const leadership = [
  {
    name: "Ms. Jyoti Daga",
    role: "Director",
    department: "Board of Directors",
    location: "Corporate Office",
    image: "/jyoti.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Ms. Jyoti Daga provides strategic direction to Nova Bio-Pharma Pvt Ltd with a focus on business growth, ethical practices, quality-focused product selection, and long-term healthcare partnerships.",
    responsibilities: [
      "Strategic direction",
      "Corporate governance",
      "Business growth supervision",
      "Healthcare partner relationships",
    ],
  },
  {
    name: "Mrs. Pushpa Daga",
    role: "Director",
    department: "Board of Directors",
    location: "Corporate Office",
    image: "/pushpa.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Ms. Pushpa Daga supports Nova Bio-Pharma Pvt Ltd’s leadership vision through organisational guidance, business values, partner confidence, and long-term pharmaceutical growth planning.",
    responsibilities: [
      "Organisational guidance",
      "Corporate value supervision",
      "Partner confidence building",
      "Long-term development planning",
    ],
  },
  {
    name: "Mr. Teja Ram",
    role: "Chief Executive Officer",
    department: "Executive Management",
    location: "Corporate Office",
    image: "/teja.jpeg",
    email: "teja2k@gmail.com",
    phone: "+91 9461810266",
    description:
      "Mr. Teja Ram leads the executive management of Nova Bio-Pharma Pvt Ltd, overseeing business strategy, market development, team coordination, and execution of the company’s growth plans.",
    responsibilities: [
      "Executive leadership",
      "Business strategy execution",
      "Market development",
      "Team coordination",
    ],
  },
  {
    name: "Ms. Kirti Daga",
    role: "Chief Operating Officer",
    department: "Operations & Supply Management",
    location: "Corporate Office",
    image: "/kirti.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Ms. Kirti Daga oversees operational planning, supply coordination, internal workflow, and partner communication across Nova Bio-Pharma Pvt Ltd’s focused therapeutic segments.",
    responsibilities: [
      "Operational planning",
      "Supply coordination",
      "Internal workflow management",
      "Partner communication",
    ],
  },
  {
    name: "Ms. Tripti Daga",
    role: "Vice President - Business Development",
    department: "Business Development & Strategic Partnerships",
    location: "Corporate Office",
    image: "/tripti.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Ms. Tripti Daga focuses on business expansion, distributor relations, institutional opportunities, strategic partnerships, and strengthening Nova Bio-Pharma Pvt Ltd’s healthcare market presence.",
    responsibilities: [
      "Business expansion",
      "Strategic partnerships",
      "Distributor relations",
      "Institutional opportunities",
    ],
  },
  {
    name: "Mr. Shivaaay Singh Chouhan",
    role: "Supply Chain Executive",
    department: "Supply Chain & Logistics",
    location: "Udaipur Division",
    image: "/shiv.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Mr. Shivraaay Singh Chouhan supports supply planning, product availability coordination, dispatch follow-up, logistics communication, and day-to-day supply chain support.",
    responsibilities: [
      "Supply planning",
      "Product availability coordination",
      "Dispatch follow-up",
      "Logistics communication",
    ],
  },
  {
    name: "Mr. Gaurav",
    role: "Sales Executive",
    department: "Sales & Distributor Relations",
    location: "Corporate Office",
    image: "/gaurav.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Mr. Gaurav supports sales coordination, distributor communication, inquiry handling, and relationship management with pharmacies, institutions, and healthcare partners.",
    responsibilities: [
      "Sales coordination",
      "Distributor communication",
      "Inquiry handling",
      "Partner relationship management",
    ],
  },
  {
    name: "Adv.Aditya Singh",
    role: "Head of Legal Department",
    department: "Legal, Compliance & Intellectual Property",
    location: "Corporate Office",
    image: "/aditya.jpeg",
    email: "aditya@umvlegalassociates.com",
    phone: "+91 9967276861",
    description:
      "Mr. Aditya Singh heads the legal department and supports Nova Bio-Pharma Pvt Ltd in legal documentation, intellectual property protection, contract review, regulatory coordination, and compliance-oriented advisory.",
    responsibilities: [
      "Legal documentation",
      "Intellectual property matters",
      "Contract review",
      "Regulatory and compliance coordination",
    ],
  },
  {
    name: "Ms. Nishi Jain",
    role: "Headquarter Coordination Executive",
    department: "Jaipur Headquarter Administration",
    location: "Jaipur, Rajasthan",
    image: "/nishi.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Ms. Nishi Jain supports coordination at the Jaipur Headquarter, including administrative communication, documentation follow-up, partner assistance, and operational support.",
    responsibilities: [
      "Jaipur headquarter coordination",
      "Administrative communication",
      "Documentation follow-up",
      "Operational support",
    ],
  },
  {
    name: "Mr. Vishambhar Singh",
    role: "Executive Medical Representative",
    department: "Medical Representative Team",
    location: "Bharatpur Branch",
    image: "/Vish.jpeg",
    email: "novabiopharmajdr@gmail.com",
    phone: "+91 9460660918",
    description:
      "Mr. Vishambhar Singh supports the Bharatpur Branch as an Executive Medical Representative, coordinating healthcare partner communication, product information support, field follow-up, and local market relationship management.",
    responsibilities: [
      "Bharatpur branch coordination",
      "Healthcare partner communication",
      "Product information support",
      "Field follow-up",
    ],
  },

  {
  name: "Ms. Sona Swami",
  role: "Headquarter Coordination Executive",
  department: "Jaipur Headquarter Administration",
  location: "Jaipur, Rajasthan",
  image: "/sona.jpeg",
  email: "novabiopharmajdr@gmail.com",
  phone: "+91 9460660918",
  description:
    "Ms. Sona Swami supports coordination at the Jaipur Headquarter, including administrative assistance, internal communication, documentation follow-up, partner support, and day-to-day operational coordination.",
  responsibilities: [
    "Jaipur headquarter coordination",
    "Administrative assistance",
    "Internal communication",
    "Documentation and partner support",
  ],
},
];

const principles = [
  "Leadership-driven decision making",
  "Responsible pharmaceutical coordination",
  "Reliable partner communication",
  "Quality-focused product approach",
];

export default function TeamPage() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <>
      <PageIntro
        eyebrow="Our Team"
        title="Meet the leadership and executive team behind Nova Bio-Pharma Pvt Ltd."
        description="Nova Bio-Pharma Pvt Ltd is guided by experienced directors, corporate leadership, and dedicated executives supporting business development, operations, legal coordination, supply planning, and healthcare partnerships."
      />

      {/* TEAM SECTION */}
      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-8">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-700">
              Leadership & Team
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              People leading our pharmaceutical vision.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Click on any profile to view professional details, contact
              information, department, location, and key responsibilities.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <button
                key={person.name}
                type="button"
                onClick={() => setSelectedPerson(person)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-indigo-500 opacity-0 transition group-hover:opacity-100" />

                {/* PHOTO AREA - FULL IMAGE VISIBLE */}
                <div className="relative bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4">
                  <div className="relative mx-auto h-[360px] w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index < 2 ? "high" : "auto"}
                      className="object-contain object-center p-2 transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-700">
                    {person.department}
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                    {person.name}
                  </h3>

                  <p className="mt-2 text-sm font-black text-slate-700">
                    {person.role}
                  </p>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {person.description}
                  </p>

                  <div className="mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white transition group-hover:bg-teal-700">
                    View Profile
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WORK CULTURE SECTION */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">
              How We Work
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              A coordinated team for dependable healthcare partnerships.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              From leadership decisions to executive coordination, Nova
              Bio-Pharma Pvt Ltd works with a structured approach focused on
              communication, product relevance, documentation, and partner
              support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                <span className="text-lg font-black text-white">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE MODAL */}
      {selectedPerson && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm">
          <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPerson(null)}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-slate-950 shadow-lg transition hover:bg-slate-100"
              aria-label="Close profile"
            >
              ×
            </button>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* MODAL PHOTO AREA - FULL IMAGE VISIBLE */}
              <div className="relative bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
                <div className="relative min-h-[560px] overflow-hidden rounded-3xl bg-white shadow-inner">
                  <Image
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center p-4"
                  />
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
                  Profile Details
                </p>

                <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  {selectedPerson.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-slate-700">
                  {selectedPerson.role}
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-600">
                  {selectedPerson.description}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                      Department
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {selectedPerson.department}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {selectedPerson.location}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                      Email
                    </p>
                    <p className="mt-2 break-all text-sm font-bold text-slate-800">
                      {selectedPerson.email}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
                      Phone
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      {selectedPerson.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
                    Key Responsibilities
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {selectedPerson.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPerson(null)}
                  className="mt-8 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-teal-700"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
