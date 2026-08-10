"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COLORS, SITE, NAV_LINKS } from "../lib/tokens";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const logoRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const applyLayout = () => {
      const mobile = window.innerWidth <= 1060;
      if (navRef.current) navRef.current.style.display = mobile ? "none" : "flex";
      if (btnRef.current) btnRef.current.style.display = mobile ? "block" : "none";
      if (logoRef.current) {
        logoRef.current.style.width = mobile ? "84px" : "126px";
        logoRef.current.style.height = mobile ? "67px" : "100px";
      }
    };
    applyLayout();
    window.addEventListener("resize", applyLayout);
    return () => window.removeEventListener("resize", applyLayout);
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
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 18px",
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", marginRight: 10, flexShrink: 0 }}>
          <img
            ref={logoRef}
            src="/images/logo.png"
            alt="MYRI Medical Billing Logo"
            width={126}
            height={100}
            style={{ width: 126, height: 100, objectFit: "contain", flexShrink: 0 }}
          />
          <div style={{ flexShrink: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 15.5, color: COLORS.navy, fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 11, color: COLORS.gray, whiteSpace: "nowrap" }}>{SITE.tagline}</div>
          </div>
        </Link>

        <nav ref={navRef} style={{ display: "none", alignItems: "center", gap: 14, flexWrap: "nowrap", whiteSpace: "nowrap" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 12.5,
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
              padding: "8px 14px",
              borderRadius: 9,
              fontSize: 12.5,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Free Audit →
          </Link>
        </nav>

        <button
          ref={btnRef}
          onClick={() => setOpen(!open)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 6, flexShrink: 0 }}
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
    </motion.header>
  );
}
