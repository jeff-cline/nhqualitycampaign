import { notFound } from 'next/navigation'
import { LIFE_EVENTS, type LifeEvent } from '@/data/lifeEvents'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return LIFE_EVENTS.map((e) => ({ slug: e.slug }))
}

function find(slug: string): LifeEvent | undefined {
  return LIFE_EVENTS.find((e) => e.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const e = find(slug)
  if (!e) return {}
  return {
    title: e.title,
    description: e.quickAnswer.slice(0, 160),
    alternates: { canonical: `/life-events/${e.slug}/` },
  }
}

export default async function LifeEventPage({ params }: { params: Params }) {
  const { slug } = await params
  const e = find(slug)
  if (!e) notFound()
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Life Events', href: '/life-events/' },
    { name: e.title, href: `/life-events/${e.slug}/` },
  ]
  const faq = [
    { question: 'Where do I enroll or make changes?', answer: 'Most Medicare changes happen at ssa.gov/medicare or medicare.gov. Your state SHIP offers free counseling.' },
    { question: 'How strict are deadlines?', answer: 'Very. Missing a Special Enrollment Period often means waiting for the Annual Enrollment Period (Oct 15 – Dec 7) and facing late penalties.' },
    { question: 'Do I need an agent?', answer: 'Not required, but a licensed independent Medicare agent can compare plans across multiple carriers at no cost to you.' },
    { question: 'What if I miss a deadline?', answer: 'Use the General Enrollment Period (Jan 1 – Mar 31) for Part B, accepting any applicable late penalty. Some SEPs allow late enrollment for specific hardship reasons.' },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Life Event Playbook</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{e.title}</h1>
        <QuickAnswer text={e.quickAnswer} />

        <section className="prose-article">
          <h2>Steps to Take</h2>
          <ol>{e.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          {e.deadlines.length > 0 && <>
            <h2>Key Deadlines</h2>
            <ul>{e.deadlines.map((d) => <li key={d}>{d}</li>)}</ul>
          </>}
          <h2>Watch-Outs</h2>
          <ul>{e.watchOuts.map((w) => <li key={w}>{w}</li>)}</ul>
          <h2>Related</h2>
          <ul>
            <li><a href="/life-events/">All life event playbooks</a></li>
            <li><a href="/guides/medicare-enrollment-guide/">Medicare enrollment guide</a></li>
            <li><a href="/tools/medicare-cost-calculator/">Medicare cost calculator</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Disclaimer: Educational content only. Confirm your specific situation with SSA, Medicare, or a licensed professional.</p>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />
        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/life-events/${e.slug}/`, title: e.title, metaDesc: e.quickAnswer, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
