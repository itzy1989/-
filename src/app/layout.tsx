import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amala — Sacred Tibetan Malas & Dzi Beads",
  description:
    "Handcrafted Tibetan malas and authentic dzi beads. Timeless sacred jewelry rooted in Himalayan tradition, delivered to you with intention.",
  keywords: [
    "Tibetan mala",
    "dzi bead",
    "Tibetan bracelet",
    "Buddhist prayer beads",
    "malachite beads",
    "Tibetan jewelry",
    "sacred geometry",
    "Himalayan craft",
  ],
  openGraph: {
    title: "Amala — Sacred Tibetan Malas & Dzi Beads",
    description:
      "Handcrafted Tibetan malas and authentic dzi beads. Timeless sacred jewelry rooted in Himalayan tradition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
