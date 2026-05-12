import { ArrowRight, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-hero-gradient pt-32 pb-20">
      {/* Floating glowing orbs */}
      <div className="glow-orb animate-float-slow h-[420px] w-[420px] -top-20 -left-20 bg-[#96519A]" />
      <div className="glow-orb animate-float-medium h-[360px] w-[360px] top-1/3 right-[-100px] bg-[#F8C81B] opacity-30" />
      <div className="glow-orb animate-float-slow h-[300px] w-[300px] bottom-0 left-1/3 bg-[#850081]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
        <div className="text-white animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Transformational Coaching
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Transforming <span className="text-gold-gradient italic">Mindsets</span>,<br />
            Elevating Lives
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            Helping individuals create meaningful, lasting transformation through mindset
            reprogramming, emotional healing, science-based coaching, and personal growth strategies.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#programs" className="btn-gold">
              Start Your Journey <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#programs" className="btn-outline-light">Explore Programs</a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-white/60">
            <div>
              <div className="font-display text-3xl text-white">5K+</div>
              <div>Lives Transformed</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <div className="font-display text-3xl text-white">10+</div>
              <div>Years of Coaching</div>
            </div>
            <div className="hidden h-10 w-px bg-white/20 sm:block" />
            <div className="hidden sm:block">
              <div className="font-display text-3xl text-white">98%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-transparent to-primary-soft/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-luxury">
            <img
              src={heroPortrait}
              alt="Shabna Sulthan, transformational life coach"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-6">
              <div className="font-display text-xl text-white">Shabna Sulthan</div>
              <div className="text-sm text-white/70">Transformation Coach & Mentor</div>
            </div>
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white/95 p-4 shadow-luxury backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient">
                <Sparkles className="h-5 w-5 text-[hsl(280,40%,15%)]" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold">Certified ICF Coach</div>
                <div className="text-xs text-muted-foreground">Mindset & Emotional Wellness</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
