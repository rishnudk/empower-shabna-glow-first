import retreat from "@/assets/retreat-banner.jpg";

export default function Retreat() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[640px] w-full">
        <img
          src={retreat}
          alt="Empower Transformation Retreat"
          loading="lazy"
          className="absolute inset-0 h-full w-full scale-105 object-cover transition-transform duration-[8s] hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/85" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Featured Experience</span>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Empower Transformation <br /><span className="italic text-gold-gradient">Retreat 2026</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            A transformational experience focused on healing, confidence, emotional wellness, and clarity.
          </p>
          <a href="#contact" className="btn-gold mt-10">Reserve Your Spot</a>
        </div>
      </div>
    </section>
  );
}
