import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug } from "@/data/products";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const { productSlug } = await request.json();

    const product = getProductBySlug(productSlug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // 检查 Stripe 密钥是否配置
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      console.error("STRIPE_SECRET_KEY is not configured");
      return NextResponse.json(
        {
          error:
            "Payment system is being set up. Please contact us at hello@amala.store to reserve this item.",
        },
        { status: 503 }
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2024-06-20",
    });

    const origin = request.headers.get("origin") || "http://localhost:3000";

    // 创建 Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: product.currency.toLowerCase(),
            product_data: {
              name: product.name,
              description: product.description.slice(0, 500),
              images: product.images.slice(0, 2),
            },
            unit_amount: Math.round(product.price * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/products/${product.slug}`,
      shipping_address_collection: {
        allowed_countries: [
          "US", "CA", "GB", "FR", "DE", "IT", "ES", "NL", "BE", "CH",
          "JP", "KR", "SG", "AU", "NZ", "HK", "TW", "CN",
        ],
      },
      custom_text: {
        submit: {
          message: "By purchasing, you agree to our terms.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
