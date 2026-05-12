import { Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";

export default function Testimonial() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-testimonial-gradient py-28">
      <div className="glow-orb animate-float-slow h-[400px] w-[400px] -top-20 left-1/4 bg-[#850081]" />
      <div className="glow-orb animate-float-medium h-[360px] w-[360px] bottom-0 right-10 bg-[#96519A]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <Quote className="mx-auto h-10 w-10 text-gold" />
        <blockquote className="mt-8 font-display text-3xl leading-snug font-medium sm:text-4xl lg:text-5xl">
          "One conversation changed the way I see myself <span className="italic text-gold-gradient">and my future</span>."
        </blockquote>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
          Working with Shabna helped me untangle years of self-doubt. I left every session feeling
          lighter, clearer, and more deeply myself than I have ever felt before.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <img
            src={t1}
            alt="Aisha R."
            loading="lazy"
            className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/60"
          />
          <div className="text-left">
            <div className="font-display text-lg">Aisha R.</div>
            <div className="text-sm text-white/60">Entrepreneur & Coaching Client</div>
          </div>
        </div>
      </div>
    </section>
  );
}
