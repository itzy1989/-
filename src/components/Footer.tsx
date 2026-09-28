export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-800 text-ink-100 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-10 rounded-full border border-ink-300 flex items-center justify-center font-serif text-gold">
                唵
              </span>
              <span className="font-serif text-xl tracking-[0.3em] uppercase">
                Amala
              </span>
            </div>
            <p className="text-ink-300 leading-relaxed max-w-md">
              Sacred objects from the Himalayas, carried across oceans with
              intention. We are custodians of craft and meaning.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Shop
            </h4>
            <ul className="space-y-3 text-sm text-ink-300">
              <li>
                <a href="/products?category=mala" className="hover:text-white transition-colors">
                  Malas
                </a>
              </li>
              <li>
                <a href="/products?category=dzi" className="hover:text-white transition-colors">
                  Dzi Beads
                </a>
              </li>
              <li>
                <a href="/products?category=bracelet" className="hover:text-white transition-colors">
                  Bracelets
                </a>
              </li>
              <li>
                <a href="/products?category=accessory" className="hover:text-white transition-colors">
                  Pendants
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-6">
              Journal
            </h4>
            <p className="text-sm text-ink-300 leading-relaxed mb-4">
              Receive our quiet letters — stories from the plateau, rituals,
              and new arrivals.
            </p>
            <div className="flex border-b border-ink-600">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-3 text-sm placeholder:text-ink-500 outline-none"
              />
              <button className="text-sm tracking-widest uppercase text-gold hover:text-white transition-colors py-3 px-2">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-ink-700 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <span>© {new Date().getFullYear()} Amala. All rights reserved.</span>
          <div className="flex gap-8 tracking-wider uppercase">
            <a href="#" className="hover:text-ink-200 transition-colors">Shipping</a>
            <a href="#" className="hover:text-ink-200 transition-colors">Returns</a>
            <a href="#" className="hover:text-ink-200 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
