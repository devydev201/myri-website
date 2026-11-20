"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Download, FileText } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS } from "../../lib/tokens";

const PDF_URL = "/downloads/medicare-chiropractic-cheat-sheet.pdf";

// Submissions go to Netlify Forms today (form "cheat-sheet-form").
// To send them to Kit instead, post the email to your Kit form here as well.
async function saveLead(form) {
  const data = new URLSearchParams(new FormData(form));
  try {
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: data.toString(),
    });
  } catch (err) {
    // Show the download either way; a blocked request shouldn't block the reader.
  }
}

const INCLUDED = [
  "What Medicare covers for chiropractors, and what it never pays for",
  "When to use the AT, GA, GZ, GY, and GX modifiers, in one table",
  "The ABN checklist, including the 2026 form update",
  "The documentation reviewers check, from P.A.R.T. to the treatment plan",
  "How to move a patient from active care to maintenance correctly",
];

const labelStyle = { fontSize: 13, fontWeight: 600, color: "#334443", display: "block", marginBottom: 6 };
const inputStyle = {
  width: "100%",
  minHeight: 44,
  padding: "10px 12px",
  border: `1px solid #C7D6D4`,
  borderRadius: 8,
  fontSize: 15,
  boxSizing: "border-box",
  fontFamily: "inherit",
};

export default function CheatSheetPage() {
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    await saveLead(e.target);
    setSubmitting(false);
    setDone(true);
  }

  return (
    <>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Free Resources</>}
        eyebrow="Free Download"
        title="Medicare Chiropractic"
        accent="Cheat Sheet"
        desc="One page your front desk can keep within reach: covered vs. excluded services, the modifiers, ABN rules, and the documentation Medicare reviewers check."
        img="/images/faq-hero.jpg"
      />

      <section style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", gap: 40 }}>
        <div style={{ flex: "999 1 420px", minWidth: 0 }}>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: 28, color: COLORS.navy, margin: "0 0 14px", lineHeight: 1.3 }}>
            What&apos;s on the cheat sheet
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            {INCLUDED.map((item) => (
              <li key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16.5, lineHeight: 1.6, color: "#2a3b41", marginBottom: 10 }}>
                <Check size={20} color={COLORS.teal} aria-hidden="true" style={{ flexShrink: 0, marginTop: 3 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: COLORS.gray, margin: 0 }}>
            Want the full explanation behind each rule? Read our guide to{" "}
            <Link href="/blog/medicare-chiropractic-compliance-abn-maintenance-care" style={{ color: COLORS.teal, fontWeight: 600 }}>
              Medicare chiropractic compliance
            </Link>
            .
          </p>
        </div>

        <div
          style={{
            flex: "1 1 340px",
            background: "#fff",
            border: `1px solid ${COLORS.grayLight}`,
            borderRadius: 18,
            padding: 28,
            boxShadow: "0 8px 28px rgba(13,51,73,.08)",
          }}
        >
          {done ? (
            <div style={{ textAlign: "center", padding: "24px 4px" }}>
              <FileText size={40} color={COLORS.teal} aria-hidden="true" />
              <h2 style={{ fontSize: 20, color: COLORS.navy, margin: "12px 0 8px" }}>Your cheat sheet is ready</h2>
              <p style={{ fontSize: 15, color: COLORS.gray, lineHeight: 1.6, margin: "0 0 20px" }}>
                Download it below. It prints on a single letter-size page.
              </p>
              <a
                href={PDF_URL}
                download
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: 48,
                  padding: "0 24px",
                  borderRadius: 24,
                  background: COLORS.teal,
                  color: "#fff",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <Download size={18} aria-hidden="true" /> Download the PDF
              </a>
            </div>
          ) : (
            <form name="cheat-sheet-form" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="cheat-sheet-form" />
              <input type="hidden" name="bot-field" />
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: COLORS.navy, margin: "0 0 6px" }}>Get the free cheat sheet</h2>
              <p style={{ fontSize: 14, color: COLORS.gray, margin: "0 0 18px", lineHeight: 1.6 }}>
                Enter your email and download it instantly.
              </p>
              <div style={{ marginBottom: 14 }}>
                <label htmlFor="cs-first" style={labelStyle}>First name</label>
                <input id="cs-first" name="first_name" autoComplete="given-name" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label htmlFor="cs-email" style={labelStyle}>Work email *</label>
                <input id="cs-email" name="email" type="email" required autoComplete="email" style={inputStyle} />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label htmlFor="cs-practice" style={labelStyle}>Practice name</label>
                <input id="cs-practice" name="practice_name" autoComplete="organization" style={inputStyle} />
              </div>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  minHeight: 48,
                  border: "none",
                  borderRadius: 24,
                  background: COLORS.teal,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {submitting ? "Sending…" : "Get the cheat sheet"}
              </button>
              <p style={{ fontSize: 12.5, color: COLORS.gray, margin: "12px 0 0", lineHeight: 1.5 }}>
                We&apos;ll occasionally email chiropractic billing tips. Unsubscribe anytime. See our{" "}
                <Link href="/privacy-policy" style={{ color: COLORS.teal }}>privacy policy</Link>.
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
