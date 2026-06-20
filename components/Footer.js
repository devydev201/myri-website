import Link from "next/link";
import { COLORS, SITE } from "../lib/tokens";

const COLS = [
  {
    h: "Services",
    items: [
      { label: "Chiropractic Billing & Coding", href: "/services" },
      { label: "Denial Management", href: "/services" },
      { label: "Personal Injury Billing", href: "/services" },
      { label: "Revenue Cycle Management", href: "/rcm" },
      { label: "Insurance Verification", href: "/services" },
      { label: "Claim Submission & Follow-Up", href: "/claims" },
      { label: "Provider Credentialing", href: "/services" },
    ],
  },
  {
    h: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "About MYRI", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact Us", href: "/contact" },
      { label: "Free Billing Audit", href: "/contact" },
    ],
  },
  {
    h: "HQ & Remote Service Coverage",
    items: [
      { label: "Lake Mary, FL (HQ)", href: "/contact" },
      { label: "Central Florida", href: "/contact" },
      { label: "All nationwide", href: "/contact" },
      { label: "All 50 States", href: "/contact" },
      { label: "100% Remote Service", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: COLORS.navy, padding: "44px 24px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 28, marginBottom: 28 }}
          className="footer-grid"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img
                src="/images/logo.png"
                alt="MYRI Medical Billing Logo"
                width={40}
                height={40}
                style={{ width: 40, height: 40, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 14.5, fontFamily: "Georgia, serif" }}>
                  {SITE.name}
                </div>
                <div style={{ color: "rgba(255,255,255,.45)", fontSize: 10.5 }}>{SITE.tagline}</div>
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,.55)", fontSize: 11.5, lineHeight: 1.7 }}>
              America&apos;s dedicated remote chiropractic billing specialists, headquartered in Lake Mary, FL. We
              deliver 100% remote billing services — reducing claim denials, maximizing reimbursements, and managing
              your entire chiropractic revenue cycle for practices across all 50 states. No office visit ever required.
            </div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
              <a href={SITE.phoneHref} style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
                📞 {SITE.phone}
              </a>
              <a href={SITE.emailHref} style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
                ✉ {SITE.email}
              </a>
              <span style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)" }}>📍 {SITE.address}</span>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.h}>
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  color: "rgba(255,255,255,.4)",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {col.h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {col.items.map((it) => (
                  <Link
                    key={it.label}
                    href={it.href}
                    style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", textDecoration: "none" }}
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.1)",
            paddingTop: 14,
            textAlign: "center",
            fontSize: 10.5,
            color: "rgba(255,255,255,.35)",
          }}
        >
          © 2026 MYRI Medical Billing LLC · All rights reserved. · Lake Mary, FL (HQ) 32746
        </div>
        <p style={{ fontSize: 9.5, color: "rgba(255,255,255,.25)", lineHeight: 1.6, marginTop: 14, textAlign: "center" }}>
          MYRI Medical Billing LLC — Remote Chiropractic Billing Services | Lake Mary, FL 32746 | Phone: (321)
          203-6372 | myrevenueinstant@yahoo.com | Serving chiropractic practices across all 50 states via 100% remote,
          HIPAA-compliant billing. No office visit required. Remote onboarding in 5 business days. Specializing in
          CPT 98940, 98941, 98942, Medicare chiropractic billing, personal injury billing, chiropractic denial
          management, RCM, and provider credentialing. Compatible with ChiroTouch, Jane App, ECLIPSE, and Genesis
          Chiropractic.
        </p>
      </div>
      <style>{`@media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
