"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Handshake, UserPlus, LineChart as LineChartIcon, Building2, Globe2, ShieldCheck, Wallet, CheckCircle2 } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import StatsStrip from "../../components/StatsStrip";
import { COLORS, SITE } from "../../lib/tokens";

// Illustrative only — MYRI's commission terms are not finalized. Values are
// a hypothetical growth curve to visualize the concept of "earn as your book
// of clients grows," NOT a promise of specific commission rates or income.
function PartnerEarningsChart() {
  const data = [
    { month: "Month 1", clients: 1, earnings: 400 },
    { month: "Month 2", clients: 2, earnings: 800 },
    { month: "Month 3", clients: 3, earnings: 1300 },
    { month: "Month 4", clients: 4, earnings: 1900 },
    { month: "Month 5", clients: 6, earnings: 2700 },
    { month: "Month 6", clients: 8, earnings: 3600 },
  ];
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 16, padding: "28px 24px 20px" }}>
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: COLORS.navy, marginBottom: 2 }}>Illustrative Partner Earnings</div>
        <div style={{ fontSize: 11.5, color: COLORS.gray }}>Example growth as your client book grows — not a guarantee</div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={inView ? data : data.map((d) => ({ ...d, earnings: 0 }))} margin={{ top: 10, right: 10, left: -16, bottom: 0 }}>
          <defs>
            <linearGradient id="earningsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.teal} stopOpacity={0.35} />
              <stop offset="100%" stopColor={COLORS.teal} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#EEF2F2" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 10, fill: COLORS.gray }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 3800]} tick={{ fontSize: 11, fill: COLORS.gray }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} width={46} />
          <Tooltip
            formatter={(v) => [`$${v.toLocaleString()}`, "Example Monthly Earnings"]}
            labelFormatter={(l, payload) => `${l} — ${payload?.[0]?.payload?.clients ?? ""} client(s)`}
            contentStyle={{ borderRadius: 10, border: `1px solid ${COLORS.grayLight}`, fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke={COLORS.teal}
            strokeWidth={2.5}
            fill="url(#earningsFill)"
            dot={{ r: 3.5, fill: COLORS.teal }}
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={1600}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
      <p style={{ fontSize: 10.5, color: COLORS.gray, textAlign: "center", marginTop: 12, marginBottom: 0 }}>
        Hypothetical example for illustration only. Actual commission structure is discussed and agreed individually — not a guarantee of income or client volume.
      </p>
    </div>
  );
}

const STATS = [
  { value: 50, suffix: "", label: "States We Bill In — 100% Remote" },
  { value: 100, suffix: "%", label: "Chiropractic-Only Billing Focus" },
  { value: 97, suffix: "%", label: "First-Pass Claim Approval Rate" },
  { value: 1099, suffix: "", label: "Independent Partner Model" },
];

const ROLES = [
  {
    Icon: UserPlus,
    title: "Independent Billing Contractors",
    desc: "Experienced billers who want to bring and service their own book of clients — backed by MYRI's platform, workflows, and compliance framework.",
  },
  {
    Icon: Handshake,
    title: "Referral Partners",
    desc: "Consultants, office managers, and industry contacts who know practices that need better billing — and want to be rewarded for the introduction.",
  },
  {
    Icon: LineChartIcon,
    title: "Revenue Cycle Specialists",
    desc: "Denial management, AR follow-up, and coding pros who want steady contract work without the overhead of running their own shop.",
  },
];

const WHY = [
  { Icon: Globe2, title: "Remote-First", desc: "Work from anywhere and serve chiropractic practices in all 50 states through our fully digital, HIPAA-compliant workflow." },
  { Icon: ShieldCheck, title: "Systems Already Built", desc: "Plug into established billing processes, compliance, and EHR integrations — no infrastructure to build from scratch." },
  { Icon: Wallet, title: "Rewarded for Value", desc: "A commission-based structure that pays you for the clients and results you bring to the table." },
  { Icon: Building2, title: "1099 Independence", desc: "No employment red tape. Keep your flexibility as an independent partner with real support behind you." },
];

const HOW = [
  { n: 1, t: "Reach Out", d: "Tell us your background and the kind of relationship you're exploring — contractor, referral, or something in between." },
  { n: 2, t: "Talk Through the Fit", d: "We'll discuss where your experience and client relationships fit best within the MYRI model." },
  { n: 3, t: "Formalize & Launch", d: "If it's a match, we set clear terms and get you fully set up to start." },
];

