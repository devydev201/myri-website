export const metadata = {
  title: "Chiropractic Billing Pricing: Percentage or Per-Claim | MYRI",
  description:
    "Chiropractic billing pricing: 3.5–5% of collections, a flat fee per claim, or a custom bundled plan. No long-term contracts. Remote, all 50 states.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/pricing",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Chiropractic Billing Pricing | MYRI Medical Billing",
    description:
      "Percentage-based, per-claim, or comprehensive bundled pricing — transparent, no long-term contracts, all 50 states.",
    url: "https://myrimedicalbilling.com/pricing",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function PricingLayout({ children }) {
  return children;
}
