"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  productSlug: string;
  productName: string;
}

export default function CheckoutButton({
  productSlug,
  productName,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productSlug }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // 跳转到 Stripe 结账页面
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Checkout is currently unavailable. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="w-full py-5 bg-ink-800 text-ink-50 text-sm tracking-[0.3em] uppercase
                   hover:bg-gold transition-colors duration-300
                   disabled:bg-ink-300 disabled:cursor-not-allowed"
      >
        {loading ? "Preparing..." : "Purchase — Secure Checkout"}
      </button>

      {error && (
        <p className="text-center text-xs text-vermilion animate-fade-in">
          {error}
        </p>
      )}

      <p className="text-center text-xs text-ink-400 tracking-wider">
        Pay securely with credit card · International shipping
      </p>
    </div>
  );
}
