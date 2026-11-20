export const metadata = {
  title: "Chiropractic Billing Guides & Insights | MYRI Blog",
  description:
    "Practical guidance on chiropractic billing, coding, denials, PIP, and Medicare — from a remote chiropractic billing specialist serving all 50 states.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/blog",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "MYRI Medical Billing Blog — Chiropractic Billing Insights",
    description:
      "Straight-talking guides on chiropractic billing, coding, denials, and revenue from a chiropractic-only billing specialist.",
    url: "https://myrimedicalbilling.com/blog",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
