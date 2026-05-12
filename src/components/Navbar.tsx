import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";

const links = ["Home", "Programs", "Transformation", "Workshops", "Testimonials", "Resources", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient font-display text-sm font-bold text-[hsl(280,40%,15%)]">
            E
          </span>
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-wide">Empower</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">with Shabna Sulthan</div>
          </div>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-white/80 lg:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="relative transition-colors hover:text-gold">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <button className="flex items-center gap-1 text-sm text-white/80 hover:text-gold">
            <Globe className="h-4 w-4" /> EN
          </button>
          <a href="#contact" className="btn-gold text-sm">Book a Session</a>
        </div>

        <button
          aria-label="Toggle menu"
          className="rounded-full border border-white/20 p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-navy/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-6 py-6 text-white">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base hover:bg-white/10"
              >
                {l}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#contact" className="btn-gold w-full">Book a Session</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
