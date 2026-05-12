import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

export default function Gallery() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Community</span>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Moments from our <span className="italic text-primary">empowerment circle</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
            <img src={g1} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-navy/20 transition group-hover:bg-navy/40" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-2xl md:col-span-2">
            <img src={g2} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
            <img src={g3} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-2xl">
            <img src={g4} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-2xl">
            <img src={g5} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
