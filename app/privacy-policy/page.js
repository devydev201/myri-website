"use client";
import { motion } from "framer-motion";
import { Lock, Server, KeyRound, ScanSearch, Network, FileCheck2 } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS, SITE } from "../../lib/tokens";

const EFFECTIVE_DATE = "August 10, 2026";
const LAST_UPDATED = "August 10, 2026";

const TOC = [
  { id: "scope", label: "Scope of this policy" },
  { id: "collect", label: "Information we collect" },
  { id: "use", label: "How we use information" },
  { id: "phi", label: "PHI & Business Associate role" },
  { id: "share", label: "When we share information" },
  { id: "cookies", label: "Cookies & analytics" },
  { id: "security", label: "Data security" },
  { id: "retention", label: "Data retention" },
  { id: "rights", label: "Your choices & rights" },
  { id: "children", label: "Children's privacy" },
  { id: "links", label: "Links to other websites" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact us" },
];

const SAFEGUARDS = [
  { Icon: Server, title: "Data encryption", desc: "Enforced for all patient data, both at rest (databases, stored files) and in transit (web portals, API calls, and secure transmissions)." },
  { Icon: KeyRound, title: "Access control", desc: "Unique user identification, role-based access control (RBAC), and multi-factor authentication (MFA) across systems that touch patient records." },
  { Icon: ScanSearch, title: "Vulnerability management", desc: "Regular vulnerability scans (generally every six months) to identify and address potential weaknesses in billing software defenses." },
  { Icon: Network, title: "Asset mapping", desc: "Up-to-date technology asset inventories and data-flow network maps showing how and where billing data moves." },
  { Icon: FileCheck2, title: "Vendor accountability", desc: "Executing and enforcing compliant Business Associate Agreements (BAAs) with any sub-vendors or clearinghouses." },
];

// Shared section heading style
function H2({ id, children }) {
  return (
    <h2 id={id} style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px,2.4vw,26px)", color: COLORS.navy, margin: "40px 0 14px", scrollMarginTop: 90 }}>
      {children}
    </h2>
  );
}

