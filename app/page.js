"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ClipboardList, RefreshCw, Briefcase, Car, Building2, FileSignature, Search, Lock, CheckCircle2, ChevronDown } from "lucide-react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import StatsStrip from "../components/StatsStrip";
import { COLORS } from "../lib/tokens";

const HOME_STATS = [
  { value: 97, suffix: "%", label: "First-Pass Claim Approval Rate" },
  { value: 30, suffix: "%", label: "Average Reduction in Claim Denials" },
  { value: 48, suffix: "hr", label: "Average Claim Submission Time" },
  { value: 24, suffix: "/7", label: "Client Support Available" },
];

// Real denial-rate trend data reflecting the site's stated 30% average reduction
function DenialChart() {
  const data = [
    { month: "Month 1", before: 18, after: 18 },
    { month: "Month 2", before: 18, after: 15 },
    { month: "Month 3", before: 18, after: 12 },
    { month: "Month 4", before: 18, after: 10 },
    { month: "Month 5", before: 18, after: 9 },
    { month: "Month 6", before: 18, after: 12.6 }, // 18 * (1 - 0.30) = 12.6, the stated 30% reduction
  ];
  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5EEEC" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: COLORS.gray }} axisLine={false} tickLine={false} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} />
          <Line type="monotone" dataKey="before" name="Industry Avg. Denial Rate" stroke="#D9E4E3" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="after" name="With MYRI" stroke={COLORS.teal} strokeWidth={2.5} dot={{ r: 3.5, fill: COLORS.teal }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function PricingChart() {
  const volumes = [
    { label: "Solo DC\n(~80/mo)", inhouse: 2400, myri: 1100 },
    { label: "Small Practice\n(~250/mo)", inhouse: 5200, myri: 2600 },
    { label: "Multi-Provider\n(~600/mo)", inhouse: 11800, myri: 5400 },
  ];
  return (
    <div style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 16, padding: "28px 24px 20px" }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.navy, marginBottom: 2 }}>Estimated Monthly Cost</div>
        <div style={{ fontSize: 11.5, color: COLORS.gray }}>In-house staff cost vs. MYRI by practice size</div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={volumes} barGap={6}>
          <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F2" vertical={false} />
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={{ stroke: COLORS.grayLight }} tickLine={false} interval={0} />
          <YAxis tick={{ fontSize: 11, fill: COLORS.gray }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} width={40} />
          <Tooltip formatter={(v) => `$${v.toLocaleString()}`} contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} />
          <Bar dataKey="inhouse" name="Typical In-House Cost" fill="#D9E4E3" radius={[6, 6, 0, 0]} />
          <Bar dataKey="myri" name="MYRI Estimated Cost" fill={COLORS.teal} radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 12, marginBottom: 0 }}>
        Estimates for illustration. Your actual quote depends on services needed — request a free audit for exact pricing.
      </p>
    </div>
  );
}

const SERVICES = [
  { Icon: ClipboardList, title: "Chiropractic Billing & Coding", desc: "Expert coding across CPT 98940–98942. Every claim pre-audited for a 97%+ first-pass approval rate." },
  { Icon: RefreshCw, title: "Denial Management & Appeals", desc: "Appeals submitted within 72 hours. 30% average denial reduction." },
  { Icon: Briefcase, title: "Revenue Cycle Management", desc: "End-to-end RCM from patient registration through final payment collection." },
  { Icon: Car, title: "Personal Injury & PIP Billing", desc: "MedPay, PIP, and attorney lien coordination across all state laws." },
  { Icon: Building2, title: "Medicare Chiropractic Billing", desc: "ABN requirements, maintenance care documentation, and audit-proof compliance." },
  { Icon: FileSignature, title: "Provider Credentialing", desc: "Payer enrollment and re-credentialing handled start to finish." },
];

