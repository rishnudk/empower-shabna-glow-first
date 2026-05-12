import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/program-mindset.jpg";
import p2 from "@/assets/program-healing.jpg";
import p3 from "@/assets/program-confidence.jpg";
import p4 from "@/assets/program-women.jpg";
import p5 from "@/assets/program-clarity.jpg";
import p6 from "@/assets/program-growth.jpg";
import p7 from "@/assets/program-leadership.jpg";

const programs = [
  { img: p1, title: "Mindset Reprogramming", desc: "Rewire limiting beliefs and unlock new possibilities." },
  { img: p2, title: "Emotional Healing Sessions", desc: "Release old wounds with guided, compassionate care." },
  { img: p3, title: "Confidence Building Program", desc: "Build unshakable self-trust and presence." },
  { img: p4, title: "Women Empowerment Coaching", desc: "Reclaim your voice and step into your power." },
  { img: p5, title: "Clarity & Goal Alignment", desc: "Find direction that aligns with your purpose." },
  { img: p6, title: "Personal Growth Intensive", desc: "A deep, structured journey of self-mastery." },
  { img: p7, title: "Leadership Mindset Training", desc: "Lead with calm authority and emotional intelligence." },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-muted/30 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Programs</span>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Transformation programs designed for <span className="italic text-primary">real change</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each program blends science-based techniques with emotional storytelling to create
            measurable, lasting growth.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article key={p.title} className="card-luxury group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-soft"
                >
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
