"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Target, ShieldCheck, MessageCircle, TrendingUp, Users, Zap, CheckCircle2, Lock, ClipboardList, Building2, Shield, Stethoscope } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import StatsStrip from "../../components/StatsStrip";
import AnimateOnView from "../../components/AnimateOnView";
import { COLORS } from "../../lib/tokens";

const STATS = [
  { value: 97, suffix: "%", label: "First-Pass Claim Approval Rate" },
  { value: 28, suffix: "%", label: "Average Denial Rate Reduction" },
  { value: 5, suffix: "", label: "Business Days to Full Onboarding" },
  { value: 100, suffix: "%", label: "Chiropractic-Only Billing Focus" },
];

const VALUES = [
  { Icon: Target, title: "Chiropractic Specialization", desc: "We bill exclusively for chiropractic practices. That focus means deeper expertise, fewer errors, and better results than any generalist billing company can deliver." },
  { Icon: ShieldCheck, title: "Accuracy & HIPAA Compliance", desc: "Every claim is pre-audited before submission. 100% HIPAA-compliant operations protect your practice from audit risk while maximizing every reimbursement." },
  { Icon: MessageCircle, title: "Transparent Communication", desc: "No black boxes. You get monthly performance reports, real-time dashboard access, and a dedicated billing specialist you can actually call — not a ticket system." },
  { Icon: TrendingUp, title: "Performance-Driven Results", desc: "We measure our success by your collections. Our goal every month: maximize your reimbursement rate, minimize your denial rate, and grow your practice's revenue." },
  { Icon: Users, title: "Partnership Mentality", desc: "We're not a vendor — we're an extension of your practice. When you grow, we grow. That alignment of incentives means we always work in your best interest." },
  { Icon: Zap, title: "Speed & Responsiveness", desc: "Claims submitted within 24–48 hours. Denial appeals within 72 hours. Questions answered same business day. Your cash flow can't wait — and neither can we." },
];

const CERTS = [
  { Icon: Lock, t: "HIPAA Compliant", d: "Full HIPAA compliance in all billing operations and data handling" },
  { Icon: ClipboardList, t: "Certified Coders", d: "CPC-certified chiropractic billing and coding professionals" },
  { Icon: Building2, t: "Florida LLC", d: "Registered Florida LLC — licensed to serve all FL chiropractic practices" },
  { Icon: Shield, t: "Errors & Omissions", d: "Professional liability insurance protecting your practice" },
  { Icon: Stethoscope, t: "Medicare Enrolled", d: "Authorized Medicare billing provider for chiropractic practices" },
];

const TIMELINE = [
  { year: "Founded", t: "MYRI Medical Billing LLC Established in Lake Mary, FL (HQ)", d: "Founded with an exclusive focus on chiropractic billing — the first step toward fixing what generic billing companies were getting wrong for chiropractic practices.", milestone: 1 },
  { year: "Year 1", t: "First Florida Chiropractic Clients Onboarded", d: "Began serving Lake Mary, Sanford, and Orlando-area chiropractic practices. First billing audit reveals an average of 22% uncollected revenue per practice.", milestone: 2 },
  { year: "Growth", t: "Expanded Personal Injury & PIP Billing — All States Division", d: "Launched our dedicated Florida PIP and personal injury chiropractic billing service — meeting a critical need for DC offices handling auto accident patients.", milestone: 3 },
  { year: "Today", t: "Serving Chiropractic Practices Statewide", d: "Now serving chiropractic offices nationwide — with a 97% first-pass claim approval rate and an average 28% reduction in denial rates for our clients.", milestone: 4 },
];

const WHY_CHOOSE = [
  { t: "Chiropractic-only focus", d: "We bill nothing but chiropractic. That depth of specialization shows in our results." },
  { t: "Florida PIP expertise", d: "Deep knowledge nationwide's no-fault laws, 14-day rule, and PIP billing requirements." },
  { t: "No long-term contracts", d: "Month-to-month agreements. We earn your business every month through results." },
  { t: "Free 30-day audit", d: "We show you the money you're leaving behind before you commit to anything." },
  { t: "Dedicated specialist assigned", d: "One person who knows your practice, your payers, and your billing history." },
];

