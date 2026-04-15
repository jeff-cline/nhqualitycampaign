export type BestGuide = {
  slug: string
  title: string
  quickAnswer: string
  methodology: string
  picks: { rank: number; name: string; reason: string; watchOut?: string }[]
}

export const BEST: BestGuide[] = [
  { slug: 'best-medigap-plan-g-carriers', title: 'Best Medigap Plan G Carriers', quickAnswer: 'For Plan G, the best carrier depends on your state and age, but four carriers consistently deliver competitive pricing and rate stability nationally: Mutual of Omaha, Cigna, UnitedHealthcare/AARP, and Aetna/Accendo.', methodology: 'Based on AM Best financial ratings, national availability, historical rate-increase stability, household discount availability, and customer complaint ratios.', picks: [
    { rank: 1, name: 'Mutual of Omaha', reason: 'A+ AM Best rating and stable rate history — strong long-term value.' },
    { rank: 2, name: 'UnitedHealthcare / AARP', reason: 'Widely available with household and multi-insured discounts.' },
    { rank: 3, name: 'Cigna Healthcare', reason: 'Competitive pricing in many states under Cigna and Loyal American brands.' },
    { rank: 4, name: 'Aetna / Accendo', reason: 'Often the lowest Plan G premium in the market, especially Accendo in 43 states.', watchOut: 'Aggressive underwriting outside OEP.' },
  ] },
  { slug: 'best-part-d-plans-2026', title: 'Best Part D Plans for 2026', quickAnswer: 'No single "best" Part D plan exists — it depends entirely on your drug list, ZIP, and preferred pharmacy. Use Medicare Plan Finder with your actual drugs each year.', methodology: 'Based on 2025–2026 plan filings: premium, benchmark availability, pharmacy network breadth, star ratings, and formulary breadth.', picks: [
    { rank: 1, name: 'Wellcare Value Script', reason: 'Consistently low-premium benchmark plan in most regions.', watchOut: 'Narrower preferred pharmacy network.' },
    { rank: 2, name: 'SilverScript Choice', reason: 'Broad pharmacy network via CVS/Aetna, mid-tier premiums.' },
    { rank: 3, name: 'Humana Premier Rx', reason: 'Strong benefits for enrollees with high drug utilization.' },
    { rank: 4, name: 'AARP Medicare Rx', reason: 'Widely available with predictable tiers and good member service.' },
  ] },
  { slug: 'best-medicare-advantage-plans', title: 'Best Medicare Advantage Plans', quickAnswer: 'Best Medicare Advantage plans vary dramatically by county. Nationally, Kaiser Permanente consistently earns 4-5 stars where available; UnitedHealthcare, Humana, and Aetna compete across most markets.', methodology: 'Based on CMS Star Ratings, network breadth, supplemental benefits, member satisfaction (CAHPS), and MOOP.', picks: [
    { rank: 1, name: 'Kaiser Permanente Senior Advantage', reason: 'Consistent 4–5 star ratings; integrated care delivery.', watchOut: 'Only available in 8 states + DC.' },
    { rank: 2, name: 'Humana Gold Plus HMO', reason: 'Strong network and supplemental benefits in many markets.' },
    { rank: 3, name: 'UnitedHealthcare AARP MA', reason: 'Widest availability and strong AARP-branded benefits.' },
    { rank: 4, name: 'Aetna Medicare Premier PPO', reason: 'Competitive PPO option in markets where HMOs are restrictive.' },
  ] },
  { slug: 'best-d-snp-plans', title: 'Best Dual-Eligible (D-SNP) Plans', quickAnswer: 'D-SNPs are Medicare Advantage plans for people on both Medicare and Medicaid. The best depends on your state Medicaid program. Strongest national carriers: UnitedHealthcare Dual Complete, Humana D-SNP, Molina Dual Options.', methodology: 'Based on state Medicaid integration, dental/vision/OTC benefits, and star ratings.', picks: [
    { rank: 1, name: 'UnitedHealthcare Dual Complete', reason: 'Wide state availability and strong OTC/food benefits.' },
    { rank: 2, name: 'Humana Gold Plus D-SNP', reason: 'Strong in Southeast and Midwest markets.' },
    { rank: 3, name: 'Molina Dual Options', reason: 'Focus on dual-eligible design in 15 states.' },
  ] },
  { slug: 'best-medicare-for-veterans', title: 'Best Medicare Strategy for Veterans', quickAnswer: 'Most Medicare-eligible veterans keep VA health coverage and add Medicare Part A at age 65. Part B is optional but recommended for flexibility outside VA facilities. TRICARE for Life eligible veterans get low-cost secondary coverage.', methodology: 'Based on VA benefit coordination, TRICARE for Life eligibility, and typical utilization patterns.', picks: [
    { rank: 1, name: 'TRICARE for Life + Medicare', reason: 'Eligible military retirees get comprehensive low-cost coverage.' },
    { rank: 2, name: 'VA + Medicare Part A + Part B', reason: 'Maximum provider choice with VA as anchor.' },
    { rank: 3, name: 'Medicare Advantage with VA wrap', reason: 'Some plans coordinate well with VA for vision/dental.' },
  ] },
  { slug: 'best-medicare-for-low-income', title: 'Best Medicare for Low-Income Beneficiaries', quickAnswer: 'Low-income beneficiaries benefit most from Medicare Savings Programs (QMB/SLMB/QI) plus Extra Help for Part D, often paired with a D-SNP that coordinates with Medicaid.', methodology: 'Based on out-of-pocket impact for enrollees under 150% FPL.', picks: [
    { rank: 1, name: 'Original Medicare + QMB + Extra Help', reason: 'QMB pays all Medicare premiums and cost-sharing.' },
    { rank: 2, name: 'D-SNP (Dual-Eligible)', reason: 'Simplifies Medicare/Medicaid coordination and adds OTC/food benefits.' },
    { rank: 3, name: 'PACE (where available)', reason: 'Fully integrated care for nursing-home-eligible seniors living at home.' },
  ] },
  { slug: 'best-medicare-for-snowbirds', title: 'Best Medicare for Snowbirds', quickAnswer: 'Snowbirds (split-residents) usually fare best with Original Medicare + Medigap + Part D — any Medicare provider in any state, no networks, no prior authorization by geography.', methodology: 'Based on provider access and coverage continuity across states.', picks: [
    { rank: 1, name: 'Original Medicare + Plan G + Part D', reason: 'Nationwide provider acceptance with minimal out-of-pocket.' },
    { rank: 2, name: 'Original Medicare + Plan N + Part D', reason: 'Lower-premium alternative when you can handle small copays.' },
    { rank: 3, name: 'National PPO Advantage plan', reason: 'Some PPOs offer national network — still network-restricted.', watchOut: 'Out-of-network care costs more.' },
  ] },
  { slug: 'best-medicare-for-chronic-conditions', title: 'Best Medicare for Chronic Conditions', quickAnswer: 'For people with diabetes, CHF, COPD, or other chronic conditions, Original Medicare + Medigap typically minimizes out-of-pocket. Chronic-condition SNPs (C-SNPs) are another option if your condition qualifies.', methodology: 'Based on predictable cost-sharing and specialist access.', picks: [
    { rank: 1, name: 'Original Medicare + Plan G', reason: 'Predictable near-zero out-of-pocket at point of care.' },
    { rank: 2, name: 'Chronic-Condition SNP (C-SNP)', reason: 'Tailored benefits if your condition qualifies.' },
    { rank: 3, name: 'MA-PPO with strong specialist network', reason: 'Lower premium when specialists are in-network.' },
  ] },
  { slug: 'best-medicare-california', title: 'Best Medicare Plans in California', quickAnswer: 'California bans Part B excess charges and has very competitive Medigap and Medicare Advantage markets. Plan G from Mutual of Omaha, UHC, or Accendo often leads; Kaiser Permanente dominates Advantage.', methodology: 'Based on California-specific rate filings, Kaiser\'s CA footprint, and excess-charge rules.', picks: [
    { rank: 1, name: 'Mutual of Omaha Plan G', reason: 'A+ financial rating and competitive CA pricing.' },
    { rank: 2, name: 'Kaiser Permanente Senior Advantage', reason: 'Consistently 4–5 stars where Kaiser operates.' },
    { rank: 3, name: 'Accendo Medicare Supplement', reason: 'Often the lowest Plan G premium in CA.' },
  ] },
  { slug: 'best-medicare-florida', title: 'Best Medicare Plans in Florida', quickAnswer: 'Florida has the largest Medicare Advantage market in the country. Best Advantage carriers: Humana Gold Plus, UnitedHealthcare, Aetna. For Medigap, focus on rate stability — Florida\'s large senior population drives competitive pricing.', methodology: 'Based on FL enrollment volumes, network breadth, and rate-increase history.', picks: [
    { rank: 1, name: 'Humana Gold Plus', reason: 'Deep FL network and supplemental benefits.' },
    { rank: 2, name: 'UnitedHealthcare AARP MA', reason: 'Wide FL availability and strong AARP brand.' },
    { rank: 3, name: 'Mutual of Omaha Plan G', reason: 'Most stable rate history among top FL Medigap carriers.', watchOut: 'FL premiums tend to be higher than national average.' },
  ] },
  { slug: 'best-medicare-texas', title: 'Best Medicare Plans in Texas', quickAnswer: 'Texas has 4.4M Medicare enrollees and a 50% Advantage penetration rate. Strong national carriers (UHC, Humana, Wellpoint) dominate; Blue Cross Blue Shield of Texas anchors the Medigap market.', methodology: 'Based on TX rate filings and provider networks.', picks: [
    { rank: 1, name: 'BCBS of Texas Plan G', reason: 'Competitive rates with broad TX provider acceptance.' },
    { rank: 2, name: 'UnitedHealthcare AARP MA', reason: 'Statewide availability and supplemental benefits.' },
    { rank: 3, name: 'Humana Gold Plus HMO', reason: 'Strong in metro TX markets.' },
  ] },
  { slug: 'best-medicare-new-york', title: 'Best Medicare Plans in New York', quickAnswer: 'New York mandates community-rated Medigap and bans Part B excess charges — but has the highest Medigap premiums in the US. Focus on rate stability and Part B deductible exposure.', methodology: 'Based on NY\'s unique community-rating and excess-charge rules.', picks: [
    { rank: 1, name: 'United Healthcare Plan N', reason: 'Lower-premium option since NY bans excess charges (a major Plan N advantage lost).' },
    { rank: 2, name: 'Mutual of Omaha Plan G', reason: 'Best rate stability in NY\'s high-premium market.' },
    { rank: 3, name: 'Empire BCBS Medicare Advantage', reason: 'Strong NYC-area network.' },
  ] },
  { slug: 'best-medigap-for-age-65', title: 'Best Medigap at Age 65 (Open Enrollment)', quickAnswer: 'Age 65 is when you have the strongest pricing and no health underwriting. Focus on rate stability: community-rated or attained-age plans from A+/A+ AM Best carriers tend to age best.', methodology: 'Based on pricing types and long-term premium trajectory.', picks: [
    { rank: 1, name: 'Plan G from Mutual of Omaha', reason: 'A+ rated with historically stable rate history.' },
    { rank: 2, name: 'Plan G from Accendo', reason: 'Often the lowest OEP entry premium in the market.' },
    { rank: 3, name: 'Plan N for healthy, cost-sensitive buyers', reason: '20–30% lower premium than Plan G.' },
  ] },
  { slug: 'best-medigap-for-age-75', title: 'Best Medigap at Age 75+', quickAnswer: 'If you\'re 75+ and still need Medigap, underwriting is your biggest challenge. Community-rated or issue-age plans from strong carriers are ideal; birthday-rule states let you switch yearly without underwriting.', methodology: 'Based on underwriting leniency and rate type.', picks: [
    { rank: 1, name: 'Community-rated plans in NY, CT, MA, ME', reason: 'No age-based premium increases.' },
    { rank: 2, name: 'Plan G from Mutual of Omaha', reason: 'Stable history even as attained-age rates rise.' },
    { rank: 3, name: 'Birthday-rule switch (CA, OR, NV, IL, LA, ID, OK, WA)', reason: 'Annual no-underwriting switch window.' },
  ] },
  { slug: 'best-medicare-for-traveling', title: 'Best Medicare for Frequent Travelers', quickAnswer: 'Frequent travelers need any-provider access. Original Medicare + Medigap Plan G (or F for legacy-eligible) plus Part D gives nationwide access and 80% foreign emergency coverage via Medigap.', methodology: 'Based on provider network flexibility and foreign travel emergency coverage.', picks: [
    { rank: 1, name: 'Original Medicare + Plan G + Part D', reason: 'Any Medicare provider, plus 80% foreign emergency coverage.' },
    { rank: 2, name: 'Original Medicare + Plan F (if eligible)', reason: 'Includes Part B deductible coverage.' },
    { rank: 3, name: 'Original Medicare + High-Deductible Plan G', reason: 'Lowest premium with same foreign coverage.' },
  ] },
]
