"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { COLORS, SITE, NAV_LINKS } from "../lib/tokens";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.92)" : "#fff",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: `1px solid ${COLORS.grayLight}`,
        boxShadow: scrolled ? "0 4px 24px rgba(13,51,73,.08)" : "none",
        transition: "all .3s ease",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          overflowX: "auto",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginRight: 32, flexShrink: 0 }}>
          <img
            src="/images/logo.png"
            alt="MYRI Medical Billing Logo"
            width={126}
            height={100}
            style={{ width: 126, height: 100, objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ whiteSpace: "nowrap" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: COLORS.navy, fontFamily: "Georgia, serif" }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 11.5, color: COLORS.gray }}>{SITE.tagline}</div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "nowrap", whiteSpace: "nowrap" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 13.5,
                color: pathname === l.href ? COLORS.teal : COLORS.navy,
                textDecoration: "none",
                fontWeight: pathname === l.href ? 700 : 500,
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: COLORS.teal,
              color: "#fff",
              padding: "9px 18px",
              borderRadius: 9,
              fontSize: 13.5,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Free Audit →
          </Link>
        </nav>

      </div>

    </motion.header>
  );
}
