import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-swimmer.jpg";

export function Hero() {
  return (
    <section className="relative min-h-dvh pt-16 overflow-hidden bg-gradient-deep text-primary-foreground">
      {/* Background image */}
      <div className="absolute inset-0 -z-0">
        <img
          src={heroImg}
          alt="Олимпийн тамирчин усанд сэлж буй нь"
          width={1600}
          height={1600}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/40 to-deep/95" />
      </div>

      {/* Floating orbs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl animate-float-slow" />
      <div className="absolute -bottom-40 -right-32 w-[600px] h-[600px] rounded-full bg-primary/40 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 backdrop-blur border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              <span className="size-1.5 rounded-full bg-gold animate-pulse" />
              Монгол улсын 7 удаагийн аварга
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-balance">
              Усанд сэлэлтийн{" "}
              <span className="text-gradient-water bg-gradient-to-r from-gold to-accent">
                аварга
              </span>{" "}
              болох замын эхлэл
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              2012 оноос хойш мэргэжлийн дасгалжуулагчдын удирдлага дор бүх насны хүмүүст
              анхан, дунд, ахисан шатны сургалтыг чанартай хүргэж байна.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#contact">Хичээлд бүртгүүлэх →</a>
              </Button>
              <Button asChild variant="outline-hero" size="xl">
                <a href="#programs">Хичээлүүдийг үзэх</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 text-sm">
              <div>
                <div className="font-display font-extrabold text-3xl text-gold">13+</div>
                <div className="text-primary-foreground/70">Жилийн туршлага</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-gold">61</div>
                <div className="text-primary-foreground/70">Улсын рекорд</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl text-gold">10+</div>
                <div className="text-primary-foreground/70">Гадаад тэмцээн</div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-ripple" />
              <div className="absolute inset-8 rounded-full border border-gold/30 animate-ripple" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-16 rounded-full border border-gold/30 animate-ripple" style={{ animationDelay: "2s" }} />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-gold/20 to-accent/20 backdrop-blur-sm border border-gold/40 flex flex-col items-center justify-center text-center p-8 ring-gold-glow">
                <div className="font-display font-black text-7xl text-gold">7×</div>
                <div className="text-sm uppercase tracking-[0.25em] text-primary-foreground/90 mt-2">Champions</div>
                <div className="text-xs text-primary-foreground/60 mt-3">2019 · 2021 · 2022<br/>2023 · 2024 · 2025 · 2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
