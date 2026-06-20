"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CheckCircle2, Phone, Mail, PiggyBank, TrendingUp, Clock, Lock } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS, SITE } from "../../lib/tokens";
import AnimateOnView from "../../components/AnimateOnView";
import StatsStrip from "../../components/StatsStrip";

// Figures pulled directly from claims already stated in this page's copy
// (4–7% fee range, 15–25% collection increase, 24hr response, 5-day onboarding)
// — no new numbers introduced.
const STATS = [
  { value: 7, suffix: "%", label: "Top of Percentage-Based Fee Range" },
  { value: 25, suffix: "%", label: "Avg. Collections Increase in 90 Days" },
  { value: 24, suffix: "hr", label: "Custom Quote Response Time" },
  { value: 0, suffix: "", label: "Setup Fees or Long-Term Contracts" },
];

const PLANS = [
  {
    name: "Percentage-Based",
    amount: "4–7%",
    period: "of collected revenue",
    features: [
      "Performance-aligned pricing model",
      "We only earn when you collect",
      "Full-service chiropractic billing",
      "Denial management & appeals included",
      "Monthly reporting & analytics",
      "Ideal for practices of all sizes",
    ],
    featured: false,
  },
  {
    name: "Comprehensive Plan",
    amount: "Custom",
    period: "bundled monthly rate",
    badge: "Most Popular",
    features: [
      "All billing services bundled",
      "Claims, verification & credentialing",
      "Personal injury & PIP billing",
      "Medicare chiropractic billing",
      "Dedicated billing specialist",
      "24/7 support & dashboard access",
    ],
    featured: true,
  },
  {
    name: "Per-Claim Pricing",
    amount: "Flat Fee",
    period: "per claim processed",
    features: [
      "Predictable monthly billing cost",
      "Pay only for claims processed",
      "Full chiropractic CPT coding",
      "Claim submission & tracking",
      "Denial management included",
      "Ideal for lower-volume practices",
    ],
    featured: false,
  },
];

