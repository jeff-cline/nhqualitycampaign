import { notFound } from 'next/navigation'
import { STATES, stateSlug, type StateInfo } from '@/data/states'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { articleSchema, jsonLd } from '@/lib/schema'

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
    title: `${s.name} Nursing Homes: Quality Ratings, Costs & How to Choose`,
    description: `How to choose a nursing home in ${s.name} — CMS Five-Star ratings, median costs, state survey agency, ombudsman contact.`,
    alternates: { canonical: `/nursing-homes/${state}/` },
  }
}

export default async function StateNursingPage({ params }: { params: Params }) {
  const { state } = await params
  const s = find(state)
  if (!s) notFound()

  const title = `${s.name} Nursing Homes: 2026 Quality Guide`
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Nursing Homes', href: '/nursing-homes/' },
    { name: s.name, href: `/nursing-homes/${state}/` },
  ]
  const quick = `${s.name} has ${s.snfFacilities.toLocaleString()} Medicare-certified nursing homes; ${s.snfFiveStarPct}% carry a 5-star Overall CMS rating. Median cost for a semi-private room is about $${s.medianSnfSemiMo.toLocaleString()}/month. Quality is regulated by ${s.surveyAgency}.`

  const faq = [
    { question: `How many nursing homes are in ${s.name}?`, answer: `Approximately ${s.snfFacilities.toLocaleString()} Medicare-certified nursing homes operate in ${s.name}, with ${s.snfFiveStarPct}% rated 5 stars Overall by CMS.` },
    { question: `How much does a nursing home cost in ${s.name}?`, answer: `The median semi-private room cost is about $${s.medianSnfSemiMo.toLocaleString()} per month (Genworth Cost of Care Survey benchmarks). Private rooms typically cost 10–15% more.` },
    { question: `Who regulates nursing homes in ${s.name}?`, answer: `${s.surveyAgency} conducts state surveys on behalf of CMS. You can view every facility's latest inspection report on Medicare Care Compare.` },
    { question: `Who advocates for ${s.name} nursing home residents?`, answer: `The state long-term care ombudsman (${s.ombudsmanPhone}) is the primary advocate. Contact them if you have concerns about quality, rights, or discharge.` },
    { question: `Does Medicare pay for long-term nursing home care in ${s.name}?`, answer: `No. Medicare covers up to 100 days of skilled care after a qualifying hospital stay. Long-term custodial care is paid out-of-pocket, by long-term care insurance, or by Medicaid for those who qualify.` },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Nursing Homes · {s.capital}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{title}</h1>
        <QuickAnswer text={quick} />

        <section className="prose-article">
          <h2>Choosing a {s.name} Nursing Home in 4 Steps</h2>
          <ol>
            <li><strong>Start at <a href="https://www.medicare.gov/care-compare/" target="_blank" rel="nofollow noopener">Medicare Care Compare</a></strong>. Filter by ZIP, sort by Overall Rating, focus on 4–5 star facilities with strong Staffing sub-ratings.</li>
            <li><strong>Read the inspection report</strong> (Form 2567). Look for repeat citations or scope-and-severity grade G or higher.</li>
            <li><strong>Visit twice</strong> — one weekday meal, one weekend or evening. Note call-light response, odors, resident engagement, and food.</li>
            <li><strong>Interview staff</strong> — nurse-to-resident ratios per shift, annual turnover, antipsychotic use rate, and care planning process.</li>
          </ol>

          <h2>{s.name} Nursing Home Numbers</h2>
          <table className="w-full border border-gray-300 text-sm my-6">
            <thead className="bg-brand-mist"><tr><th className="p-2 text-left">Metric</th><th className="p-2 text-left">Value</th></tr></thead>
            <tbody>
              <tr><td className="p-2">Medicare-certified facilities</td><td className="p-2">{s.snfFacilities.toLocaleString()}</td></tr>
              <tr><td className="p-2">5-star Overall rating</td><td className="p-2">{s.snfFiveStarPct}%</td></tr>
              <tr><td className="p-2">Median semi-private room</td><td className="p-2">${s.medianSnfSemiMo.toLocaleString()}/month</td></tr>
              <tr><td className="p-2">Median assisted living (alternative)</td><td className="p-2">${s.medianAlMo.toLocaleString()}/month</td></tr>
              <tr><td className="p-2">State survey agency</td><td className="p-2">{s.surveyAgency}</td></tr>
              <tr><td className="p-2">Long-term care ombudsman</td><td className="p-2">{s.ombudsmanPhone}</td></tr>
            </tbody>
          </table>

          <h2>Paying for Nursing Home Care in {s.name}</h2>
          <ul>
            <li><strong>Medicare</strong> — up to 100 days of skilled care after a qualifying 3-day hospital stay.</li>
            <li><strong>Medicaid</strong> — covers long-term custodial care for {s.name} residents who meet financial and medical criteria.</li>
            <li><strong>Long-term care insurance</strong> — pays daily benefit once you need help with 2+ ADLs.</li>
            <li><strong>Private pay</strong> — personal savings, home equity, annuities.</li>
            <li><strong>Veterans benefits</strong> — VA Aid &amp; Attendance or community living centers for eligible veterans.</li>
          </ul>

          <h2>{s.name} Nursing Home Rights</h2>
          <p>Federal law guarantees every nursing home resident rights to dignity, privacy, freedom from abuse and unreasonable restraint, participation in care planning, and a formal grievance process. The {s.name} ombudsman ({s.ombudsmanPhone}) is your advocate.</p>

          <h2>Related</h2>
          <ul>
            <li><a href={`/medicare/${state}/`}>Medicare in {s.name}</a></li>
            <li><a href={`/senior-care/${state}/assisted-living/`}>Assisted living in {s.name}</a></li>
            <li><a href="/nursing-homes/how-to-choose/">How to choose a nursing home (national guide)</a></li>
            <li><a href="/guides/nursing-home-checklist/">Printable nursing home visit checklist</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Figures are approximate 2026 benchmarks. Not affiliated with the U.S. government or the federal Medicare program.</p>
        </section>

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/nursing-homes/${state}/`, title, pageType: 'STATE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
