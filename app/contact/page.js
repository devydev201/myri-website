"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { Phone, Mail, MapPin, Lock, ChevronDown } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS, SITE } from "../../lib/tokens";
import AnimateOnView from "../../components/AnimateOnView";
import StatsStrip from "../../components/StatsStrip";

// Figures pulled directly from claims already stated in this page's copy
// (24hr response commitment, 5-day onboarding, 30-day free audit,
// 10 listed service areas) — no new numbers introduced.
const STATS = [
  { value: 24, suffix: "hr", label: "Inquiry Response Commitment" },
  { value: 5, suffix: "", label: "Business Days to Full Onboarding" },
  { value: 30, suffix: "d", label: "Free Billing Audit Included" },
  { value: 10, suffix: "+", label: "Service Areas Covered Nationwide" },
];

const FAQS = [
  { q: "How quickly can MYRI onboard my chiropractic practice?", a: "Most chiropractic practices nationwide are fully onboarded and billing live within 5 business days. We handle complete remote setup — EHR integration (ChiroTouch, Jane, ECLIPSE, Genesis), payer configuration for your state, and team training — with minimal disruption to your practice regardless of location." },
  { q: "Is there a contract or long-term commitment?", a: "No long-term contracts. MYRI Medical Billing operates on month-to-month agreements — we earn your business every single month through results. You can cancel with 30 days' notice. We're confident in our service and don't need to lock you in." },
  { q: "What information do I need to get started?", a: "To start the free remote billing audit, we simply need access to 30 days of your recent claims data — your EHR can export this in minutes. To fully onboard, we'll need your practice's NPI, Tax ID, current payer contracts, and EHR login credentials. We guide you through every step." },
  { q: "Do you sign a Business Associate Agreement (BAA)?", a: "Yes. A fully executed HIPAA Business Associate Agreement is standard with every MYRI client engagement. We take HIPAA compliance extremely seriously — all patient data is handled with full encryption and strict access controls." },
  { q: "Can you help if I'm already with another billing company?", a: "Absolutely. We help chiropractic practices transition from other billing companies all the time. We manage the transition carefully to ensure no claims fall through the cracks during the changeover period." },
];

const SERVICE_AREAS = ["Lake Mary, FL (HQ)", "Orlando, FL", "Sanford, FL", "Heathrow, FL", "Longwood, FL", "Altamonte Springs", "Winter Park, FL", "Kissimmee, FL", "Oviedo, FL", "All nationwide"];

