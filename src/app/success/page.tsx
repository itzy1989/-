import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thank You — Amala",
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen pt-20 flex flex-col">
      <Nav />

      <section className="flex-1 flex items-center justify-center py-32 px-6">
        <div className="max-w-lg text-center">
          {/* 成功图标 */}
          <div className="mb-10">
            <span className="inline-block font-serif text-6xl text-gold animate-fade-in">
              ✦
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-ink-800 mb-6">
            Thank You
          </h1>

          <p className="text-ink-500 leading-relaxed mb-10">
            Your payment has been received. A confirmation email with tracking
            information will be sent within 24 hours. We ship from our workshop
            in Lhasa via international registered mail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="px-8 py-4 bg-ink-800 text-ink-50 text-xs tracking-[0.3em] uppercase
                         hover:bg-gold transition-colors"
            >
              Continue Browsing
            </Link>
            <Link
              href="/"
              className="px-8 py-4 text-xs tracking-[0.3em] uppercase text-ink-600
                         border border-ink-300 hover:border-ink-600 transition-colors"
            >
              Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