const pStyle = { fontSize: 14.5, color: COLORS.gray, lineHeight: 1.8, margin: "0 0 14px" };
const liStyle = { fontSize: 14.5, color: COLORS.gray, lineHeight: 1.75, marginBottom: 8 };

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Privacy Policy</>}
        eyebrow="MYRI Medical Billing"
        title="Privacy"
        accent="Policy"
        desc="How we collect, use, and protect information on this website — and how we safeguard protected health information on behalf of the chiropractic practices we serve."
        img="/images/privacy-hero.jpg"
        pos="center center"
        heroClass="privacy-hero"
      />
      <style>{`
        @media (max-width: 700px) {
          .privacy-hero-section { min-height: 340px !important; }
          .privacy-hero { background-position: center center !important; }
        }
        .toc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 28px; }
        @media (max-width: 640px) { .toc-grid { grid-template-columns: 1fr; } }
        .safeguard-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media (max-width: 700px) { .safeguard-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section style={{ padding: "52px 24px 72px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>

          {/* Effective / updated */}
          <div style={{ fontSize: 13, color: COLORS.gray, borderBottom: `1px solid ${COLORS.grayLight}`, paddingBottom: 20, marginBottom: 30 }}>
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </div>

          {/* Table of contents */}
          <div style={{ background: COLORS.tealLight, border: "1px solid #cfeae5", borderRadius: 16, padding: "22px 24px", marginBottom: 40 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.tealDark, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 12 }}>On this page</div>
            <div className="toc-grid">
              {TOC.map((t, i) => (
                <a key={t.id} href={`#${t.id}`} style={{ fontSize: 13.5, color: COLORS.navy, textDecoration: "none" }}>
                  {i + 1}. {t.label}
                </a>
              ))}
            </div>
          </div>

          {/* 1. Scope */}
          <H2 id="scope">1. Scope of this policy</H2>
          <p style={pStyle}>
            This Privacy Policy explains how MYRI Medical Billing LLC (&quot;MYRI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects information gathered through myrimedicalbilling.com (the &quot;Site&quot;). It applies to visitors, prospective clients, and chiropractic practices who contact us through the Site.
          </p>
          <p style={pStyle}>
            This policy covers <strong style={{ color: COLORS.navy }}>website use only</strong>. It does not apply to protected health information (PHI) we receive and process on behalf of client practices in the course of providing billing services — that handling is governed by HIPAA, our Business Associate Agreements (BAAs), and Section 4 below.
          </p>

          {/* 2. Collect */}
          <H2 id="collect">2. Information we collect</H2>
          <p style={pStyle}>We collect information in the following ways:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 16px" }}>
            <li style={liStyle}><strong style={{ color: COLORS.navy }}>Information you provide directly</strong> — when you submit a contact form, request a free billing audit, or email or call us, we may collect your name, practice name, phone number, email address, and details about your billing needs.</li>
            <li style={liStyle}><strong style={{ color: COLORS.navy }}>Automatically collected information</strong> — like most websites, our hosting provider and analytics tools may automatically log your IP address, browser type, device type, pages visited, and referring URL.</li>
            <li style={liStyle}><strong style={{ color: COLORS.navy }}>Information from cookies</strong> — see Section 6 below.</li>
          </ul>
          <div style={{ background: COLORS.tealLight, border: "1px solid #cfeae5", borderRadius: 14, padding: "16px 20px", margin: "16px 0 28px" }}>
            <p style={{ ...pStyle, margin: 0, color: COLORS.navy }}>
              <strong>Please do not submit patient health information through website forms or email.</strong> Contact forms on this Site are intended for practice inquiries only — not for transmitting patient records, claim details, or other PHI. If you are an existing client needing to send patient information, please use the secure method we&apos;ve provided to you directly (e.g., your EHR integration, secure portal, or encrypted file transfer).
            </p>
          </div>

          {/* 3. Use */}
          <H2 id="use">3. How we use information</H2>
          <p style={pStyle}>We use the information described above to:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 16px" }}>
            <li style={liStyle}>Respond to inquiries and provide requested billing audits or quotes</li>
            <li style={liStyle}>Communicate with prospective and current clients about our services</li>
            <li style={liStyle}>Improve the content, usability, and performance of the Site</li>
            <li style={liStyle}>Meet legal, accounting, and contractual obligations</li>
          </ul>
          <p style={pStyle}>We do not sell personal information collected through this Site.</p>

          {/* 4. PHI */}
          <H2 id="phi">4. Protected health information &amp; our role as a Business Associate</H2>
          <p style={pStyle}>
            When a chiropractic practice engages MYRI for billing services, we act as a <strong style={{ color: COLORS.navy }}>HIPAA Business Associate</strong> to that practice (the &quot;Covered Entity&quot;). In that capacity, we may receive, process, and transmit protected health information — such as patient demographics, diagnosis and procedure codes, insurance information, and claim details — strictly to perform billing, coding, claims submission, denial management, and related revenue-cycle services on the practice&apos;s behalf.
          </p>
          <p style={pStyle}>Our handling of PHI is governed by:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 16px" }}>
            <li style={liStyle}>A signed <strong style={{ color: COLORS.navy }}>Business Associate Agreement (BAA)</strong> with each client practice</li>
            <li style={liStyle}>The HIPAA Privacy, Security, and Breach Notification Rules</li>
            <li style={liStyle}>Administrative, technical, and physical safeguards designed to protect PHI (see Section 7, Data security)</li>
          </ul>
          <p style={pStyle}>
            We do not use PHI for marketing purposes, and we do not disclose PHI beyond what is authorized under our BAA and applicable law. Patients seeking information about how their health information is used should refer to their chiropractic provider&apos;s own Notice of Privacy Practices — MYRI is not the treating provider and does not maintain a patient-facing Notice of Privacy Practices.
          </p>

          {/* 5. Share */}
          <H2 id="share">5. When we share information</H2>
          <p style={pStyle}>We do not share website-collected personal information with third parties except:</p>
          <ul style={{ paddingLeft: 22, margin: "0 0 16px" }}>
            <li style={liStyle}>With service providers who help us operate the Site (e.g., hosting, email, form processing), under confidentiality obligations</li>
            <li style={liStyle}>If required by law, subpoena, or legal process</li>
            <li style={liStyle}>To protect the rights, property, or safety of MYRI, our clients, or others</li>
            <li style={liStyle}>In connection with a business transfer, such as a merger or acquisition</li>
          </ul>

          {/* 6. Cookies */}
          <H2 id="cookies">6. Cookies &amp; analytics</H2>
          <p style={pStyle}>
            This Site may use cookies and similar technologies to understand how visitors use the Site and to improve performance. This may include tools such as Google Analytics and Google Tag Manager. These tools may collect information such as pages visited and time on site. You can control cookies through your browser settings; disabling cookies may affect some Site functionality.
          </p>

          {/* 7. Security */}
          <H2 id="security">7. Data security</H2>
          <p style={pStyle}>
            We use reasonable administrative, technical, and physical safeguards designed to protect information submitted through the Site and protected health information we handle on behalf of client practices. Our safeguards include:
          </p>
          <div className="safeguard-grid" style={{ margin: "18px 0 20px" }}>
            {SAFEGUARDS.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05, duration: 0.4 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 18, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.tealLight, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <s.Icon size={20} color={COLORS.teal} strokeWidth={1.8} />
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.navy, marginBottom: 4 }}>{s.title}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p style={pStyle}>
            No method of transmission over the internet is completely secure, and while we work to protect your information, we cannot guarantee absolute security.
          </p>

          {/* 8. Retention */}
          <H2 id="retention">8. Data retention</H2>
          <p style={pStyle}>
            We retain website inquiry information for as long as needed to respond to your request and maintain business records — generally no longer than <strong style={{ color: COLORS.navy }}>three years</strong>, unless a longer period is required by law or an active client relationship. PHI processed under a Business Associate Agreement is retained and disposed of according to the terms of that agreement and applicable law.
          </p>

          {/* 9. Rights */}
          <H2 id="rights">9. Your choices &amp; rights</H2>
          <p style={pStyle}>
            You may contact us at any time to ask what information we hold about you, request a correction, or ask that we delete non-clinical information you&apos;ve submitted through the Site. <strong style={{ color: COLORS.navy }}>We will respond within 30 days.</strong>
          </p>
          <p style={pStyle}>
            Depending on where you live, you may have additional rights under state or regional privacy laws — such as those in California, Colorado, Virginia, Connecticut, and other jurisdictions, or the EU/UK. Where those laws apply, we will honor the rights they provide. To exercise any of these rights, contact us using the information in Section 13.
          </p>

          {/* 10. Children */}
          <H2 id="children">10. Children&apos;s privacy</H2>
          <p style={pStyle}>
            This Site is intended for chiropractic practices and business professionals, not children. We do not knowingly collect information from anyone under 18. If you believe a minor has submitted information through this Site, please contact us and we will delete it.
          </p>

          {/* 11. Links */}
          <H2 id="links">11. Links to other websites</H2>
          <p style={pStyle}>
            This Site may link to third-party websites, including EHR platforms, payer portals, or professional directories. We are not responsible for the privacy practices of those sites and encourage you to review their policies separately.
          </p>

          {/* 12. Changes */}
          <H2 id="changes">12. Changes to this policy</H2>
          <p style={pStyle}>
            We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision. Material changes will be noted on this page.
          </p>

          {/* 13. Contact */}
          <H2 id="contact">13. Contact us</H2>
          <p style={pStyle}>Questions about this Privacy Policy or how we handle information can be directed to:</p>
          <div style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: "20px 22px", boxShadow: "0 2px 10px rgba(13,51,73,.04)" }}>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: COLORS.navy, marginBottom: 4 }}>{SITE.name} LLC</div>
            <div style={{ fontSize: 13.5, color: COLORS.gray, marginBottom: 4 }}>{SITE.address}</div>
            <div style={{ fontSize: 13.5, color: COLORS.gray }}>
              Email: <a href={SITE.emailHref} style={{ color: COLORS.tealDark, textDecoration: "none" }}>{SITE.email}</a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
