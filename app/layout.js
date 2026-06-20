import "./globals.css";

export const metadata = {
  title: "MYRI Medical Billing | Remote Chiropractic Billing | All 50 States",
  description:
    "MYRI Medical Billing — dedicated remote chiropractic billing specialists headquartered in Lake Mary, FL, serving practices nationwide. 97% first-pass claim approval rate, HIPAA-compliant, 100% remote.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
