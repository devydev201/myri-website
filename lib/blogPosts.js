// Blog posts data. To add a new post, add a new object to this array.
// `body` is an array of blocks; each block is { type, text } or { type, items }.
// Supported types: "p" (paragraph), "h2" (section heading), "ul" (bullet list), "quote".

export const BLOG_POSTS = [
  {
    slug: "should-you-outsource-chiropractic-billing",
    title: "Should You Outsource Your Chiropractic Billing? An Honest Guide",
    excerpt:
      "In-house or outsourced? A straight look at the real costs, trade-offs, and warning signs — so you can decide what actually fits your practice.",
    date: "2026-08-12",
    readTime: "7 min read",
    metaTitle:
      "Should You Outsource Your Chiropractic Billing? An Honest Guide | MYRI",
    metaDescription:
      "A candid guide to outsourcing chiropractic billing: real costs of in-house vs. outsourced, the warning signs your billing is leaking revenue, and how to decide what fits your practice.",
    body: [
      {
        type: "p",
        text: "If you run a chiropractic practice, billing is probably not why you got into this work — but it is the difference between getting paid for the care you provide and quietly leaving money on the table. At some point almost every practice owner asks the same question: should I keep billing in-house, or hand it to someone else? This is an honest look at that decision, including the parts most billing companies won't tell you.",
      },
      {
        type: "h2",
        text: "The real cost of in-house billing",
      },
      {
        type: "p",
        text: "In-house billing feels cheaper because the cost is hidden. When a staff member or your spouse handles claims part-time, there's no separate invoice — so it's easy to assume it's free. It isn't. The true cost of in-house billing includes salary or hours, benefits, billing software subscriptions, ongoing training on payer rule changes, and — the biggest hidden cost — the revenue lost to errors, denials that never get appealed, and claims that quietly age out.",
      },
      {
        type: "p",
        text: "For a solo or small practice, the person doing billing is often also answering phones, checking patients in, and handling a dozen other things. Billing becomes the task that gets done last, or not at all when the day gets busy. That's where revenue leaks: a denied claim that sits for three weeks, an underpayment nobody catches, a code that could have been billed but wasn't.",
      },
      {
        type: "h2",
        text: "The real cost of outsourced billing",
      },
      {
        type: "p",
        text: "Outsourced billing has a visible cost — usually a percentage of what's collected, a per-claim fee, or a flat monthly rate. Because it's a line item you can see, it can feel more expensive than in-house even when it isn't. The honest comparison isn't \"free in-house vs. paid outsourced.\" It's \"what you actually collect in-house vs. what you'd collect outsourced, minus the fee.\"",
      },
      {
        type: "p",
        text: "A good billing company earns its fee by collecting more than you would on your own: cleaner claims that get approved on the first pass, denials that actually get appealed, and consistent follow-up on aging claims. If outsourcing raises your collections by more than it costs, it pays for itself. If it doesn't, it's the wrong provider — not the wrong idea.",
      },
      {
        type: "h2",
        text: "Warning signs your billing is leaking revenue",
      },
      {
        type: "p",
        text: "Whether you keep billing in-house or outsource it, these are signs that money is slipping away right now:",
      },
      {
        type: "ul",
        items: [
          "Denials pile up without being appealed within a week or two.",
          "You don't know your practice's denial rate or first-pass approval rate off the top of your head.",
          "Claims regularly age past 90 days before anyone follows up.",
          "Billing gets set aside whenever the front desk gets busy.",
          "You're unsure whether you're coding 98940–98942 correctly, or leaving billable services unbilled.",
          "Personal injury (PIP) and Medicare claims feel like a guessing game.",
        ],
      },
      {
        type: "p",
        text: "If more than one or two of these sound familiar, revenue is leaking — and that's true no matter who is doing the billing.",
      },
      {
        type: "h2",
        text: "Why chiropractic billing is its own specialty",
      },
      {
        type: "p",
        text: "A general medical billing company can process claims, but chiropractic billing has its own rules that generalists routinely get wrong. Medicare only covers spinal manipulation with the correct modifier, and treats other services as statutorily non-covered — which requires specific documentation to bill compliantly. Personal injury and PIP billing varies state by state and involves liens, MedPay, and at-fault liability that most medical billers never touch. And chiropractic-specific coding (98940–98942) has nuances that directly affect whether you get paid.",
      },
      {
        type: "p",
        text: "This is why \"who does your billing\" matters as much as \"in-house or outsourced.\" A generalist biller — in-house or outsourced — who doesn't know chiropractic will leave money uncollected and expose you to audit risk. Specialization isn't a marketing line here; it's the difference between clean claims and chronic denials.",
      },
      {
        type: "h2",
        text: "So — should you outsource?",
      },
      {
        type: "p",
        text: "Here's the honest answer: it depends on two things. First, whether your current billing is actually capturing the revenue you've earned — if it is, and you have the capacity to keep it that way, there may be no reason to change. Second, whether the alternative genuinely knows chiropractic. Outsourcing to another generalist won't fix a specialization problem.",
      },
      {
        type: "p",
        text: "Outsourcing tends to make the most sense when: billing keeps getting deprioritized behind patient care, your denial rate is climbing or unknown, you're spending time on billing that would be better spent on patients, or you're a new practice that wants billing set up correctly from day one instead of untangling problems later.",
      },
      {
        type: "quote",
        text: "The goal isn't to outsource for its own sake. It's to make sure the care you provide actually turns into revenue — reliably, compliantly, and without you having to become a billing expert on top of being a chiropractor.",
      },
      {
        type: "h2",
        text: "A no-pressure way to find out",
      },
      {
        type: "p",
        text: "If you're not sure where your practice stands, the simplest step is to have someone look at what's actually happening with your claims — what's being denied, what's being underpaid, and where revenue is slipping. MYRI Medical Billing offers a free 30-day billing review for exactly this. We work only in chiropractic, entirely remotely, across all 50 states — and if your billing is already running well, the review will tell you that too. No cost, no obligation.",
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
