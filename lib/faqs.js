export const FAQS = [
  {
    q: "What is chiropractic medical billing?",
    a: [
      "Chiropractic medical billing is the process of coding chiropractic services, submitting claims to payers, and following up until the practice is paid. It differs from general medical billing because chiropractic claims rely on a narrow set of spinal manipulation codes, require documented medical necessity for continued care, and are frequently paid by auto insurers and personal injury carriers rather than health plans.",
      "A complete chiropractic billing cycle covers patient registration and eligibility verification, CPT and ICD-10 coding, claim scrubbing, electronic submission, payment posting, denial appeals, and AR follow-up. Practices either staff this internally or outsource it.",
    ],
  },
  {
    q: "What CPT codes do chiropractors bill?",
    a: [
      "The core chiropractic CPT codes are 98940, 98941, and 98942, which cover chiropractic manipulative treatment of the spine by number of regions treated. 98940 covers 1\u20132 spinal regions, 98941 covers 3\u20134, and 98942 covers all 5. Code 98943 covers extraspinal manipulation and is not covered by Medicare.",
      "Chiropractic offices commonly bill therapy and modality codes alongside manipulation:",
      "97012 \u2014 mechanical traction 97014 / G0283 \u2014 electrical stimulation, unattended 97110 \u2014 therapeutic exercise 97140 \u2014 manual therapy techniques 97530 \u2014 therapeutic activities 99202\u201399215 \u2014 evaluation and management visits",
      "Modifier use matters as much as code selection. Manipulation and therapy billed on the same date frequently require modifier 59 or an X-modifier to clear NCCI edits, and Medicare manipulation claims require the AT modifier for active treatment.",
    ],
  },
  {
    q: "Why do chiropractic claims get denied?",
    a: [
      "Most chiropractic denials trace to a short list of preventable causes: missing or incorrect modifiers, documentation that doesn't establish medical necessity, care classified as maintenance rather than active treatment, exhausted visit limits, and eligibility that was never verified before the visit.",
      "The pattern we see repeatedly in practice audits:",
      "No AT modifier on a Medicare manipulation claim, which reads to the payer as maintenance care Missing modifier 59 when therapy is billed with manipulation on the same date Thin treatment notes that don't document functional improvement, so continued care fails medical-necessity review Diagnosis pointing errors where the ICD-10 code doesn't support the region billed Stale eligibility \u2014 the plan changed, the deductible reset, or chiropractic visits were capped Timely filing missed on claims sitting in a work queue nobody owned",
      "Nearly every denial above is caught before submission by a pre-audit plus an upfront eligibility check. That is the single largest source of the 30% average denial reduction MYRI practices see. Every denial that does land gets a formal appeal within 72 hours.",
    ],
  },
  {
    q: "What is a good first-pass claim approval rate?",
    a: [
      "First-pass approval rate is the percentage of claims accepted and paid on initial submission, with no rejection, denial, or rework. Industry benchmarks generally treat 95% or higher as strong performance. MYRI Medical Billing maintains a 97% first-pass approval rate across the chiropractic practices it bills for.",
      "The practical difference is cash timing. A clean claim pays in one cycle; a denied claim adds weeks of appeal work and, in understaffed offices, frequently never gets reworked at all. If you don't currently know your first-pass rate, that number alone is worth pulling before making any billing decision.",
      "Medicare",
    ],
  },
  {
    q: "Does Medicare cover chiropractic care?",
    a: [
      "Medicare Part B covers only manual manipulation of the spine to correct a subluxation, when the treatment is active and medically necessary. It does not cover chiropractic X-rays, exams, therapy modalities, massage, or maintenance care \u2014 even when performed by the same chiropractor on the same day.",
      "Because so much of a typical chiropractic visit falls outside the covered benefit, the non-covered portion has to be handled correctly on the front end or the practice absorbs it.",
    ],
  },
  {
    q: "What is the AT modifier and when is it required?",
    a: [
      "The AT modifier signals active treatment and must be appended to chiropractic manipulation codes billed to Medicare whenever care is corrective rather than maintenance. Without AT, Medicare treats the claim as maintenance care and denies it.",
      "AT is not a formality to append automatically. The notes have to support it \u2014 documented subluxation, a clear treatment plan, and evidence the patient is improving. When care transitions from corrective to maintenance, AT comes off and the patient becomes financially responsible.",
    ],
  },
  {
    q: "When does a chiropractic practice need an ABN?",
    a: [
      "A practice needs an Advance Beneficiary Notice of Noncoverage (ABN) on file before providing a service Medicare is expected to deny \u2014 most commonly maintenance care, or the exams, X-rays, and modalities Medicare never covers for chiropractors. Without a signed ABN, the practice generally cannot bill the patient for those services.",
      "Missing ABNs are one of the most common compliance gaps we find in chiropractic audits, and the cost is invisible: the revenue simply never gets billed. MYRI flags ABN-triggering services at the coding stage so the front desk collects the form before the visit, not after the denial.",
      "Personal Injury, PIP & MedPay",
    ],
  },
  {
    q: "What is PIP billing?",
    a: [
      "PIP (Personal Injury Protection) billing is the process of billing a patient's own auto insurance policy for treatment after a motor vehicle accident, in no-fault states. PIP pays regardless of who caused the crash, and the benefit limits, filing deadlines, and treatment-timing requirements are set by each state's statute rather than by the insurer.",
      "PIP claims usually fail for reasons unrelated to clinical care: the patient wasn't seen inside the state's required window, the crash report or claim number was never obtained, the letter of protection wasn't documented, or the carrier's initial payment was never audited against the applicable fee schedule. Each is administrative, and each is preventable.",
    ],
  },
  {
    q: "What is MedPay, and how is it different from PIP?",
    a: [
      "MedPay (Medical Payments coverage) is optional auto insurance that pays medical bills after an accident regardless of fault. It differs from PIP in that it covers medical expenses only \u2014 no lost wages or replacement services \u2014 and it's available in most states, including at-fault states where PIP isn't offered.",
      "Practices routinely leave MedPay money uncollected because nobody asks whether the patient carries it. In PIP states, MedPay often sits behind PIP and can pick up the balance once PIP benefits are exhausted \u2014 which, over a full course of chiropractic care, happens more often than practices expect.",
    ],
  },
  {
    q: "How do attorney liens work in personal injury chiropractic billing?",
    a: [
      "In a letter-of-protection or lien arrangement, the practice treats the patient now and is paid out of the patient's eventual settlement rather than by an insurer. The practice carries the balance until the case resolves, so documentation and coordination with the attorney's office determine whether it gets paid in full.",
      "The controllables are keeping the lien and LOP paperwork executed and on file, billing at the correct rate, sending updated balances to the attorney on a schedule, and tracking case status so nothing settles without the practice's bill in the file. MYRI coordinates lien billing alongside PIP and MedPay so the same accident isn't billed twice or billed to the wrong payer.",
      "Working With MYRI",
    ],
  },
  {
    q: "Should a chiropractic practice outsource billing or keep it in-house?",
    a: [
      "Outsourcing usually makes sense when billing is one person's part-time responsibility, when denials or AR over 90 days are climbing, or when the practice can't absorb the risk of that person leaving. In-house billing makes sense when volume justifies a dedicated, trained biller and the practice has systems to supervise the work.",
      "The honest comparison isn't the billing fee against a salary. It's the fee against salary plus benefits, plus software and clearinghouse costs, plus training and vacation and turnover coverage, plus the revenue lost to denials that never get appealed. That last figure never appears on a P&L, which is why it's usually the one that settles the question.",
    ],
  },
  {
    q: "How much does outsourced chiropractic billing cost?",
    a: [
      "Outsourced chiropractic billing is typically priced one of three ways: a percentage of collections, a flat fee per claim, or a bundled monthly rate. MYRI's percentage-based plan runs 3.5\u20135% of collected revenue, with per-claim and comprehensive monthly options available depending on practice volume.",
      "Which model fits depends on volume and how predictable your month looks:",
      "Percentage-based (3.5\u20135%) \u2014 aligned incentives; we're paid when you collect. Works at any practice size. Comprehensive monthly \u2014 all services bundled at a fixed rate, including credentialing and a dedicated specialist. Most popular with established practices. Per-claim flat fee \u2014 predictable cost per claim processed. Best for lower-volume practices.",
      "No hidden fees and no long-term contract requirement. Pricing is quoted after we review your actual claim volume and payer mix.",
    ],
  },
  {
    q: "How long does chiropractic provider credentialing take?",
    a: [
      "Credentialing a chiropractor with a commercial payer generally takes 60 to 120 days from a complete application, though timelines vary by payer and state and some panels take longer or are closed to new providers. Medicare enrollment typically falls in the same range.",
      "Delays are almost always avoidable ones: an incomplete CAQH profile, expired malpractice documentation, an NPI record that doesn't match the application, or a follow-up nobody made. Start before you need it \u2014 a new associate who isn't credentialed can't bill, and retroactive effective dates are never guaranteed.",
    ],
  },
  {
    q: "Do you work with our EHR or practice management software?",
    a: [
      "Yes. MYRI works inside the software your practice already uses, including ChiroTouch, Jane App, ECLIPSE, and Genesis Chiropractic. You don't switch platforms, retrain your front desk, or migrate patient data to work with us.",
      "We connect through secure, encrypted remote access to your existing system, so scheduling, documentation, and front-desk workflow stay exactly as they are. If you're between systems or billing in-house without software, tell us during the audit and we'll confirm the setup before anything is signed.",
    ],
  },
  {
    q: "Is 100% remote medical billing HIPAA compliant?",
    a: [
      "Yes, when the billing company operates as a business associate under a signed Business Associate Agreement and maintains the required administrative, physical, and technical safeguards. Remote work is not itself a HIPAA issue; unsecured handling of protected health information is \u2014 and that risk exists in an office just as much as outside one.",
      "MYRI executes a BAA with every practice before touching any PHI, works within your secured systems over encrypted connections rather than exporting patient data, and limits access to the specialists assigned to your account.",
    ],
  },
  {
    q: "Do you only serve chiropractic practices in Florida?",
    a: [
      "No. MYRI Medical Billing is headquartered in Lake Mary, Florida and bills for chiropractic practices in all 50 states. Billing is handled 100% remotely, so your location has no bearing on service and no office visit is ever required.",
      "Being Florida-based does mean we handle a high volume of no-fault PIP and personal injury work \u2014 some of the most rule-intensive chiropractic billing in the country. That experience carries directly into auto and PI claims in every other state.",
    ],
  },
  {
    q: "How quickly can our practice get started?",
    a: [
      "Most practices are fully onboarded and billing live within 5 business days. Setup is entirely remote \u2014 EHR integration, payer configuration for your state, workflow mapping, and team orientation \u2014 with no paperwork to mail and no in-person meetings.",
      "The sequence is a free 30-day billing audit, then custom setup inside your existing system, then live billing with monthly performance reporting on collections, denials, and claim status.",
    ],
  },
  {
    q: "What happens when we switch billing companies?",
    a: [
      "A well-run transition doesn't interrupt cash flow. New claims move to the incoming biller on an agreed cutoff date, while outstanding AR is either worked by the outgoing biller through wind-down or formally transferred, so nothing sits unworked in the gap between the two.",
      "The thing to settle before you give notice is who works the aging claims already submitted. That single unanswered question is where practices lose real money during a switch. We map it with you before any cutoff date is set.",
    ],
  },
  {
    q: "What is the free chiropractic billing audit?",
    a: [
      "It's a no-cost, no-obligation review of your last 30 days of claims, delivered as a written report within 5 business days. It covers denial patterns by payer, code and provider, CPT and modifier accuracy across 98940\u201398942 and E&M codes, Medicare and state-specific PI compliance, and an estimated monthly revenue recovery opportunity in dollars.",
      "The findings are yours to act on whether or not you hire us. Most chiropractic practices are losing 15\u201325% of collectible revenue to preventable billing errors, unworked denials, and coding mistakes \u2014 the audit tells you which of those applies to you, and how much it's worth.",
    ],
  },
];
