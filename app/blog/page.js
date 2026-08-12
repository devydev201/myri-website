"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { COLORS } from "../../lib/tokens";
import { BLOG_POSTS } from "../../lib/blogPosts";

function formatDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <div>
      <Nav />
      <PageHero
        breadcrumb={<>Home › Blog</>}
        eyebrow="MYRI Insights"
        title="Chiropractic Billing,"
        accent="Explained"
        desc="Practical, straight-talking guidance on chiropractic billing, coding, denials, and revenue — from a team that does this every day."
        img="/images/about-hero.jpg"
      />

      <section style={{ padding: "64px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    background: "#fff",
                    border: `1px solid ${COLORS.grayLight}`,
                    borderRadius: 16,
                    padding: 28,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "box-shadow .2s, transform .2s",
                  }}
                  className="blog-card"
                >
                  <div style={{ fontSize: 12, color: COLORS.teal, fontWeight: 700, marginBottom: 12, letterSpacing: ".04em" }}>
                    {formatDate(post.date)} · {post.readTime}
                  </div>
                  <h2 style={{ fontFamily: "Georgia, serif", fontSize: 22, color: COLORS.navy, lineHeight: 1.35, margin: "0 0 12px" }}>
                    {post.title}
                  </h2>
                  <p style={{ fontSize: 14.5, color: COLORS.gray, lineHeight: 1.7, flex: 1, margin: 0 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6, color: COLORS.teal, fontWeight: 700, fontSize: 14 }}>
                    Read more <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .blog-card:hover { box-shadow: 0 12px 30px rgba(13,51,73,.1); transform: translateY(-3px); }
      `}</style>

      <Footer />
    </div>
  );
}
