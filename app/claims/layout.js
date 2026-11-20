export const metadata = {
  title: "Chiropractic Claim Follow-Up & Denial Appeals | MYRI",
  description:
    "Every chiropractic claim tracked to payment, and every denial investigated and appealed within 72 hours. Remote claim follow-up in all 50 states.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/claims",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Chiropractic Claim Follow-Up & Appeals | MYRI Medical Billing",
    description:
      "Every claim tracked to payment, every denial appealed within 72 hours. Chiropractic-only denial management, all 50 states.",
    url: "https://myrimedicalbilling.com/claims",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function ClaimsLayout({ children }) {
  return children;
}
