export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white lg:px-8">
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.20),transparent_35%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-teal-300">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}