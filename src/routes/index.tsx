import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Achievements } from "@/components/site/Achievements";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Coaches } from "@/components/site/Coaches";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "We Aquatics — Монголын улсын 7 удаагийн аварга усан спортын клуб" },
      {
        name: "description",
        content:
          "Ви Аквайтикс — 2012 оноос үйл ажиллагаа явуулж буй Монголын тэргүүлэх усан спортын клуб. Бүх насны хүмүүст зориулсан анхан, дунд, ахисан шатны сургалт.",
      },
      { property: "og:title", content: "We Aquatics — Усанд сэлэлтийн аваргуудтай хамт" },
      { property: "og:description", content: "Монгол улсын 7 удаагийн аварга. Хичээлд бүртгүүлээрэй." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Programs />
        <Coaches />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
