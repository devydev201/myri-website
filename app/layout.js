import "./globals.css";

export const metadata = {
  title: "Remote Chiropractic Billing Services | MYRI Medical Billing",
  description:
    "Chiropractic-only billing company in Lake Mary, FL, serving practices remotely. Claims, denials, Medicare compliance, and A/R, inside the EHR you already use.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "MYRI Medical Billing",
  alternateName: "MYRI Medical Billing LLC",
  url: "https://myrimedicalbilling.com",
  logo: "https://myrimedicalbilling.com/images/logo.png",
  image: "https://myrimedicalbilling.com/images/logo.png",
  description:
    "Remote chiropractic medical billing specialists serving practices in all 50 states — claim submission, denial management, personal injury and PIP billing, Medicare compliance, and revenue cycle management. 100% remote, no office visit required.",
  telephone: "+1-321-414-1896",
  email: "info@myrimedicalbilling.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-321-414-1896",
    email: "info@myrimedicalbilling.com",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Lake Mary",
    addressRegion: "FL",
    postalCode: "32746",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  founder: {
    "@type": "Person",
    name: "Myriangeliz Fraguada",
  },
  priceRange: "$$",
  medicalSpecialty: "Chiropractic",
  knowsAbout: [
    "Chiropractic medical billing",
    "CPT codes 98940-98942",
    "Medicare AT modifier",
    "Personal injury and PIP billing",
    "Chiropractic denial management",
    "Revenue cycle management",
  ],
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
