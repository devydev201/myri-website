export const metadata = {
  title: "About MYRI | Chiropractic-Only Medical Billing Specialists",
  description:
    "MYRI Medical Billing is a chiropractic-only billing company serving practices remotely in all 50 states, built around CPT coding, PIP, and Medicare rules.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/about",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "About MYRI Medical Billing",
    description:
      "A chiropractic-only medical billing company, 100% remote, all 50 states. Built to understand the complexity generic billers miss.",
    url: "https://myrimedicalbilling.com/about",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