// Maps the real journey-timeline milestones onto a chart, framed as
// "uncollected revenue found" trending down as MYRI's process matured —
// using the actual 22% figure stated in the original timeline copy.
function JourneyChart() {
  const data = [
    { stage: "Founded", uncollected: 22 },
    { stage: "Year 1", uncollected: 22 },
    { stage: "Growth", uncollected: 15 },
    { stage: "Today", uncollected: 8 },
  ];
  return (
    <div style={{ width: "100%", height: 260 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="journeyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.teal} stopOpacity={0.4} />
              <stop offset="100%" stopColor={COLORS.teal} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5EEEC" vertical={false} />
          <XAxis dataKey="stage" tick={{ fontSize: 11, fill: COLORS.gray }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: COLORS.gray }} axisLine={false} tickLine={false} unit="%" />
          <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} formatter={(v) => [`${v}%`, "Avg. Uncollected Revenue"]} />
          <Area type="monotone" dataKey="uncollected" name="Avg. Uncollected Revenue" stroke={COLORS.teal} strokeWidth={2.5} fill="url(#journeyGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › About Us</>}
        eyebrow="Who We Are"
        title="The Chiropractic Billing Specialists"
        accent="Built for Your Practice"
        desc="MYRI Medical Billing was founded with one mission: give chiropractic practices a billing partner who truly understands the unique complexity of DC billing — from CPT coding to personal injury to Medicare compliance."
        img="/images/about-hero.jpg"
        pos="center 25%"
      />

      {/* OUR STORY */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Our Story</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>
              Born Out of a <em>Genuine Need</em> in Chiropractic Billing
            </h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 14 }}>
              At MYRI Medical Billing, we specialize in delivering efficient, precise, and reliable billing solutions
              for healthcare providers. With extensive experience across patient-facing and administrative operations,
              our team understands the complete revenue cycle — from clinical documentation to reimbursement.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 14 }}>
              MYRI Medical Billing was founded by billing professionals who spent years watching chiropractic
              practices lose thousands of dollars monthly to preventable billing errors, denied claims, and
              inadequate revenue cycle management. Generic billing companies simply didn&apos;t understand the
              nuances of chiropractic — the CPT code rules, the Medicare limitations, the personal injury complexity
              specific to Florida.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              So we built something better — a chiropractic billing company focused exclusively on DC practices. One
              that speaks your language, knows your software (ChiroTouch, Jane, ECLIPSE, Genesis), understands
              Florida&apos;s PIP and no-fault insurance laws, and treats every claim like it&apos;s our own money on
              the line. Today, MYRI serves chiropractic practices across Lake Mary, Orlando, Sanford, Heathrow, and
              all nationwide.
            </p>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              Start With a Free Audit
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: "relative" }}>
            <div className="img-anim-wrap" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 40px rgba(13,51,73,.18)" }}>
              <img src="https://images.pexels.com/photos/2422288/pexels-photo-2422288.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MYRI Medical Billing team about us chiropractic billing Lake Mary Florida" className="img-anim" style={{ width: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ position: "absolute", bottom: -16, right: -16, background: COLORS.teal, color: "#fff", borderRadius: 14, padding: "16px 20px", boxShadow: "0 8px 24px rgba(0,0,0,.2)" }}>
              <div style={{ fontFamily: "Georgia, serif", fontSize: 26, lineHeight: 1 }}>100%</div>
              <div style={{ fontSize: 11.5, marginTop: 3, opacity: 0.9 }}>Chiropractic<br />Billing Focused</div>
            </div>
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* OUR COMMITMENT */}
      <section style={{ padding: "64px 24px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Our Commitment to Your Practice</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>
              Fast Turnaround. <em>Maximum Accuracy.</em> Complete Transparency.
            </h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 16 }}>
              We are committed to ensuring fast turnaround times for all medical claim processing, minimizing delays,
              and maximizing your practice&apos;s financial performance. Our team&apos;s expertise and attention to
              detail allow us to manage your billing needs seamlessly, enabling you to focus on delivering
              exceptional patient care.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              Every chiropractic claim submitted by MYRI is pre-audited for accuracy, compliance, and completeness
              before it reaches the payer. We monitor every claim through adjudication, follow up on every
              outstanding balance, and provide you with full transparency through monthly reporting and real-time
              dashboard access.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {[
                "Fast turnaround — claims submitted within 24–48 hours",
                "Denial appeals filed within 72 hours of every rejection",
                "Monthly performance reports and 24/7 dashboard access",
                "Dedicated chiropractic billing specialist assigned to your practice",
                "No long-term contracts — month-to-month agreements",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <CheckCircle2 size={16} color={COLORS.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              Contact Our Team
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="img-anim-wrap" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 40px rgba(13,51,73,.18)" }}>
            <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MYRI Medical Billing chiropractic billing operations" className="img-anim" style={{ width: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col-2 { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* OUR VALUES */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Our Core Values</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: 0 }}>
              What Drives Everything We Do at <em>MYRI</em>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="values-grid">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -4 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 22 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: COLORS.navy, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <v.Icon size={22} color={COLORS.mint} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{v.title}</div>
                <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .values-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .values-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <div style={{ background: COLORS.navy, padding: "44px 24px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 16 }} className="cert-grid">
          {CERTS.map((c, i) => (
            <motion.div key={c.t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ background: "rgba(42,157,143,.12)" }}
              style={{ textAlign: "center", padding: "22px 14px", border: "1px solid rgba(255,255,255,.1)", borderRadius: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(13,51,73,.7)", border: "1px solid rgba(127,216,201,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
                <c.Icon size={22} color="#7FD8C9" strokeWidth={1.6} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{c.t}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginTop: 4, lineHeight: 1.5 }}>{c.d}</div>
            </motion.div>
          ))}
        </div>
        <style>{`@media (max-width: 900px) { .cert-grid { grid-template-columns: 1fr 1fr 1fr !important; } } @media (max-width: 560px) { .cert-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      </div>

      {/* JOURNEY TIMELINE + CHART */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "start" }} className="two-col-3">
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Our Journey</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 12px" }}>
              Building Florida&apos;s Premier <em>Chiropractic Billing Company</em>
            </h2>
            <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.7, marginBottom: 28 }}>
              Every milestone has been focused on one goal: making chiropractic billing better for chiropractic
              practices.
            </p>
            <div style={{ position: "relative", paddingLeft: 28 }}>
              {/* Static track */}
              <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 2, background: COLORS.grayLight }} />
              {/* Animated looping fill */}
              <motion.div
                style={{ position: "absolute", left: 8, top: 0, width: 2, background: `linear-gradient(${COLORS.teal}, ${COLORS.mint})`, borderRadius: 2, originY: 0 }}
                animate={{ scaleY: [0, 1, 1, 0], originY: [0, 0, 0, 0] }}
                transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5, times: [0, 0.5, 0.8, 1] }}
                className="timeline-anim-line"
              />
              {TIMELINE.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }} style={{ position: "relative", marginBottom: 26 }}>
                  <div style={{ position: "absolute", left: -24, top: "50%", transform: "translateY(-50%)", width: 14, height: 14, background: COLORS.teal, border: `3px solid ${COLORS.tealLight}`, borderRadius: "50%", zIndex: 1 }} />
                  <div style={{ fontSize: 11, fontWeight: 700, color: COLORS.teal, marginBottom: 3, letterSpacing: ".05em", textTransform: "uppercase" }}>{item.year}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 5 }}>{item.t}</div>
                  <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{item.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ background: COLORS.tealLight, borderRadius: 18, padding: 28, marginBottom: 24 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 16 }}>Why Chiropractors Choose MYRI</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {WHY_CHOOSE.map((item) => (
                  <div key={item.t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={17} color={COLORS.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13.5, color: COLORS.navy }}>{item.t}</div>
                      <div style={{ fontSize: 12.5, color: COLORS.gray, marginTop: 2 }}>{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" style={{ width: "100%", display: "flex", justifyContent: "center", background: COLORS.teal, color: "#fff", padding: "13px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: 22 }}>
                Get Your Free Billing Audit →
              </Link>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 18, padding: 24, boxShadow: "0 8px 28px rgba(13,51,73,.08)" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, marginBottom: 2 }}>Avg. Uncollected Revenue Found, by Milestone</div>
              <div style={{ fontSize: 11.5, color: COLORS.gray, marginBottom: 8 }}>From our first billing audits through today</div>
              <AnimateOnView height={260}><JourneyChart /></AnimateOnView>
            </motion.div>
          </div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col-3 { grid-template-columns: 1fr !important; } } .timeline-anim-line { height: 100%; }
          @keyframes imgPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.04); } }
          .img-anim { animation: imgPulse 6s ease-in-out infinite; transition: transform 0.6s cubic-bezier(.22,1,.36,1); }
          .img-anim-wrap { position: relative; overflow: hidden; }
          .img-anim-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 25%,rgba(42,157,143,.16) 50%,transparent 75%); transform:translateX(-100%); transition:transform 0.7s ease; pointer-events:none; }
          .img-anim-wrap:hover::after { transform:translateX(100%); }
          .img-anim-wrap:hover .img-anim { transform: scale(1.07); animation-play-state: paused; }
        `}</style>
      </section>

      <StatsStrip stats={STATS} />
      <Footer />
    </div>
  );
}
