import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const cols = [
  { title: "About", links: ["Our Story", "Approach", "Press", "Careers"] },
  { title: "Programs", links: ["Mindset", "Emotional Healing", "Confidence", "Women Empowerment"] },
  { title: "Resources", links: ["Blog", "Podcast", "Free Guides", "Newsletter"] },
  { title: "Contact", links: ["Book a Session", "Speaking", "Press Inquiries", "Support"] },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-gradient font-display font-bold text-[hsl(280,40%,15%)]">
                E
              </span>
              <div>
                <div className="font-display text-lg font-semibold">Empower</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/60">with Shabna Sulthan</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-white/60">
              Transforming mindsets, elevating lives — through science-based coaching, emotional
              healing, and structured personal growth.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition hover:border-gold hover:bg-white/5 hover:text-gold">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-display text-sm font-semibold tracking-wide text-gold">{c.title}</div>
                <ul className="mt-5 space-y-3 text-sm text-white/60">
                  {c.links.map((l) => (
                    <li key={l}><a href="#" className="transition hover:text-white">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Empower with Shabna Sulthan. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
