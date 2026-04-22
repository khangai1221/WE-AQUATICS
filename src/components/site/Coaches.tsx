import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const coaches = [
  {
    name: "О.Батулга",
    role: "Ахлах дасгалжуулагч",
    ig: "btulga_",
    phone: "8883-3533",
    initials: "ОБ",
    info: "WORLDAQUATICS SWIMMING COACHES CERTIFICATION\nCOURSE LEVEL 1, LEVEL 2\nHEAD COACH\nҮҮСГЭН БАЙГУУЛАГЧ",
  },
  {
    name: "Э.Дэмүүл",
    role: "СМастер дасгалжуулагч",
    ig: "demuulsgram",
    phone: "9534-2953",
    initials: "ЭД",
    info: "WORLD AQUATICS SWIMMING\nCOACHES CERTIFICATION\nCOURSE LEVEL 2\nҮҮСГЭН БАЙГУУЛАГЧ",
  },
  {
    name: "Э.Баасандорж",
    role: "СДМастер дасгалжуулагч",
    ig: "baaska__sw",
    phone: "9596-9008",
    initials: "ЭБ",
    info: "MASF SWIMMING OFFICIAL\nSCHOOL LEVEL 1",
  },
  {
    name: "Э.Хулан",
    role: "СДМастер дасгалжуулагч",
    ig: "hulnaa_coach",
    phone: "9534-1551",
    initials: "ЭХ",
    info: "AMERICAN SWIMMING COACHES\nASSOCIATION CERTIFIED LEVEL 1\nWORLD AQUATICS SWIMMING\nCOACHES CERTIFICATION COURSE\nLEVEL 1",
  },
  {
    name: "З.Тэмүүлэн",
    role: "Дасгалжуулагч",
    ig: "temulen_coach",
    phone: "9909-0000",
    initials: "ЗТ",
    info: "MASF SWIMMING OFFICIAL\nSCHOOL LEVEL 1",
  },
];

export function Coaches() {
  const [selectedCoach, setSelectedCoach] = useState<(typeof coaches)[0] | null>(null);

  return (
    <>
      <section id="coaches" className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              Мэргэжлийн баг
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-balance leading-tight">
              Танай зорилгод хүрэх
              <br />
              <span className="text-gradient-water">дасгалжуулагчид</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {coaches.map((c) => (
              <div
                key={c.name}
                onClick={() => setSelectedCoach(c)}
                className="group p-6 lg:p-8 rounded-3xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="size-20 rounded-2xl bg-gradient-deep text-primary-foreground grid place-items-center font-display font-black text-2xl mb-5 group-hover:scale-105 transition-transform">
                  {c.initials}
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  {c.role}
                </div>
                <h3 className="font-display font-extrabold text-2xl mt-2">{c.name}</h3>
                <div className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <a
                    href={`https://instagram.com/${c.ig}`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="font-mono text-xs">IG</span>
                    <span>@{c.ig}</span>
                  </a>
                  <a
                    href={`tel:+976${c.phone.replace("-", "")}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <span className="font-mono text-xs">TEL</span>
                    <span>{c.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCoach} onOpenChange={() => setSelectedCoach(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-display font-black text-2xl">
              {selectedCoach?.name}
            </DialogTitle>
            <DialogDescription className="text-primary font-semibold uppercase tracking-wider">
              {selectedCoach?.role}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {selectedCoach?.info}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
