import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="font-serif text-8xl text-gold/40 mb-6 block">唵</span>
        <h1 className="font-serif text-3xl md:text-4xl text-ink-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-ink-500 mb-10 leading-relaxed">
          The page you seek has drifted, like a prayer flag in the wind.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-ink-800 text-ink-50 text-xs tracking-[0.3em] uppercase
                     hover:bg-gold transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
