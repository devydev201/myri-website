"use client";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { COLORS } from "../lib/tokens";

export const CHEAT_SHEET_HREF = "/medicare-cheat-sheet";

// Thin bar shown above the main menu on every page.
export function PromoBar() {
  return (
    <Link
      href={CHEAT_SHEET_HREF}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        minHeight: 38,
        padding: "6px 16px",
        background: COLORS.navy,
        color: "#fff",
        fontSize: 13.5,
        fontWeight: 600,
        textDecoration: "none",
        textAlign: "center",
        flexWrap: "wrap",
      }}
    >
      <FileText size={15} aria-hidden="true" color={COLORS.mint} />
      <span>
        Free download: <span style={{ color: COLORS.mint }}>Medicare Chiropractic Cheat Sheet</span>
      </span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, textDecoration: "underline" }}>
        Get it free <ArrowRight size={14} aria-hidden="true" />
      </span>
    </Link>
  );
}

// Full-width band for the homepage and blog page.
export function PromoBand({ compact = false }) {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 20,
        background: COLORS.tealLight,
        border: `1px solid ${COLORS.grayLight}`,
        borderRadius: 16,
        padding: compact ? "20px 24px" : "28px 32px",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FileText size={30} color={COLORS.tealDark} />
      </div>
      <div style={{ flex: "1 1 320px", minWidth: 0 }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: COLORS.tealDark, marginBottom: 4 }}>
          Free download
        </div>
        <h2 style={{ fontFamily: "Georgia, serif", fontSize: compact ? 21 : 24, color: COLORS.navy, margin: "0 0 6px", lineHeight: 1.3 }}>
          Medicare Chiropractic Cheat Sheet
        </h2>
        <p style={{ fontSize: 15.5, color: "#2a3b41", lineHeight: 1.6, margin: 0 }}>
          One page for your front desk: covered vs. excluded services, the AT, GA, GZ, GY, and GX modifiers, ABN rules, and the documentation reviewers check.
        </p>
      </div>
      <Link
        href={CHEAT_SHEET_HREF}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          minHeight: 48,
          padding: "0 24px",
          borderRadius: 24,
          background: COLORS.teal,
          color: "#fff",
          fontWeight: 700,
          fontSize: 15.5,
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        Get the free cheat sheet <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
