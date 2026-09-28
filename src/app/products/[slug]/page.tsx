import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CheckoutButton from "@/components/CheckoutButton";
import { getProductBySlug, products } from "@/data/products";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — Amala`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: Params) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // 获取推荐产品（排除当前产品）
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-20">
      <Nav />

      {/* 返回链接 */}
      <div className="px-6 md:px-12 pt-12 max-w-7xl mx-auto">
        <Link
          href="/products"
          className="text-xs tracking-[0.3em] uppercase text-ink-400 hover:text-ink-800 transition-colors"
        >
          ← Back to Collection
        </Link>
      </div>

      {/* 产品详情主体 */}
      <section className="px-6 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
          {/* 产品图片 */}
          <div>
            <div className="aspect-square bg-ink-100 overflow-hidden relative">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 bg-cover bg-center animate-fade-in"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          </div>

          {/* 产品信息 */}
          <div className="space-y-10">
            {/* 分类标签 */}
            <span className="text-xs tracking-[0.3em] uppercase text-gold">
              {product.category}
            </span>

            {/* 名称 */}
            <div>
              <h1 className="font-serif text-3xl md:text-5xl text-ink-800 mb-2">
                {product.name}
              </h1>
              {product.nameCn && (
                <p className="font-serif text-xl text-ink-400">
                  {product.nameCn}
                </p>
              )}
            </div>

            {/* 价格 */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-serif text-ink-800">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-ink-400 text-sm tracking-wider">
                {product.currency}
              </span>
            </div>

            {/* 描述 */}
            <p className="text-ink-600 leading-relaxed text-[15px]">
              {product.description}
            </p>

            {/* 特色亮点 */}
            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-ink-500 mb-4">
                Highlights
              </h3>
              <ul className="space-y-3">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-sm text-ink-700"
                  >
                    <span className="text-gold mt-1">◇</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* 规格 */}
            <div className="border-t border-ink-200 pt-8">
              <h3 className="text-xs tracking-[0.3em] uppercase text-ink-500 mb-6">
                Specifications
              </h3>
              <dl className="space-y-3 text-sm">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-ink-100 pb-2">
                    <dt className="text-ink-400 capitalize">{key}</dt>
                    <dd className="text-ink-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 状态 */}
            <div className="flex items-center gap-3 text-sm">
              <span
                className={`w-2 h-2 rounded-full ${
                  product.inStock ? "bg-green-600" : "bg-red-600"
                }`}
              />
              <span className={product.inStock ? "text-ink-600" : "text-red-500"}>
                {product.inStock ? "In Stock — Ships within 3 days" : "Currently Reserved"}
              </span>
            </div>

            {/* 购买按钮 */}
            {product.inStock && (
              <div className="pt-4">
                <CheckoutButton
                  productSlug={product.slug}
                  productName={product.name}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="px-6 md:px-12 py-20 bg-ink-50">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.4em] uppercase text-gold mb-6 block">
            — The Story —
          </span>
          <p className="font-serif text-xl md:text-2xl text-ink-700 leading-relaxed italic">
            &ldquo;{product.story}&rdquo;
          </p>
        </div>
      </section>

      {/* 相关产品 */}
      {related.length > 0 && (
        <section className="px-6 md:px-12 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center font-serif text-2xl text-ink-800 mb-12">
              You May Also Appreciate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="group"
                >
                  <div className="aspect-square bg-ink-100 overflow-hidden mb-6">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${p.images[0]})` }}
                    />
                  </div>
                  <h3 className="font-serif text-lg text-ink-800 group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink-500 mt-1">
                    ${p.price.toLocaleString()}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
