export const metadata = {
  title: "Chiropractic Revenue Cycle Management (RCM) | MYRI",
  description:
    "End-to-end chiropractic RCM: eligibility checks, coding, claim submission, denial appeals, payment posting, and A/R follow-up. Remote, all 50 states.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/rcm",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Chiropractic Revenue Cycle Management | MYRI Medical Billing",
    description:
      "Full-cycle RCM for chiropractic practices — from verification and coding to denial appeals and AR follow-up. Remote, all 50 states.",
    url: "https://myrimedicalbilling.com/rcm",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function RcmLayout({ children }) {
  return children;
}
