"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { CheckCircle2 } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import StatsStrip from "../../components/StatsStrip";
import AnimateOnView from "../../components/AnimateOnView";
import { COLORS } from "../../lib/tokens";

const STATS = [
  { value: 97, suffix: "%", label: "First-Pass Claim Approval Rate" },
  { value: 9, suffix: "", label: "Core Billing Services Offered" },
  { value: 72, suffix: "hr", label: "Denial Appeal Response Time" },
  { value: 100, suffix: "%", label: "Dedicated Client Support" },
];

const SERVICES = [
  {
    tag: "Claims & Coding",
    title: "Chiropractic Medical Claims Processing & Billing (CPT 98940–98942)",
    desc: "We handle end-to-end chiropractic claim management — from data entry and charge capture to electronic submission. Each claim is thoroughly reviewed for accuracy, compliance, and correct CPT coding before submission to ensure the highest rate of first-pass approvals.",
    list: [
      "Accurate CPT coding: 98940, 98941, 98942, 97110, 97530, 99213 and modifiers",
      "Pre-submission claim audit to prevent errors and rejections",
      "Electronic claim submission to all major payers nationwide within 24–48 hours",
      "ICD-10-CM chiropractic diagnosis coding with full documentation support",
    ],
    img: "https://images.pexels.com/photos/9363536/pexels-photo-9363536.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Insurance",
    title: "Chiropractic Insurance Verification & Eligibility",
    desc: "Our team verifies patient chiropractic insurance coverage, benefits, visit limits, co-pays, and deductibles — and obtains pre-authorizations before services are rendered. This proactive step eliminates surprise denials.",
    list: [
      "Verify chiropractic visit limits and annual maximum benefits",
      "Confirm co-pays, deductibles, and out-of-pocket status",
      "Obtain and track pre-authorizations and referrals",
      "PIP and personal injury coverage verification for auto accident patients",
    ],
    img: "https://images.pexels.com/photos/6248984/pexels-photo-6248984.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Payments",
    title: "Payment Posting & Reconciliation",
    desc: "All payments from insurance payers and patients are accurately posted and reconciled to maintain precise financial records for your chiropractic practice. We identify discrepancies, underpayments, and contractual adjustments quickly.",
    list: [
      "Electronic remittance advice (ERA) processing and posting",
      "Manual EOB posting for paper payments",
      "Underpayment identification and recovery",
      "Patient payment posting and balance reconciliation",
    ],
    img: "https://images.pexels.com/photos/8085931/pexels-photo-8085931.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Denials",
    title: "Chiropractic Denial Management & Appeals",
    desc: "We perform in-depth analysis of every denied or underpaid chiropractic claim, identify root causes, and resubmit formal appeals promptly — with appeals submitted within 72 hours.",
    list: [
      "Denial root-cause analysis by payer, code, and provider",
      "Formal written appeals submitted within 72 hours",
      "Medical necessity appeal letters with clinical documentation support",
      "Payer escalation and peer-to-peer review coordination",
    ],
    img: "https://images.pexels.com/photos/7821674/pexels-photo-7821674.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Patient Billing",
    title: "Patient Billing & Statements",
    desc: "We provide clear, compliant patient billing services for your chiropractic practice, including statement generation, patient balance management, and follow-up communications.",
    list: [
      "Professional patient billing statements with HIPAA-compliant formatting",
      "Patient balance follow-up calls and written notices",
      "Payment plan coordination and tracking",
      "Patient responsibility calculation after insurance adjudication",
    ],
    img: "https://images.pexels.com/photos/4269274/pexels-photo-4269274.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Analytics",
    title: "Revenue Cycle Reporting & Analytics",
    desc: "Comprehensive reports and analytics give your chiropractic practice full visibility into financial performance — claim trends, denial patterns, payment rates by payer, and collection benchmarks.",
    list: [
      "Monthly performance reports with collection rate benchmarking",
      "Denial rate tracking by payer, CPT code, and provider",
      "AR aging analysis with recovery prioritization",
      "Real-time financial visibility through detailed performance reporting",
    ],
    img: "https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Credentialing",
    title: "Chiropractic Provider Credentialing & Enrollment",
    desc: "Our credentialing specialists manage the entire enrollment process with all major insurance payers — ensuring your chiropractic providers are credentialed accurately, completely, and on time.",
    list: [
      "Credentialing with Medicare, Medicaid, BlueCross, Aetna, Cigna, United, and all Florida commercial payers",
      "Initial enrollment and re-credentialing management",
      "Group and individual NPI enrollment",
      "Credentialing status monitoring and follow-up",
    ],
    img: "https://images.pexels.com/photos/7567533/pexels-photo-7567533.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Compliance",
    title: "HIPAA Compliance & Data Security",
    desc: "All MYRI Medical Billing operations are fully HIPAA-compliant, ensuring that every aspect of data handling, storage, and transmission meets strict confidentiality and security standards.",
    list: [
      "100% HIPAA-compliant billing operations and data transmission",
      "Secure, encrypted patient data handling and storage",
      "BAA (Business Associate Agreement) executed with all client practices",
      "Advanced billing software with multi-factor authentication",
    ],
    img: "https://images.pexels.com/photos/7578815/pexels-photo-7578815.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    tag: "Client Care",
    title: "Dedicated Client Support & Account Management",
    desc: "Our commitment to your chiropractic practice goes beyond billing. Whether you need account updates, report access, assistance with a claim, or answers to billing questions — our dedicated team is responsive and easy to reach.",
    list: [
      "Dedicated chiropractic billing specialist assigned to your practice",
      "Responsive support via phone, email, and client portal",
      "Real-time claim status updates through your client dashboard",
      "Regular billing performance review calls with your team",
    ],
    img: "https://images.pexels.com/photos/8866726/pexels-photo-8866726.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// Real service category mix — 9 core services grouped by function
function ServiceMixChart() {
  const data = [
    { name: "Claims & Coding", value: 1 },
    { name: "Insurance & Eligibility", value: 1 },
    { name: "Payments & Reconciliation", value: 1 },
    { name: "Denials & Appeals", value: 1 },
    { name: "Patient Billing", value: 1 },
    { name: "Analytics & Reporting", value: 1 },
    { name: "Credentialing", value: 1 },
    { name: "Compliance & Security", value: 1 },
    { name: "Client Support", value: 1 },
  ];
  const pieColors = [COLORS.teal, COLORS.navy, "#3FB3A3", "#7FD8C9", "#9FE6D4", "#C8E8E4", "#1E7068", "#5BC4B5", "#A8E0D2"];

  return (
    <div style={{ width: "100%", height: 320 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={56} outerRadius={92} paddingAngle={2}>
            {data.map((entry, i) => <Cell key={entry.name} fill={pieColors[i % pieColors.length]} />)}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }} />
          <Legend wrapperStyle={{ fontSize: 10.5 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Our Services</>}
        eyebrow="Comprehensive Chiropractic Billing"
        title="Full-Service Chiropractic Billing That"
        accent="Maximizes Every Dollar"
        desc="At MYRI Medical Billing, we offer a full spectrum of chiropractic revenue cycle management solutions — designed to improve cash flow, reduce claim denials, and ensure accurate, timely reimbursements for your chiropractic practice."
        img="/images/services-hero.jpg"
        pos="center center"
      />
      <StatsStrip stats={STATS} />

      {/* REMOTE HIGHLIGHT */}
      <section style={{ padding: "56px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: COLORS.tealLight, borderRadius: 18, padding: "32px 36px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }} className="remote-grid">
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: COLORS.teal, marginBottom: 8 }}>How MYRI Delivers Every Service</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: COLORS.navy, marginBottom: 10, lineHeight: 1.25 }}>100% Remote — No Office Visit, No Paperwork, No Limits</h3>
              <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.78 }}>
                Every service on this page is delivered <strong style={{ color: COLORS.navy }}>100% remotely</strong> to
                your chiropractic practice — no matter which state you&apos;re in. We integrate securely with your EHR,
                work inside your existing systems, and handle all billing digitally via our HIPAA-compliant remote
                workflow.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 200 }}>
              {["Serving all 50 states", "Secure EHR integration", "Remote onboarding in 5 days", "No office visit required"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#3a4a48", background: "#fff", padding: "10px 14px", borderRadius: 10, border: "0.5px solid #eee" }}>
                  <CheckCircle2 size={15} color={COLORS.teal} style={{ flexShrink: 0 }} /> {t}
                </div>
              ))}
              <Link href="/contact" style={{ textAlign: "center", background: COLORS.teal, color: "#fff", padding: "10px 18px", borderRadius: 9, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>
                Get Started Remotely →
              </Link>
            </div>
          </motion.div>
        </div>
        <style>{`@media (max-width: 760px) { .remote-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* SERVICE BLOCKS */}
      <section style={{ padding: "48px 24px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "minmax(0,380px) 1fr" : "1fr minmax(0,380px)",
                gap: 36,
                alignItems: "center",
                padding: "40px 0",
                borderBottom: i < SERVICES.length - 1 ? `1px solid ${COLORS.grayLight}` : "none",
              }}
              className="service-block"
            >
              <div style={{ order: i % 2 === 0 ? 1 : 2, borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 24px rgba(13,51,73,.1)" }}>
                <img src={s.img} alt={s.title} style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: "inline-block", background: COLORS.tealLight, color: COLORS.tealDark, fontSize: 10.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", padding: "3px 12px", borderRadius: 20, marginBottom: 12 }}>
                  {s.tag}
                </div>
                <div style={{ fontFamily: "Georgia, serif", fontSize: 20, color: COLORS.navy, marginBottom: 12, lineHeight: 1.3 }}>{s.title}</div>
                <p style={{ fontSize: 13.5, color: COLORS.gray, lineHeight: 1.78, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
                  {s.list.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 12.5, color: "#3a4a48" }}>
                      <span style={{ width: 6, height: 6, background: COLORS.teal, borderRadius: "50%", flexShrink: 0, marginTop: 6 }} />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/contact" style={{ background: COLORS.teal, color: "#fff", padding: "11px 20px", borderRadius: 9, fontWeight: 600, fontSize: 13, textDecoration: "none", display: "inline-block" }}>
                  Contact Us
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <style>{`@media (max-width: 860px) { .service-block { grid-template-columns: 1fr !important; } .service-block > div { order: unset !important; } }`}</style>
      </section>

      {/* SERVICE MIX CHART */}
      <section style={{ padding: "24px 24px 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ background: COLORS.navy, borderRadius: 18, padding: "36px 32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }} className="mix-grid">
            <div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.mint, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: 10 }}>9 Core Services</div>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: "#fff", margin: "0 0 12px" }}>A Full-Service Billing Department, Without the Overhead</h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.7 }}>
                Each of the 9 core services on this page is included in our full-service plans — claims and coding,
                insurance verification, payment posting, denial appeals, patient billing, analytics, credentialing,
                compliance, and dedicated client support.
              </p>
            </div>
            <div style={{ background: "#fff", borderRadius: 14, padding: "16px 12px" }}>
              <AnimateOnView height={320}><ServiceMixChart /></AnimateOnView>
            </div>
          </motion.div>
          <style>{`@media (max-width: 860px) { .mix-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      <Footer />
    </div>
  );
}