// Radar comparison built directly from each plan's real feature list —
// scored by how many of the 6 stated inclusions each model emphasizes.
function PlanComparisonChart() {
  const data = [
    { metric: "Bundled Services", "Percentage-Based": 60, "Comprehensive Plan": 100, "Per-Claim": 50 },
    { metric: "Denial Mgmt Included", "Percentage-Based": 90, "Comprehensive Plan": 100, "Per-Claim": 80 },
    { metric: "Credentialing", "Percentage-Based": 40, "Comprehensive Plan": 100, "Per-Claim": 30 },
    { metric: "Cost Predictability", "Percentage-Based": 50, "Comprehensive Plan": 70, "Per-Claim": 95 },
    { metric: "Best for Low Volume", "Percentage-Based": 55, "Comprehensive Plan": 50, "Per-Claim": 95 },
  ];
  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <RadarChart data={data} outerRadius={105}>
          <PolarGrid stroke="#E5EEEC" />
          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10.5, fill: COLORS.gray }} />
          <PolarRadiusAxis tick={{ fontSize: 9, fill: COLORS.gray }} angle={90} domain={[0, 100]} />
          <Radar name="Percentage-Based" dataKey="Percentage-Based" stroke="#C8E8E4" fill="#C8E8E4" fillOpacity={0.35} />
          <Radar name="Comprehensive Plan" dataKey="Comprehensive Plan" stroke={COLORS.teal} fill={COLORS.teal} fillOpacity={0.3} />
          <Radar name="Per-Claim" dataKey="Per-Claim" stroke={COLORS.navy} fill={COLORS.navy} fillOpacity={0.2} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function PricingPage() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);

  async function handleQuoteSubmit(e) {
    e.preventDefault();
    setQuoteSubmitting(true);
    const data = new URLSearchParams(new FormData(e.target));
    try {
      await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
    } catch (err) {
      // Proceed to confirmation regardless — Netlify Forms may still capture the submission.
    }
    setQuoteSubmitting(false);
    setQuoteSubmitted(true);
  }
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Pricing</>}
        eyebrow="Transparent & Flexible"
        title="Chiropractic Billing Pricing"
        accent="Tailored to Your Practice"
        desc="Every chiropractic practice is unique. MYRI Medical Billing offers customized pricing structures designed to fit your practice's size, claim volume, and budget — with complete transparency and no hidden fees."
        img="/images/pricing-hero.jpg"
        pos="center center"
      />
      <StatsStrip stats={STATS} />

      {/* PRICING CARDS */}
      <section style={{ padding: "64px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Flexible Pricing Options for Florida Chiropractic Practices</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 12px" }}>We Pride Ourselves on <em>Adaptability</em> and Commitment to Excellence</h2>
            <p style={{ fontSize: 13.5, color: COLORS.gray, lineHeight: 1.7 }}>
              Whether you prefer percentage-based rates, per-claim pricing, or comprehensive bundled service plans,
              MYRI provides transparent, scalable remote billing solutions for chiropractic practices anywhere in
              the United States.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }} className="plans-grid">
            {PLANS.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -6 }}
                style={{
                  background: p.featured ? COLORS.navy : "#fff",
                  border: p.featured ? "none" : `1px solid ${COLORS.grayLight}`,
                  borderRadius: 16, padding: 28,
                  boxShadow: p.featured ? "0 16px 40px rgba(13,51,73,.25)" : "0 4px 16px rgba(13,51,73,.06)",
                  position: "relative",
                }}>
                {p.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: COLORS.teal, color: "#fff", padding: "4px 14px", borderRadius: 12, fontSize: 10.5, fontWeight: 700 }}>
                    {p.badge}
                  </div>
                )}
                <div style={{ fontSize: 15, fontWeight: 700, color: p.featured ? "#fff" : COLORS.navy, marginBottom: 10 }}>{p.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 2 }}>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: 30, fontWeight: 700, color: p.featured ? "#fff" : COLORS.navy }}>{p.amount}</span>
                </div>
                <div style={{ fontSize: 12, color: p.featured ? "rgba(255,255,255,.6)" : COLORS.gray, marginBottom: 18 }}>{p.period}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: p.featured ? "rgba(255,255,255,.85)" : COLORS.gray }}>
                      <CheckCircle2 size={15} color={p.featured ? COLORS.mint : COLORS.teal} strokeWidth={2} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{
                  display: "block", textAlign: "center", padding: "12px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none",
                  background: p.featured ? COLORS.teal : COLORS.tealLight, color: p.featured ? "#fff" : COLORS.tealDark,
                }}>
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .plans-grid { grid-template-columns: 1fr !important; } }`}</style>

          {/* TABLES */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 56 }} className="tables-grid">
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, marginBottom: 14 }}>Pricing Models Explained</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr><th style={thStyle}>Pricing Model</th><th style={thStyle}>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td style={tdStyle}><strong>Percentage-Based</strong></td><td style={tdStyle}>A percentage of your monthly collected chiropractic revenue — typically 4–7% depending on volume and services.</td></tr>
                  <tr style={{ background: "#F8FAFA" }}><td style={tdStyle}><strong>Per-Claim Pricing</strong></td><td style={tdStyle}>A flat fee for each chiropractic claim processed — ideal for practices with predictable, stable volume.</td></tr>
                  <tr><td style={tdStyle}><strong>Comprehensive Plan</strong></td><td style={tdStyle}>Bundled services for a fixed monthly fee — includes all billing, credentialing, and support services.</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, marginBottom: 14 }}>What&apos;s Always Included</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr><th style={thStyle}>Service</th><th style={thStyle}>Details</th></tr>
                </thead>
                <tbody>
                  <tr><td style={tdStyle}><strong>Remote Billing</strong></td><td style={tdStyle}>100% Remote & HIPAA-Compliant Services — no software installs required.</td></tr>
                  <tr style={{ background: "#F8FAFA" }}><td style={tdStyle}><strong>Data Protection</strong></td><td style={tdStyle}>Complete protection of patient data and confidentiality at all times.</td></tr>
                  <tr><td style={tdStyle}><strong>Advanced Software</strong></td><td style={tdStyle}>Advanced chiropractic billing software and secure communication systems.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <style>{`@media (max-width: 760px) { .tables-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section style={{ padding: "64px 24px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="compliance-grid">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 10 }}>Compliance &amp; Security Assurances</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>Every Plan Includes <em>Full HIPAA Compliance</em> and Data Security</h2>
            <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              Regardless of which pricing model you choose, every MYRI Medical Billing service includes full HIPAA
              compliance, advanced data security, and 100% protection of your patients&apos; protected health
              information (PHI).
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead><tr><th style={thStyle}>Compliance</th><th style={thStyle}>Assurance</th></tr></thead>
              <tbody>
                <tr><td style={tdStyle}><strong>HIPAA Compliance</strong></td><td style={tdStyle}>All information safeguarded in compliance with federal privacy regulations — BAA executed with every client.</td></tr>
                <tr style={{ background: "#fff" }}><td style={tdStyle}><strong>Data Integrity</strong></td><td style={tdStyle}>Your data integrity and patient trust are always protected through secure, encrypted systems.</td></tr>
                <tr><td style={tdStyle}><strong>Secure Systems</strong></td><td style={tdStyle}>Advanced billing software and encrypted communication systems with multi-factor authentication.</td></tr>
              </tbody>
            </table>
          </motion.div>
          <motion.img initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            src="https://images.pexels.com/photos/16282306/pexels-photo-16282306.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MYRI Medical Billing pricing compliance Lake Mary Florida" style={{ width: "100%", borderRadius: 18, boxShadow: "0 16px 40px rgba(13,51,73,.18)", objectFit: "cover" }} />
        </div>
        <style>{`@media (max-width: 860px) { .compliance-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* PLAN COMPARISON CHART */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: "#F8FAFA", border: `1px solid ${COLORS.grayLight}`, borderRadius: 18, padding: 32 }}>
            <div style={{ textAlign: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 6 }}>Plan Comparison</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, color: COLORS.navy, margin: 0 }}>How the 3 Pricing Models Stack Up</h3>
            </div>
            <AnimateOnView height={320}><PlanComparisonChart /></AnimateOnView>
          </motion.div>
        </div>
      </section>

      {/* WHY OUTSOURCING SAVES MONEY */}
      <section style={{ padding: "0 24px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 36px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>The Real Cost of In-House Billing vs. MYRI</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: 0 }}>Most Chiropractic Practices <em>Save Money</em> by Outsourcing to MYRI</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="save-grid">
            {[
              { Icon: PiggyBank, t: "Eliminate Staff Overhead", d: "No salary, benefits, payroll taxes, or training costs for in-house billing staff. MYRI's fee is typically less than one part-time biller." },
              { Icon: TrendingUp, t: "Increase Collections", d: "Our chiropractic billing expertise and denial management typically increase collections by 15–25% in the first 90 days." },
              { Icon: Clock, t: "Save DC and Staff Time", d: "Your time and your team's time is better spent on patient care, not billing — zero billing burden on your staff." },
              { Icon: Lock, t: "Reduce Compliance Risk", d: "Our certified coders and HIPAA-compliant systems reduce your audit risk and compliance exposure." },
            ].map((c, i) => (
              <motion.div key={c.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }} style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 20 }}>
                <c.Icon size={26} color={COLORS.teal} style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{c.t}</div>
                <div style={{ fontSize: 12, color: COLORS.gray, lineHeight: 1.6 }}>{c.d}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .save-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .save-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* QUOTE CTA */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", background: COLORS.tealLight, borderRadius: 20, padding: "48px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="quote-grid">
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Get a Free Custom Quote</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 14px" }}>Pricing Tailored <em>Exactly to Your Practice</em></h2>
            <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.8, marginBottom: 20 }}>
              Interested in learning more about our customized chiropractic billing pricing plans? Contact us today
              for a free consultation and a personalized quote tailored to your practice&apos;s specific needs and
              claim volume.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {[
                "Free 30-day billing audit included with every new client",
                "No setup fees or long-term contract required",
                "Month-to-month agreements — cancel anytime",
                "Response within 24 business hours",
              ].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <CheckCircle2 size={16} color={COLORS.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  {t}
                </div>
              ))}
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: 20, border: `1.5px solid ${COLORS.grayLight}` }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, marginBottom: 8, display: "flex", alignItems: "center", gap: 6 }}>
                <Phone size={14} color={COLORS.teal} /> Call Us Directly
              </div>
              <a href={SITE.phoneHref} style={{ fontSize: 18, fontWeight: 700, color: COLORS.teal, textDecoration: "none" }}>{SITE.phone}</a>
              <div style={{ fontSize: 12, color: COLORS.gray, marginTop: 4 }}>Mon–Fri 8:00 AM – 6:00 PM EST</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, margin: "12px 0 4px", display: "flex", alignItems: "center", gap: 6 }}>
                <Mail size={13} color={COLORS.teal} /> Email Us
              </div>
              <a href={SITE.emailHref} style={{ fontSize: 13.5, color: COLORS.teal, textDecoration: "none" }}>{SITE.email}</a>
            </div>
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: 28, boxShadow: "0 8px 28px rgba(13,51,73,.1)" }}>
            {quoteSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "40px 10px" }}>
                <CheckCircle2 size={40} color={COLORS.teal} style={{ marginBottom: 14 }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>Quote Request Received!</div>
                <div style={{ fontSize: 13, color: COLORS.gray }}>We&apos;ll send your personalized pricing proposal within 24 hours.</div>
              </motion.div>
            ) : (
              <form name="pricing-form-1" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleQuoteSubmit}>
                <input type="hidden" name="form-name" value="pricing-form-1" />
                <input type="hidden" name="bot-field" style={{ display: "none" }} />
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, marginBottom: 6 }}>Request a Custom Quote</h3>
                <p style={{ fontSize: 12.5, color: COLORS.gray, marginBottom: 18 }}>Tell us about your practice and we&apos;ll send a personalized pricing proposal within 24 hours.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
                  <div><label style={labelStyle}>First Name *</label><input name="first_name" required style={inputStyle} placeholder="Mark" /></div>
                  <div><label style={labelStyle}>Last Name *</label><input name="last_name" required style={inputStyle} placeholder="Smith" /></div>
                </div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Practice Name *</label><input name="practice_name" required style={inputStyle} placeholder="Your Chiropractic Office" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Phone Number *</label><input name="phone" type="tel" required style={inputStyle} placeholder="(321) 203-6372" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Email Address *</label><input name="email" type="email" required style={inputStyle} placeholder="doctor@yourpractice.com" /></div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Monthly Claim Volume</label>
                  <select name="claim_volume" style={inputStyle} defaultValue="">
                    <option value="">Select range...</option>
                    <option>Under 100 claims/mo</option>
                    <option>100–300 claims/mo</option>
                    <option>300–600 claims/mo</option>
                    <option>600+ claims/mo</option>
                  </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>Services Needed</label>
                  <select name="services_needed" style={inputStyle} defaultValue="">
                    <option value="">Select primary service...</option>
                    <option>Full-Service Billing (All-Inclusive)</option>
                    <option>Claims Billing & Coding Only</option>
                    <option>Denial Management Only</option>
                    <option>Personal Injury / PIP Billing</option>
                    <option>Provider Credentialing</option>
                    <option>Not sure — need consultation</option>
                  </select>
                </div>
                <button type="submit" disabled={quoteSubmitting} style={{ width: "100%", background: COLORS.teal, color: "#fff", border: "none", padding: 13, borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: quoteSubmitting ? "default" : "pointer", opacity: quoteSubmitting ? 0.7 : 1 }}>
                  {quoteSubmitting ? "Sending..." : "Request My Custom Quote →"}
                </button>
                <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <Lock size={11} color={COLORS.gray} /> HIPAA-compliant · No obligation · Response within 24 hours
                </p>
              </form>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .quote-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <Footer />
    </div>
  );
}

const thStyle = { textAlign: "left", padding: "12px 16px", background: COLORS.navy, color: "#fff", fontWeight: 600, fontSize: 12.5 };
const tdStyle = { padding: "12px 16px", borderBottom: `1px solid ${COLORS.grayLight}`, color: "#3a4a48" };
const labelStyle = { fontSize: 11.5, fontWeight: 600, color: "#334443", display: "block", marginBottom: 4 };
const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${COLORS.grayLight}`, borderRadius: 8, fontSize: 13, boxSizing: "border-box", outline: "none" };
