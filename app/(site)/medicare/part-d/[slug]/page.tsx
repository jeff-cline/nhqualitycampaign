import { notFound } from 'next/navigation'
import { PART_D, type PartDTopic } from '@/data/partD'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return PART_D.map((t) => ({ slug: t.slug }))
}

function find(slug: string): PartDTopic | undefined {
  return PART_D.find((t) => t.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const t = find(slug)
  if (!t) return {}
  return {
    title: t.title,
    description: t.quickAnswer.slice(0, 160),
    alternates: { canonical: `/medicare/part-d/${t.slug}/` },
  }
}

export default async function PartDPage({ params }: { params: Params }) {
  const { slug } = await params
  const t = find(slug)
  if (!t) notFound()
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Medicare', href: '/medicare/' },
    { name: 'Part D', href: '/medicare/part-d/' },
    { name: t.title, href: `/medicare/part-d/${t.slug}/` },
  ]
  const faq = [
    { question: 'How do I find my best Part D plan?', answer: 'Use Medicare.gov Plan Finder with your ZIP and exact drug list. Tier placement varies significantly — the cheapest premium is rarely the cheapest total cost.' },
    { question: 'When can I change Part D plans?', answer: 'During AEP (Oct 15 – Dec 7) each year, during a Special Enrollment Period, or once per year to switch to a 5-star plan.' },
    { question: 'Is there a Part D out-of-pocket cap?', answer: 'Yes — $2,000 annual cap starting in 2025, replacing the old coverage-gap and catastrophic-phase structure.' },
    { question: 'Can I appeal a denied drug?', answer: 'Yes. Request a plan redetermination within 60 days. Appeals have five levels up to federal court.' },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Part D Deep Dive</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{t.title}</h1>
        <QuickAnswer text={t.quickAnswer} />

        <section className="prose-article">
          <h2>Key Points</h2>
          <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          <h2>Watch-Outs</h2>
          <ul>{t.watchOuts.map((b) => <li key={b}>{b}</li>)}</ul>
          <h2>Related</h2>
          <ul>
            <li><a href="/medicare/part-d/">Part D topic index</a></li>
            <li><a href="/medicare/supplement-plans/">Medigap plan guide</a></li>
            <li><a href="/tools/medicare-cost-calculator/">Medicare cost calculator</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Educational content only. Not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />
        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/medicare/part-d/${t.slug}/`, title: t.title, metaDesc: t.quickAnswer, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
