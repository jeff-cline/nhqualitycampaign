// Phase 4 expansions — second file to stay under single-file limits.
import type { Expanded } from './content-expanded'

const disclaimer =
  '<p class="text-xs text-gray-500 mt-10 italic">Disclaimer: Content is for educational purposes only and is not medical, legal, or financial advice. NHQualityCampaign.org is not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>'

const stat = (n: string, label: string, src: string, href: string) =>
  `<aside class="my-6 border-l-4 border-brand-teal bg-brand-mist p-4 rounded"><div class="text-3xl font-bold text-brand-teal">${n}</div><div class="text-sm text-gray-700">${label} — <a class="underline" href="${href}" rel="nofollow noopener" target="_blank">${src}</a></div></aside>`

export const EXPANDED_2: Expanded[] = [
  // ============================================================
  // Medicare hub — expanded
  // ============================================================
  {
    path: '/medicare/',
    content: `
      <h2>Medicare in 5 Minutes</h2>
      <p>Medicare is federal health insurance for Americans 65 and older, and for certain younger people with disabilities. It has four parts: <strong>Part A</strong> covers inpatient hospital care; <strong>Part B</strong> covers outpatient and physician care; <strong>Part C</strong> (Medicare Advantage) bundles A, B, and usually D into a private plan; <strong>Part D</strong> covers prescription drugs. Every Medicare-eligible person chooses between two paths: Original Medicare (Parts A + B) usually paired with a Medigap policy and a Part D drug plan, or Medicare Advantage.</p>
      ${stat('65M+', 'Americans enrolled in Medicare (2024)', 'CMS.gov', 'https://www.cms.gov/')}

      <h2>Core Parts Explained</h2>
      <h3>Part A — Hospital Insurance</h3>
      <p>Covers inpatient hospital stays, skilled nursing facility care (after a 3-day qualifying hospital stay), hospice, and some home health. Premium-free for most Americans who paid Medicare payroll taxes for at least 10 years. Part A has a benefit-period deductible ($1,632 in 2024) and daily coinsurance starting on day 61.</p>
      <h3>Part B — Medical Insurance</h3>
      <p>Covers doctor visits, outpatient care, preventive services, durable medical equipment, mental health, and most physician-administered drugs. Standard premium is $174.70/month in 2024, higher for high-income beneficiaries (IRMAA). Annual deductible is $240 in 2024; 20% coinsurance applies thereafter with no annual maximum under Original Medicare alone.</p>
      <h3>Part C — Medicare Advantage</h3>
      <p>A private plan alternative to Original Medicare, administered by insurance carriers approved by CMS. Plans bundle Parts A and B, usually include Part D, and often add dental/vision/hearing. Networks, prior authorization, and annual benefit changes apply.</p>
      <h3>Part D — Prescription Drug Coverage</h3>
      <p>Private drug plans approved by Medicare. Either standalone (with Original Medicare) or bundled into MA-PD. Since 2025, Part D includes a $2,000 annual out-of-pocket cap. Insulin is capped at $35/month per covered insulin. All ACIP-recommended vaccines are $0.</p>

      <h2>Medigap (Medicare Supplement)</h2>
      <p>Medigap is optional supplemental coverage that pays the 20% Part B coinsurance and other out-of-pocket costs Original Medicare leaves to you. Plans are federally standardized (A through N). The most popular for new enrollees is Plan G. Medigap only works with Original Medicare, not with Advantage.</p>

      <h2>Eligibility</h2>
      <ul>
        <li>65 or older and a US citizen or permanent resident of 5+ years</li>
        <li>Under 65 with 24+ months of Social Security Disability Insurance</li>
        <li>End-Stage Renal Disease (ESRD) at any age</li>
        <li>Amyotrophic Lateral Sclerosis (ALS) at any age with SSDI</li>
      </ul>

      <h2>Enrollment Windows</h2>
      <ul>
        <li><strong>Initial Enrollment Period (IEP)</strong> — 7 months around your 65th birthday</li>
        <li><strong>General Enrollment Period</strong> — Jan 1 – Mar 31 each year (with penalties if late)</li>
        <li><strong>Special Enrollment Period (SEP)</strong> — triggered by qualifying life events</li>
        <li><strong>Annual Election Period (AEP)</strong> — Oct 15 – Dec 7 each year; switch MA or Part D plans</li>
        <li><strong>MA Open Enrollment (MA-OEP)</strong> — Jan 1 – Mar 31 each year; one switch</li>
      </ul>

      <h2>Popular Starting Points</h2>
      <ul>
        <li><a href="/medicare/supplement-plans/">Medigap plan guide</a></li>
        <li><a href="/medicare/advantage/">Medicare Advantage explained</a></li>
        <li><a href="/compare/medicare-advantage-vs-medigap/">Advantage vs Medigap comparison</a></li>
        <li><a href="/guides/medicare-enrollment-guide/">Enrollment guide</a></li>
        <li><a href="/medicare/carriers/">Carrier directory (20 reviews)</a></li>
        <li><a href="/medicare/coverage/">What Medicare covers A–Z (50+ conditions)</a></li>
        <li><a href="/medicare/part-d/">Part D deep dive (20 topics)</a></li>
        <li><a href="/best/">Best Of rankings</a></li>
        <li><a href="/life-events/">Life-event playbooks (30 scenarios)</a></li>
        <li><a href="/tools/">Free calculators</a></li>
      </ul>

      <h2>Watch-Outs</h2>
      <ul>
        <li>Missing your 7-month Initial Enrollment Period triggers permanent late-enrollment penalties</li>
        <li>Medigap Open Enrollment is one-time — plan carefully</li>
        <li>COBRA and retiree coverage are NOT creditable for Part B — don\'t rely on them past 65</li>
        <li>Advantage vs Medigap switching is reversible only within certain windows</li>
      </ul>

      ${disclaimer}
    `,
  },

  // Nursing Homes hub — expanded
  {
    path: '/nursing-homes/',
    content: `
      <h2>Domain Heritage</h2>
      <p>NHQualityCampaign.org was the original home of the CMS-funded "Advancing Excellence in America\'s Nursing Homes" campaign (2006–2016). This section preserves and extends that work with plain-English guides to quality, cost, rights, and planning.</p>
      ${stat('1.2M', 'Nursing home residents in the US', 'CDC', 'https://www.cdc.gov/nchs/nhcs/')}

      <h2>Our Core Guides</h2>
      <ul>
        <li><a href="/nursing-homes/how-to-choose/">How to choose a nursing home</a></li>
        <li><a href="/nursing-homes/ratings/">CMS Five-Star ratings explained</a></li>
        <li><a href="/guides/nursing-home-checklist/">Printable visit checklist</a></li>
        <li><a href="/compare/nursing-home-vs-assisted-living/">Nursing home vs assisted living</a></li>
        <li><a href="/compare/home-health-vs-nursing-home/">Home health vs nursing home</a></li>
        <li><a href="/tools/nursing-home-cost-calculator/">Nursing home cost calculator</a></li>
      </ul>

      <h2>State-by-State Guides</h2>
      <p>We publish a dedicated <a href="/sitemap/">nursing home guide for all 50 states</a> covering facility counts, 5-star share, median cost, state survey agency, and long-term care ombudsman contact.</p>

      <h2>Paying for Nursing Home Care</h2>
      <h3>Medicare — Limited Short-Term Coverage</h3>
      <p>Medicare covers up to 100 days of skilled nursing care per benefit period after a qualifying 3-day inpatient hospital stay. Days 1–20 are $0; days 21–100 have a $204/day copay (2024). Observation-status hospital days do NOT qualify.</p>
      <h3>Medicaid — The Long-Term Care Safety Net</h3>
      <p>Medicaid pays for long-term custodial nursing home care for people who meet state medical and financial criteria. The 5-year asset look-back, spousal impoverishment rules, and home equity limits make Medicaid planning complex — consult an elder-law attorney. See our <a href="/medicaid/">Medicaid LTC deep dive</a>.</p>
      <h3>Long-Term Care Insurance</h3>
      <p>Pays a daily benefit once you can\'t perform 2+ ADLs or have cognitive impairment. Best purchased in your 50s or early 60s. Hybrid life/LTC policies avoid "use it or lose it" risk.</p>
      <h3>Private Pay</h3>
      <p>US median semi-private room runs about $8,929/month (Genworth 2023). Nine states exceed $12,000/month.</p>
      <h3>Veterans Benefits</h3>
      <p>VA Aid & Attendance pays up to $2,727/month to qualifying wartime veterans (higher for married veterans). VA Community Living Centers offer direct care in some states.</p>

      <h2>Resident Rights</h2>
      <p>Federal law (Nursing Home Reform Act, OBRA 1987) guarantees every nursing home resident rights to:</p>
      <ul>
        <li>Dignity, privacy, and freedom from abuse or unreasonable restraint</li>
        <li>Informed participation in their own care planning</li>
        <li>Access to visitors and communication</li>
        <li>Privacy for medical, mental, and financial affairs</li>
        <li>Informed consent for treatment</li>
        <li>The right to file grievances without retaliation</li>
        <li>Protection from involuntary transfer or discharge except under six specific grounds</li>
      </ul>
      <p>Your state long-term care ombudsman is the primary advocate for residents.</p>

      <h2>Watch-Outs</h2>
      <ul>
        <li>Hospital observation status (vs inpatient admission) does NOT qualify for Medicare SNF coverage</li>
        <li>"Admission agreements" often include arbitration clauses — read them carefully</li>
        <li>Facilities cannot require a "responsible party" guarantee from an adult child absent that child\'s legal authority</li>
        <li>Antipsychotic medication for dementia is frequently misused — ask about the facility\'s rate</li>
      </ul>

      ${disclaimer}
    `,
  },

  // FAQ page — expanded with 50+ Q&As
  {
    path: '/faq/',
    content: `
      <p>Searchable answers to the most common questions we receive about Medicare, Medigap, nursing homes, and senior care. Use the in-page links to jump to a topic.</p>

      <h2 id="medicare-basics">Medicare Basics</h2>
      <p>See <a href="/medicare/">the Medicare hub</a> for complete guides.</p>

      <h2 id="enrollment">Enrollment & Timing</h2>
      <p>See <a href="/guides/medicare-enrollment-guide/">enrollment guide</a> and <a href="/life-events/">life-event playbooks</a>.</p>

      <h2 id="medigap">Medigap</h2>
      <p>See <a href="/medicare/supplement-plans/">Medigap guide</a>.</p>

      <h2 id="advantage">Medicare Advantage</h2>
      <p>See <a href="/medicare/advantage/">Medicare Advantage guide</a>.</p>

      <h2 id="part-d">Part D</h2>
      <p>See <a href="/medicare/part-d/">Part D deep dive</a>.</p>

      <h2 id="nursing-homes">Nursing Homes</h2>
      <p>See <a href="/nursing-homes/">nursing home hub</a>.</p>

      <h2 id="medicaid">Medicaid Long-Term Care</h2>
      <p>See <a href="/medicaid/">Medicaid LTC topic index</a>.</p>

      <h2 id="finance">Finance & Cost</h2>
      <p>See <a href="/senior-finance/medicare-costs/">Medicare costs guide</a> and <a href="/tools/">calculators</a>.</p>

      ${disclaimer}
    `,
    faq: [
      // MEDICARE BASICS
      { question: 'When can I first enroll in Medicare?', answer: 'Your 7-month Initial Enrollment Period begins 3 months before the month you turn 65 and ends 3 months after. Enrolling during the first 3 months ensures coverage starts the month you turn 65.' },
      { question: 'Is Part A free?', answer: 'Part A is premium-free for most Americans who paid Medicare payroll taxes for at least 10 years (40 quarters). Those with fewer quarters pay a monthly Part A premium — $505/month for fewer than 30 quarters, or $278/month for 30–39 quarters (2024 amounts).' },
      { question: 'How much does Part B cost?', answer: 'The 2024 standard Part B premium is $174.70/month. Higher-income beneficiaries pay IRMAA surcharges based on tax-return income from 2 years prior. The Part B annual deductible is $240.' },
      { question: 'What is IRMAA?', answer: 'The Income-Related Monthly Adjustment Amount — surcharges on Parts B and D for higher-income beneficiaries. Thresholds start at $103,000 single / $206,000 joint MAGI (2024). Use our IRMAA calculator to estimate.' },
      { question: 'Can I appeal IRMAA?', answer: 'Yes — file Form SSA-44 for qualifying life-changing events like retirement, divorce, or loss of a spouse.' },
      { question: 'What does Original Medicare NOT cover?', answer: 'Routine dental, vision, hearing aids, long-term custodial care, most care outside the US (Medigap can help), cosmetic procedures, and private-duty nursing.' },
      { question: 'Can I get Medicare before 65?', answer: 'Yes — after 24 months of SSDI, or immediately with ESRD (kidney failure) or ALS.' },
      { question: 'What is the Medicare late enrollment penalty?', answer: 'Part B: 10% higher premium for each 12 months you delayed without creditable coverage, permanently. Part D: 1% of the national base premium per month delayed, permanently. Part A is rarely subject to penalty because most people get it premium-free.' },
      { question: 'Does COBRA count as creditable coverage?', answer: 'For Part D, yes, if the coverage was designed to be creditable. For Part B, NO — COBRA is never creditable. Enroll in Part B during your IEP or SEP even if you have COBRA.' },
      { question: 'What is the Annual Election Period (AEP)?', answer: 'October 15 through December 7 each year. Switch between Original Medicare and Advantage, change Advantage plans, or change Part D plans. Changes take effect January 1.' },
      { question: 'What is MA-OEP?', answer: 'Medicare Advantage Open Enrollment Period — January 1 through March 31. One change: switch from Advantage to Original Medicare, or to a different Advantage plan.' },
      { question: 'What is the General Enrollment Period?', answer: 'January 1 through March 31 — for people who missed IEP without creditable coverage. Coverage begins the first of the month after enrollment. Late penalties may apply.' },
      { question: 'Do I need to do anything to get Medicare at 65?', answer: 'If you\'re already getting Social Security retirement benefits, enrollment is automatic. Otherwise, sign up at ssa.gov/medicare or call 1-800-772-1213 during your IEP.' },
      { question: 'What\'s the difference between Medicare Part A and Medicare Advantage?', answer: 'Part A is federal hospital insurance. Medicare Advantage (Part C) is a private plan that covers A + B + usually D. They\'re not alternatives; everyone needs A. Advantage plans replace how A and B are delivered, not whether you have them.' },

      // MEDIGAP
      { question: 'What is the most popular Medigap plan?', answer: 'Plan G is the most popular for people newly eligible for Medicare after January 1, 2020. It covers every Medicare gap except the annual Part B deductible ($240 in 2024).' },
      { question: 'When can I buy Medigap without health questions?', answer: 'During your 6-month Medigap Open Enrollment Period, which starts when you\'re 65+ AND enrolled in Part B. Also during certain guaranteed-issue situations like losing employer coverage or your Advantage plan leaving your area.' },
      { question: 'Does Medigap cover prescription drugs?', answer: 'No. Medigap plans sold today do not include drug coverage. Buy a separate Part D plan to avoid the late enrollment penalty.' },
      { question: 'Can I have Medigap with Medicare Advantage?', answer: 'No — Medigap only works with Original Medicare. If you\'re in an Advantage plan, a Medigap policy cannot pay.' },
      { question: 'Are Medigap plans standardized?', answer: 'Yes in 47 states. Massachusetts, Minnesota, and Wisconsin use state-specific structures. Plan G in any federally standardized state covers the same benefits as Plan G in another.' },

      // ADVANTAGE
      { question: 'Is Medicare Advantage free?', answer: 'You still pay the Part B premium. Most Advantage plans add $0 additional premium but use copays and coinsurance at point of care, plus in-network MOOP up to $8,850 (2024).' },
      { question: 'Can my Advantage plan drop my doctor?', answer: 'Yes. Networks can change throughout the year. Plans must notify affected members, but if your doctor leaves network, you may have to choose between finding a new doctor and paying out-of-network costs.' },
      { question: 'Does Advantage cover out-of-state care?', answer: 'Emergency and urgent care yes; routine out-of-state care depends on plan type. PPOs are more flexible than HMOs. For snowbirds, Original + Medigap is usually better.' },

      // PART D
      { question: 'What is the Part D out-of-pocket cap?', answer: '$2,000 annual cap starting in 2025, under the Inflation Reduction Act. Replaces the old coverage-gap and catastrophic-phase structure.' },
      { question: 'What is the $35 insulin cap?', answer: 'All Medicare Part D plans cap insulin copays at $35/month per covered insulin since 2023. Insulin used with covered Part B pumps is also capped.' },
      { question: 'What is Extra Help?', answer: 'The Part D Low-Income Subsidy — pays premiums, deductibles, and copays for enrollees up to 150% of FPL (expanded threshold as of 2024).' },
      { question: 'Can I change Part D plans anytime?', answer: 'No — only during AEP (Oct 15–Dec 7), MA-OEP (for MA-PD), Special Enrollment Periods, or once per year to switch to a 5-star plan.' },

      // NURSING HOMES
      { question: 'Does Medicaid pay for nursing home care?', answer: 'Yes — for enrollees who meet state medical and financial criteria. Medicaid is the primary payer for long-term custodial nursing home care in the US.' },
      { question: 'How many nursing homes are there in the US?', answer: 'Approximately 15,500 Medicare-certified nursing homes serve about 1.2 million residents.' },
      { question: 'Are nursing homes safe?', answer: 'Quality varies widely. Check the CMS Five-Star rating, read the latest inspection report on Medicare.gov Care Compare, and visit in person before choosing.' },
      { question: 'What are my rights in a nursing home?', answer: 'Federal law guarantees rights to dignity, privacy, informed consent, care planning participation, and freedom from abuse or unreasonable restraint.' },
      { question: 'How much does a nursing home cost?', answer: 'US median is about $8,929/month for a semi-private room (Genworth 2023). Ranges from ~$5,000 in the Midwest to $13,000+ in the Northeast and Alaska.' },
      { question: 'Does Medicare pay for long-term nursing home care?', answer: 'No — only up to 100 days of skilled care after a qualifying 3-day hospital stay. Long-term custodial care is not covered.' },
      { question: 'What is the CMS Five-Star rating?', answer: 'CMS\'s 1-to-5 rating of nursing homes based on health inspections, staffing, and quality measures. Find it on Medicare.gov Care Compare.' },
      { question: 'What is the hospital observation vs inpatient issue?', answer: 'Medicare SNF coverage requires a 3-day INPATIENT hospital stay. Observation days don\'t count, even if physically in a hospital bed. This catches families off guard. Always ask about inpatient status.' },

      // MEDICAID
      { question: 'What is the Medicaid 5-year look-back?', answer: 'States review 60 months of asset transfers before an LTC Medicaid application. Improper transfers create a penalty period of ineligibility.' },
      { question: 'Can Medicaid take my home?', answer: 'While you\'re alive, the home is partially protected (federal equity caps). After death, estate recovery may apply to recover Medicaid LTC costs unless a spouse or disabled child lives there.' },
      { question: 'What is a Miller Trust?', answer: 'A Qualified Income Trust used in income-cap states so applicants with income above the Medicaid limit can qualify for LTC Medicaid.' },
      { question: 'Does a surviving spouse lose their home under Medicaid?', answer: 'No — spousal impoverishment rules protect the community spouse\'s home and a portion of assets.' },

      // COST/FINANCE
      { question: 'How much does total Medicare cost per year?', answer: 'Average Part B premium ($174.70/mo) + average Plan G Medigap ($155/mo) + average Part D ($40/mo) = roughly $370/month or $4,440/year, plus the Part B deductible ($240). Medicare Advantage enrollees often pay much less in premium but face copays.' },
      { question: 'Do I need Part D if I have Medigap?', answer: 'Yes — Medigap does not include drug coverage. Without creditable drug coverage, you face a Part D late penalty.' },
      { question: 'What is creditable coverage?', answer: 'Drug coverage at least as good as Part D\'s standard benefit. Required to avoid the Part D late enrollment penalty. Employer plans typically provide annual creditable-coverage notices.' },
      { question: 'Can I afford Medigap on a fixed income?', answer: 'Plan G averages $130–$180/month nationally. Plan N averages 20–30% less. High-Deductible Plan G has premiums under $50/month in most markets if you can absorb the $2,800 annual deductible in a bad year.' },

      // TELEHEALTH / TECH
      { question: 'Does Medicare cover telehealth?', answer: 'Yes — behavioral health permanently, and a wide range of primary and specialty telehealth services under extended flexibilities. Part B 20% coinsurance applies; Medigap covers that.' },
      { question: 'Does Medicare cover CPAP?', answer: 'Yes — Medicare covers home sleep tests and CPAP therapy for diagnosed obstructive sleep apnea, including the machine and supplies, with adherence documentation requirements.' },

      // LIFE EVENTS
      { question: 'What if I\'m still working at 65 with employer coverage?', answer: 'If your employer has 20+ employees, you can delay Part B without penalty. Use your 8-month Special Enrollment Period after employment ends. Most people enroll in premium-free Part A at 65 regardless.' },
      { question: 'What happens if I move to a new state?', answer: 'If you\'re on Original Medicare + Medigap + Part D, coverage works the same. If you\'re on Medicare Advantage, you get a Special Enrollment Period to change plans.' },
      { question: 'Can I go back to Original Medicare after joining Advantage?', answer: 'Yes, during AEP (Oct 15–Dec 7) or MA-OEP (Jan 1–Mar 31). Medigap underwriting may apply outside your Medigap trial right (first 12 months of first-ever MA enrollment) or guaranteed-issue situations.' },
      { question: 'What happens if my spouse dies?', answer: 'Report death to Social Security; review survivor benefits; update beneficiary information; if your spouse was on Medicare, no changes to your coverage unless your coverage flowed through their employer. See our <a href="/life-events/losing-spouse/">losing a spouse playbook</a>.' },
      { question: 'I was just diagnosed with cancer — what should I do?', answer: 'Confirm your oncologist is in-network (if MA) or accepts Medicare. Check formulary for chemo drugs. Consider switching to Medigap during next AEP if you anticipate major costs. See our <a href="/life-events/cancer-diagnosis/">cancer diagnosis playbook</a>.' },

      // QUALITY / ABOUT
      { question: 'Is NHQualityCampaign.org affiliated with Medicare?', answer: 'No. We are independent and not affiliated with or endorsed by the U.S. government, CMS, or the federal Medicare program.' },
      { question: 'How does this site make money?', answer: 'We may receive compensation from insurance partners when readers request quotes through our widgets. Editorial content is independent; rankings are not influenced by payment.' },
      { question: 'How often is content reviewed?', answer: 'Our top 25 pages are reviewed quarterly. All pages cite primary sources (CMS.gov, Medicare.gov, AHRQ, peer-reviewed) and are updated when rules change.' },
      { question: 'Can I submit a correction?', answer: 'Yes — email editor@nhqualitycampaign.org with the URL and the specific claim.' },
    ],
  },
]
