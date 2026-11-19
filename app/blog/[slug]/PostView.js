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

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function PostView({ post, author, related = [] }) {
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
            Published <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readTime}
          </div>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#fff", lineHeight: 1.25, margin: 0 }}>
            {post.title}
          </h1>
          {author && (
            <div style={{ marginTop: 18, fontSize: 14.5, color: "#dbe7ea", lineHeight: 1.6 }}>
              By <Link href={author.url.replace("https://myrimedicalbilling.com", "")} style={{ color: "#fff", fontWeight: 700, textDecoration: "none" }}>{author.name}</Link>, {author.role}
              {post.updated && (
                <>
                  <br />
                  Last updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}
            </div>
          )}
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

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 26, color: COLORS.navy, margin: "0 0 18px", lineHeight: 1.3 }}>
              Frequently asked questions
            </h2>
            {post.faqs.map((f, i) => (
              <div key={i} style={{ borderTop: `1px solid ${COLORS.grayLight}`, padding: "18px 0" }}>
                <h3 style={{ fontSize: 18, color: COLORS.navy, margin: "0 0 8px", lineHeight: 1.4 }}>{f.q}</h3>
                <p style={{ fontSize: 16.5, color: "#2a3b41", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </section>
        )}

        {/* About the author */}
        {author && (
          <aside
            aria-label="About the author"
            style={{
              marginTop: 40,
              display: "flex",
              gap: 18,
              alignItems: "flex-start",
              borderTop: `1px solid ${COLORS.grayLight}`,
              paddingTop: 28,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                flexShrink: 0,
                width: 56,
                height: 56,
                borderRadius: 28,
                background: COLORS.navy,
                color: "#fff",
                fontWeight: 700,
                fontSize: 18,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {initials(author.name)}
            </div>
            <div>
              <div style={{ fontSize: 13, color: COLORS.gray, fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>
                About the author
              </div>
              <div style={{ fontSize: 17, color: COLORS.navy, fontWeight: 700, marginBottom: 6 }}>
                {author.name}, {author.role}
              </div>
              <p style={{ fontSize: 15.5, color: "#2a3b41", lineHeight: 1.7, margin: 0 }}>{author.bio}</p>
            </div>
          </aside>
        )}

        {/* Keep reading */}
        {related.length > 0 && (
          <nav aria-label="Related guides" style={{ marginTop: 40 }}>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: 24, color: COLORS.navy, margin: "0 0 16px", lineHeight: 1.3 }}>
              Keep reading
            </h2>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {related.map((r) => (
                <li key={r.slug} style={{ borderTop: `1px solid ${COLORS.grayLight}`, padding: "14px 0" }}>
                  <Link href={`/blog/${r.slug}`} style={{ fontSize: 17, fontWeight: 700, color: COLORS.teal, textDecoration: "none" }}>
                    {r.title}
                  </Link>
                  <p style={{ fontSize: 15, color: COLORS.gray, lineHeight: 1.6, margin: "4px 0 0" }}>{r.excerpt}</p>
                </li>
              ))}
            </ul>
          </nav>
        )}

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
