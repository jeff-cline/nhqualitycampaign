import { notFound } from 'next/navigation'
import { CONDITIONS, type Condition } from '@/data/conditions'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.slug }))
}

function find(slug: string): Condition | undefined {
  return CONDITIONS.find((c) => c.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const c = find(slug)
  if (!c) return {}
  return {
    title: `Does Medicare Cover ${c.name}? (2026)`,
    description: `Exactly what Medicare covers for ${c.name.toLowerCase()} — Parts A, B, D, and Advantage plan benefits, costs, and watch-outs.`,
    alternates: { canonical: `/medicare/coverage/${c.slug}/` },
  }
}

export default async function ConditionPage({ params }: { params: Params }) {
  const { slug } = await params
  const c = find(slug)
  if (!c) notFound()

  const title = `Does Medicare Cover ${c.name}?`
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Medicare', href: '/medicare/' },
    { name: 'Coverage', href: '/medicare/coverage/' },
    { name: c.name, href: `/medicare/coverage/${c.slug}/` },
  ]

  const faq = [
    { question: `Which Medicare parts cover ${c.name.toLowerCase()}?`, answer: `${c.coveredParts}. Exact coverage depends on the service and setting.` },
    { question: `Is there a copay or coinsurance?`, answer: `Original Medicare Part B generally has a 20% coinsurance after the annual deductible. Medigap plans fill that gap. Medicare Advantage plans use copays and an annual out-of-pocket maximum.` },
    { question: `Do I need prior authorization?`, answer: `Original Medicare rarely requires prior auth for covered services. Medicare Advantage plans frequently require it for higher-cost services and drugs — check your plan\'s Evidence of Coverage.` },
    { question: `Does Medicare cover ${c.name.toLowerCase()} treatment outside the US?`, answer: `Generally no. Medigap plans C, D, F, G, M, and N include limited foreign-travel emergency coverage — see our Medigap guide.` },
    { question: `How can I appeal a denied claim?`, answer: `Five levels of appeal are available starting with redetermination. A licensed agent or a SHIP counselor can help you file.` },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">{c.category} · {c.coveredParts}</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{title}</h1>
        <QuickAnswer text={c.quickAnswer} />

        <section className="prose-article">
          <h2>What Medicare Covers for {c.name}</h2>
          <ul>{c.bullets.map((b) => <li key={b}>{b}</li>)}</ul>

          <h2>Watch-Outs</h2>
          <ul>{c.watchOuts.map((b) => <li key={b}>{b}</li>)}</ul>

          <h2>Original Medicare vs Medicare Advantage for {c.name}</h2>
          <p>Under <strong>Original Medicare + Medigap</strong>, you face no networks and minimal out-of-pocket after the Medigap pays. Under a <strong>Medicare Advantage</strong> plan, you may have lower monthly premiums and extra benefits (dental/vision/hearing) but face networks, prior authorization, and an annual in-network out-of-pocket maximum.</p>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />

        <section className="prose-article">
          <h2>How to Verify Coverage for Your Plan</h2>
          <ol>
            <li>Review your plan&#39;s Evidence of Coverage (EOC) or the Medicare &amp; You handbook.</li>
            <li>Use the Medicare.gov coverage search to check a specific service.</li>
            <li>Call your plan&#39;s member services and request a written coverage determination.</li>
            <li>If denied, file an appeal (redetermination) within 120 days.</li>
          </ol>

          <h2>Related</h2>
          <ul>
            <li><a href="/medicare/">Medicare basics hub</a></li>
            <li><a href="/medicare/supplement-plans/">Medigap plans</a></li>
            <li><a href="/medicare/advantage/">Medicare Advantage</a></li>
            <li><a href="/glossary/">Medicare glossary</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Content is educational. Not medical or insurance advice. Not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
        </section>

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/medicare/coverage/${c.slug}/`, title, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
