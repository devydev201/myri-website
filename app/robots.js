const baseUrl = 'https://myrimedicalbilling.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/__forms.html',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
