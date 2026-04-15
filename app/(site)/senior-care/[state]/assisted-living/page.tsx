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
    title: `Assisted Living in ${s.name}: Costs, Regulations & How to Choose`,
    description: `${s.name} assisted living guide — median cost, how it differs from nursing homes, Medicaid waivers, and what to ask.`,
    alternates: { canonical: `/senior-care/${state}/assisted-living/` },
  }
}

export default async function StateAssistedPage({ params }: { params: Params }) {
  const { state } = await params
  const s = find(state)
  if (!s) notFound()

  const title = `Assisted Living in ${s.name}: 2026 Guide`
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Senior Care', href: '/senior-care/aging-in-place/' },
    { name: `${s.name} Assisted Living`, href: `/senior-care/${state}/assisted-living/` },
  ]
  const quick = `The median assisted living cost in ${s.name} is about $${s.medianAlMo.toLocaleString()}/month — roughly $${(s.medianSnfSemiMo - s.medianAlMo).toLocaleString()} less than a nursing home semi-private room. Assisted living fits seniors who need help with daily activities but not continuous skilled nursing care.`

  const faq = [
    { question: `How much does assisted living cost in ${s.name}?`, answer: `The median is about $${s.medianAlMo.toLocaleString()}/month (Genworth). Higher-tier communities and memory care units cost 20–50% more.` },
    { question: `Does Medicare pay for assisted living in ${s.name}?`, answer: `No. Medicare does not pay for room, board, or custodial care in an assisted living facility.` },
    { question: `Does Medicaid pay for assisted living in ${s.name}?`, answer: `${s.name} offers Medicaid Home and Community-Based Services (HCBS) waivers that may cover the service portion (not room and board) for eligible residents.` },
    { question: `Who regulates assisted living in ${s.name}?`, answer: `Assisted living licensing in ${s.name} is state-level (generally a division within the state department of health or human services). Regulations are less uniform than for nursing homes.` },
    { question: `When should I consider assisted living vs a nursing home in ${s.name}?`, answer: `Assisted living suits seniors who need help with activities of daily living but not 24/7 skilled nursing. If medical needs are continuous, a nursing home or memory care is more appropriate.` },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Assisted Living · {s.capital}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{title}</h1>
        <QuickAnswer text={quick} />

        <section className="prose-article">
          <h2>{s.name} at a Glance</h2>
          <table className="w-full border border-gray-300 text-sm my-6">
            <thead className="bg-brand-mist"><tr><th className="p-2 text-left">Metric</th><th className="p-2 text-left">Value</th></tr></thead>
            <tbody>
              <tr><td className="p-2">Median assisted living cost</td><td className="p-2">${s.medianAlMo.toLocaleString()}/month</td></tr>
              <tr><td className="p-2">Median nursing home (semi)</td><td className="p-2">${s.medianSnfSemiMo.toLocaleString()}/month</td></tr>
              <tr><td className="p-2">Long-term care ombudsman</td><td className="p-2">{s.ombudsmanPhone}</td></tr>
            </tbody>
          </table>

          <h2>What Assisted Living Covers</h2>
          <ul>
            <li>Personal care — bathing, dressing, toileting, medication reminders</li>
            <li>Meals and housekeeping</li>
            <li>Social and wellness activities</li>
            <li>Transportation to medical appointments (usually)</li>
            <li>24-hour staff availability (NOT 24-hour nursing)</li>
          </ul>

          <h2>What Assisted Living Does NOT Cover</h2>
          <ul>
            <li>Skilled nursing supervision</li>
            <li>Complex medical care (IV therapy, ventilators)</li>
            <li>Heavy behavioral or wandering management (often requires memory care)</li>
          </ul>

          <h2>Paying for Assisted Living in {s.name}</h2>
          <ul>
            <li>Private pay — personal savings and investments</li>
            <li>Long-term care insurance — most modern policies cover assisted living</li>
            <li>Veterans Aid &amp; Attendance — for qualifying wartime veterans/surviving spouses</li>
            <li>Medicaid HCBS waiver — may cover service portion for eligible {s.name} residents</li>
          </ul>
          <p><em>Note: {s.name}&#39;s specific Medicaid HCBS waivers vary — contact {s.surveyAgency} or the state Medicaid office for current programs.</em></p>

          <h2>Questions to Ask a {s.name} Community</h2>
          <ul>
            <li>What&#39;s the staff-to-resident ratio during the day vs. overnight?</li>
            <li>What is annual staff turnover?</li>
            <li>What triggers a move to a higher level of care or discharge?</li>
            <li>What are the move-out rules and refund policies?</li>
            <li>Are costs tiered by care level? What triggers increases?</li>
          </ul>

          <h2>Related</h2>
          <ul>
            <li><a href={`/medicare/${state}/`}>Medicare in {s.name}</a></li>
            <li><a href={`/nursing-homes/${state}/`}>Nursing homes in {s.name}</a></li>
            <li><a href="/compare/nursing-home-vs-assisted-living/">Nursing home vs assisted living (national)</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Figures are 2026 median benchmarks and vary by community. Not affiliated with the U.S. government or the federal Medicare program.</p>
        </section>

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/senior-care/${state}/assisted-living/`, title, pageType: 'STATE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
