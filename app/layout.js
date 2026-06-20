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
      <body>
        {children}
        {/* Hidden static forms so Netlify's build-time bot detects these form names.
            The visible, interactive versions live in their respective page components. */}
        <form name="index-form-1" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="index-form-1" />
          <input type="text" name="bot-field" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="practice_name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="billing_software" />
        </form>
        <form name="index-form-2" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="index-form-2" />
          <input type="text" name="bot-field" />
          <input type="text" name="practice_name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="billing_software" />
          <input type="text" name="claim_volume" />
        </form>
        <form name="claims-form-1" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="claims-form-1" />
          <input type="text" name="bot-field" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="practice_name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="billing_challenge" />
        </form>
        <form name="contact-form-1" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="contact-form-1" />
          <input type="text" name="bot-field" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="practice_name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="city_state" />
          <input type="text" name="billing_software" />
          <input type="text" name="claim_volume" />
          <input type="text" name="service_needed" />
          <textarea name="message"></textarea>
        </form>
        <form name="pricing-form-1" data-netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="hidden" name="form-name" value="pricing-form-1" />
          <input type="text" name="bot-field" />
          <input type="text" name="first_name" />
          <input type="text" name="last_name" />
          <input type="text" name="practice_name" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <input type="text" name="claim_volume" />
          <input type="text" name="services_needed" />
        </form>
      </body>
    </html>
  );
}
