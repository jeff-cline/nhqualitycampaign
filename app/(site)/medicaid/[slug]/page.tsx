import { notFound } from 'next/navigation'
import { MEDICAID_LTC, type MedicaidTopic } from '@/data/medicaidLtc'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return MEDICAID_LTC.map((t) => ({ slug: t.slug }))
}

function find(slug: string): MedicaidTopic | undefined {
  return MEDICAID_LTC.find((t) => t.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const t = find(slug)
  if (!t) return {}
  return {
    title: t.title,
    description: t.quickAnswer.slice(0, 160),
    alternates: { canonical: `/medicaid/${t.slug}/` },
  }
}

export default async function MedicaidPage({ params }: { params: Params }) {
  const { slug } = await params
  const t = find(slug)
  if (!t) notFound()
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Medicaid LTC', href: '/medicaid/' },
    { name: t.title, href: `/medicaid/${t.slug}/` },
  ]
  const faq = [
    { question: 'How early should I start Medicaid LTC planning?', answer: 'At least 5 years before anticipated need — the look-back is 60 months. Earlier is better.' },
    { question: 'Do I need an elder-law attorney?', answer: 'Highly recommended. Medicaid LTC rules are complex, state-specific, and mistakes can create penalty periods of ineligibility.' },
    { question: 'Does Medicaid pay for my home?', answer: 'Medicaid may pay for care regardless of home ownership, but the home is subject to estate recovery after death unless a spouse or disabled child lives there.' },
    { question: 'What\'s the difference between Medicare and Medicaid?', answer: 'Medicare is federal health insurance for 65+ and disabled. Medicaid is state-federal coverage for low-income people and covers long-term custodial care that Medicare doesn\'t.' },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Medicaid Long-Term Care</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{t.title}</h1>
        <QuickAnswer text={t.quickAnswer} />

        <section className="prose-article">
          <h2>Key Points</h2>
          <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          <h2>Watch-Outs</h2>
          <ul>{t.watchOuts.map((b) => <li key={b}>{b}</li>)}</ul>
          <h2>Related</h2>
          <ul>
            <li><a href="/medicaid/">Medicaid LTC topic index</a></li>
            <li><a href="/guides/long-term-care-planning/">Long-term care planning guide</a></li>
            <li><a href="/tools/nursing-home-cost-calculator/">Nursing home cost calculator</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Medicaid rules vary by state and change frequently. Work with an elder-law attorney before making asset-transfer decisions. Not legal or tax advice.</p>
        </section>

        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/medicaid/${t.slug}/`, title: t.title, metaDesc: t.quickAnswer, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
