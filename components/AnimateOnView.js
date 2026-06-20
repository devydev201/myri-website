"use client";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Delays rendering of its children (typically a Recharts chart) until the
 * wrapper scrolls into view, so the chart's built-in mount animation
 * (bars growing, lines drawing, pies sweeping in) plays at the right moment
 * instead of firing instantly off-screen on page load.
 */
export default function AnimateOnView({ children, height }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isInView) setShouldRender(true);
  }, [isInView]);

  return (
    <div ref={ref} style={height ? { minHeight: height } : undefined}>
      {shouldRender ? children : null}
    </div>
  );
}