export default function PartnersPage() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Partner With Us</>}
        eyebrow="Work With MYRI"
        title="Partner With MYRI"
        accent="Grow With Us"
        desc="You bring the billing expertise. We bring the systems, compliance, and support. MYRI works with independent partners — not employees — so you keep your flexibility while plugging into infrastructure that's already built."
        img="/images/partners-hero.jpg"
        pos="center 30%"
        heroClass="partners-hero"
      />
      <style>{`
        @media (max-width: 700px) {
          .partners-hero-section { min-height: 460px !important; }
          .partners-hero {
            background-size: cover !important;
            background-position: 60% center !important;
          }
        }
      `}</style>

      {/* INTRO */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Building a Network</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: "0 0 16px" }}>
            A Home for <em>Chiropractic Billing Professionals</em>
          </h2>
          <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.82 }}>
            MYRI Medical Billing is building a network of skilled billing professionals and connectors. If you&apos;re an
            experienced medical biller, a revenue cycle specialist, or someone with chiropractic-practice relationships,
            there&apos;s likely a place for you here. We work with independent partners so you keep your independence — and
            gain a specialized platform, compliance support, and a chiropractic-only focus behind every claim.
          </p>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section style={{ padding: "64px 24px", background: "#F8FAFA" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Who We&apos;re Looking For</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: 0 }}>
              Three Ways to <em>Partner With MYRI</em>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="roles-grid">
            {ROLES.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -4 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 24 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: COLORS.tealLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <r.Icon size={22} color={COLORS.teal} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{r.title}</div>
                <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{r.desc}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .roles-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section style={{ padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Why Partner With MYRI</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: COLORS.navy, margin: 0 }}>
              The Support of a Specialist, the <em>Freedom of Independence</em>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="why-grid">
            {WHY.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }} whileHover={{ y: -4 }}
                style={{ background: "#fff", border: `1px solid ${COLORS.grayLight}`, borderRadius: 14, padding: 22 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: COLORS.tealLight, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <v.Icon size={22} color={COLORS.teal} strokeWidth={1.8} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, marginBottom: 6 }}>{v.title}</div>
                <div style={{ fontSize: 12.5, color: COLORS.gray, lineHeight: 1.6 }}>{v.desc}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 860px) { .why-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .why-grid { grid-template-columns: 1fr !important; } }`}</style>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center", marginTop: 56 }} className="earnings-split">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>Rewarded For Value</div>
              <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(20px,2.4vw,26px)", color: COLORS.navy, margin: "0 0 14px" }}>
                Your Earnings <em>Grow With Your Book</em>
              </h2>
              <p style={{ fontSize: 14, color: COLORS.gray, lineHeight: 1.75 }}>
                As an independent partner, there&apos;s no cap tied to a salary — your compensation scales with the
                clients you bring on and service. The chart is a simplified, hypothetical example to illustrate the
                idea; your actual commission structure is discussed and agreed individually on a call.
              </p>
            </motion.div>
            <div>
              <PartnerEarningsChart />
            </div>
          </div>
          <style>{`@media (max-width: 860px) { .earnings-split { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "64px 24px", background: COLORS.navy }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
            <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.mint, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>How It Works</div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,28px)", color: "#fff", margin: 0 }}>
              Getting Started Is <em style={{ color: COLORS.mint, fontStyle: "italic" }}>Simple</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="how-grid">
            {HOW.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 14, padding: 26, textAlign: "center" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.teal, color: "#fff", fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>{s.n}</div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.t}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.6 }}>{s.d}</div>
              </motion.div>
            ))}
          </div>
          <style>{`@media (max-width: 780px) { .how-grid { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ maxWidth: 760, margin: "0 auto", background: COLORS.tealLight, borderRadius: 20, padding: "48px 36px", textAlign: "center" }}>
          <div style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.teal, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>Interested in Partnering?</div>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(22px,2.6vw,30px)", color: COLORS.navy, margin: "0 0 14px" }}>
            Let&apos;s Build Something <em>Together</em>
          </h2>
          <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.75, maxWidth: 560, margin: "0 auto 26px" }}>
            Email us with a bit about your experience and the kind of relationship you&apos;re exploring — contractor,
            referral, or specialist. We read every message.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={SITE.emailHref} style={{ background: COLORS.teal, color: "#fff", padding: "13px 26px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <CheckCircle2 size={17} /> Get in Touch
            </a>
            <Link href="/contact" style={{ background: "#fff", color: COLORS.navy, border: `1px solid ${COLORS.grayLight}`, padding: "13px 26px", borderRadius: 9, fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              Contact Page
            </Link>
          </div>
        </motion.div>
      </section>

      <StatsStrip stats={STATS} />
      <Footer />
    </div>
  );
}
