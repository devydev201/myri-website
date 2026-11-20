export const metadata = {
  title: "Chiropractic Billing Services: Coding, PIP & Medicare | MYRI",
  description:
    "Full-service chiropractic billing: CPT coding, insurance verification, denial management, PIP and personal injury, Medicare compliance, credentialing.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/services",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Chiropractic Billing Services | MYRI Medical Billing",
    description:
      "Coding, denial management, PIP billing, Medicare compliance, and credentialing — handled remotely by a chiropractic-only billing team.",
    url: "https://myrimedicalbilling.com/services",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
