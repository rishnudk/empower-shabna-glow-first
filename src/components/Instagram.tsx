import { Instagram as InstaIcon } from "lucide-react";
import i1 from "@/assets/insta-1.jpg";
import i2 from "@/assets/insta-2.jpg";
import i3 from "@/assets/insta-3.jpg";
import i4 from "@/assets/insta-4.jpg";

const posts = [i1, i2, i3, i4, i2, i3];

export default function InstagramSection() {
  return (
    <section id="resources" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <InstaIcon className="h-4 w-4" /> Instagram
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Daily inspiration for your <span className="italic text-primary">transformation</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Empowerment quotes, coaching moments, and client transformation stories — delivered daily.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-primary"
            >
              <InstaIcon className="h-4 w-4" /> Follow @shabnasulthan
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {posts.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
