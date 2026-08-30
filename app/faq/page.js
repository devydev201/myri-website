"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS } from "../../lib/tokens";
import { FAQS } from "../../lib/faqs";

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${COLORS.grayLight}` }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          textAlign: "left",
          padding: "22px 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          cursor: "pointer",
        }}
      >
        <span style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, lineHeight: 1.4 }}>
          {item.q}
        </span>
        <ChevronDown
          size={22}
          style={{
            color: COLORS.teal,
            flexShrink: 0,
            transition: "transform .25s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {open && (
        <div style={{ padding: "0 8px 24px" }}>
          {item.a.map((para, i) => (
            <p key={i} style={{ fontSize: 15.5, color: "#2a3b41", lineHeight: 1.75, margin: "0 0 14px" }}>
              {para}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState(0);

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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <PageHero
        breadcrumb={<>Home › FAQ</>}
        eyebrow="Answers, Not Jargon"
        title="Chiropractic Billing"
        accent="Questions Answered"
        desc="Straight answers to the questions chiropractic practices ask most — CPT codes, the Medicare AT modifier, denials, PIP and MedPay, credentialing, and what outsourced billing actually costs."
        img="/images/faq-hero.jpg"
        imgRatio="1376 / 768"
      />

      <section style={{ padding: "56px 24px", maxWidth: 820, margin: "0 auto" }}>
        {FAQS.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}

        {/* CTA */}
        <div
          style={{
            marginTop: 44,
            background: COLORS.tealLight,
            border: `1px solid ${COLORS.grayLight}`,
            borderRadius: 16,
            padding: "32px 28px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: COLORS.navy, margin: "0 0 10px" }}>
            Still have a billing question?
          </h2>
          <p style={{ fontSize: 15.5, color: COLORS.gray, lineHeight: 1.7, margin: "0 0 22px" }}>
            Get a free 30-day billing review — a written look at exactly where your practice may be losing revenue. No cost, no obligation.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COLORS.teal,
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Get Your Free Billing Review
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
