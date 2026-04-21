export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="size-11 rounded-xl bg-gradient-to-br from-gold to-accent grid place-items-center text-deep font-display font-black">
              WA
            </div>
            <div>
              <div className="font-display font-extrabold tracking-tight">WE AQUATICS CLUB</div>
              <div className="text-xs text-primary-foreground/60 uppercase tracking-[0.2em]">Ви Аквайтикс — Since 2012</div>
            </div>
          </div>
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} We Aquatics. Бүх эрх хуулиар хамгаалагдсан.
          </div>
        </div>
      </div>
    </footer>
  );
}
