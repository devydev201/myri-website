"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, SITE, NAV_LINKS } from "../lib/tokens";

export default function Nav() {
  const [open, setOpen] = useState(false);
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
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img
            src="/images/logo.png"
            alt="MYRI Medical Billing Logo"
            width={48}
            height={48}
            style={{ width: 48, height: 48, objectFit: "contain", flexShrink: 0 }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: COLORS.navy, fontFamily: "Georgia, serif" }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 10.5, color: COLORS.gray }}>{SITE.tagline}</div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 26 }} className="desktop-nav">
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

        <button
          onClick={() => setOpen(!open)}
          className="hamburger-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6 }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 22,
              height: 2,
              background: COLORS.navy,
              marginBottom: 5,
              borderRadius: 2,
              transition: ".2s",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: COLORS.navy,
              marginBottom: 5,
              borderRadius: 2,
              opacity: open ? 0 : 1,
              transition: ".2s",
            }}
          />
          <div
            style={{
              width: 22,
              height: 2,
              background: COLORS.navy,
              borderRadius: 2,
              transition: ".2s",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: "hidden", background: "#fff", borderTop: `1px solid ${COLORS.grayLight}` }}
          >
            <div style={{ padding: "8px 20px 16px", display: "flex", flexDirection: "column", gap: 2 }}>
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    padding: "12px 8px",
                    fontSize: 14.5,
                    color: pathname === l.href ? COLORS.teal : COLORS.navy,
                    textDecoration: "none",
                    borderBottom: "1px solid #f5f5f5",
                    fontWeight: pathname === l.href ? 700 : 500,
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  marginTop: 10,
                  background: COLORS.teal,
                  color: "#fff",
                  padding: "12px",
                  borderRadius: 8,
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Free Audit →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; flex-direction: column; align-items: flex-end; }
        }
      `}</style>
    </motion.header>
  );
}
