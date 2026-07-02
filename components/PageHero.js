"use client";
import { motion } from "framer-motion";
import { COLORS } from "../lib/tokens";

export default function PageHero({ eyebrow, title, accent, desc, img, pos = "center center", breadcrumb }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: 380, display: "flex", alignItems: "center" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${img}')`,
          backgroundSize: "cover",
          backgroundPosition: pos,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, rgba(13,51,73,.88) 0%, rgba(13,51,73,.68) 40%, rgba(42,157,143,.4) 100%)`,
        }}
      />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "72px 24px 60px", width: "100%" }}>
        {breadcrumb && (
          <div style={{ fontSize: 12, color: "rgba(255,255,255,.6)", marginBottom: 14 }}>{breadcrumb}</div>
        )}
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
            marginBottom: 20,
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.mint, display: "inline-block" }} />
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px,4vw,44px)",
            color: "#fff",
            lineHeight: 1.18,
            margin: "0 0 14px",
            fontWeight: 700,
          }}
        >
          {title} {accent && <em style={{ color: COLORS.mint, fontStyle: "italic" }}>{accent}</em>}
        </motion.h1>
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ fontSize: 14.5, color: "rgba(255,255,255,.78)", lineHeight: 1.7, maxWidth: 640 }}
          >
            {desc}
          </motion.p>
        )}
      </div>
    </section>
  );
}
