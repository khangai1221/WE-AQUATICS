import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Achievements } from "@/components/site/Achievements";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Coaches } from "@/components/site/Coaches";
import { Location } from "@/components/site/Location";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Programs />
        <Coaches />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
