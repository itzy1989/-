import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full border border-ink-300 flex items-center justify-center text-xs font-serif text-ink-500 group-hover:border-gold transition-colors">
              唵
            </span>
            <span className="font-serif text-lg tracking-[0.25em] text-ink-800 uppercase">
              Amala
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-ink-500">
            <Link
              href="/products"
              className="hover:text-ink-800 transition-colors"
            >
              Collection
            </Link>
            <Link href="#story" className="hover:text-ink-800 transition-colors">
              Philosophy
            </Link>
            <Link href="#journal" className="hover:text-ink-800 transition-colors">
              Journal
            </Link>
            <Link href="#contact" className="hover:text-ink-800 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-sm text-ink-500">
            <span className="hidden sm:inline tracking-wider">EN · USD</span>
          </div>
        </div>
      </div>
    </header>
  );
}
