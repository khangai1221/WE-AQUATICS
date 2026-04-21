import { Button } from "@/components/ui/button";
import kidsImg from "@/assets/kids-class.jpg";
import adultImg from "@/assets/adult-class.jpg";
import eliteImg from "@/assets/elite-class.jpg";

const programs = [
  {
    img: kidsImg,
    level: "Анхан шат",
    title: "Хүүхдийн сургалт",
    desc: "5 наснаас дээш хүүхдүүдэд зориулсан суурь дадлага, аюулгүй байдлын сургалт.",
    points: ["Усанд дасгах", "Үндсэн зүсэлт", "Аюулгүй байдал"],
  },
  {
    img: adultImg,
    level: "Дунд шат",
    title: "Насанд хүрэгчдийн фитнес",
    desc: "Эрүүл мэндийн төлөө усанд сэлэх 4 төрлийн зүсэлтийг эзэмших.",
    points: ["Техник сайжруулах", "Тэвчээр", "Кардио бэлтгэл"],
  },
  {
    img: eliteImg,
    level: "Ахисан шат",
    title: "Мэргэжлийн бэлтгэл",
    desc: "Тэмцээнд оролцох тамирчдад зориулсан өндөр түвшний бэлтгэл хөтөлбөр.",
    points: ["Хувийн төлөвлөгөө", "Тэмцээний дадлага", "Гадаад бэлтгэл"],
  },
];

export function Programs() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Хичээлийн хөтөлбөр
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              Бүх насны хүмүүст<br/>тохирсон <span className="text-gradient-water">хичээл</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Анхан шатнаас тэмцээний түвшин хүртэл — таны зорилгод тохирох хичээлийг сонгоорой.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 lg:p-8">
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{p.level}</div>
                <h3 className="font-display font-extrabold text-2xl mt-2">{p.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                <ul className="mt-5 space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3 text-sm">
                      <span className="size-1.5 rounded-full bg-accent" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="xl">
            <a href="#contact">Хичээлд бүртгүүлэх</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
