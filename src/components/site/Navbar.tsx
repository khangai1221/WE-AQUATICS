import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Victory Aquatics" className="h-20 w-auto object-contain mt-2" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">
            Бидний тухай
          </a>
          <a href="#achievements" className="hover:text-primary transition-colors">
            Амжилт
          </a>
          <a href="#programs" className="hover:text-primary transition-colors">
            Хичээл
          </a>
          <a href="#coaches" className="hover:text-primary transition-colors">
            Дасгалжуулагч
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Холбоо барих
          </a>
        </nav>
        <Button asChild variant="hero" size="sm">
          <a href="#contact">Бүртгүүлэх</a>
        </Button>
      </div>
    </header>
  );
}
