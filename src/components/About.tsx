export default function About() {
  return (
    <section id="transformation" className="relative bg-background py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary">Our Mission</span>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Helping You Create <span className="italic text-primary">Lasting</span> Inner Transformation
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Empower with Shabna Sulthan helps individuals unlock clarity, confidence, emotional wellness,
          and purpose through transformative coaching experiences rooted in mindset reprogramming and
          emotional healing.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { n: "01", t: "Clarity", d: "Discover what truly matters to you." },
            { n: "02", t: "Confidence", d: "Step into your most empowered self." },
            { n: "03", t: "Calm", d: "Heal the patterns holding you back." },
          ].map((i) => (
            <div key={i.n} className="rounded-3xl border border-border bg-muted/40 p-8 text-left shadow-soft">
              <div className="font-display text-sm text-primary">{i.n}</div>
              <div className="mt-4 font-display text-2xl font-semibold">{i.t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
