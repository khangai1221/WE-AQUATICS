import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] bg-gradient-deep text-primary-foreground p-10 sm:p-14 lg:p-20">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                Шинэ улирал нээлттэй
              </div>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Аваргуудтай хамт<br/>сэлэхэд бэлэн үү?
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-lg">
                Утсаар холбогдож хичээлийн цагийн хуваарь, төлбөрийн талаар дэлгэрэнгүй мэдээлэл аваарай.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+97672703533"
                className="flex items-center justify-between p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur hover:bg-primary-foreground/15 transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">Утас</div>
                  <div className="font-display font-extrabold text-2xl">+976 7270 3533</div>
                </div>
                <span className="text-2xl">→</span>
              </a>
              <a
                href="mailto:weaquaticsclub@gmail.com"
                className="flex items-center justify-between p-6 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur hover:bg-primary-foreground/15 transition-colors"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">И-мэйл</div>
                  <div className="font-display font-extrabold text-lg sm:text-xl break-all">weaquaticsclub@gmail.com</div>
                </div>
                <span className="text-2xl">→</span>
              </a>
              <Button asChild variant="gold" size="xl" className="w-full">
                <a href="tel:+97672703533">Одоо холбогдох</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
