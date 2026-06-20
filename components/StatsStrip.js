"use client";
import { motion } from "framer-motion";
import { COLORS } from "../lib/tokens";

export default function StatsStrip({ stats }) {
  return (
    <div style={{ background: COLORS.navy, padding: "32px 24px" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: 16,
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontFamily: "Georgia, serif", fontSize: "clamp(24px,3vw,32px)", color: "#fff", fontWeight: 700 }}>
              {s.value}
              <sup style={{ fontSize: "0.5em" }}>{s.suffix}</sup>
            </div>
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,.6)", marginTop: 4 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
      <style>{`@media (max-width: 700px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </div>
  );
}
