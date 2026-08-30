"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import { COLORS } from "../../../lib/tokens";

function formatDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Block({ block }) {
  if (block.type === "h2") {
    return (
      <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, color: COLORS.navy, margin: "40px 0 14px", lineHeight: 1.3 }}>
        {block.text}
      </h2>
    );
  }
  if (block.type === "p") {
    return (
      <p style={{ fontSize: 17, color: "#2a3b41", lineHeight: 1.8, margin: "0 0 20px" }}>{block.text}</p>
    );
  }
  if (block.type === "plink") {
    return (
      <p style={{ fontSize: 17, color: "#2a3b41", lineHeight: 1.8, margin: "0 0 20px" }}>
        {block.text}{" "}
        <Link href={block.href} style={{ color: COLORS.teal, fontWeight: 600, textDecoration: "underline" }}>
          {block.linkText}
        </Link>
        {block.after || ""}
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul style={{ margin: "0 0 22px", paddingLeft: 22 }}>
        {block.items.map((it, i) => (
          <li key={i} style={{ fontSize: 17, color: "#2a3b41", lineHeight: 1.75, marginBottom: 10 }}>{it}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "quote") {
    return (
      <blockquote
        style={{
          borderLeft: `4px solid ${COLORS.teal}`,
          background: COLORS.tealLight,
          padding: "20px 24px",
          margin: "28px 0",
          borderRadius: "0 12px 12px 0",
          fontSize: 18,
          fontStyle: "italic",
          color: COLORS.navy,
          lineHeight: 1.6,
        }}
      >
        {block.text}
      </blockquote>
    );
  }
  return null;
}

export default function PostView({ post }) {
  return (
    <div>
      <Nav />

      {/* Article header */}
      <div style={{ background: COLORS.navy, padding: "56px 24px 48px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <Link href="/blog" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, color: COLORS.mint, fontSize: 14, fontWeight: 600, marginBottom: 22 }}>
            <ArrowLeft size={16} /> All Articles
          </Link>
          <div style={{ fontSize: 13, color: COLORS.mint, fontWeight: 700, marginBottom: 14, letterSpacing: ".04em" }}>
            {formatDate(post.date)} · {post.readTime}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#fff", lineHeight: 1.25, margin: 0 }}>
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 24px" }}
      >
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}

        {/* CTA */}
        <div
          style={{
            marginTop: 48,
            background: COLORS.tealLight,
            border: `1px solid ${COLORS.grayLight}`,
            borderRadius: 16,
            padding: "32px 28px",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: COLORS.navy, margin: "0 0 10px" }}>
            Want to know where your billing stands?
          </h3>
          <p style={{ fontSize: 15.5, color: COLORS.gray, lineHeight: 1.7, margin: "0 0 22px" }}>
            Get a free 30-day billing review — no cost, no obligation. If your billing is already running well, we&apos;ll tell you that too.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: COLORS.teal,
              color: "#fff",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 28px",
              borderRadius: 12,
              textDecoration: "none",
            }}
          >
            Get Your Free Billing Review <ArrowRight size={18} />
          </Link>
        </div>
      </motion.article>

      <Footer />
    </div>
  );
}