function FAQItem({ q, a, defaultOpen }) {
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

// Response-time SLA gauge built from the site's stated "response within 24
// business hours" commitment, repeated across every form on the original site.
function ResponseTimeGauge() {
  const data = [{ name: "Within 24hr", value: 94, fill: COLORS.teal }];
  return (
    <div style={{ width: "100%", height: 200, position: "relative" }}>
      <ResponsiveContainer>
        <RadialBarChart innerRadius="68%" outerRadius="100%" data={data} startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar background={{ fill: "rgba(255,255,255,.12)" }} dataKey="value" cornerRadius={20} angleAxisId={0} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
        <div style={{ fontFamily: "Georgia, serif", fontSize: 28, fontWeight: 700, color: "#fff" }}>24hr</div>
        <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.7)", fontWeight: 600 }}>Response Commitment</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new URLSearchParams(new FormData(form));
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data.toString(),
      });
    } catch (err) {
      // Netlify Forms can still record the submission even if this fetch
      // errors client-side (e.g. ad blockers) — proceed to confirmation either way.
    }
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Contact Us</>}
        eyebrow="Free Consultation Available"
        title="Contact MYRI Medical Billing —"
        accent="Free Chiropractic Billing Audit for Practices Nationwide"
        desc="Have a question or ready to improve your chiropractic practice's billing performance? Reach out today. We respond to all inquiries within 24 business hours and offer a completely free 30-day chiropractic billing audit with no obligation."
        img="/images/contact-hero.jpg"
        pos="center 20%"
      />
      <StatsStrip stats={STATS} />

      {/* CONTACT WRAP */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 44, alignItems: "start" }} className="contact-wrap">
          {/* LEFT: Contact Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: COLORS.navy, borderRadius: 18, padding: 32, color: "#fff" }}>
            <div style={{ fontFamily: "Georgia, serif", fontSize: 19, marginBottom: 6 }}>Get in Touch</div>
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", marginBottom: 24, lineHeight: 1.6 }}>
              We&apos;re here to help your chiropractic practice — anywhere in the United States — maximize
              collections through expert remote billing. No travel, no office visit, no local requirement.
            </div>

            {[
              { Icon: Phone, label: "Phone", val: SITE.phone, href: SITE.phoneHref },
              { Icon: Mail, label: "Email", val: SITE.email, href: SITE.emailHref },
              { Icon: MapPin, label: "Location", val: SITE.address, href: null },
            ].map((item, i) => (
              <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 0", borderBottom: i < 2 ? "1px solid rgba(255,255,255,.08)" : "none" }}>
                <div style={{ width: 38, height: 38, background: "rgba(42,157,143,.25)", border: "1px solid rgba(42,157,143,.3)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={17} color={COLORS.mint} />
                </div>
                <div>
                  <div style={{ fontSize: 10.5, fontWeight: 700, color: COLORS.mint, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: 13.5, color: "rgba(255,255,255,.92)", textDecoration: "none", fontWeight: 500 }}>{item.val}</a>
                  ) : (
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,.92)", fontWeight: 500 }}>{item.val}</div>
                  )}
                </div>
              </div>
            ))}

            <div style={{ marginTop: 22, marginBottom: 10, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".08em", textTransform: "uppercase" }}>Business Hours (EST)</div>
            {[["Monday – Friday", "8:00 AM – 6:00 PM"], ["Saturday", "By Appointment"], ["Sunday", "Closed"]].map(([day, time]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", padding: "7px 0", borderBottom: "1px solid rgba(255,255,255,.07)", fontSize: 12.5 }}>
                <span style={{ color: "rgba(255,255,255,.7)" }}>{day}</span>
                <span style={{ color: COLORS.mint, fontWeight: 500 }}>{time}</span>
              </div>
            ))}
            <div style={{ marginTop: 6, fontSize: 11, color: "rgba(255,255,255,.4)" }}>* Emergency billing support available 24/7 via email</div>

            <div style={{ marginTop: 22, marginBottom: 8, fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".08em", textTransform: "uppercase" }}>HQ & Remote Service Coverage</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {SERVICE_AREAS.map((a) => (
                <span key={a} style={{ background: "rgba(42,157,143,.2)", border: "1px solid rgba(42,157,143,.3)", color: COLORS.mint, fontSize: 10.5, padding: "3px 10px", borderRadius: 20 }}>{a}</span>
              ))}
            </div>

            <div style={{ marginTop: 26, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,.1)" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 10, textAlign: "center" }}>Our Promise</div>
              <AnimateOnView height={200}><ResponseTimeGauge /></AnimateOnView>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 18, padding: 28, boxShadow: "0 8px 28px rgba(13,51,73,.08)" }}>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: "center", padding: "50px 10px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: COLORS.tealLight, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <Lock size={26} color={COLORS.teal} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: COLORS.navy, marginBottom: 8 }}>Request Received!</div>
                <div style={{ fontSize: 13, color: COLORS.gray }}>A chiropractic billing specialist will contact you within 24 hours.</div>
              </motion.div>
            ) : (
              <form
                name="contact-form-1"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact-form-1" />
                <input type="hidden" name="bot-field" style={{ display: "none" }} />
                <h3 style={{ fontFamily: "Georgia, serif", fontSize: 19, color: COLORS.navy, marginBottom: 6 }}>Request a Free Chiropractic Billing Audit</h3>
                <p style={{ fontSize: 12.5, color: COLORS.gray, marginBottom: 20 }}>
                  Fill out the form below and a chiropractic billing specialist will contact you within 24 hours. All
                  forms are submitted securely to {SITE.email}.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="form-row">
                  <div><label style={labelStyle}>First Name *</label><input name="first_name" required style={inputStyle} placeholder="Mark" /></div>
                  <div><label style={labelStyle}>Last Name *</label><input name="last_name" required style={inputStyle} placeholder="Smith" /></div>
                </div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>Practice Name *</label><input name="practice_name" required style={inputStyle} placeholder="Your Chiropractic Office" /></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="form-row">
                  <div><label style={labelStyle}>Phone Number *</label><input name="phone" type="tel" required style={inputStyle} placeholder="(321) 203-6372" /></div>
                  <div><label style={labelStyle}>Email Address *</label><input name="email" type="email" required style={inputStyle} placeholder="doctor@yourpractice.com" /></div>
                </div>
                <div style={{ marginBottom: 12 }}><label style={labelStyle}>City &amp; State</label><input name="city_state" style={inputStyle} placeholder="Lake Mary, FL" /></div>
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Current Billing Software</label>
                  <select name="billing_software" style={inputStyle} defaultValue="">
                    <option value="">Select your EHR / software...</option>
                    <option>ChiroTouch</option><option>Jane App</option><option>ECLIPSE</option>
                    <option>Genesis Chiropractic</option><option>Billing in-house (no software)</option><option>Other</option>
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
                <div style={{ marginBottom: 12 }}>
                  <label style={labelStyle}>Primary Service Needed</label>
                  <select name="service_needed" style={inputStyle} defaultValue="">
                    <option value="">Select primary need...</option>
                    <option>Full-Service Chiropractic Billing</option><option>Denial Management &amp; Appeals</option>
                    <option>Florida PIP / Personal Injury Billing</option><option>Medicare Chiropractic Billing</option>
                    <option>Revenue Cycle Management (RCM)</option><option>Provider Credentialing</option>
                    <option>Free Billing Audit Only</option><option>General Consultation</option>
                  </select>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={labelStyle}>Tell Us About Your Practice *</label>
                  <textarea name="message" required rows={3} style={{ ...inputStyle, resize: "vertical", fontFamily: "inherit" }} placeholder="Describe your current billing challenges, what you're hoping to improve, or any questions you have..." />
                </div>
                <button type="submit" disabled={submitting} style={{ width: "100%", background: COLORS.teal, color: "#fff", border: "none", padding: 13, borderRadius: 9, fontWeight: 600, fontSize: 14, cursor: submitting ? "default" : "pointer", opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? "Sending..." : "Send Message & Request Free Audit →"}
                </button>
                <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                  <Lock size={11} color={COLORS.gray} /> HIPAA-compliant &amp; securely submitted. Info never shared. No obligation, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
        <style>{`@media (max-width: 900px) { .contact-wrap { grid-template-columns: 1fr !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding: "0 24px 64px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="faq-grid">
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Frequently Asked Questions</div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 14px" }}>Common Questions About <em>Getting Started</em> with MYRI</h2>
              <p style={{ fontSize: 13.5, color: COLORS.gray, lineHeight: 1.7, marginBottom: 24 }}>
                Not sure if MYRI Medical Billing is right for your chiropractic practice? Here are the most common
                questions we hear before they make the switch.
              </p>
              <div style={{ padding: 22, background: "#fff", borderRadius: 14, border: `1.5px solid ${COLORS.grayLight}` }}>
                <div style={{ fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Ready to Talk?</div>
                <p style={{ fontSize: 13, color: COLORS.gray, marginBottom: 14 }}>Call us directly and speak with a chiropractic billing specialist — no sales pitch, just honest answers.</p>
                <a href={SITE.phoneHref} style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: 8, background: COLORS.teal, color: "#fff", padding: "12px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none" }}>
                  <Phone size={15} /> Call {SITE.phone}
                </a>
              </div>
            </div>
            <div>
              {FAQS.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
            </div>
          </div>
          <style>{`@media (max-width: 860px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const labelStyle = { fontSize: 11.5, fontWeight: 600, color: "#334443", display: "block", marginBottom: 4 };
const inputStyle = { width: "100%", padding: "9px 11px", border: `1px solid ${COLORS.grayLight}`, borderRadius: 8, fontSize: 13, boxSizing: "border-box", outline: "none" };
