import { FAQS } from "../../lib/faqs";

export const metadata = {
  title: "Chiropractic Billing FAQ: CPT, Medicare & PIP | MYRI",
  description:
    "Answers to common chiropractic billing questions: CPT codes 98940–98942, the Medicare AT modifier, denials, PIP billing, credentialing, and costs.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/faq",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Chiropractic Billing FAQ | MYRI Medical Billing",
    description:
      "Plain answers on CPT coding, the Medicare AT modifier, denial causes, PIP and MedPay, credentialing, and billing cost — for chiropractic practices in all 50 states.",
    url: "https://myrimedicalbilling.com/faq",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function FaqLayout({ children }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
