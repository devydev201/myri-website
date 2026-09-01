// Blog posts data. To add a new post, add a new object to this array.
// `body` is an array of blocks; each block is { type, text } or { type, items }.
// Supported types: "p" (paragraph), "h2" (section heading), "ul" (bullet list), "quote".

export const BLOG_POSTS = [
  {
    slug: "72-hour-denial-appeals",
    title: "We Don't Write Off Denials: Inside Our 72-Hour Appeal Process",
    excerpt:
      "Most billing companies quietly write off denied claims. We treat every denial as recoverable revenue — investigated, corrected, and appealed within 72 hours. Here's how that process works.",
    date: "2026-08-21",
    readTime: "6 min read",
    metaTitle:
      "Our 72-Hour Chiropractic Denial Appeal Process | MYRI Medical Billing",
    metaDescription:
      "How MYRI handles chiropractic claim denials: every rejection investigated, corrected, and formally appealed within 72 hours — driving an average 30% reduction in denial rates.",
    body: [
      {
        type: "p",
        text: "Here's something most practices never find out about their billing: a large share of denied claims are simply written off. Not because they couldn't be won — because chasing them takes time, and whoever handles billing is already stretched thin. The denial gets marked as a loss, the revenue quietly disappears, and nobody ever knows how much money walked out the door. At MYRI, we do the opposite. Every denial is treated as recoverable revenue until proven otherwise — and the clock starts the moment a claim is rejected.",
      },
      {
        type: "h2",
        text: "Why denials get written off (and why that's expensive)",
      },
      {
        type: "p",
        text: "A denied claim isn't a dead claim. It's revenue you already earned, sitting in a payer's system, waiting for someone to act. But acting takes work: figuring out why it was denied, correcting the issue, gathering documentation, and filing a formal appeal within the payer's deadline. In a busy practice where one person handles billing between a dozen other tasks, that work rarely happens fast enough — and denials pile up until they age out. Across a year of claims, quietly written-off denials often add up to tens of thousands of dollars in lost, recoverable revenue.",
      },
      {
        type: "quote",
        text: "Most billing companies write off denials. We don't. Every rejection is investigated, corrected, and formally appealed — because a denial is the start of a process, not the end of a claim.",
      },
      {
        type: "h2",
        text: "The 72-hour rule",
      },
      {
        type: "p",
        text: "Speed matters with denials, for two reasons. First, payers have appeal deadlines — wait too long and the window closes permanently. Second, the longer a denial sits, the colder the trail: documentation is harder to gather, and the claim slips further down the priority list. That's why we work denials on a 72-hour standard. Within three days of a rejection, every denial is investigated, categorized, and either corrected and resubmitted or formally appealed. Nothing sits. Nothing ages out unnoticed.",
      },
      {
        type: "h2",
        text: "What actually happens to a denied claim",
      },
      {
        type: "p",
        text: "When a claim is denied, here's the process it goes through:",
      },
      {
        type: "ul",
        items: [
          "Identified fast — denials are caught within a day, not discovered weeks later during a month-end review.",
          "Investigated — we determine the real reason for the denial, not just the generic code the payer attached to it.",
          "Categorized — is this a simple correction, a documentation issue, or a true medical-necessity dispute? Each path is handled differently.",
          "Corrected and resubmitted, or formally appealed — with the specific documentation that supports the care provided.",
          "Tracked through to final payment — so nothing disappears back into the payer's system unwatched.",
          "Pattern-checked — if the same denial keeps recurring, we fix the upstream cause so it stops happening at all.",
        ],
      },
      {
        type: "h2",
        text: "The result: an average 30% drop in denial rates",
      },
      {
        type: "p",
        text: "When denials are worked consistently and fast — and when recurring causes get fixed rather than just re-filed — denial rates fall. Practices that switch to MYRI see an average 30% reduction in their denial rates. That's not from a single trick; it's the compounding result of catching denials early, appealing the winnable ones, and eliminating the patterns that generate denials in the first place.",
      },
      {
        type: "h2",
        text: "Why chiropractic-specific matters here",
      },
      {
        type: "p",
        text: "Denial management is where a general billing company most often falls short with chiropractic claims. Medicare's spinal-manipulation coverage rules, the AT modifier, medical-necessity documentation standards, and the state-by-state quirks of personal injury and PIP claims are all specialized knowledge. A biller who works across every specialty frequently doesn't have the depth to win these appeals — so they write them off. Because chiropractic is the only specialty we work in, we know which denials are worth fighting and exactly how to win them.",
      },
      {
        type: "plink",
        text: "For the underlying causes behind most rejections, see our guide on",
        href: "/blog/why-chiropractic-claims-get-denied",
        linkText: "why chiropractic claims get denied",
        after: ", or browse the common questions in our chiropractic billing FAQ.",
      },
      {
        type: "h2",
        text: "Find out what your denials are costing you",
      },
      {
        type: "p",
        text: "If you don't know your practice's denial rate — or what share of your denials actually get appealed — there's a good chance recoverable revenue is slipping away every month. Our free 30-day billing review shows you exactly what's being denied, why, and how much of it is winnable. No cost, no obligation. Sometimes the most valuable thing you can learn is how much money is sitting in denials you didn't know you could recover.",
      },
    ],
  },
  {
    slug: "why-chiropractic-claims-get-denied",
    title: "Why Chiropractic Claims Get Denied — and How to Recover the Revenue",
    excerpt:
      "The most common reasons chiropractic claims get denied, which denials are worth appealing, and how to stop losing revenue you've already earned.",
    date: "2026-08-19",
    readTime: "8 min read",
    metaTitle:
      "Why Chiropractic Claims Get Denied — and How to Recover the Revenue | MYRI",
    metaDescription:
      "The most common reasons chiropractic claims get denied — medical necessity, coding, modifiers, documentation — and a practical process for appealing and recovering the revenue.",
    body: [
      {
        type: "p",
        text: "A denied claim isn't lost money — not yet. It's revenue you've already earned, sitting in a payer's system, waiting for someone to do something about it. The problem is that in most busy practices, nobody does. Denials pile up, age out, and quietly become write-offs. This guide covers why chiropractic claims get denied, which denials are worth fighting, and how to actually recover the revenue instead of surrendering it.",
      },
      {
        type: "h2",
        text: "The most common reasons chiropractic claims get denied",
      },
      {
        type: "p",
        text: "Chiropractic denials tend to cluster around a handful of recurring causes. Knowing them is the first step to preventing them:",
      },
      {
        type: "ul",
        items: [
          "Medical necessity: the payer decides the care wasn't medically necessary — the single most common chiropractic denial, especially with Medicare.",
          "Missing or incorrect modifiers: Medicare requires the AT modifier for active treatment; leave it off or use it wrong and the claim is denied.",
          "Coding errors: incorrect or mismatched CPT codes (98940–98942) and diagnosis codes that don't support the service billed.",
          "Documentation gaps: notes that don't justify the treatment, missing treatment plans, or no documented measurable improvement.",
          "Maxed-out visit limits: many plans cap chiropractic visits per year; claims past the limit are denied.",
          "Eligibility and coverage issues: the patient's plan didn't cover chiropractic, or coverage lapsed — often catchable before the visit with verification.",
          "Timely filing: the claim was submitted after the payer's deadline, an entirely preventable and non-appealable loss.",
        ],
      },
      {
        type: "h2",
        text: "Prevention beats appeal every time",
      },
      {
        type: "p",
        text: "The cheapest denial is the one that never happens. Most of the causes above are preventable before the claim ever goes out: verifying eligibility and benefits before the visit, confirming visit limits, applying the correct modifiers, and making sure documentation actually supports medical necessity. A clean claim that gets approved on the first pass costs nothing to chase — which is why first-pass approval rate is one of the most important numbers in your practice.",
      },
      {
        type: "plink",
        text: "For the specifics on modifiers and coverage rules, see our",
        href: "/faq",
        linkText: "FAQ on the Medicare AT modifier and CPT codes 98940–98942",
        after: ".",
      },
      {
        type: "quote",
        text: "Every denial you prevent is worth more than two you successfully appeal — because appeals cost time, and time is the one thing a busy practice never has enough of.",
      },
      {
        type: "h2",
        text: "Which denials are worth appealing?",
      },
      {
        type: "p",
        text: "Not every denial is worth the same effort, but far more are appealable than most practices realize. Medical-necessity denials are frequently overturned when the documentation supporting the care is submitted correctly. Coding and modifier denials are often simple corrections and resubmissions. Even some visit-limit and coverage denials can be appealed with the right supporting information. The denials genuinely not worth appealing are usually the preventable ones — like timely-filing denials, where the deadline has simply passed. That's exactly why prevention matters so much.",
      },
      {
        type: "h2",
        text: "How to actually recover the revenue",
      },
      {
        type: "p",
        text: "Recovering denied revenue isn't complicated — it's just relentless. The practices that recover the most follow a consistent process:",
      },
      {
        type: "ul",
        items: [
          "Identify denials fast — ideally within 24 hours, not weeks later when the trail is cold.",
          "Categorize the denial reason so you know whether it's a correction, a documentation issue, or a true medical-necessity dispute.",
          "Correct and resubmit simple errors immediately.",
          "Build a proper appeal for medical-necessity denials, with the documentation that supports the care.",
          "Track everything through to final payment, so nothing disappears into the payer's system unwatched.",
          "Watch for patterns — if the same denial keeps happening, fix the upstream cause so it stops.",
        ],
      },
      {
        type: "p",
        text: "The last point matters most. A denial that keeps recurring isn't a series of accidents — it's a broken process. The practices that get ahead of denials treat every recurring denial as a signal to fix something upstream, not just a claim to re-file.",
      },
      {
        type: "h2",
        text: "Why chiropractic denials need a chiropractic specialist",
      },
      {
        type: "p",
        text: "Generic billing services often write off chiropractic denials because they don't understand them. Medicare's spinal-manipulation coverage rules, the modifier requirements, the documentation standards for medical necessity, and the state-by-state quirks of personal injury and PIP claims are all specialized knowledge. A biller who works across every specialty rarely has the depth to appeal these effectively — so they don't, and the revenue is lost. Chiropractic-specific billing exists precisely because these denials are recoverable when someone knows how.",
      },
      {
        type: "p",
        text: "At MYRI, denial management is core to what we do: every denial investigated, corrected, and appealed — not written off. Because chiropractic is the only specialty we work in, we know which denials are worth fighting and how to win them.",
      },
      {
        type: "plink",
        text: "We break down exactly how that works in our post on",
        href: "/blog/72-hour-denial-appeals",
        linkText: "our 72-hour denial appeal process",
        after: ".",
      },
      {
        type: "h2",
        text: "Find out what your denials are costing you",
      },
      {
        type: "p",
        text: "If denied claims are piling up in your practice, there's a good chance real revenue is slipping away every month. Our free 30-day billing review looks at exactly what's being denied, why, and how much of it is recoverable — no cost, no obligation. Sometimes the most valuable thing you can learn is how much money is sitting in denials you didn't know you could win back.",
      },
    ],
  },
  {
    slug: "true-cost-of-a-billing-mistake",
    title: "The True Cost of a Billing Mistake in a Chiropractic Practice",
    excerpt:
      "One denied claim doesn't feel like much. Multiplied across a year of claims, small billing mistakes become the single largest hidden cost in many practices — here's how to see what they're really costing you.",
    date: "2026-08-17",
    readTime: "7 min read",
    metaTitle:
      "The True Cost of a Billing Mistake in a Chiropractic Practice | MYRI",
    metaDescription:
      "Denials nobody appeals, claims that miss timely filing, underpayments nobody catches, services that never get billed — how small chiropractic billing mistakes add up to real revenue loss, and how to measure it.",
    body: [
      {
        type: "p",
        text: "One denied claim doesn't feel like much. Neither does one adjustment coded to the wrong number of regions, or one claim that missed timely filing by a week. The problem is that billing mistakes are never one-offs — they're patterns, repeated across hundreds or thousands of claims a year. Do the multiplication and the \u2018small' errors become the single largest hidden cost in many chiropractic practices. Here's how to see what mistakes are really costing you.",
      },
      {
        type: "h2",
        text: "Mistake #1: The denial nobody appeals",
      },
      {
        type: "p",
        text: "A large share of denied claims are never appealed — not because they're unwinnable, but because nobody has time. Each unappealed denial is revenue you earned and then surrendered. One denial is a rounding error. A consistent unappealed-denial rate across a year of claims is often tens of thousands of dollars walking out the door, invisibly, because it never shows up as a bill — it just shows up as revenue that never arrived.",
      },
      {
        type: "quote",
        text: "Billing mistakes rarely announce themselves. They show up as revenue that simply never arrives — and that's exactly why they're so easy to miss.",
      },
      {
        type: "h2",
        text: "Mistake #2: The claim that missed timely filing",
      },
      {
        type: "p",
        text: "Every payer has a deadline to submit claims, and once it passes, the money is gone — permanently, with no appeal. A claim that sits in a work queue for weeks because the biller was buried can quietly cross that line. Unlike a denial, there's no second chance here. Timely-filing write-offs are pure, unrecoverable loss, and they happen most in practices where one overloaded person is doing billing between other duties.",
      },
      {
        type: "h2",
        text: "Mistake #3: The underpayment nobody caught",
      },
      {
        type: "p",
        text: "Payers don't always pay what they owe. Sometimes a claim is reimbursed below the contracted rate, and if nobody compares the payment against the contract, the underpayment is simply accepted. Individually these are small — a few dollars here and there. Across a full claim volume, systematically accepting underpayments can cost a practice a significant slice of its rightful revenue every year, and it's completely invisible unless someone is actively checking.",
      },
      {
        type: "h2",
        text: "Mistake #4: The service that never got billed",
      },
      {
        type: "p",
        text: "The most invisible loss of all is the service that was provided, documented, and then never billed — or billed without the modifier that would have gotten it paid separately. A missing modifier 25 that bundles an exam into an adjustment. A therapy performed but left off the claim. These aren't denials; they never even become claims. They're care you delivered for free without realizing it.",
      },
      {
        type: "h2",
        text: "How to measure what mistakes are costing you",
      },
      {
        type: "p",
        text: "You can't fix what you can't see. A few numbers reveal most of the leak:",
      },
      {
        type: "ul",
        items: [
          "Your denial rate — and, more importantly, what share of denials actually get appealed.",
          "Your clean claim rate — the percentage of claims paid on first submission without rework.",
          "Any timely-filing write-offs in the last year — these should be zero, and every one is a red flag.",
          "How your net collections compare to what your contracts say you should be paid.",
        ],
      },
      {
        type: "h2",
        text: "Why a chiropractic specialist catches what generalists miss",
      },
      {
        type: "p",
        text: "The reason these mistakes persist is usually time and specialization, not effort. A front-desk biller juggling patients can't chase every denial, verify every payment against contract, and catch every missing modifier. And a general biller unfamiliar with chiropractic's specific codes and payer rules won't even recognize some of the errors as errors. At MYRI, chiropractic billing is the entire job — so the patterns that cost practices money are exactly what we're built to catch.",
      },
      {
        type: "plink",
        text: "The biggest of these hidden costs is usually denials \u2014 see",
        href: "/blog/why-chiropractic-claims-get-denied",
        linkText: "why chiropractic claims get denied",
        after: ", and the common questions in our chiropractic billing FAQ.",
      },
      {
        type: "h2",
        text: "Find out what your billing mistakes are costing",
      },
      {
        type: "p",
        text: "Most practices are genuinely surprised by the total when the small, invisible losses are added up. Our free 30-day billing review measures exactly that — your denial and appeal rates, timely-filing losses, underpayments, and unbilled services — and shows you the real number. No cost, no obligation. Sometimes the most valuable thing you can learn is how much money you've been losing without knowing it.",
      },
    ],
  },
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
        type: "plink",
        text: "Want the specifics on any of these? Our",
        href: "/faq",
        linkText: "chiropractic billing FAQ",
        after: " answers the common questions on CPT codes, the Medicare AT modifier, PIP, and credentialing in plain language.",
      },
      {
        type: "p",
        text: "This is why \"who does your billing\" matters as much as \"in-house or outsourced.\" A generalist biller — in-house or outsourced — who doesn't know chiropractic will leave money uncollected and expose you to audit risk. Specialization isn't a marketing line here; it's the difference between clean claims and chronic denials.",
      },
      {
        type: "plink",
        text: "For a closer look at where that uncollected money actually goes, read",
        href: "/blog/true-cost-of-a-billing-mistake",
        linkText: "the true cost of a billing mistake",
        after: ".",
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
