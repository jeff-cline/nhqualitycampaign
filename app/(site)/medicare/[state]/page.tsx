import { notFound } from 'next/navigation'
import { STATES, stateSlug, type StateInfo } from '@/data/states'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'
import { SITE_URL } from '@/lib/utils'

type Params = Promise<{ state: string }>

export async function generateStaticParams() {
  return STATES.map((s) => ({ state: stateSlug(s) }))
}

function find(slug: string): StateInfo | undefined {
  return STATES.find((s) => stateSlug(s) === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { state } = await params
  const s = find(state)
  if (!s) return {}
  return {
    title: `${s.name} Medicare Guide 2026: Plans, Costs, and Enrollment`,
    description: `Complete guide to Medicare in ${s.name} — Medigap premiums, Medicare Advantage penetration, enrollment windows, and SHIP counselor contacts.`,
    alternates: { canonical: `/medicare/${state}/` },
  }
}

export default async function StateMedicarePage({ params }: { params: Params }) {
  const { state } = await params
  const s = find(state)
  if (!s) notFound()

  const title = `Medicare in ${s.name}: 2026 Guide`
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Medicare', href: '/medicare/' },
    { name: s.name, href: `/medicare/${state}/` },
  ]
  const quick = `About ${s.medicareEnrolleesM.toFixed(2)} million ${s.name} residents are on Medicare. The typical Plan G Medigap premium for a 65-year-old nonsmoker is around $${s.planGMedianMo}/month, and ${s.maPenetrationPct}% of eligible beneficiaries are enrolled in Medicare Advantage.`

  const faq = [
    { question: `When can I enroll in Medicare in ${s.name}?`, answer: `Your 7-month Initial Enrollment Period begins 3 months before the month you turn 65 and ends 3 months after. ${s.name} follows federal Medicare enrollment rules; SHIP counselors at ${s.shipPhone} can walk you through timing.` },
    { question: `What is the average Medigap Plan G premium in ${s.name}?`, answer: `A 65-year-old nonsmoker in ${s.name} typically pays around $${s.planGMedianMo}/month for Plan G. Your actual premium depends on carrier, tobacco use, and sometimes ZIP code.` },
    { question: `How many nursing homes are in ${s.name}?`, answer: `${s.name} has approximately ${s.snfFacilities.toLocaleString()} Medicare-certified nursing homes. About ${s.snfFiveStarPct}% carry an Overall 5-star CMS rating.` },
    { question: `Who regulates nursing homes in ${s.name}?`, answer: `${s.surveyAgency} conducts state surveys on behalf of CMS. The long-term care ombudsman (${s.ombudsmanPhone}) advocates for residents.` },
    { question: `What is the median nursing home cost in ${s.name}?`, answer: `The median semi-private room runs about $${s.medianSnfSemiMo.toLocaleString()}/month; assisted living about $${s.medianAlMo.toLocaleString()}/month (Genworth Cost of Care Survey benchmarks).` },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Medicare · {s.capital}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{title}</h1>
        <QuickAnswer text={quick} />

        <section className="prose-article">
          <h2>{s.name} Medicare at a Glance</h2>
          <p>{s.notable}</p>
          <table className="w-full border border-gray-300 text-sm my-6">
            <thead className="bg-brand-mist">
              <tr><th className="p-2 text-left">Metric</th><th className="p-2 text-left">Value (2026)</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-2">Medicare enrollees</td><td className="p-2">{s.medicareEnrolleesM.toFixed(2)} million</td></tr>
              <tr><td className="p-2">Medicare Advantage penetration</td><td className="p-2">{s.maPenetrationPct}%</td></tr>
              <tr><td className="p-2">Typical Plan G (65 yo nonsmoker)</td><td className="p-2">${s.planGMedianMo}/month</td></tr>
              <tr><td className="p-2">Nursing homes (Medicare-certified)</td><td className="p-2">{s.snfFacilities.toLocaleString()}</td></tr>
              <tr><td className="p-2">5-star nursing homes</td><td className="p-2">{s.snfFiveStarPct}%</td></tr>
              <tr><td className="p-2">Median SNF semi-private room</td><td className="p-2">${s.medianSnfSemiMo.toLocaleString()}/month</td></tr>
              <tr><td className="p-2">Median assisted living</td><td className="p-2">${s.medianAlMo.toLocaleString()}/month</td></tr>
            </tbody>
          </table>

          <h2>Your Medicare Choices in {s.name}</h2>
          <p>Every Medicare-eligible resident chooses between two paths:</p>
          <ul>
            <li><strong>Original Medicare + Medigap + Part D</strong> — any-doctor access, stable benefits, higher premium.</li>
            <li><strong>Medicare Advantage (Part C)</strong> — bundled benefits, often $0 premium, but networks and prior auth.</li>
          </ul>
          <p>About {s.maPenetrationPct}% of {s.name}&#39;s Medicare enrollees choose Advantage. Your best path depends on your doctors, travel patterns, health, and budget.</p>

          <h2>Medigap in {s.name}</h2>
          <p>Medigap is federally standardized across all states except Massachusetts, Minnesota, and Wisconsin — so Plan G in {s.name} is the same coverage as Plan G anywhere else in the country. What differs is premium and carrier availability.</p>
          <ul>
            <li>Typical 65-year-old nonsmoker Plan G: <strong>${s.planGMedianMo}/month</strong></li>
            <li>Plan N averages 20–30% less</li>
            <li>Your one-time Medigap Open Enrollment is the 6 months beginning when you&#39;re 65+ AND enrolled in Part B</li>
          </ul>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />

        <section className="prose-article">
          <h2>Nursing Home Quality in {s.name}</h2>
          <p>
            {s.name} has {s.snfFacilities.toLocaleString()} Medicare-certified nursing homes; {s.snfFiveStarPct}% carry a 5-star Overall CMS rating.
            Before choosing a facility, check its <a href="https://www.medicare.gov/care-compare/" rel="nofollow noopener" target="_blank">Medicare Care Compare</a> listing, read the most recent state inspection report,
            and visit in person on both a weekday meal and a weekend shift. Oversight agency: {s.surveyAgency}.
          </p>
          <ul>
            <li>SHIP (free Medicare counseling): <strong>{s.shipPhone}</strong></li>
            <li>State long-term care ombudsman: <strong>{s.ombudsmanPhone}</strong></li>
          </ul>

          <h2>Related Resources</h2>
          <ul>
            <li><a href={`/nursing-homes/${state}/`}>Nursing homes in {s.name}</a></li>
            <li><a href={`/senior-care/${state}/assisted-living/`}>Assisted living in {s.name}</a></li>
            <li><a href="/medicare/supplement-plans/">Medicare Supplement (Medigap) guide</a></li>
            <li><a href="/compare/medicare-advantage-vs-medigap/">Medicare Advantage vs Medigap</a></li>
            <li><a href="/tools/medicare-cost-calculator/">Medicare cost calculator</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Figures are approximate 2026 benchmarks. Not affiliated with the U.S. government or the federal Medicare program. Consult a licensed agent or SHIP counselor before making decisions.</p>
        </section>

        <FAQBlock items={faq} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              articleSchema({
                path: `/medicare/${state}/`,
                title,
                metaDesc: `${s.name} Medicare guide — Medigap, Advantage, nursing home quality, ombudsman contacts.`,
                pageType: 'STATE',
                updatedAt: new Date(),
              })
            ),
          }}
        />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <div className="bg-brand-mist border border-gray-200 rounded p-4 text-sm">
          <div className="font-semibold text-brand-navy mb-2">Other {s.name} Guides</div>
          <ul className="space-y-1">
            <li><a className="text-brand-teal" href={`/nursing-homes/${state}/`}>Nursing homes</a></li>
            <li><a className="text-brand-teal" href={`/senior-care/${state}/assisted-living/`}>Assisted living</a></li>
          </ul>
        </div>
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
