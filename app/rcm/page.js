"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CheckCircle2, Phone } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import StatsStrip from "../../components/StatsStrip";
import AnimateOnView from "../../components/AnimateOnView";
import { COLORS, SITE } from "../../lib/tokens";

const STATS = [
  { value: 97, suffix: "%", label: "First-Pass Claim Approval Rate" },
  { value: 30, suffix: "%", label: "Average Denial Rate Reduction" },
  { value: 25, suffix: "%", label: "Average Collection Rate Increase" },
  { value: 5, suffix: "", label: "Business Days to Full Onboarding" },
];

const RCM_STEPS = [
  { n: 1, t: "Patient Registration & Eligibility Verification", d: "Verify chiropractic insurance benefits, visit limits, co-pays, and pre-authorization requirements before the patient's first visit — eliminating billing surprises." },
  { n: 2, t: "Chiropractic Medical Coding & Charge Capture", d: "Accurate CPT coding (98940, 98941, 98942, E&M, PT codes) and ICD-10-CM diagnosis coding with pre-submission audit to ensure first-pass approval." },
  { n: 3, t: "Electronic Claim Submission", d: "Clean claims submitted electronically to all major payers nationwide within 24–48 hours — with real-time claim tracking through payer portals." },
  { n: 4, t: "Payment Posting & Reconciliation", d: "All insurance and patient payments accurately posted and reconciled. Underpayments identified and recovered. Every dollar accounted for." },
  { n: 5, t: "Denial Management & Appeals", d: "Every denied chiropractic claim analyzed, corrected, and formally appealed within 72 hours. We recover revenue that other billing companies write off." },
  { n: 6, t: "Patient Billing & Collections", d: "Clear, compliant patient billing statements with professional follow-up — improving patient pay rates while maintaining positive patient relationships." },
  { n: 7, t: "Reporting & Performance Analytics", d: "Monthly financial performance reports, denial analysis, AR aging reports, and real-time dashboard access — full transparency into your practice's financial health." },
];

const WHY_RCM = [
  "End-to-end chiropractic RCM expertise — CPT, Medicare, PIP, and beyond",
  "Experienced chiropractic billing and coding specialists (CPC-certified)",
  "Proven track record of improving cash flow by 15–25% in 90 days",
  "Reduced claim denials and faster reimbursements from all major payers nationwide",
  "Customized reporting and analytics for better decision-making",
  "100% HIPAA-compliant operations with dedicated client support",
];

