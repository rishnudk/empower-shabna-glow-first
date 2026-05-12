import { ArrowRight } from "lucide-react";
import portrait from "@/assets/newsletter-portrait.jpg";

export default function Newsletter() {
  return (
    <section id="contact" className="relative overflow-hidden bg-newsletter-gradient py-28">
      <div className="glow-orb animate-float-slow h-[400px] w-[400px] -top-20 -right-20 bg-[#F8C81B] opacity-25" />
      <div className="glow-orb animate-float-medium h-[360px] w-[360px] bottom-10 left-0 bg-[#96519A]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Newsletter</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Begin Your <span className="italic text-gold-gradient">Transformation</span> Journey
          </h2>
          <p className="mt-6 max-w-lg text-white/75">
            Subscribe for mindset insights, emotional wellness tools, coaching updates, and
            transformational resources — straight to your inbox.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              placeholder="Full name"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 backdrop-blur outline-none focus:border-gold"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 backdrop-blur outline-none focus:border-gold"
            />
            <select
              className="appearance-none rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-white backdrop-blur outline-none focus:border-gold sm:col-span-2"
              defaultValue=""
            >
              <option value="" disabled className="text-foreground">Coaching interest</option>
              <option className="text-foreground">Mindset Reprogramming</option>
              <option className="text-foreground">Emotional Healing</option>
              <option className="text-foreground">Confidence Building</option>
              <option className="text-foreground">Women Empowerment</option>
              <option className="text-foreground">Leadership</option>
            </select>
            <button type="submit" className="btn-gold sm:col-span-2">
              Subscribe Now <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-luxury">
            <img
              src={portrait}
              alt="Shabna Sulthan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
