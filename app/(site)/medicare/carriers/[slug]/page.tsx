import { notFound } from 'next/navigation'
import { CARRIERS, type Carrier } from '@/data/carriers'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return CARRIERS.map((c) => ({ slug: c.slug }))
}

function find(slug: string): Carrier | undefined {
  return CARRIERS.find((c) => c.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const c = find(slug)
  if (!c) return {}
  return {
    title: `${c.name} Medicare Review 2026: Plans, Strengths & Watch-Outs`,
    description: `Independent review of ${c.name}: Medigap, Medicare Advantage, and Part D plans — ratings, strengths, and things to watch.`,
    alternates: { canonical: `/medicare/carriers/${c.slug}/` },
  }
}

export default async function CarrierPage({ params }: { params: Params }) {
  const { slug } = await params
  const c = find(slug)
  if (!c) notFound()

  const title = `${c.name} Medicare Review 2026`
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Medicare', href: '/medicare/' },
    { name: 'Carriers', href: '/medicare/carriers/' },
    { name: c.name, href: `/medicare/carriers/${c.slug}/` },
  ]
  const focusLabel = c.focus.map((f) => ({ MEDIGAP: 'Medigap', MA: 'Medicare Advantage', PART_D: 'Part D' }[f])).join(', ')
  const quick = `${c.name} is rated ${c.amBest} by AM Best, operates in ${c.states} states, and offers ${focusLabel}. ${c.notes}`

  const faq = [
    { question: `Is ${c.name} a good Medicare carrier?`, answer: `${c.name} earns an AM Best financial rating of ${c.amBest}. Like any carrier, quality varies by product, plan year, and state — always compare specific plans rather than brand.` },
    { question: `What states does ${c.name} serve?`, answer: `${c.name} is licensed in ${c.states} states. Availability of specific plans varies within each state.` },
    { question: `Does ${c.name} offer Medigap?`, answer: c.focus.includes('MEDIGAP') ? `Yes — ${c.name} sells standardized Medigap plans. Compare premiums across carriers before buying.` : `${c.name} does not primarily sell Medigap; its focus is ${focusLabel}.` },
    { question: `How do I get a ${c.name} quote?`, answer: `Use the quote widget on this page or contact a licensed Medicare agent who works with multiple carriers for a side-by-side comparison.` },
    { question: `Can I switch carriers later?`, answer: `Medigap switches outside the 6-month Open Enrollment Period typically require medical underwriting. Medicare Advantage and Part D changes are allowed during AEP (Oct 15 – Dec 7).` },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Carrier Review · AM Best {c.amBest}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{title}</h1>
        <QuickAnswer text={quick} />

        <section className="prose-article">
          <h2>{c.name} Overview</h2>
          <table className="w-full border border-gray-300 text-sm my-6">
            <thead className="bg-brand-mist"><tr><th className="p-2 text-left">Item</th><th className="p-2 text-left">Detail</th></tr></thead>
            <tbody>
              <tr><td className="p-2">Founded</td><td className="p-2">{c.founded}</td></tr>
              <tr><td className="p-2">AM Best rating</td><td className="p-2">{c.amBest}</td></tr>
              <tr><td className="p-2">States served</td><td className="p-2">{c.states}</td></tr>
              <tr><td className="p-2">Product focus</td><td className="p-2">{focusLabel}</td></tr>
            </tbody>
          </table>

          <h2>Strengths</h2>
          <ul>{c.strengths.map((s) => <li key={s}>{s}</li>)}</ul>

          <h2>Watch-Outs</h2>
          <ul>{c.watchOuts.map((s) => <li key={s}>{s}</li>)}</ul>

          <h2>Who {c.name} Fits Best</h2>
          <p>{c.name} is strongest for consumers whose provider preferences, state, and benefit priorities align with its product focus ({focusLabel}). Confirm that your specific doctors are in-network (for MA plans), that your drugs are on the formulary (for Part D and MA-PD), and that the Medigap plan letter you want is available at a competitive premium in your state.</p>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />

        <section className="prose-article">
          <h2>How to Compare {c.name} vs Other Carriers</h2>
          <ol>
            <li>For Medigap — compare same plan letter (e.g., Plan G) across 3+ carriers in your ZIP.</li>
            <li>For MA — verify your PCP, specialists, and hospitals are in-network for the current and next plan year.</li>
            <li>For Part D — run your drug list through Medicare.gov Plan Finder; tier placement and utilization management vary carrier to carrier.</li>
            <li>Check rate stability history — a low introductory premium means nothing if the carrier has a pattern of double-digit increases.</li>
          </ol>

          <h2>Related</h2>
          <ul>
            <li><a href="/medicare/supplement-plans/">Medigap plan guide</a></li>
            <li><a href="/medicare/advantage/">Medicare Advantage guide</a></li>
            <li><a href="/tools/medicare-cost-calculator/">Medicare cost calculator</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Editorial disclosure: We may receive compensation when readers request quotes through our partners. This does not affect our editorial evaluations. Not affiliated with or endorsed by the U.S. government.</p>
        </section>

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/medicare/carriers/${c.slug}/`, title, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
