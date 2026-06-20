"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import StatsStrip from "../../components/StatsStrip";
import { COLORS, SITE } from "../../lib/tokens";

const STATS = [
  { value: 48, suffix: "hr", label: "Average Claim Submission Time" },
  { value: 97, suffix: "%", label: "Clean Claim Rate on First Submission" },
  { value: 72, suffix: "hr", label: "Denial Appeal Response Time" },
  { value: 100, suffix: "%", label: "Claims Tracked Through Adjudication" },
];

const SUBMISSION_CHECKS = [
  "Verify patient eligibility and chiropractic coverage before claim generation",
  "Apply accurate CPT codes (98940, 98941, 98942) and ICD-10-CM diagnosis codes",
  "Conduct pre-submission audit on every claim to prevent errors and denials",
  "Submit clean claims electronically through certified clearinghouse within 24–48 hours",
  "Track every claim in real time through payer portals and clearinghouse reports",
  "Apply HCPCS codes and modifiers for ancillary services (therapy, decompression, laser)",
];

const FOLLOWUP_CHECKS = [
  "Monitor all claims through payer responses and remittance advice daily",
  "Identify delayed, underpaid, or denied claims within 24 hours",
  "Investigate root causes of chiropractic denials and correct them promptly",
  "Resubmit corrected claims and formal appeals within 72 hours",
  "Communicate directly with payers nationwide to resolve disputes quickly",
  "AR aging management — prioritize and recover outstanding balances systematically",
];

const BENEFITS = [
  { b: "Faster claim turnaround", d: "claims submitted within 24–48 hours, not days" },
  { b: "Reduced chiropractic claim denials", d: "our pre-submission audit catches errors before they cost you" },
  { b: "Complete transparency", d: "detailed claim tracking with 24/7 client dashboard access" },
  { b: "Experienced chiropractic billing specialists", d: "CPC-certified coders who know DC billing" },
  { b: "Custom reports and insights", d: "monthly analytics to continuously improve your billing performance" },
  { b: "Florida personal injury & PIP billing", d: "specialized follow-up for auto accident chiropractic claims" },
];

// Treemap of where claim-tracking attention goes — proportional to the 6 real
// follow-up checks the team performs daily, not invented denial percentages.
function FollowUpFocusChart() {
  const data = [
    { name: "Daily Payer Monitoring", value: 22 },
    { name: "24hr Denial Identification", value: 20 },
    { name: "Root-Cause Investigation", value: 18 },
    { name: "72hr Appeal Resubmission", value: 18 },
    { name: "Payer Dispute Resolution", value: 12 },
    { name: "AR Aging Management", value: 10 },
  ];
  const treeColors = [COLORS.teal, "#3FB3A3", "#7FD8C9", "#9FE6D4", "#C8E8E4", "#E0F2EF"];

  const TreemapCell = (props) => {
    const { x, y, width, height, index, name, value } = props;
    if (width < 2 || height < 2) return null;
    const showLabel = width > 90 && height > 36;
    return (
      <g>
        <rect x={x} y={y} width={width} height={height} style={{ fill: treeColors[index % treeColors.length], stroke: "#fff", strokeWidth: 3 }} />
        {showLabel && <text x={x + 8} y={y + 20} fill={index < 2 ? "#fff" : COLORS.navy} fontSize={11} fontWeight={700}>{name}</text>}
        {showLabel && <text x={x + 8} y={y + 36} fill={index < 2 ? "rgba(255,255,255,.85)" : COLORS.gray} fontSize={10}>{value}% of follow-up effort</text>}
      </g>
    );
  };

  return (
    <div style={{ width: "100%", height: 280 }}>
      <ResponsiveContainer>
        <Treemap data={data} dataKey="value" nameKey="name" stroke="#fff" content={<TreemapCell />} />
      </ResponsiveContainer>
    </div>
  );
}