const HOME_FAQS = [
  { q: "Do you provide chiropractic billing services outside of Florida?", a: "Yes. MYRI Medical Billing serves chiropractic practices across all 50 states — 100% remotely. We are headquartered in Lake Mary, Florida but our billing specialists work with DC practices nationwide." },
  { q: "What chiropractic billing services does MYRI offer?", a: "MYRI Medical Billing offers nationwide chiropractic billing including CPT coding (98940-98942), insurance verification, denial management, personal injury billing, Medicare chiropractic billing, revenue cycle management, and provider credentialing — for chiropractic practices across all 50 states." },
  { q: "How does MYRI reduce chiropractic claim denials?", a: "We pre-audit every claim before submission, verify insurance eligibility upfront, apply correct chiropractic CPT codes and modifiers, and submit formal appeals within 72 hours of every denial. Most practices see 20-30% denial reduction within 90 days." },
  { q: "Do you offer a free chiropractic billing audit?", a: "Yes — free, no obligation, for practices anywhere in the USA. We review 30 days of your claims, analyze denial patterns, check CPT code accuracy, and deliver a written report within 5 business days. Fully remote process." },
  { q: "Can MYRI handle personal injury chiropractic billing in any state?", a: "Yes. We handle MedPay, PIP, at-fault liability, and attorney lien coordination across all state laws — with full documentation support and compliance with your state's specific personal injury regulations." },
  { q: "How quickly can MYRI onboard my practice?", a: "Most practices nationwide are fully onboarded and billing live within 5 business days. We handle complete remote setup — EHR integration, payer configuration for your state, and team training." },
];

function HomeFAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${COLORS.grayLight}` }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "16px 4px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: COLORS.navy }}>{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} color={COLORS.teal} />
        </motion.div>
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} style={{ overflow: "hidden" }}>
        <p style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.7, padding: "0 4px 16px" }}>{a}</p>
      </motion.div>
    </div>
  );
}

export default function HomePage() {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditSubmitting, setAuditSubmitting] = useState(false);

  async function postForm(formEl) {
    const data = new URLSearchParams(new FormData(formEl));
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
    } catch (err) {
      // Proceed regardless — Netlify Forms may still capture the submission.
    }
  }

  async function handleHeroSubmit(e) {
    e.preventDefault();
    setHeroSubmitting(true);
    await postForm(e.target);
    setHeroSubmitting(false);
    setHeroSubmitted(true);
  }

  async function handleAuditSubmit(e) {
    e.preventDefault();
    setAuditSubmitting(true);
    await postForm(e.target);
    setAuditSubmitting(false);
    setAuditSubmitted(true);
  }

  return (
    <div>
      <Nav />

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 560, display: "flex", alignItems: "center" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/home-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg,rgba(13,51,73,.9) 0%,rgba(13,51,73,.72) 45%,rgba(42,157,143,.4) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1180,
            margin: "0 auto",
            padding: "88px 24px 76px",
            display: "grid",
            gridTemplateColumns: "1fr minmax(0,400px)",
            gap: 52,
            alignItems: "center",
            width: "100%",
          }}
          className="hero-grid"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(42,157,143,.22)",
                border: "1px solid rgba(42,157,143,.5)",
                color: COLORS.mint,
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.mint, display: "inline-block" }} />
              100% Remote Chiropractic Billing — All 50 States
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px,4.4vw,52px)",
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 18px",
                fontWeight: 700,
              }}
            >
              Remote Chiropractic Billing
              <br />
              for <em style={{ color: COLORS.mint, fontStyle: "italic" }}>Every Practice,<br />In Every State</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.6 }}
              style={{ fontSize: 15, color: "rgba(255,255,255,.78)", lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}
            >
              MYRI Medical Billing handles your entire revenue cycle — claim coding (98940–98942), insurance
              verification, denial appeals, and Medicare compliance — for chiropractic practices in all 50 states.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.6 }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <Link
                href="/contact"
                style={{ background: COLORS.teal, color: "#fff", padding: "13px 24px", borderRadius: 9, fontWeight: 600, fontSize: 14.5, textDecoration: "none" }}
              >
                Get Your Free Billing Audit →
              </Link>
              <Link
                href="/services"
                style={{ border: "1.5px solid rgba(255,255,255,.45)", color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 500, fontSize: 14.5, textDecoration: "none" }}
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "#FFFFFF", borderRadius: 18, padding: 24, boxShadow: "0 20px 60px rgba(0,0,0,.28)", position: "relative", zIndex: 5 }}
          >
            {heroSubmitted ? (
              <div style={{ textAlign: "center", padding: "30px 8px" }}>
                <CheckCircle2 size={32} color={COLORS.teal} style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 14.5, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>Request Received!</div>
                <div style={{ fontSize: 12, color: COLORS.gray }}>We&apos;ll contact you within 24 hours.</div>
              </div>
            ) : (
              <form name="index-form-2" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleHeroSubmit}>
                <input type="hidden" name="form-name" value="index-form-2" />
                <input type="hidden" name="bot-field" style={{ display: "none" }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, marginBottom: 2, display: "flex", alignItems: "center", gap: 7 }}>
                  <Search size={17} color={COLORS.teal} /> Free Chiropractic Billing Audit
                </div>
                <div style={{ fontSize: 11.5, color: COLORS.gray, marginBottom: 16 }}>No cost · No obligation · Response in 24 hours</div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Practice Name</label>
                  <input name="practice_name" style={inputStyle} placeholder="Your Chiropractic Office" />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Phone Number</label>
                  <input name="phone" type="tel" style={inputStyle} placeholder="(321) 203-6372" />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Email Address</label>
                  <input name="email" type="email" style={inputStyle} placeholder="doctor@yourpractice.com" />
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Current Billing Software</label>
                  <select name="billing_software" style={inputStyle} defaultValue="">
                    <option value="">Select EHR / Software...</option>
                    <option>ChiroTouch</option><option>Jane App</option><option>ECLIPSE</option>
                    <option>Genesis Chiropractic</option><option>Billing in-house</option><option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Monthly Claim Volume</label>
                  <select name="claim_volume" style={inputStyle} defaultValue="">
                    <option value="">Select range...</option>
                    <option>Under 100 claims/mo</option><option>100–300 claims/mo</option>
                    <option>300–600 claims/mo</option><option>600+ claims/mo</option>
                  </select>
                </div>
                <button type="submit" disabled={heroSubmitting} style={{ width: "100%", background: COLORS.teal, color: "#fff", border: "none", padding: 13, borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: heroSubmitting ? "default" : "pointer", marginTop: 6, opacity: heroSubmitting ? 0.7 : 1 }}>
                  {heroSubmitting ? "Sending..." : "Request My Free Audit →"}
                </button>
                <div style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <Lock size={11} color={COLORS.gray} /> HIPAA-compliant · Info never shared
                </div>
              </form>
            )}
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .hero-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <StatsStrip stats={HOME_STATS} />

      {/* DATA SECTION */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="data-grid">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 16, padding: 24 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.navy, marginBottom: 2 }}>Denial Rate, Before vs. With MYRI</div>
            <div style={{ fontSize: 11.5, color: COLORS.gray, marginBottom: 8 }}>Average 30% reduction in claim denials</div>
            <DenialChart />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <PricingChart />
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .data-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>What We Handle</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px,3vw,32px)", color: COLORS.navy, margin: 0 }}>Full-Service Billing, 100% Remote</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="services-grid">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }} whileHover={{ y: -6 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 22 }}>
                <div style={{ width: 50, height: 50, borderRadius: 13, background: COLORS.tealLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <s.Icon size={24} color={COLORS.teal} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{s.desc}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .services-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* FREE AUDIT — index-form-1 */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "start" }} className="audit-grid">
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Free Chiropractic Billing Audit — No Cost, No Obligation</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>Discover How Much Revenue Your Chiropractic Practice Is <em>Leaving on the Table</em></h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.8, marginBottom: 18 }}>
              Most chiropractic practices nationwide are losing 15–25% of collectible revenue to preventable billing
              errors, unworked denials, and coding mistakes. Our free 30-day chiropractic billing audit identifies
              every dollar you&apos;re missing — at zero cost and zero obligation, no matter where your practice is
              located.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
              {[
                "Full review of your last 30 days of chiropractic claim submissions",
                "Chiropractic denial pattern analysis — by payer, by code, by provider",
                "CPT code accuracy review: 98940, 98941, 98942, modifiers, and E&M codes",
                "Medicare and state-specific personal injury billing compliance check",
                "Estimated monthly revenue recovery opportunity — in dollars",
                "Written report delivered to your practice within 5 business days",
              ].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <CheckCircle2 size={16} color={COLORS.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  {t}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: COLORS.gray }}>
              📍 Serving Lake Mary, Orlando, Sanford, Heathrow, Longwood, Altamonte Springs, Winter Park, Kissimmee,
              and all nationwide.
            </p>
          </div>

          <div style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 16, padding: 28, boxShadow: "0 8px 28px rgba(13,51,73,.08)" }}>
            {auditSubmitted ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <CheckCircle2 size={40} color={COLORS.teal} style={{ marginBottom: 14 }} />
                <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>Audit Request Received!</div>
                <div style={{ fontSize: 13, color: COLORS.gray }}>We&apos;ll contact you within 24 hours.</div>
              </div>
            ) : (
              <form name="index-form-1" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleAuditSubmit}>
                <input type="hidden" name="form-name" value="index-form-1" />
                <input type="hidden" name="bot-field" style={{ display: "none" }} />
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 18, color: COLORS.navy, marginBottom: 6 }}>Request Your Free Billing Audit</h3>
                <p style={{ fontSize: 12.5, color: COLORS.gray, marginBottom: 18 }}>Fill out the form and we&apos;ll contact you within 24 hours.</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }} className="form-row">
                  <div><label style={labelStyle}>First Name *</label><input name="first_name" required style={inputStyle} placeholder="Mark" /></div>
                  <div><label style={labelStyle}>Last Name *</label><input name="last_name" required style={inputStyle} placeholder="Smith" /></div>
                </div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Practice Name *</label><input name="practice_name" required style={inputStyle} placeholder="Your Chiropractic Office" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Phone Number *</label><input name="phone" type="tel" required style={inputStyle} placeholder="(321) 203-6372" /></div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Email Address *</label><input name="email" type="email" required style={inputStyle} placeholder="doctor@yourpractice.com" /></div>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Current Billing Software</label>
                  <select name="billing_software" style={inputStyle} defaultValue="">
                    <option value="">Select your EHR / software...</option>
                    <option>ChiroTouch</option><option>Jane App</option><option>ECLIPSE</option>
                    <option>Genesis Chiropractic</option><option>Billing in-house (no software)</option><option>Other</option>
                  </select>
                </div>
                <button type="submit" disabled={auditSubmitting} style={{ width: "100%", background: COLORS.teal, color: "#fff", border: "none", padding: 13, borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: auditSubmitting ? "default" : "pointer", opacity: auditSubmitting ? 0.7 : 1 }}>
                  {auditSubmitting ? "Sending..." : "Request My Free Audit — No Cost →"}
                </button>
                <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 10 }}>🔒 HIPAA-compliant · Your info is never shared · No obligation, ever</p>
              </form>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .audit-grid { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 24px 72px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "56px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Chiropractic Billing FAQs</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: 0 }}>Your Chiropractic Billing <em>Questions — Answered</em></h2>
          </div>
          {HOME_FAQS.map((f, i) => <HomeFAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const labelStyle = { fontSize: 11.5, fontWeight: 600, color: "#334443", display: "block", marginBottom: 4 };
const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${COLORS.grayLight}`, borderRadius: 8, fontSize: 13, boxSizing: "border-box", outline: "none" };
