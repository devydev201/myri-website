import { FAQS } from "../../lib/faqs";

export const metadata = {
  title: "Chiropractic Billing FAQ | CPT Codes, Denials, Medicare & PIP | MYRI",
  description:
    "Answers to the chiropractic billing questions DC practices ask most: CPT codes 98940–98942, the Medicare AT modifier, why claims get denied, PIP and MedPay billing, credentialing timelines, and what outsourced billing costs. MYRI Medical Billing — 100% remote, all 50 states.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/faq",
  },
  openGraph: {
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