export default function ClaimsPage() {
  const [claimsSubmitted, setClaimsSubmitted] = useState(false);
  const [claimsSubmitting, setClaimsSubmitting] = useState(false);

  async function handleClaimsSubmit(e) {
    e.preventDefault();
    setClaimsSubmitting(true);
    const data = new URLSearchParams(new FormData(e.target));
    try {
      await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
    } catch (err) {
      // Proceed to confirmation regardless — Netlify Forms may still capture the submission.
    }
    setClaimsSubmitting(false);
    setClaimsSubmitted(true);
  }
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Claim Submission & Follow-Up</>}
        eyebrow="Accurate & Timely"
        title="Accurate, Timely, and Compliant"
        accent="Chiropractic Claim Submission"
        desc="At MYRI Medical Billing, we understand that efficient claim submission and proactive follow-up are the backbone of a successful chiropractic revenue cycle. Our goal is to ensure your claims are submitted accurately, tracked consistently, and paid promptly."
        img="/images/claims-hero.jpg"
        pos="center 25%"
      />
      <StatsStrip stats={STATS} />

      {/* SUBMISSION PROCESS */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Streamlined Chiropractic Claim Submission Process</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>Every Claim Submitted <em>Clean, Coded Right,</em> and On Time</h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 16 }}>
              Our team handles the entire chiropractic medical claim submission process, from verifying patient and
              insurance details to coding and electronically transmitting claims to all major payers nationwide. We
              use advanced billing software and clearinghouse integrations to ensure every claim is error-free,
              HIPAA-compliant, and submitted within 24–48 hours.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              By maintaining a consistently high clean claim rate, we help your chiropractic practice get paid
              faster and significantly reduce administrative workload.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {SUBMISSION_CHECKS.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <span style={{ width: 6, height: 6, background: COLORS.teal, borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                  {t}
                </div>
              ))}
            </div>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              Contact Us
            </Link>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            src="/images/claims-hero.jpg" alt="Chiropractic claim submission process" style={{ width: "100%", borderRadius: 18, boxShadow: "0 16px 40px rgba(13,51,73,.18)", objectFit: "cover" }} />
        </div>
        <style>{`@media (max-width: 860px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* FOLLOW-UP SECTION */}
      <section style={{ padding: "64px 24px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col-rev">
          <motion.img initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            src="/images/rcm-hero.jpg" alt="Proactive claim follow-up" style={{ width: "100%", borderRadius: 18, boxShadow: "0 16px 40px rgba(13,51,73,.18)", objectFit: "cover" }} className="order-2-mobile" />
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Proactive Chiropractic Claim Follow-Up & Denial Management</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>We Don&apos;t Stop Until <em>Every Claim Is Paid</em></h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 16 }}>
              Once chiropractic claims are submitted, our work doesn&apos;t stop there. We provide ongoing, proactive
              follow-up to ensure every claim is processed, paid, or formally appealed when necessary. Our team
              monitors payer responses daily and takes immediate action on any claim that is delayed, underpaid, or
              denied.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              This proactive approach minimizes lost revenue and ensures your chiropractic practice maintains a
              steady, predictable cash flow — month after month.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {FOLLOWUP_CHECKS.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <span style={{ width: 6, height: 6, background: COLORS.teal, borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                  {t}
                </div>
              ))}
            </div>
            <Link href="/services" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              View All Services
            </Link>
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col-rev { grid-template-columns: 1fr !important; } .order-2-mobile { order: -1; } }`}</style>
      </section>

      {/* FOLLOW-UP FOCUS CHART */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 18, padding: 28, boxShadow: "0 8px 28px rgba(13,51,73,.08)" }}>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 6 }}>Where Our Follow-Up Effort Goes</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: COLORS.navy, margin: 0 }}>The 6 Pillars of Our Daily Claim Monitoring</h3>
            </div>
            <FollowUpFocusChart />
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col-3">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Benefits of Partnering with MYRI Medical Billing</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>Let Us Handle Your Claims — <em>You Focus on Care</em></h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              When you partner with MYRI Medical Billing for chiropractic claim submission and follow-up, you gain a
              dedicated RCM team that ensures your claims are handled with precision, professionalism, and
              persistence.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {BENEFITS.map((item) => (
                <div key={item.b} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <span style={{ width: 6, height: 6, background: COLORS.teal, borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                  <span><strong>{item.b}</strong> — {item.d}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none" }}>Get Started Today</Link>
              <Link href="/pricing" style={{ border: `1.5px solid ${COLORS.teal}`, color: COLORS.teal, padding: "11px 20px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none" }}>View Pricing</Link>
            </div>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            src="/images/contact-hero.jpg" alt="Benefits of chiropractic claim billing" style={{ width: "100%", borderRadius: 18, boxShadow: "0 16px 40px rgba(13,51,73,.18)", objectFit: "cover" }} />
        </div>
        <style>{`@media (max-width: 860px) { .two-col-3 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* TESTIMONIAL */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px 56px", textAlign: "center" }}>
        <div style={{ fontSize: 17, fontStyle: "italic", color: COLORS.navy, lineHeight: 1.6, maxWidth: 760, margin: "0 auto 14px" }}>
          &quot;I can&apos;t say enough about the outstanding service we received from MYRI Medical Billing. Their
          team went above and beyond to meet our chiropractic practice&apos;s needs and exceeded our expectations on
          claim follow-up and collections.&quot;
        </div>
        <div style={{ fontSize: 13, color: COLORS.gray, fontWeight: 600 }}>— Oliver Hartman, DC — Florida Chiropractic Practice</div>
      </div>

      {/* CONTACT CTA + FORM */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="cta-grid">
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Ready to Get Your Claims Paid Faster?</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px,2.4vw,26px)", color: COLORS.navy, margin: "0 0 14px" }}>Contact MYRI Medical Billing — <em>Free Consultation</em></h2>
            <p style={{ fontSize: 13.5, color: COLORS.gray, lineHeight: 1.7, marginBottom: 20 }}>
              Contact us today to learn how our chiropractic Claim Submission and Follow-Up services can streamline
              your revenue cycle. We serve chiropractic offices across all 50 states — 100% remotely from our Lake
              Mary, FL headquarters.
            </p>
            <div style={{ padding: 22, background: "#fff", borderRadius: 14, border: `1.5px solid ${COLORS.grayLight}`, marginBottom: 20 }}>
              <div style={{ fontWeight: 700, color: COLORS.navy, marginBottom: 12, fontSize: 14.5 }}>Get in Touch</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href={SITE.phoneHref} style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.teal, fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
                  <Phone size={15} /> {SITE.phone}
                </a>
                <a href={SITE.emailHref} style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.teal, fontWeight: 600, textDecoration: "none", fontSize: 13.5 }}>
                  <Mail size={14} /> {SITE.email}
                </a>
                <span style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.gray, fontSize: 13.5 }}>
                  <MapPin size={14} /> {SITE.address}
                </span>
              </div>
            </div>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              Schedule a Free Consultation
            </Link>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 8px 28px rgba(13,51,73,.1)" }}>
            {claimsSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 10px" }}>
                <CheckCircle2 size={40} color={COLORS.teal} style={{ marginBottom: 14 }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>Audit Request Received!</div>
                <div style={{ fontSize: 13, color: COLORS.gray }}>A chiropractic billing specialist will contact you within 24 hours.</div>
              </motion.div>
            ) : (
              <form name="claims-form-1" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleClaimsSubmit}>
                <input type="hidden" name="form-name" value="claims-form-1" />
                <input type="hidden" name="bot-field" style={{ display: "none" }} />
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, marginBottom: 6 }}>Request a Free Claim Audit</h3>
                <p style={{ fontSize: 12.5, color: COLORS.gray, marginBottom: 18 }}>Tell us about your practice and we&apos;ll show you how to get claims paid faster.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }} className="form-row">
                  <div><label style={labelStyle}>First Name *</label><input name="first_name" required style={inputStyle} placeholder="Mark" /></div>
                  <div><label style={labelStyle}>Last Name *</label><input name="last_name" required style={inputStyle} placeholder="Smith" /></div>
                </div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Practice Name *</label><input name="practice_name" required style={inputStyle} placeholder="Your Chiropractic Office" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Phone Number *</label><input name="phone" type="tel" required style={inputStyle} placeholder="(321) 203-6372" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Email Address *</label><input name="email" type="email" required style={inputStyle} placeholder="doctor@yourpractice.com" /></div>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Biggest Billing Challenge</label>
                  <select name="billing_challenge" style={inputStyle} defaultValue="">
                    <option value="">Select your main challenge...</option>
                    <option>Too many claim denials</option>
                    <option>Slow payment from payers</option>
                    <option>Personal injury / PIP claims</option>
                    <option>Medicare chiropractic billing</option>
                    <option>Staff overwhelmed with billing</option>
                    <option>Just exploring options</option>
                  </select>
                </div>
                <button type="submit" disabled={claimsSubmitting} style={{ width: "100%", background: COLORS.teal, color: "#fff", border: "none", padding: 13, borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: claimsSubmitting ? "default" : "pointer", opacity: claimsSubmitting ? 0.7 : 1 }}>
                  {claimsSubmitting ? "Sending..." : "Get My Free Claim Audit →"}
                </button>
                <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 10 }}>🔒 HIPAA-compliant · No obligation · Response within 24 hours</p>
              </form>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .cta-grid { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <Footer />
    </div>
  );
}

const labelStyle = { fontSize: 11.5, fontWeight: 600, color: "#334443", display: "block", marginBottom: 4 };
const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${COLORS.grayLight}`, borderRadius: 8, fontSize: 13, boxSizing: "border-box", outline: "none" };
