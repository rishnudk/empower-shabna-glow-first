import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Retreat from "@/components/Retreat";
import Workshop from "@/components/Workshop";
import InstagramSection from "@/components/Instagram";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import Partners from "@/components/Partners";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Empower with Shabna Sulthan — Transforming Mindsets, Elevating Lives" },
      {
        name: "description",
        content:
          "Premium transformation coaching for mindset reprogramming, emotional healing, confidence, and women empowerment with Shabna Sulthan.",
      },
      { property: "og:title", content: "Empower with Shabna Sulthan" },
      { property: "og:description", content: "Transforming mindsets, elevating lives." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Retreat />
      <Workshop />
      <InstagramSection />
      <Testimonial />
      <Gallery />
      <Partners />
      <Newsletter />
      <Footer />
    </main>
  );
}
