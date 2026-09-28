import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block animate-fade-up"
    >
      <div className="aspect-square bg-ink-100 overflow-hidden mb-6 relative">
        {/* 产品图片 - 使用 placeholder，用户后续替换 */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${product.images[0]})`,
          }}
        />
        {/* 极简边框装饰 */}
        <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 transition-colors duration-500" />
      </div>

      <div className="space-y-2">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-lg text-ink-800 group-hover:text-gold transition-colors">
            {product.name}
          </h3>
          <span className="text-sm text-ink-600 tracking-wide">
            ${product.price.toLocaleString()}
          </span>
        </div>
        {product.nameCn && (
          <p className="text-xs text-ink-400 font-serif tracking-wider">
            {product.nameCn}
          </p>
        )}
      </div>
    </Link>
  );
}