// Cash flow improvement across the real 7-step RCM process, anchored to the
// stated 25% average collection rate increase by the final stage.
function RCMImpactChart() {
  const data = [
    { step: "Step 1", baseline: 100, optimized: 100, rate: 75 },
    { step: "Step 2", baseline: 100, optimized: 104, rate: 80 },
    { step: "Step 3", baseline: 100, optimized: 108, rate: 85 },
    { step: "Step 4", baseline: 100, optimized: 113, rate: 90 },
    { step: "Step 5", baseline: 100, optimized: 119, rate: 95 },
    { step: "Step 6", baseline: 100, optimized: 123, rate: 98 },
    { step: "Step 7", baseline: 100, optimized: 125, rate: 100 },
  ];
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5EEEC" vertical={false} />
          <XAxis dataKey="step" tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}`} domain={[90, 130]} />
          <YAxis yAxisId="right" orientation="right" domain={[60, 100]} tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 11.5 }} />
          <Bar yAxisId="left" dataKey="baseline" name="Baseline Collections (index)" fill="#D9E4E3" radius={[5, 5, 0, 0]} barSize={20} />
          <Bar yAxisId="left" dataKey="optimized" name="With MYRI RCM (index)" fill={COLORS.teal} radius={[5, 5, 0, 0]} barSize={20} />
          <Line yAxisId="right" type="monotone" dataKey="rate" name="Process Completion %" stroke={COLORS.navy} strokeWidth={2.5} dot={{ r: 3.5, fill: COLORS.navy }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function RCMPage() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Revenue Cycle Management</>}
        eyebrow="Chiropractic RCM Specialists"
        title="Optimize Your Chiropractic Practice's"
        accent="Financial Performance"
        desc="At MYRI Medical Billing, we specialize in Revenue Cycle Management (RCM) solutions designed to maximize your chiropractic practice's revenue, reduce claim denials, and improve cash flow — from patient registration to final payment."
        img="/images/rcm-hero.jpg"
        pos="center 20%"
      />
      <StatsStrip stats={STATS} />

      {/* WHAT IS RCM */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Understanding Chiropractic RCM</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>What Is Revenue Cycle Management for Chiropractic Practices?</h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 16 }}>
              Revenue Cycle Management (RCM) is the process of managing the complete financial lifecycle of a
              patient&apos;s interaction with your chiropractic practice. It includes everything from verifying
              insurance eligibility and coding chiropractic services to submitting claims and collecting payments
              from both insurers and patients.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 16 }}>
              Effective chiropractic RCM ensures accurate billing, faster reimbursements from all major payers
              nationwide (Medicare, BlueCross, Aetna, Cigna, United, Florida Medicaid), and long-term financial
              stability for your DC practice.
            </p>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              For chiropractic practices specifically, RCM also means managing the unique complexities of CPT code
              compliance (98940, 98941, 98942), Medicare&apos;s spinal manipulation-only restrictions, state-specific
              personal injury and PIP billing rules, and denial prevention strategies tailored to each state&apos;s
              chiropractic payer contracts.
            </p>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none", display: "inline-block" }}>
              Contact Us About RCM
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="img-anim-wrap" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 40px rgba(13,51,73,.18)" }}>
            <img src="https://images.pexels.com/photos/8297447/pexels-photo-8297447.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Chiropractic revenue cycle management RCM process Florida" className="img-anim" style={{ width: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* 7-STEP PROCESS */}
      <section style={{ padding: "64px 24px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="process-grid">
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Our Comprehensive Chiropractic RCM Process</div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>End-to-End RCM — From <em>First Visit to Final Payment</em></h2>
              <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.8, marginBottom: 24 }}>
                Our comprehensive chiropractic RCM process covers every step of your practice&apos;s financial cycle
                — managed by dedicated billing specialists who know chiropractic billing inside and out.
              </p>
              <div className="img-anim-wrap" style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 24px rgba(13,51,73,.12)", marginBottom: 20 }}>
                <img src="https://images.pexels.com/photos/9034966/pexels-photo-9034966.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MYRI comprehensive chiropractic RCM process diagram" className="img-anim" style={{ width: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 16, padding: 20, boxShadow: "0 8px 28px rgba(13,51,73,.06)" }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: COLORS.navy, marginBottom: 2 }}>Collections Index Through the RCM Process</div>
                <div style={{ fontSize: 11, color: COLORS.gray, marginBottom: 6 }}>Tracking toward the stated 25% average collection rate increase</div>
                <AnimateOnView height={300}><RCMImpactChart /></AnimateOnView>
              </motion.div>
            </div>
            <div>
              {RCM_STEPS.map((s, i) => (
                <motion.div key={s.n} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, duration: 0.5 }} whileHover={{ x: 4 }}
                  style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: 22, background: "#fff", border: `1.5px solid ${COLORS.grayLight}`, borderRadius: 14, marginBottom: 12 }}>
                  <div style={{ width: 40, height: 40, background: COLORS.teal, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Georgia, serif", fontSize: 16, color: "#fff", flexShrink: 0 }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 4 }}>{s.t}</div>
                    <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{s.d}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 900px) { .process-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* WHY CHOOSE MYRI */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} className="two-col-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Why Choose MYRI Medical Billing for Chiropractic RCM</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>End-to-End RCM Expertise <em>Built for Chiropractic</em></h2>
            <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82, marginBottom: 20 }}>
              MYRI Medical Billing provides chiropractic-focused remote RCM expertise built on years of experience
              billing for DC practices across all 50 states. Our entire RCM workflow is cloud-based and delivered
              securely via remote integration with your EHR.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
              {WHY_RCM.map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#3a4a48" }}>
                  <CheckCircle2 size={16} color={COLORS.teal} style={{ flexShrink: 0, marginTop: 2 }} />
                  {t}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "12px 22px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none" }}>Get a Free RCM Consultation</Link>
              <Link href="/pricing" style={{ border: `1.5px solid ${COLORS.teal}`, color: COLORS.teal, padding: "11px 20px", borderRadius: 9, fontWeight: 600, fontSize: 13.5, textDecoration: "none" }}>View Pricing</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="img-anim-wrap" style={{ borderRadius: 18, overflow: "hidden", boxShadow: "0 16px 40px rgba(13,51,73,.18)" }}>
            <img src="https://images.pexels.com/photos/1143521/pexels-photo-1143521.jpeg?auto=compress&cs=tinysrgb&w=800" alt="MYRI Medical Billing why choose us for chiropractic RCM Florida" className="img-anim" style={{ width: "100%", objectFit: "cover", display: "block" }} />
          </motion.div>
        </div>
        <style>{`@media (max-width: 860px) { .two-col-2 { grid-template-columns: 1fr !important; } }
          @keyframes imgPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.08); } }
          .img-anim { animation: imgPulse 5s ease-in-out infinite; }
          .img-anim-wrap { position: relative; overflow: hidden; }
          .img-anim-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(120deg,transparent 25%,rgba(42,157,143,.16) 50%,transparent 75%); transform:translateX(-100%); transition:transform 0.7s ease; pointer-events:none; }
          .img-anim-wrap:hover::after { transform:translateX(100%); }
          .img-anim-wrap:hover .img-anim { animation-play-state: running; }
        `}</style>
      </section>

      {/* TESTIMONIAL */}
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px 56px", textAlign: "center" }}>
        <div style={{ fontSize: 17, fontStyle: "italic", color: COLORS.navy, lineHeight: 1.6, maxWidth: 760, margin: "0 auto 14px" }}>
          &quot;MYRI Medical Billing has transformed our revenue cycle, significantly improving our cash flow and
          reducing administrative burdens. Their chiropractic expertise and 24/7 support are invaluable to our
          practice.&quot;
        </div>
        <div style={{ fontSize: 13, color: COLORS.gray, fontWeight: 600 }}>— Dr. Mark Pagan, Heathrow Chiropractic, Lake Mary, FL (HQ)</div>
      </div>

      {/* CTA */}
      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", background: COLORS.tealLight, borderRadius: 20, padding: "48px 32px" }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Ready to Transform Your Chiropractic Practice&apos;s Revenue?</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px,2.4vw,26px)", color: COLORS.navy, margin: "0 0 14px" }}>Get a Free Chiropractic RCM Audit — <em>No Cost, No Obligation</em></h2>
          <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.8, marginBottom: 26 }}>
            Let MYRI Medical Billing show you exactly where your chiropractic practice&apos;s revenue cycle is
            underperforming — and how much money you could be collecting.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "13px 24px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>Request Free RCM Audit</Link>
            <a href={SITE.phoneHref} style={{ background: COLORS.navy, color: "#fff", padding: "13px 24px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <Phone size={15} /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
