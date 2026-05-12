const partners = [
  "FORBES", "VOGUE", "ELLE", "MINDFUL", "HARPER'S", "WELL+GOOD", "PSYCHE", "BAZAAR",
];

export default function Partners() {
  const list = [...partners, ...partners];
  return (
    <section className="border-y border-border bg-background py-14">
      <p className="mb-8 text-center text-xs uppercase tracking-[0.4em] text-muted-foreground">
        Featured & Trusted By
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {list.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-[0.25em] text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
