export const metadata = {
  title: "Free Medicare Chiropractic Cheat Sheet | MYRI",
  description:
    "A free one-page Medicare cheat sheet for chiropractic offices: covered vs. excluded services, AT, GA, GZ, GY, and GX modifiers, ABN rules, and documentation.",
  alternates: {
    canonical: "https://myrimedicalbilling.com/medicare-cheat-sheet",
  },
  openGraph: {
    images: [{ url: "https://myrimedicalbilling.com/og-image.png", width: 1200, height: 630, alt: "MYRI Medical Billing: chiropractic billing, done right" }],
    title: "Free Medicare Chiropractic Cheat Sheet | MYRI Medical Billing",
    description:
      "One page for your front desk: covered vs. excluded services, the AT, GA, GZ, GY, and GX modifiers, ABN rules, and documentation Medicare reviewers check.",
    url: "https://myrimedicalbilling.com/medicare-cheat-sheet",
    siteName: "MYRI Medical Billing",
    type: "website",
  },
};

export default function CheatSheetLayout({ children }) {
  return children;
}
