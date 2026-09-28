import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  // 展示前3个产品在首页精选区域
  const featured = products.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero Section — 极简、留白、东方感 */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-paper" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/5 to-transparent" />

        {/* 垂直线条装饰 */}
        <div className="absolute left-12 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-ink-200 to-transparent hidden md:block" />
        <div className="absolute right-12 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-ink-200 to-transparent hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* 东方符号 */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block font-serif text-4xl text-gold/60 tracking-widest">
              ॐ
            </span>
          </div>

          {/* 主标题 */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink-800 leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Sacred Objects
            <br />
            <span className="text-ink-500 font-light italic">from the Plateau</span>
          </h1>

          {/* 副标题 */}
          <p
            className="text-sm md:text-base text-ink-500 tracking-[0.2em] uppercase mb-16 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Tibetan Malas · Authentic Dzi Beads · Handcrafted with Intention
          </p>

          {/* CTA按钮 */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/products"
              className="group px-10 py-4 bg-ink-800 text-ink-50 text-xs tracking-[0.3em] uppercase
                         hover:bg-gold transition-colors duration-300"
            >
              Explore Collection
            </Link>
            <a
              href="#story"
              className="px-10 py-4 text-xs tracking-[0.3em] uppercase text-ink-600
                         border border-ink-300 hover:border-ink-600 transition-colors"
            >
              Our Philosophy
            </a>
          </div>
        </div>

        {/* 底部滚动提示 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-ink-400 uppercase animate-pulse">
          Scroll ↓
        </div>
      </section>

      {/* 精选产品 */}
      <section className="py-32 px-6 md:px-12 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
              — Featured —
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-ink-800">
              Selected Pieces
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link
              href="/products"
              className="inline-block text-xs tracking-[0.4em] uppercase text-ink-600
                         border-b border-ink-300 hover:border-ink-600 pb-1 transition-colors"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* 品牌故事 / Philosophy */}
      <section id="story" className="py-32 px-6 md:px-12 bg-ink-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <span className="text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
              — Philosophy —
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-800 leading-snug">
              Objects that remember.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-ink-600 leading-relaxed">
            <p>
              In the Himalayas, a dzi bead is never merely jewelry. It carries
              the breath of its previous owners, the blessings of lamas who
              touched it, and the slow patience of the mountain that birthed it.
            </p>
            <p>
              Amala exists to bring these objects across oceans with the
              reverence they deserve. We work directly with artisans in Lhasa,
              Kathmandu, and Dharamshala — family workshops whose craft spans
              generations.
            </p>
            <p className="font-serif italic text-ink-500 border-l-2 border-gold pl-6">
              &ldquo;Mala is Sanskrit for garland. But a mala is not a decoration —
              it is a companion for the long walk back to yourself.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 工艺特色 */}
      <section className="py-32 px-6 md:px-12 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            {[
              {
                symbol: "✦",
                title: "Ethically Sourced",
                desc: "All materials from responsible suppliers in the Himalayan region.",
              },
              {
                symbol: "❋",
                title: "Handcrafted",
                desc: "Each piece made by individual artisans, never mass-produced.",
              },
              {
                symbol: "◯",
                title: "Blessed",
                desc: "Products are blessed by lamas in the tradition of Tibetan Buddhism.",
              },
              {
                symbol: "❖",
                title: "Certified",
                desc: "Every dzi bead comes with a certificate of authenticity.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-4">
                <span className="block text-gold text-2xl font-serif">
                  {item.symbol}
                </span>
                <h3 className="font-serif text-lg text-ink-800 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
