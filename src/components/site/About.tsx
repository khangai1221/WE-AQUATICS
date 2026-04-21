import poolImg from "@/assets/pool-lanes.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border shadow-2xl">
              <img
                src={poolImg}
                alt="Олимпийн стандарт бассейн"
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-card rounded-2xl shadow-xl p-6 border border-border max-w-[220px]">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Үүсгэн байгуулагдсан</div>
              <div className="font-display font-black text-5xl text-gradient-water mt-1">2012</div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Бидний тухай
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              Эрүүл амьдралын{" "}
              <span className="text-gradient-water">хэв маяг</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Манай Ви Аквайтикс усан спортын клуб нь 2012 оноос эхлэн усанд сэлэлтийн
              мэргэжлийн тамирчдыг тогтвортой бэлдэж зогсохгүй усан спортоор дамжуулан хүмүүсийн
              эрүүл мэндэд хувь нэмрээ оруулж байна.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { t: "Бие бялдар, сэтгэл зүй", d: "Тамирчин бүрийн бие бялдар, сэтгэл зүй, сахилга батыг тэнцвэртэй хөгжүүлэх." },
                { t: "Багийн нэгдэл", d: "Харилцан хүндлэлд суурилсан эрүүл орчныг бүрдүүлэх." },
                { t: "Эрүүл амьдрал", d: "Усанд сэлэлтийг эрүүл амьдралын хэв маяг болгох." },
              ].map((v, i) => (
                <div key={v.t} className="flex gap-5">
                  <div className="flex-shrink-0 size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center font-display font-bold">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="font-display font-bold text-lg">{v.t}</div>
                    <div className="text-muted-foreground mt-1">{v.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
