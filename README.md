# MYRI Medical Billing — Next.js Site

Real, deployable Next.js 14 project (App Router) with Framer Motion animations and
unique Recharts data visualizations on every page. Built from your actual site content.

## What's inside

- `app/page.js` — Homepage (LineChart + BarChart)
- `app/about/page.js` — About Us (AreaChart)
- `app/services/page.js` — Our Services, all 9 real services (PieChart)
- `app/pricing/page.js` — Pricing, all 3 real plans (RadarChart)
- `app/rcm/page.js` — Revenue Cycle Management, real 7-step process (ComposedChart)
- `app/claims/page.js` — Claim Follow-Up (Treemap)
- `app/contact/page.js` — Contact, real FAQ + hours + service areas (RadialBarChart gauge)
- `components/` — Shared Nav, Footer, PageHero, StatsStrip
- `public/images/` — Your real photos (logo, hero images)

All copy, statistics, pricing, FAQ, and testimonials are pulled directly from your
original `about.html`, `services.html`, `pricing.html`, `rcm.html`, `claims.html`, and
`contact.html` — not invented content.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Verified production build

This project has already been built successfully with `npm run build` — all 7 pages
compile and generate as static pages. You can re-verify locally:

```bash
npm run build
npm start
```

## Deploying to Netlify

1. Push this project to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project** → connect the repo.
3. Netlify will auto-detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `@netlify/plugin-nextjs` plugin (declared in `netlify.toml`) handles the rest.
4. Deploy. No additional environment variables are required.

If you already have `myrimedicalbilling.com` pointed at an existing Netlify site, you
can either:
- Replace the existing site's repo connection with this new one, or
- Deploy this as a new Netlify site and repoint your domain once you're happy with it.

## Staging and releases

Changes are batched so the live site updates once per release, not once per edit.

- **`staging`**: every change goes here first, through a pull request into `staging`.
  Nothing on `staging` is live.
- **`main`**: what's live on myrimedicalbilling.com. It only changes through a release.
- **Release**: open one pull request from `staging` into `main` titled
  "Release YYYY-MM-DD", listing everything in it. Merge it, deploy `main` to Netlify,
  then confirm the new deploy is live.
- To see what's waiting to go live, compare `main...staging` on GitHub.
- Never commit straight to `main`. If a hotfix has to go out alone, merge it into
  `staging` too so the branches don't drift apart.

## Forms

The contact/quote forms currently submit via local React state for the in-browser
"Request Received" confirmation. To wire them to Netlify Forms (as your original
static site did) or to your Zapier email automation, the `<form>` elements will need
`name`, `data-netlify="true"`, and a hidden `form-name` input added, the same pattern
used on your original HTML pages.
