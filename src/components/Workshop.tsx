import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import workshop from "@/assets/workshop-portrait.jpg";

export default function Workshop() {
  return (
    <section id="workshops" className="bg-background py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={workshop}
              alt="Shabna Sulthan workshop"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-5 text-white shadow-luxury sm:block">
            <div className="text-xs uppercase tracking-[0.2em] text-white/70">Next Workshop</div>
            <div className="mt-1 font-display text-2xl">March 15</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Upcoming Workshop</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Emotional Freedom & <br />
            <span className="italic text-primary">Inner Confidence</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A 90-minute live experience to release emotional weight, reframe inner narratives, and step
            into a more confident version of you.
          </p>

          <ul className="mt-8 space-y-4 text-foreground">
            <li className="flex items-center gap-3"><Calendar className="h-5 w-5 text-primary" /> Saturday, March 15, 2026</li>
            <li className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> 6:00 PM – 7:30 PM IST</li>
            <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Online — Live via Zoom</li>
          </ul>

          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition hover:bg-primary-soft">
            Reserve My Seat <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
