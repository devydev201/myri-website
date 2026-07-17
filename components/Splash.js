"use client";

import { useState, useEffect, useRef } from "react";
import { COLORS } from "../lib/tokens";

const SPIN_MS = 1200;
const HOLD_MS = 200;
const FADE_MS = 450;

export default function Splash() {
  // Default false so server render matches first client paint (no hydration mismatch).
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    let seen = false;
    try {
      seen = window.sessionStorage.getItem("myri_splash_seen") === "1";
    } catch (e) {
      seen = false; // private mode / storage blocked -> just show it
    }

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) return;

    setShow(true);
    try {
      window.sessionStorage.setItem("myri_splash_seen", "1");
    } catch (e) {}

    const t1 = setTimeout(() => setFading(true), SPIN_MS + HOLD_MS);
    const t2 = setTimeout(() => setShow(false), SPIN_MS + HOLD_MS + FADE_MS);
    timers.current = [t1, t2];

    return () => timers.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (show) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [show]);

  if (!show) return null;

  const skip = () => {
    timers.current.forEach(clearTimeout);
    setFading(true);
    setTimeout(() => setShow(false), FADE_MS);
  };

  return (
    <>
      <style>{`
        @keyframes myriSpin {
          from { transform: rotateY(0deg)   scale(0.72); }
          to   { transform: rotateY(360deg) scale(1); }
        }
        @keyframes myriFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
      <div
        onClick={skip}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: COLORS.navy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "600px",
          opacity: fading ? 0 : 1,
          transition: `opacity ${FADE_MS}ms ease-out`,
          cursor: "pointer",
        }}
      >
        <img
          src="/images/logo.png"
          alt=""
          style={{
            width: "min(58vw, 320px)",
            height: "auto",
            transformStyle: "preserve-3d",
            animation: `myriSpin ${SPIN_MS}ms cubic-bezier(0.16, 0.84, 0.36, 1) both, myriFadeIn 300ms ease-out both`,
          }}
        />
      </div>
    </>
  );
}
