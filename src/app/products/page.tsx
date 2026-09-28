import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Collection — Amala",
  description:
    "Explore our curated collection of Tibetan malas, authentic dzi beads, and handcrafted sacred jewelry.",
};

type Category = "all" | "mala" | "dzi" | "bracelet" | "accessory";

interface Props {
  searchParams?: { category?: Category };
}

export default function ProductsPage({ searchParams }: Props) {
  const category = searchParams?.category || "all";

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All Pieces" },
    { key: "mala", label: "Malas" },
    { key: "dzi", label: "Dzi Beads" },
    { key: "bracelet", label: "Bracelets" },
    { key: "accessory", label: "Pendants" },
  ];

  return (
    <main className="min-h-screen pt-20">
      <Nav />

      {/* 页面标题 */}
      <section className="py-24 px-6 md:px-12 text-center">
        <span className="text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
          — The Collection —
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-ink-800 mb-8">
          Sacred Adornments
        </h1>
        <p className="text-ink-500 max-w-xl mx-auto leading-relaxed">
          Each piece selected with care from artisans across the Himalayan
          plateau. Limited quantities available.
        </p>
      </section>

      {/* 分类筛选 */}
      <section className="pb-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
            {categories.map((cat) => {
              const isActive = category === cat.key;
              return (
                <a
                  key={cat.key}
                  href={
                    cat.key === "all"
                      ? "/products"
                      : `/products?category=${cat.key}`
                  }
                  className={`px-6 py-2 text-xs tracking-[0.2em] uppercase border transition-colors
                    ${
                      isActive
                        ? "bg-ink-800 text-ink-50 border-ink-800"
                        : "text-ink-500 border-ink-200 hover:border-ink-400"
                    }`}
                >
                  {cat.label}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 产品网格 */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-32 text-ink-400">
              <p className="font-serif text-xl mb-4">— No pieces yet —</p>
              <p className="text-sm">More arriving soon. Subscribe for updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
