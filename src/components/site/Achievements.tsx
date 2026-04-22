import adultImg from "@/assets/adult.png";
import teenImg from "@/assets/teen.png";

const items = [
  { stat: "7", label: "Насанд хүрэгчдийн улсын аварга" },
  { stat: "58", label: "Улсын рекорд" },
  { stat: "31", label: "Улсын рекорд (25м бассейн)" },
  { stat: "27", label: "Улсын рекорд (50м бассейн)" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            КЛУБЫН АМЖИЛТ
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
            Манай <span className="text-gradient-water">амжилт</span>
          </h2>
        </div>

        {/* Adult Achievements */}
        <div className="mb-12 relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={adultImg}
            alt="Насанд хүрэгчдийн амжилт"
            width={1200}
            height={600}
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white mb-4">
              НАСАНД ХҮРЭГЧДИЙН УАШТ
            </h3>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              2019, 2021, 2022, 2023, 2024, 2025, 2026 онуудад дарааллан Монгол улсын 7 удаагийн
              аварга багаар тодорсон. Манай клубын тамирчид 25м бассейны 31 рекорд, 50м бассейны 27
              рекорд нийт монгол улсын 58 рекорд амжилтыг эзэмшиж байна.
            </p>
          </div>
        </div>

        {/* Youth Achievements */}
        <div className="mb-20 relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={teenImg}
            alt="Өсвөр үе, залуучуудын амжилт"
            width={1200}
            height={600}
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl text-white mb-4">
              ӨСВӨР ҮЕ, ЗАЛУУЧУУДЫН УАШТ
            </h3>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
              2020, 2021, 2023 онуудад дарааллан Монгол улсын 3 удаагийн аварга баг, 2024, 2025,
              2026 онуудад Дэд аварга багаар тодорсон. Одоогоор манай клуб нь мэргэжлийн 40 гаруй
              тамирчинтай бэлтгэл сургуулилтаа шаргуу тогтмол хийсээр байна.
            </p>
          </div>
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
                2016 оноос хойш
                <br />
                тогтмол оролцоо
              </h3>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
              {[
                "Олимпын наадам — Парис 2024",
                "Дэлхийн цом",
                "Азийн наадам",
                "Залуучуудын дэлхийн аварга",
                "Дэлхийн оюутны наадам",
                "Азийн залуучуудын аварга",
              ].map((e) => (
                <div
                  key={e}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
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
