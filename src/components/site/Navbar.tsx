import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-gradient-deep grid place-items-center text-primary-foreground font-display font-black text-sm shadow-md">
            WA
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-base tracking-tight">WE AQUATICS</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Since 2012</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">Бидний тухай</a>
          <a href="#achievements" className="hover:text-primary transition-colors">Амжилт</a>
          <a href="#programs" className="hover:text-primary transition-colors">Хичээл</a>
          <a href="#coaches" className="hover:text-primary transition-colors">Дасгалжуулагч</a>
          <a href="#contact" className="hover:text-primary transition-colors">Холбоо барих</a>
        </nav>
        <Button asChild variant="hero" size="sm">
          <a href="#contact">Бүртгүүлэх</a>
        </Button>
      </div>
    </header>
  );
}
