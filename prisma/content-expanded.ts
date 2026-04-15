// Phase 4 content depth upgrade: long-form versions of the top-commercial pages.
// Applied as an overlay during seed: when a path matches, the content + FAQ
// arrays below replace the originals from prisma/content.ts.

export type ExpandedFAQ = { question: string; answer: string }
export type Expanded = {
  path: string
  content: string
  faq?: ExpandedFAQ[]
}

const disclaimer =
  '<p class="text-xs text-gray-500 mt-10 italic">Disclaimer: Content is for educational purposes only and is not medical, legal, or financial advice. NHQualityCampaign.org is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Editorial content is independent; we may receive compensation from insurance partners for qualifying leads.</p>'

const stat = (n: string, label: string, src: string, href: string) =>
  `<aside class="my-6 border-l-4 border-brand-teal bg-brand-mist p-4 rounded"><div class="text-3xl font-bold text-brand-teal">${n}</div><div class="text-sm text-gray-700">${label} — <a class="underline" href="${href}" rel="nofollow noopener" target="_blank">${src}</a></div></aside>`

export const EXPANDED: Expanded[] = [
  // ============================================================
  // 1. Medigap (Plan G guide) — flagship commercial page
  // ============================================================
  {
    path: '/medicare/supplement-plans/',
    content: `
      <h2>What Is Medigap Insurance?</h2>
      <p>Medicare Supplement Insurance — almost universally called Medigap — is private coverage that pays some or all of the costs Original Medicare (Parts A and B) leaves you responsible for. Original Medicare generally pays 80% of approved amounts after you meet modest deductibles. The remaining 20% has <strong>no annual out-of-pocket maximum</strong>. A single serious illness can expose you to tens of thousands of dollars in coinsurance without Medigap in place.</p>
      <p>Medigap plans are federally standardized. That means a Plan G policy sold by Mutual of Omaha pays <em>exactly</em> the same benefits as a Plan G sold by UnitedHealthcare, Cigna, Aetna, Accendo, or any other carrier in your state. The only differences across carriers are <strong>price</strong>, <strong>rate-increase history</strong>, <strong>customer service</strong>, and <strong>financial strength</strong>. Massachusetts, Minnesota, and Wisconsin use their own state-standardized structures instead of the federal A–N lettering.</p>
      ${stat('10', 'Federally standardized Medigap plan letters sold in 47 states', 'Medicare.gov', 'https://www.medicare.gov/supplements-other-insurance/how-to-compare-medigap-policies')}

      <h2>How Medigap Works with Original Medicare</h2>
      <p>Medigap only pays <em>after</em> Medicare has paid. Your provider bills Medicare first; Medicare pays its share and electronically crosses over the claim to your Medigap carrier, which then pays its standardized portion. In most cases, you see no bill. Medigap plans:</p>
      <ul>
        <li>Only work alongside Original Medicare (Parts A and B) — not alongside Medicare Advantage</li>
        <li>Travel with you nationwide — any provider that accepts Medicare accepts your Medigap</li>
        <li>Are guaranteed renewable for life as long as you pay premiums</li>
        <li>Do not use networks, prior authorization, or referrals</li>
        <li>Do not include prescription drug coverage — you need a separate Part D plan</li>
      </ul>

      <h2>All 10 Medigap Plans at a Glance (2026)</h2>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr>
          <th class="p-2 text-left">Benefit</th><th class="p-2">A</th><th class="p-2">B</th><th class="p-2">C*</th>
          <th class="p-2">D</th><th class="p-2">F*</th><th class="p-2">G</th><th class="p-2">K</th><th class="p-2">L</th>
          <th class="p-2">M</th><th class="p-2">N</th>
        </tr></thead>
        <tbody>
          <tr><td class="p-2">Part A coinsurance + 365 extra hospital days</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td></tr>
          <tr><td class="p-2">Part B coinsurance or copayment</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">50%</td><td class="text-center">75%</td><td class="text-center">✓</td><td class="text-center">✓**</td></tr>
          <tr><td class="p-2">First 3 pints of blood</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">50%</td><td class="text-center">75%</td><td class="text-center">✓</td><td class="text-center">✓</td></tr>
          <tr><td class="p-2">Part A hospice coinsurance</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">50%</td><td class="text-center">75%</td><td class="text-center">✓</td><td class="text-center">✓</td></tr>
          <tr><td class="p-2">Skilled nursing facility coinsurance</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">50%</td><td class="text-center">75%</td><td class="text-center">✓</td><td class="text-center">✓</td></tr>
          <tr><td class="p-2">Part A deductible</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">50%</td><td class="text-center">75%</td><td class="text-center">50%</td><td class="text-center">✓</td></tr>
          <tr><td class="p-2">Part B deductible</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td></tr>
          <tr><td class="p-2">Part B excess charges</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td></tr>
          <tr><td class="p-2">Foreign travel emergency (80% up to $50k)</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">✓</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">✓</td><td class="text-center">✓</td></tr>
          <tr class="bg-gray-50"><td class="p-2 font-semibold">Out-of-pocket limit (2024)</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">—</td><td class="text-center">$7,060</td><td class="text-center">$3,530</td><td class="text-center">—</td><td class="text-center">—</td></tr>
        </tbody>
      </table>
      <p class="text-xs text-gray-500">*Plans C and F are closed to anyone who became Medicare-eligible on or after January 1, 2020. **Plan N charges up to $20 for some office visits and up to $50 for ER visits that don\'t result in admission.</p>

      <h2>Plan G: The Most Popular Choice for New Enrollees</h2>
      <p>Plan G is the most widely purchased Medigap plan for people becoming Medicare-eligible after January 1, 2020. It covers <strong>every</strong> Medicare gap except one — the annual Part B deductible ($240 in 2024). After you pay that once per year, Plan G pays 100% of your Medicare cost-sharing for the rest of the year, including the 20% Part B coinsurance that has no ceiling under Original Medicare alone.</p>
      <h3>What Plan G Covers</h3>
      <ul>
        <li>Part A hospital deductible ($1,632 in 2024) — every benefit period</li>
        <li>Part A hospital coinsurance for days 61–90, lifetime reserve days, and 365 additional days after reserves are exhausted</li>
        <li>Skilled nursing facility coinsurance (days 21–100)</li>
        <li>Part B coinsurance — the uncapped 20% of approved amounts</li>
        <li>Part B excess charges (up to 15% above Medicare-approved amounts from non-participating providers)</li>
        <li>First 3 pints of blood</li>
        <li>Hospice coinsurance</li>
        <li>80% of foreign travel emergency care (up to $50,000 lifetime maximum)</li>
      </ul>
      <h3>What Plan G Does Not Cover</h3>
      <ul>
        <li>The Part B annual deductible ($240 in 2024) — you pay this once per year</li>
        <li>Prescription drugs (buy Part D)</li>
        <li>Long-term custodial care</li>
        <li>Routine dental, vision, hearing</li>
        <li>Services not covered by Original Medicare</li>
      </ul>

      <h2>Plan N: Lower Premiums, Small Copays</h2>
      <p>Plan N is the <strong>value alternative</strong> to Plan G. Premiums average 20–30% lower. In exchange you pay:</p>
      <ul>
        <li>Up to $20 for some doctor office visits (not preventive)</li>
        <li>Up to $50 for ER visits that don\'t result in admission</li>
        <li>Any Part B excess charges (relevant in 42 states; banned in CT, MA, MN, NY, OH, PA, RI, VT)</li>
      </ul>
      <p>Plan N usually wins on total cost if you are healthy, rarely use the ER, and live in a state that bans excess charges. Plan G wins if you see doctors more than about 8 times a year or live in a state where excess charges exist.</p>

      <h2>Plan F: Closed But Still in Force</h2>
      <p>Plan F was the most comprehensive Medigap plan historically — the only difference from Plan G is that Plan F also covers the annual Part B deductible. Under MACRA 2015, Plan F (and Plan C) closed to anyone who became Medicare-eligible on or after January 1, 2020. People eligible before that date can still buy or keep Plan F, but premiums are typically $250–$400 per year higher than Plan G — often exceeding the $240 deductible Plan F covers.</p>

      <h2>High-Deductible Plan G</h2>
      <p>High-Deductible Plan G has the lowest Medigap premium of any plan. You pay all Medicare cost-sharing yourself until you hit the annual deductible ($2,800 in 2024), after which HD-G pays 100%. It works best for healthy enrollees with the savings to absorb a bad year.</p>

      <h2>Plans K, L, and M: Cost-Sharing Variants</h2>
      <p>Plans K and L split benefits: K pays 50% of most Medicare cost-sharing, L pays 75%. Both have annual out-of-pocket maximums ($7,060 / $3,530 in 2024). Plan M pays 50% of the Part A deductible. These plans are less commonly sold but can be the right fit for cost-conscious buyers who want catastrophic protection.</p>

      <h2>When You Can Buy Medigap</h2>
      <h3>Medigap Open Enrollment Period (Best Window)</h3>
      <p>Your one-time 6-month Medigap Open Enrollment Period begins the first month you are 65+ AND enrolled in Part B. During this window, every Medigap carrier in your state must sell you any plan they offer at their standard rate, <strong>regardless of your health</strong>. This is the single most important Medicare deadline for Original-Medicare-path beneficiaries.</p>
      ${stat('6 months', 'Medigap Open Enrollment window — no health underwriting', 'Medicare.gov', 'https://www.medicare.gov/')}
      <h3>Guaranteed-Issue Rights</h3>
      <p>Outside of OEP, you have guaranteed-issue rights to buy certain Medigap plans (A, B, C*, D*, F*, G, K, L — *if eligible) within 63 days of certain qualifying events, such as:</p>
      <ul>
        <li>Your Medicare Advantage plan terminates or leaves your service area</li>
        <li>You move out of your Advantage plan\'s service area</li>
        <li>You have an employer or union retiree plan that stops covering Medicare cost-sharing</li>
        <li>You disenroll from Medicare Advantage within 12 months of first enrolling (trial right)</li>
        <li>Your Medigap company goes bankrupt or misleads you</li>
      </ul>
      <h3>Medical Underwriting Outside OEP/GI</h3>
      <p>If you want to buy or switch Medigap outside these windows, you\'re medically underwritten — the carrier asks health questions and can decline or charge more. Common conditions that can trigger denial include congestive heart failure, untreated atrial fibrillation, recent cancer, COPD, and diabetes with complications.</p>

      <h2>How Medigap Premiums Are Priced</h2>
      <p>States allow three premium pricing structures:</p>
      <ul>
        <li><strong>Community-rated</strong> — every enrollee pays the same premium regardless of age. Lowest long-term cost for those aging into Medicare but highest entry premium. Required in AR, CT, MA, ME, MN, NY, VT, WA; allowed elsewhere.</li>
        <li><strong>Issue-age-rated</strong> — premium based on your age when you first bought. Never increases due to age; does increase for inflation.</li>
        <li><strong>Attained-age-rated</strong> — premium rises each year as you age. Cheapest at 65, most expensive at 85. Most common nationally.</li>
      </ul>
      <p>Two identical Plan G policies can have dramatically different premium trajectories depending on pricing structure. Ask every carrier which type their policy uses — community-rated or issue-age is usually the smarter long-term pick when available.</p>

      <h2>State-Specific Rules Worth Knowing</h2>
      <ul>
        <li><strong>Massachusetts</strong> — uses state-standardized Core, Supplement 1, and Supplement 1A plans instead of A–N</li>
        <li><strong>Minnesota</strong> — uses its own Basic and Extended Basic structures</li>
        <li><strong>Wisconsin</strong> — uses a single standard plan plus optional riders</li>
        <li><strong>"Birthday rule" states</strong> — California, Oregon, Nevada, Illinois, Louisiana, Idaho, Oklahoma, Washington allow annual Medigap switches without underwriting in a window around your birthday</li>
        <li><strong>Excess-charge bans</strong> — Connecticut, Massachusetts, Minnesota, New York, Ohio, Pennsylvania, Rhode Island, Vermont ban Part B excess charges; Plan N becomes more attractive in these states</li>
        <li><strong>Under-65 Medigap</strong> — about 30 states require carriers to offer Medigap to under-65 Medicare beneficiaries; pricing varies dramatically</li>
      </ul>

      <h2>How to Compare Medigap Carriers</h2>
      <ol>
        <li><strong>Narrow to 2–3 plan letters</strong> — Plan G, Plan N, and possibly High-Deductible Plan G cover 95% of good choices.</li>
        <li><strong>Get quotes from 4+ carriers in your ZIP</strong> — premiums can differ 30% or more for identical coverage.</li>
        <li><strong>Check AM Best financial rating</strong> — A- or higher preferred; A+ or A++ ideal for long-term stability.</li>
        <li><strong>Review rate history</strong> — a carrier with 3% average annual increases is worth much more than one with 10% increases, even at a slightly higher starting premium.</li>
        <li><strong>Confirm household or multi-insured discounts</strong> — many carriers offer 5–12% discounts if your spouse or roommate also enrolls.</li>
        <li><strong>Verify pricing structure</strong> — community-rated, issue-age, or attained-age.</li>
      </ol>

      <h2>Common Medigap Mistakes to Avoid</h2>
      <ul>
        <li>Missing your 6-month OEP and later being medically underwritten</li>
        <li>Choosing the lowest premium carrier without checking rate-increase history</li>
        <li>Skipping Part D enrollment thinking Medigap covers drugs (it doesn\'t)</li>
        <li>Buying Plan F when you became Medicare-eligible after Jan 1, 2020 (you can\'t — but agents sometimes misrepresent this)</li>
        <li>Switching plans outside of OEP or guaranteed-issue and being denied due to health</li>
        <li>Assuming all Plan G policies are the same (coverage yes, price no)</li>
      </ul>

      <h2>Related Content</h2>
      <ul>
        <li><a href="/compare/medicare-plan-g-vs-plan-n/">Plan G vs Plan N comparison</a></li>
        <li><a href="/compare/medicare-plan-g-vs-plan-f/">Plan G vs Plan F comparison</a></li>
        <li><a href="/compare/medicare-advantage-vs-medigap/">Medicare Advantage vs Medigap</a></li>
        <li><a href="/best/best-medigap-plan-g-carriers/">Best Medigap Plan G carriers</a></li>
        <li><a href="/tools/medigap-premium-estimator/">Medigap Premium Estimator</a></li>
        <li><a href="/medicare/carriers/">Full carrier directory</a></li>
      </ul>
      ${disclaimer}
    `,
    faq: [
      { question: 'Is Plan G or Plan N better?', answer: 'Plan G has higher premiums but zero copays at point of care (after the $240 Part B deductible). Plan N has 20–30% lower premiums but charges up to $20 per office visit and $50 per ER (waived if admitted), plus it doesn\'t cover Part B excess charges. Plan G usually wins for frequent utilizers; Plan N wins for healthy enrollees in states that ban excess charges.' },
      { question: 'Is Plan F still available?', answer: 'Only to people who were Medicare-eligible (turned 65 or received SSDI for 24+ months) before January 1, 2020. New enrollees after that date cannot buy Plan F — they choose Plan G instead, which has identical coverage except for the $240 Part B deductible.' },
      { question: 'Do Medigap plans cover prescription drugs?', answer: 'No. Medigap plans sold today do not include drug coverage. Buy a separate Part D plan to avoid the late-enrollment penalty (1% of the national base premium per month delayed, permanently).' },
      { question: 'Can I have Medigap and Medicare Advantage at the same time?', answer: 'No. Medigap only pays alongside Original Medicare. If you enroll in a Medicare Advantage plan, any Medigap policy you hold cannot pay and you should disenroll from Medigap to stop premiums.' },
      { question: 'Are Medigap plans the same in every state?', answer: 'Plan letters are federally standardized in 47 states. Massachusetts, Minnesota, and Wisconsin have their own state-standardized versions. Premiums and carrier availability vary dramatically by state.' },
      { question: 'Can I switch Medigap carriers later?', answer: 'Yes, but outside of your 6-month Medigap Open Enrollment Period or a guaranteed-issue right, you\'ll be medically underwritten. The carrier can decline you or charge more based on health. Several states (CA, OR, NV, IL, LA, ID, OK, WA) have birthday rules that allow annual switches without underwriting.' },
      { question: 'What happens if my Medigap carrier raises my premium?', answer: 'If you\'re on an attained-age or community-rated plan, rate increases happen periodically. You can switch carriers or plans if you can pass underwriting, move to a lower-cost plan letter (Plan G → Plan N → HD-G), or accept the increase. Reviewing every 2–3 years is a good practice.' },
      { question: 'Do I need Medigap if I travel abroad?', answer: 'Most Medigap plans (C, D, F, G, M, N) cover 80% of foreign travel emergency care up to a $50,000 lifetime maximum, after a $250 per-trip deductible, during the first 60 days of each trip. If you travel internationally often, this benefit alone justifies a letter plan over High-Deductible G.' },
      { question: 'Can I be denied Medigap due to health?', answer: 'Not during your 6-month Medigap Open Enrollment Period or during a guaranteed-issue window. Outside those periods, yes — insurers ask health questions and can decline applicants with conditions like congestive heart failure, recent cancer, diabetes with complications, or COPD.' },
      { question: 'What is the best age to buy Medigap?', answer: 'Age 65 during your Medigap Open Enrollment Period. You lock in the lowest underwriting-free premium and cannot be declined. Waiting even one year past OEP can mean denial or significantly higher premiums.' },
      { question: 'How much does Medigap Plan G cost?', answer: 'Nationally, a 65-year-old nonsmoker in 2026 typically pays $130–$180/month for Plan G, with wide state variation — from ~$130 in the Midwest to ~$240 in New York.' },
      { question: 'Does Medigap cover home health care?', answer: 'Medigap pays Original Medicare\'s cost-sharing for home health services covered under Parts A and B. Medicare home health itself has $0 cost-sharing when criteria are met, so most home health visits are fully covered with or without Medigap.' },
    ],
  },

  // ============================================================
  // 2. Plan G vs Plan N — flagship comparison
  // ============================================================
  {
    path: '/compare/medicare-plan-g-vs-plan-n/',
    content: `
      <h2>Quick Verdict</h2>
      <p><strong>Plan G</strong> is the right choice if you want predictable near-zero out-of-pocket costs, see doctors frequently, or live in a state where providers can bill Part B excess charges. <strong>Plan N</strong> is the right choice if you are healthy, want 20–30% lower premiums, rarely visit the ER, and live in a state that bans excess charges or uses community-rated pricing.</p>
      <p>For the average 65-year-old in good health, annual total cost (premium + copays + deductible) runs roughly even — but Plan N\'s lower premium compounds over time as premiums rise each year with age on attained-age plans.</p>

      <h2>Side-by-Side Comparison</h2>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr><th class="p-2 text-left">Feature</th><th class="p-2">Plan G</th><th class="p-2">Plan N</th></tr></thead>
        <tbody>
          <tr><td class="p-2">Monthly premium (65 yo nonsmoker, US avg)</td><td class="text-center">$130–$180</td><td class="text-center">$95–$140</td></tr>
          <tr><td class="p-2">Part A hospital deductible</td><td class="text-center">Covered</td><td class="text-center">Covered</td></tr>
          <tr><td class="p-2">Part A hospital coinsurance + 365 extra days</td><td class="text-center">Covered</td><td class="text-center">Covered</td></tr>
          <tr><td class="p-2">Skilled nursing facility coinsurance</td><td class="text-center">Covered</td><td class="text-center">Covered</td></tr>
          <tr><td class="p-2">Part B coinsurance (20%)</td><td class="text-center">100% covered</td><td class="text-center">100% covered (after copays)</td></tr>
          <tr><td class="p-2">Part B annual deductible ($240 in 2024)</td><td class="text-center">Not covered</td><td class="text-center">Not covered</td></tr>
          <tr><td class="p-2">Office visit copay</td><td class="text-center">$0</td><td class="text-center">Up to $20</td></tr>
          <tr><td class="p-2">ER copay (if not admitted)</td><td class="text-center">$0</td><td class="text-center">Up to $50</td></tr>
          <tr><td class="p-2">Part B excess charges (up to 15% above Medicare rate)</td><td class="text-center">Covered</td><td class="text-center">Not covered</td></tr>
          <tr><td class="p-2">Foreign travel emergency</td><td class="text-center">80% to $50k lifetime</td><td class="text-center">80% to $50k lifetime</td></tr>
          <tr><td class="p-2">Hospice coinsurance</td><td class="text-center">Covered</td><td class="text-center">Covered</td></tr>
          <tr><td class="p-2">Preventive visit copay</td><td class="text-center">$0</td><td class="text-center">$0</td></tr>
          <tr><td class="p-2">Specialist visit copay</td><td class="text-center">$0</td><td class="text-center">Up to $20</td></tr>
        </tbody>
      </table>

      <h2>Annual Cost Scenarios</h2>
      <p>Below are illustrative annual total costs for a 65-year-old nonsmoker assuming typical national average premiums. Your numbers will vary.</p>
      <h3>Scenario A: Healthy (4 office visits, 0 ER)</h3>
      <ul>
        <li>Plan G: $155/mo × 12 + $240 deductible = <strong>$2,100/year</strong></li>
        <li>Plan N: $115/mo × 12 + $240 deductible + 4 × $20 = <strong>$1,700/year</strong></li>
        <li><strong>Plan N saves ~$400/year</strong></li>
      </ul>
      <h3>Scenario B: Moderate utilizer (10 office visits, 1 ER no admit)</h3>
      <ul>
        <li>Plan G: $2,100/year (unchanged)</li>
        <li>Plan N: $1,380 premium + $240 + 10 × $20 + $50 = <strong>$1,870/year</strong></li>
        <li><strong>Plan N saves ~$230/year</strong></li>
      </ul>
      <h3>Scenario C: Heavy utilizer (18 office visits, 2 specialist, 2 ER)</h3>
      <ul>
        <li>Plan G: $2,100/year (unchanged)</li>
        <li>Plan N: $1,380 + $240 + 20 × $20 + 2 × $50 = <strong>$2,120/year</strong></li>
        <li><strong>Roughly even — Plan G wins if ER/visits climb higher</strong></li>
      </ul>
      ${stat('$240', 'Annual Part B deductible — not covered by either plan', 'Medicare.gov', 'https://www.medicare.gov/')}

      <h2>When Plan N Is Clearly Better</h2>
      <ul>
        <li>You\'re healthy with minimal specialist needs</li>
        <li>You live in CT, MA, MN, NY, OH, PA, RI, or VT (excess charges banned)</li>
        <li>You want to minimize monthly premium outlay</li>
        <li>You\'re willing to tolerate point-of-care copays in exchange for lower fixed costs</li>
      </ul>

      <h2>When Plan G Is Clearly Better</h2>
      <ul>
        <li>You have chronic conditions requiring frequent specialist care</li>
        <li>You travel often to states where excess charges are common (most of the South and West)</li>
        <li>You want maximum predictability — one deductible per year, then zero out-of-pocket</li>
        <li>You prefer to never think about copays</li>
      </ul>

      <h2>Part B Excess Charges Explained</h2>
      <p>When a doctor does not "accept Medicare assignment," they can bill up to 15% above the Medicare-approved amount. These are called Part B excess charges. Eight states ban them entirely (CT, MA, MN, NY, OH, PA, RI, VT). In the other 42 states, excess charges are uncommon in network-heavy specialties but more common with specialists who see many private-pay or concierge patients.</p>
      <p>Plan G covers excess charges. Plan N does not. If you live in a state that bans them, this is a non-issue; if you don\'t, it\'s a real risk to weigh.</p>

      <h2>Long-Term Cost Trajectory</h2>
      <p>Medigap premiums rise every year, driven by medical inflation and — on attained-age plans — your age. Plan N\'s lower starting premium can accumulate into meaningful savings over a 15–20 year Medicare life:</p>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr><th class="p-2 text-left">Age</th><th class="p-2">Plan G premium (avg)</th><th class="p-2">Plan N premium (avg)</th><th class="p-2">Annual difference</th></tr></thead>
        <tbody>
          <tr><td class="p-2">65</td><td class="text-center">$155</td><td class="text-center">$115</td><td class="text-center">$480</td></tr>
          <tr><td class="p-2">70</td><td class="text-center">$185</td><td class="text-center">$140</td><td class="text-center">$540</td></tr>
          <tr><td class="p-2">75</td><td class="text-center">$220</td><td class="text-center">$170</td><td class="text-center">$600</td></tr>
          <tr><td class="p-2">80</td><td class="text-center">$265</td><td class="text-center">$210</td><td class="text-center">$660</td></tr>
          <tr><td class="p-2">85</td><td class="text-center">$315</td><td class="text-center">$255</td><td class="text-center">$720</td></tr>
        </tbody>
      </table>
      <p class="text-xs text-gray-500">Illustrative attained-age national averages. Community-rated and issue-age plans in states like NY, CT, MA have flatter trajectories.</p>

      <h2>Can You Switch from Plan N to Plan G Later?</h2>
      <p>Yes — if you pass medical underwriting. Outside your original 6-month Medigap Open Enrollment Period, moving from Plan N to Plan G (or any upgrade) typically requires underwriting. If you\'ve developed conditions like congestive heart failure, untreated atrial fibrillation, or recent cancer, you may be declined. Eight states allow annual no-underwriting switches under birthday rules (CA, OR, NV, IL, LA, ID, OK, WA).</p>

      <h2>How to Decide</h2>
      <ol>
        <li>Check whether your state bans Part B excess charges. If yes, Plan N becomes significantly more attractive.</li>
        <li>Estimate your annual office visits + ER visits. Plug into the scenarios above.</li>
        <li>Get real quotes from 3–4 carriers for both plans. Premium differences can be 20–40%.</li>
        <li>Check each carrier\'s rate increase history — a low Plan N starting premium with 10% annual increases is a trap.</li>
        <li>Factor in your risk tolerance. Plan G is the "sleep at night" choice; Plan N rewards predictable healthy years.</li>
      </ol>

      <h2>Related</h2>
      <ul>
        <li><a href="/medicare/supplement-plans/">Full Medigap guide</a></li>
        <li><a href="/compare/medicare-plan-g-vs-plan-f/">Plan G vs Plan F</a></li>
        <li><a href="/tools/medigap-premium-estimator/">Medigap Premium Estimator</a></li>
      </ul>
      ${disclaimer}
    `,
  },

  // ============================================================
  // 3. Medicare Advantage — flagship MA page
  // ============================================================
  {
    path: '/medicare/advantage/',
    content: `
      <h2>How Medicare Advantage Works</h2>
      <p>Medicare Advantage (Part C) is a private-plan alternative to Original Medicare. You keep paying your Part B premium, and a private insurer contracts with Medicare to administer your benefits in exchange for a fixed monthly payment per enrollee. The plan takes over claims processing, provider networks, prior authorization, and typically bundles prescription drug coverage (MA-PD) plus extras like dental, vision, and hearing.</p>
      <p>More than half of Medicare beneficiaries are now enrolled in Advantage plans — up from roughly 25% a decade ago. The shift reflects heavy marketing, $0 premium positioning, bundled benefits, and consolidated billing.</p>
      ${stat('54%', 'Eligible Medicare beneficiaries enrolled in Advantage (2024)', 'KFF', 'https://www.kff.org/medicare/')}

      <h2>Plan Types</h2>
      <h3>HMO (Health Maintenance Organization)</h3>
      <p>Network-only (except emergencies). Typically requires PCP and referrals for specialists. Lowest premiums; most restrictive. Common in urban markets where networks are dense.</p>
      <h3>PPO (Preferred Provider Organization)</h3>
      <p>Network preferred but out-of-network care is covered at higher cost. No referrals required. Higher premium than HMO. Common for snowbirds or people who want flexibility.</p>
      <h3>PFFS (Private Fee-for-Service)</h3>
      <p>The plan pays providers on a Medicare-like fee schedule. Any Medicare provider who agrees to the terms can treat you. Less common today.</p>
      <h3>SNP (Special Needs Plan)</h3>
      <p>Designed for specific populations: dual-eligibles (D-SNP), chronic conditions (C-SNP), or institutional residents (I-SNP). Tailored benefits, often low or $0 premium.</p>
      <h3>MSA (Medical Savings Account)</h3>
      <p>High-deductible plan paired with a tax-advantaged savings account. Least common plan type. Appeals to healthy, self-directed enrollees.</p>

      <h2>Medicare Advantage Pros</h2>
      <ul>
        <li><strong>Low or $0 monthly premium</strong> (on top of Part B)</li>
        <li><strong>Built-in annual out-of-pocket maximum</strong> — up to $8,850 in-network in 2024; PPO combined MOOP higher</li>
        <li><strong>Usually includes Part D prescription drug coverage</strong></li>
        <li><strong>Supplemental benefits</strong> — dental, vision, hearing, fitness (SilverSneakers), OTC allowance, meals after discharge, transportation</li>
        <li><strong>Coordinated care</strong> through case managers for high-risk enrollees</li>
        <li><strong>Single ID card, single claim process</strong> — administrative simplicity</li>
      </ul>

      <h2>Medicare Advantage Cons</h2>
      <ul>
        <li><strong>Network restrictions</strong> — seeing an out-of-network provider means higher costs or no coverage (except emergencies)</li>
        <li><strong>Prior authorization</strong> — frequent for imaging, specialty care, post-acute care, specialty drugs; can delay treatment</li>
        <li><strong>Annual benefit changes</strong> — plans can change networks, formularies, copays, and benefits every January</li>
        <li><strong>State/county availability</strong> — plan can leave your service area mid-year if service-area change is approved by CMS, or next year during renewal</li>
        <li><strong>Switching back to Original + Medigap later</strong> — outside of Medigap OEP or guaranteed-issue windows, Medigap requires underwriting. A chronic condition diagnosed while on Advantage can make you uninsurable for Medigap.</li>
        <li><strong>Provider participation churn</strong> — your PCP or specialist may leave your plan network mid-year</li>
      </ul>

      <h2>Star Ratings</h2>
      <p>CMS rates every Medicare Advantage plan on a 1-to-5 scale based on 40+ quality and satisfaction measures, including clinical outcomes, customer service, member complaints, and preventive care. 5-star plans are rare; most plans cluster at 3.5 to 4.5 stars. You can switch TO a 5-star plan anytime using the 5-Star Special Enrollment Period.</p>

      <h2>Supplemental Benefits in Detail</h2>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr><th class="p-2 text-left">Benefit</th><th class="p-2">What it typically covers</th></tr></thead>
        <tbody>
          <tr><td class="p-2">Dental</td><td class="p-2">Cleanings, exams, X-rays, basic fillings; some plans include crowns and dentures up to an annual cap</td></tr>
          <tr><td class="p-2">Vision</td><td class="p-2">Annual eye exam, glasses or contact allowance</td></tr>
          <tr><td class="p-2">Hearing</td><td class="p-2">Hearing exam and hearing aid allowance (the top reason many retirees choose MA)</td></tr>
          <tr><td class="p-2">Fitness</td><td class="p-2">SilverSneakers, Renew Active, or similar gym membership program</td></tr>
          <tr><td class="p-2">OTC allowance</td><td class="p-2">$25–$250/quarter for over-the-counter drugs, first aid, health supplies</td></tr>
          <tr><td class="p-2">Meals</td><td class="p-2">14–28 meals after hospital discharge</td></tr>
          <tr><td class="p-2">Transportation</td><td class="p-2">Non-emergency medical rides, limited trips per year</td></tr>
          <tr><td class="p-2">Home care</td><td class="p-2">Certain plans offer limited in-home personal care hours</td></tr>
        </tbody>
      </table>

      <h2>Prior Authorization Reality</h2>
      <p>CMS and OIG studies have found that Medicare Advantage plans deny care that Original Medicare would cover in a meaningful minority of cases. A 2022 OIG report found that 13% of prior authorization denials met Medicare coverage criteria. Most denials are overturned on appeal — but appeals take time, and many enrollees give up. Before choosing an Advantage plan, review the plan\'s prior-authorization frequency and timeliness metrics.</p>

      <h2>Enrollment Windows</h2>
      <ul>
        <li><strong>Initial Enrollment Period</strong> — when you first sign up for Medicare</li>
        <li><strong>Annual Election Period (AEP)</strong> — October 15 to December 7 each year. Switch between Advantage plans, switch to Original Medicare, or change Part D plans. Changes effective January 1.</li>
        <li><strong>Medicare Advantage Open Enrollment (MA-OEP)</strong> — January 1 to March 31. One change: from Advantage to Original, or to a different Advantage plan.</li>
        <li><strong>Special Enrollment Periods (SEPs)</strong> — triggered by qualifying events: move, loss of coverage, Medicaid eligibility change, 5-star plan availability.</li>
      </ul>

      <h2>Switching Back to Original Medicare</h2>
      <p>You can leave Medicare Advantage during AEP or MA-OEP. If you had a Medigap trial right (first-ever MA enrollment within 12 months), you have guaranteed-issue back to Medigap. Outside that window, you\'ll be medically underwritten for Medigap — a significant trap for people who enrolled in Advantage at 65 and later developed health issues.</p>

      <h2>Who Should Choose Medicare Advantage</h2>
      <ul>
        <li>Budget-conscious, currently healthy enrollees</li>
        <li>Your doctors and preferred hospitals are in-network</li>
        <li>You want bundled dental/vision/hearing without buying separate policies</li>
        <li>You live in a single area (not a snowbird)</li>
        <li>You\'re comfortable with prior-authorization processes</li>
        <li>Dual-eligibles benefit strongly from D-SNPs with expanded OTC/food benefits</li>
      </ul>

      <h2>Who Should Avoid Medicare Advantage</h2>
      <ul>
        <li>Snowbirds and frequent travelers (unless a true national PPO)</li>
        <li>Complex chronic conditions needing multiple specialists</li>
        <li>Rural residents with limited in-network specialists</li>
        <li>People who highly value predictable, stable coverage</li>
        <li>Beneficiaries who would be unable to pass Medigap underwriting later</li>
      </ul>

      <h2>Common Advantage Mistakes to Avoid</h2>
      <ul>
        <li>Not checking whether your specific doctors are in-network before enrolling</li>
        <li>Ignoring the formulary when you have expensive drugs</li>
        <li>Assuming dental/vision benefits are generous without reading the EOC</li>
        <li>Missing AEP to switch when your doctors leave the network</li>
        <li>Enrolling at 65 and losing guaranteed-issue Medigap rights later</li>
      </ul>

      <h2>Related</h2>
      <ul>
        <li><a href="/compare/medicare-advantage-vs-medigap/">Medicare Advantage vs Medigap</a></li>
        <li><a href="/compare/original-medicare-vs-medicare-advantage/">Original Medicare vs Medicare Advantage</a></li>
        <li><a href="/best/best-medicare-advantage-plans/">Best Medicare Advantage plans</a></li>
        <li><a href="/best/best-d-snp-plans/">Best D-SNP plans</a></li>
      </ul>
      ${disclaimer}
    `,
  },

  // ============================================================
  // 4. Medicare Advantage vs Medigap — flagship comparison
  // ============================================================
  {
    path: '/compare/medicare-advantage-vs-medigap/',
    content: `
      <h2>The Core Trade-off</h2>
      <p>Every Medicare-eligible American chooses between two paths: Medicare Advantage (Part C) or Original Medicare + Medigap + Part D. Neither is objectively better. Medicare Advantage minimizes monthly premium and caps in-network out-of-pocket costs at the price of networks, prior authorization, and annual benefit changes. Original Medicare + Medigap costs more monthly but gives nationwide provider access, no prior authorization, and predictable benefits that don\'t change each January.</p>
      <p>The right answer depends on health, budget, geographic footprint, provider preferences, and risk tolerance.</p>

      <h2>At-a-Glance Comparison</h2>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr><th class="p-2 text-left">Feature</th><th class="p-2">Medicare Advantage</th><th class="p-2">Medigap + Original Medicare + Part D</th></tr></thead>
        <tbody>
          <tr><td class="p-2">Monthly premium (beyond Part B)</td><td class="text-center">$0–$50</td><td class="text-center">$170–$250+</td></tr>
          <tr><td class="p-2">Provider access</td><td class="text-center">Network only (HMO) or preferred (PPO)</td><td class="text-center">Any Medicare provider nationwide</td></tr>
          <tr><td class="p-2">Prior authorization</td><td class="text-center">Common</td><td class="text-center">Rare</td></tr>
          <tr><td class="p-2">Referrals to specialists</td><td class="text-center">Often required (HMO)</td><td class="text-center">Not required</td></tr>
          <tr><td class="p-2">Drug coverage</td><td class="text-center">Usually included (MA-PD)</td><td class="text-center">Separate Part D plan</td></tr>
          <tr><td class="p-2">Dental/vision/hearing</td><td class="text-center">Often included</td><td class="text-center">Separate policies</td></tr>
          <tr><td class="p-2">Annual in-network OOP max</td><td class="text-center">Up to $8,850 (2024)</td><td class="text-center">Effectively $0–$240</td></tr>
          <tr><td class="p-2">Coverage stability</td><td class="text-center">Can change each January</td><td class="text-center">Standardized, guaranteed renewable</td></tr>
          <tr><td class="p-2">Coverage when traveling</td><td class="text-center">Emergency only out-of-network (PPOs more flexible)</td><td class="text-center">Full coverage anywhere Medicare is accepted</td></tr>
          <tr><td class="p-2">Switching later</td><td class="text-center">Easy (AEP or MA-OEP)</td><td class="text-center">Medigap requires underwriting outside OEP/GI</td></tr>
          <tr><td class="p-2">Best for</td><td class="text-center">Healthy, budget-first, local</td><td class="text-center">Chronic conditions, travelers, stability seekers</td></tr>
        </tbody>
      </table>

      <h2>Cost Comparison by Utilization</h2>
      <p>Monthly premium comparisons oversimplify the decision. Total annual cost depends on utilization. Below are illustrative annual totals for a 67-year-old enrollee.</p>
      <h3>Low utilizer (4 doctor visits, 0 hospital, 4 routine drugs)</h3>
      <ul>
        <li>Advantage (typical $0 premium + $200 drug copays + $400 in-network copays) = <strong>~$600/year</strong> on top of Part B</li>
        <li>Medigap Plan G + Part D ($180 × 12 + $40 × 12 + $240 deductible) = <strong>~$2,880/year</strong> on top of Part B</li>
        <li><strong>MA wins by ~$2,300/year</strong></li>
      </ul>
      <h3>Moderate utilizer (specialist x6, imaging x2, ER x1, 6 drugs)</h3>
      <ul>
        <li>Advantage (+ $200 drug + $1,100 copays + $400 specialist) = <strong>~$1,700/year</strong></li>
        <li>Medigap + Part D = <strong>~$2,880/year</strong></li>
        <li><strong>MA wins by ~$1,180/year</strong></li>
      </ul>
      <h3>Heavy utilizer (hospitalization, chemo, specialty drugs)</h3>
      <ul>
        <li>Advantage: likely hits in-network MOOP ($8,850) = <strong>~$8,850/year</strong></li>
        <li>Medigap + Part D: Plan G deductible + Part D specialty tier = <strong>~$4,900/year</strong> ($2,880 premium + $240 Part B ded + $1,780 toward $2,000 Part D cap)</li>
        <li><strong>Medigap wins by ~$3,950/year</strong> AND eliminates network/prior-auth friction during serious illness</li>
      </ul>
      ${stat('$8,850', 'Maximum in-network out-of-pocket under Medicare Advantage (2024)', 'CMS.gov', 'https://www.cms.gov/')}

      <h2>Provider Access and Networks</h2>
      <p>Original Medicare + Medigap works with any Medicare provider anywhere in the US — roughly 95% of active physicians. Medicare Advantage HMOs restrict you to a county-level network; PPOs allow out-of-network at higher cost. Network adequacy varies dramatically — urban areas have dense networks, rural often sparse.</p>
      <p>For snowbirds, travelers, or anyone who splits time between states, Original + Medigap is nearly always the better path because coverage behaves identically in any state.</p>

      <h2>Prior Authorization: A Major Friction Factor</h2>
      <p>Medicare Advantage plans require prior authorization for a substantial share of high-cost services — imaging, specialty care, skilled nursing facility admissions, specialty drugs. Original Medicare does not. When a beneficiary with a new cancer diagnosis needs an urgent MRI, prior authorization can add 3–14 days of delay. A 2023 KFF survey found that 99% of MA enrollees are in plans requiring prior auth for at least some services.</p>

      <h2>Stability and Year-Over-Year Risk</h2>
      <p>Medicare Advantage plans can change networks, formularies, copays, and benefits every January. A stable relationship with your oncologist could end if your oncologist leaves the plan network at year-end. Medigap benefits are federally standardized and guaranteed renewable — Plan G today will cover the same gaps Plan G covered 10 years ago.</p>

      <h2>The Switching Trap</h2>
      <p>Enrolling in Medicare Advantage at 65 is reversible — but only up to a point. Your 6-month Medigap Open Enrollment Period ends 6 months after you enroll in Part B. After that, Medigap applications outside of guaranteed-issue windows require medical underwriting. If you develop diabetes, cancer, or heart disease while on Advantage, you may be unable to pass underwriting back into Medigap. For that reason, many advisors suggest starting with Medigap at 65 if affordable.</p>

      <h2>Who Should Choose Medicare Advantage</h2>
      <ul>
        <li>Healthy enrollees with low anticipated utilization</li>
        <li>Budget-first buyers who need to minimize monthly premium</li>
        <li>People whose preferred providers are in the plan network</li>
        <li>Enrollees who want bundled dental/vision/hearing benefits</li>
        <li>Dual-eligibles (Medicare + Medicaid) who benefit from D-SNPs</li>
      </ul>

      <h2>Who Should Choose Medigap + Original Medicare</h2>
      <ul>
        <li>Snowbirds or frequent travelers</li>
        <li>People with chronic conditions requiring multiple specialists</li>
        <li>Rural residents with limited in-network providers</li>
        <li>Anyone who highly values stability and predictability</li>
        <li>Beneficiaries who might later be unable to pass Medigap underwriting</li>
      </ul>

      <h2>Hybrid and Annual Review</h2>
      <p>Whichever path you choose, review annually during AEP (October 15 – December 7). Medicare Advantage plans change benefits; Part D plans change formularies; Medigap carriers raise premiums. A 30-minute review each October prevents significant cost and access surprises.</p>

      <h2>Related</h2>
      <ul>
        <li><a href="/medicare/supplement-plans/">Full Medigap guide</a></li>
        <li><a href="/medicare/advantage/">Medicare Advantage deep dive</a></li>
        <li><a href="/compare/original-medicare-vs-medicare-advantage/">Original Medicare vs Advantage</a></li>
        <li><a href="/tools/medicare-cost-calculator/">Medicare Cost Calculator</a></li>
      </ul>
      ${disclaimer}
    `,
  },

  // ============================================================
  // 5. How to Choose a Nursing Home — flagship NH guide
  // ============================================================
  {
    path: '/nursing-homes/how-to-choose/',
    content: `
      <h2>The 4-Step Framework</h2>
      <ol>
        <li><strong>Shortlist</strong> using Medicare\'s Care Compare tool — focus on 4- and 5-star facilities with strong Staffing sub-ratings.</li>
        <li><strong>Read</strong> the latest state inspection report (Form 2567). Look for repeat citations or scope-and-severity grade G or higher.</li>
        <li><strong>Visit</strong> every shortlisted facility at least twice — one weekday meal, one weekend or evening shift.</li>
        <li><strong>Verify</strong> payment acceptance, admission criteria, and discharge policies before signing.</li>
      </ol>

      <h2>Step 1 — Shortlist Using Care Compare</h2>
      <p>Medicare\'s Care Compare tool (formerly Nursing Home Compare) publishes the CMS Five-Star Quality Rating for every Medicare-certified nursing home in the US. Start there, filter by ZIP, and sort by Overall Rating. Pay particular attention to the <em>Staffing</em> sub-rating — research consistently shows that staffing is the single best predictor of resident outcomes.</p>
      ${stat('5', 'Maximum CMS star rating (Overall, Health Inspections, Staffing, Quality)', 'Medicare.gov', 'https://www.medicare.gov/care-compare/')}
      <h3>What the Stars Mean</h3>
      <ul>
        <li><strong>Overall Star Rating</strong> — starts with Health Inspections, adjusts up or down based on Staffing and Quality Measures</li>
        <li><strong>Health Inspections</strong> — three most recent state surveys, weighted toward the most recent</li>
        <li><strong>Staffing</strong> — RN hours, total nurse staffing hours per resident per day, case-mix adjusted, plus staff turnover</li>
        <li><strong>Quality Measures</strong> — 15 MDS-based clinical indicators: falls, pressure ulcers, antipsychotic use, hospitalizations, pain, mobility</li>
      </ul>
      <h3>Red Flags on Care Compare</h3>
      <ul>
        <li>Red hand icon — recent citation for abuse, neglect, or exploitation</li>
        <li>1- or 2-star overall rating with declining trend</li>
        <li>Staffing rating of 1 or 2</li>
        <li>High Special Focus Facility (SFF) designation or SFF candidate status</li>
        <li>Annual nurse turnover above 60%</li>
        <li>RN hours per resident day under 30 minutes</li>
      </ul>

      <h2>Step 2 — Read the Latest State Inspection Report</h2>
      <p>Every facility\'s most recent state survey (and two preceding surveys) is public on Care Compare. The report — called Form 2567 — lists every deficiency cited, categorized on a "scope and severity" grid from A (isolated potential harm) to L (widespread immediate jeopardy).</p>
      <h3>What to Look For</h3>
      <ul>
        <li><strong>Repeat citations</strong> across multiple survey cycles — shows a systemic problem the facility hasn\'t fixed</li>
        <li><strong>Grade G or higher</strong> — actual harm to residents</li>
        <li><strong>Immediate jeopardy</strong> (grades J, K, L) — serious harm or risk of death</li>
        <li><strong>Substantial compliance</strong> — the facility\'s claim it has corrected cited issues</li>
      </ul>
      <h3>What\'s Normal</h3>
      <p>Most nursing homes get some citations every survey cycle — the federal list of potential deficiencies has over 180 items. A handful of low-grade citations is typical. The quality of problems matters more than the count.</p>

      <h2>Step 3 — Visit Every Shortlisted Facility</h2>
      <p>Online ratings cannot replace in-person observation. Visit twice:</p>
      <ul>
        <li><strong>Weekday meal visit</strong> — observe dining room, odors, call-light response, resident engagement, food quality, staff interactions</li>
        <li><strong>Weekend or evening visit</strong> — staffing is typically lightest; this reveals the true service level</li>
      </ul>
      <h3>What to Observe</h3>
      <table class="w-full border border-gray-300 text-sm my-6">
        <thead class="bg-brand-mist"><tr><th class="p-2 text-left">Area</th><th class="p-2 text-left">What good looks like</th><th class="p-2 text-left">Red flags</th></tr></thead>
        <tbody>
          <tr><td class="p-2">Entry / common areas</td><td class="p-2">Clean, no strong odors, residents out of rooms, engaged</td><td class="p-2">Urine or feces odor, residents parked alone, neglected spaces</td></tr>
          <tr><td class="p-2">Dining</td><td class="p-2">Family-style seating, staff assisting those who need help, appetizing food</td><td class="p-2">Residents being rushed, food left untouched, no staff in dining room</td></tr>
          <tr><td class="p-2">Bathrooms</td><td class="p-2">Clean, grab bars, raised toilets</td><td class="p-2">Unclean, missing safety equipment</td></tr>
          <tr><td class="p-2">Call-light response</td><td class="p-2">Under 5 minutes consistently</td><td class="p-2">10+ minutes, lights going unanswered</td></tr>
          <tr><td class="p-2">Staff-resident interactions</td><td class="p-2">Staff know residents by name, make eye contact, smile</td><td class="p-2">Staff rushing past, treating residents as tasks</td></tr>
          <tr><td class="p-2">Resident appearance</td><td class="p-2">Groomed, dressed, dignified</td><td class="p-2">Disheveled, in gowns during day, unattended</td></tr>
        </tbody>
      </table>

      <h2>Step 4 — Interview Staff and Administration</h2>
      <h3>Ask the Director of Nursing / Administrator</h3>
      <ul>
        <li>What is your RN-to-resident ratio on day, evening, and night shifts?</li>
        <li>What is your annual staff turnover? (Industry average ~50%; under 35% is excellent)</li>
        <li>What percent of your residents are on antipsychotic medications? (National average ~15%; lower is better)</li>
        <li>What is your 30-day hospital readmission rate?</li>
        <li>How are care plans developed and reviewed? May family attend?</li>
        <li>What is the pressure ulcer incidence rate?</li>
        <li>How does the facility handle grievances?</li>
      </ul>
      <h3>Ask Residents and Families (if permitted)</h3>
      <ul>
        <li>How responsive is the staff when you need help?</li>
        <li>Is the food reliably good?</li>
        <li>Do care plan meetings feel meaningful?</li>
        <li>Would you choose this facility again?</li>
      </ul>

      <h2>Understanding Payment</h2>
      <h3>Medicare (Skilled Care Only)</h3>
      <p>Medicare covers up to 100 days of skilled nursing care per benefit period after a qualifying 3-day inpatient hospital stay. Days 1–20 are $0; days 21–100 have a daily copay ($204 in 2024). Medicare does NOT cover long-term custodial care.</p>
      <h3>Medicaid (Long-Term Custodial Care)</h3>
      <p>Medicaid covers long-term nursing home care for enrollees who meet both medical (nursing-home level of care) and financial (strict asset and income) criteria. Rules vary by state. The 5-year look-back on asset transfers applies.</p>
      <h3>Private Pay and LTC Insurance</h3>
      <p>US median semi-private room cost is about $8,929/month (Genworth 2023); private rooms typically cost 10–15% more. Long-term care insurance pays a daily benefit toward care once you need help with 2+ ADLs or have cognitive impairment. Hybrid life/LTC policies avoid "use it or lose it" risk.</p>
      <h3>Veterans Benefits</h3>
      <p>VA Aid & Attendance pays up to $2,727/month for eligible wartime veterans; VA community living centers are another option.</p>

      <h2>Resident Rights</h2>
      <p>Every nursing home resident has federally protected rights:</p>
      <ul>
        <li>Dignity, privacy, and freedom from abuse or unreasonable restraint</li>
        <li>Participation in their own care planning</li>
        <li>Access to visitors and communication</li>
        <li>Privacy for medical, mental, and financial affairs</li>
        <li>Informed consent for treatment</li>
        <li>The right to file grievances without retaliation</li>
        <li>Protection from involuntary discharge or transfer except under six specific grounds</li>
      </ul>
      <p>The long-term care ombudsman in your state is the primary advocate if rights are violated. Find yours through the Administration for Community Living.</p>

      <h2>Related</h2>
      <ul>
        <li><a href="/nursing-homes/ratings/">CMS Five-Star Ratings explained</a></li>
        <li><a href="/guides/nursing-home-checklist/">Printable visit checklist</a></li>
        <li><a href="/compare/nursing-home-vs-assisted-living/">Nursing Home vs Assisted Living</a></li>
        <li><a href="/tools/nursing-home-cost-calculator/">Nursing Home Cost Calculator</a></li>
        <li><a href="/medicaid/">Medicaid long-term care planning</a></li>
      </ul>
      ${disclaimer}
    `,
    faq: [
      { question: 'What is the single best indicator of nursing home quality?', answer: 'Registered nurse staffing hours per resident per day. Research consistently links higher RN staffing to lower hospitalization, pressure ulcer, and mortality rates. On Care Compare, the Staffing sub-rating captures this.' },
      { question: 'Should I rule out a 3-star facility?', answer: 'Not automatically. Read the inspection report — the quality of problems matters more than the count. A 3-star with only low-grade citations in a recent cycle may have stabilized; a 4-star with repeat grade G citations is more concerning than the stars suggest.' },
      { question: 'How much does a nursing home cost?', answer: 'The US median is about $8,929/month for a semi-private room and $10,025/month for a private room (Genworth 2023 Cost of Care Survey). New York, New Jersey, Alaska, Connecticut, and Massachusetts run $12,000+ per month.' },
      { question: 'Who pays for nursing home care?', answer: 'Medicaid covers long-term custodial care for those who qualify financially and medically. Medicare only covers up to 100 days of skilled care after a qualifying hospital stay. Private pay and long-term care insurance fill the rest for those without Medicaid eligibility.' },
      { question: 'Can a nursing home evict a resident?', answer: 'Only under six specific federal grounds with 30-day written notice and appeal rights: the resident no longer needs the services, the facility can no longer meet needs, the resident\'s presence endangers others, nonpayment after reasonable notice, facility closure, or the resident\'s safety cannot be protected in the facility.' },
      { question: 'What is antipsychotic medication use, and why does it matter?', answer: 'CMS tracks the percent of residents on antipsychotic medications because these drugs carry black-box warnings for mortality in dementia patients. High-quality facilities use them only as a last resort after non-pharmacologic interventions. National average is ~15%; lower is better.' },
      { question: 'What is "scope and severity" on inspection reports?', answer: 'A grid from A (isolated potential for minimal harm) to L (widespread immediate jeopardy). Grade G and above indicates actual harm to residents; grades J, K, and L indicate immediate jeopardy. Repeat G+ citations across survey cycles are a major red flag.' },
      { question: 'What is a Special Focus Facility (SFF)?', answer: 'A CMS designation for nursing homes with a history of serious quality issues. SFF status means the facility is surveyed twice as often as average. SFF and "SFF candidate" lists are public on Care Compare; avoid these unless you know the facility has improved meaningfully.' },
      { question: 'How important is staff turnover?', answer: 'Extremely. High turnover correlates with worse resident outcomes. Industry average is around 50% annually; under 35% is excellent. CMS publishes turnover data as part of the Staffing rating since 2022.' },
      { question: 'Can I visit unannounced?', answer: 'Yes — unannounced visits are often more revealing than scheduled tours. Most facilities allow family visits during reasonable hours. If you\'re denied entry without clear infection-control reasons, that itself is a red flag.' },
      { question: 'What is an ombudsman and when should I call one?', answer: 'The long-term care ombudsman is a state-based advocate for nursing home residents. Call if you witness abuse, neglect, rights violations, or unresolved quality concerns. Ombudsman contact info is posted in every facility and at acl.gov.' },
      { question: 'What\'s the difference between Medicare skilled care and long-term care?', answer: 'Skilled care is time-limited rehabilitation following a hospital stay — physical therapy, IV therapy, wound care. Long-term care (custodial care) is ongoing help with activities of daily living over months or years. Medicare covers skilled; Medicaid covers long-term for those who qualify.' },
    ],
  },
]
