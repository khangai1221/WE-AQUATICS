const items = [
  { stat: "7", label: "Насанд хүрэгчдийн улсын аваргын тэргүүн байр" },
  { stat: "3", label: "Өсвөр үе, залуучуудын улсын аваргын тэргүүн байр" },
  { stat: "35", label: "Улсын рекорд (25м бассейн)" },
  { stat: "26", label: "Улсын рекорд (50м бассейн)" },
];

const events = [
  "Олимпын наадам — Парис 2024",
  "Дэлхийн цом",
  "Азийн наадам",
  "Залуучуудын дэлхийн аварга",
  "Дэлхийн оюутны наадам",
  "Азийн залуучуудын аварга",
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            Багийн торгон амжилтууд
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
            Тоо хэлж буй <span className="text-gradient-water">түүх</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Манай тамирчид Монгол улсыг олон улсын тавцанд тогтмол төлөөлж, шинэ дээд амжилтууд тогтоосоор байна.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20">
          {items.map((it) => (
            <div
              key={it.label}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="font-display font-black text-6xl lg:text-7xl text-gradient-water leading-none">
                {it.stat}
              </div>
              <div className="mt-4 text-sm font-medium text-foreground/80 leading-snug">
                {it.label}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-gradient-deep text-primary-foreground p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-3">
                Олон улсын тавцанд
              </div>
              <h3 className="font-display font-extrabold text-3xl lg:text-4xl">
                2016 оноос хойш<br/>тогтмол оролцоо
              </h3>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {events.map((e) => (
                <div key={e} className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="size-2 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-sm font-medium">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
