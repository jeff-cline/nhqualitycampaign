import { notFound } from 'next/navigation'
import { BEST, type BestGuide } from '@/data/best'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { QuickAnswer } from '@/components/site/QuickAnswer'
import { FAQBlock } from '@/components/site/FAQBlock'
import { AdSlot } from '@/components/site/AdSlot'
import { MedicareQuoteWidget } from '@/components/site/MedicareQuoteWidget'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ slug: string }>

export async function generateStaticParams() {
  return BEST.map((b) => ({ slug: b.slug }))
}

function find(slug: string): BestGuide | undefined {
  return BEST.find((b) => b.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params
  const g = find(slug)
  if (!g) return {}
  return {
    title: `${g.title} (2026)`,
    description: g.quickAnswer.slice(0, 160),
    alternates: { canonical: `/best/${g.slug}/` },
  }
}

export default async function BestPage({ params }: { params: Params }) {
  const { slug } = await params
  const g = find(slug)
  if (!g) notFound()
  const trail = [
    { name: 'Home', href: '/' },
    { name: 'Best Of', href: '/best/' },
    { name: g.title, href: `/best/${g.slug}/` },
  ]
  const faq = [
    { question: 'How did NHQualityCampaign pick these?', answer: g.methodology },
    { question: 'Are these recommendations paid?', answer: 'We may receive compensation when readers request quotes through affiliate partners. Rankings reflect independent editorial evaluation and are not influenced by payment.' },
    { question: 'Do rankings change?', answer: 'Yes. We update rankings at least annually, or sooner when major plan or carrier changes occur.' },
    { question: 'Should I rely only on rankings?', answer: 'No — rankings are a starting point. Your state, ZIP, doctors, and drug list determine the right plan for you. Always compare with Medicare.gov Plan Finder.' },
  ]

  return (
    <article className="grid gap-8 lg:grid-cols-[1fr,300px]">
      <div>
        <Breadcrumb trail={trail} />
        <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Rankings 2026</div>
        <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mt-1">{g.title}</h1>
        <QuickAnswer text={g.quickAnswer} />

        <section className="prose-article">
          <h2>Methodology</h2>
          <p>{g.methodology}</p>

          <h2>Our Rankings</h2>
          <ol>
            {g.picks.map((p) => (
              <li key={p.name} className="mb-4">
                <strong>#{p.rank} — {p.name}</strong>
                <div className="mt-1">{p.reason}</div>
                {p.watchOut && <div className="mt-1 text-sm text-amber-800"><strong>Watch-out:</strong> {p.watchOut}</div>}
              </li>
            ))}
          </ol>
        </section>

        <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
        <MedicareQuoteWidget />

        <section className="prose-article">
          <h2>Related</h2>
          <ul>
            <li><a href="/best/">All Best Of rankings</a></li>
            <li><a href="/medicare/carriers/">Carrier directory</a></li>
            <li><a href="/medicare/supplement-plans/">Medigap guide</a></li>
          </ul>
          <p className="text-xs text-gray-500 mt-8 italic">Editorial disclosure: We may receive compensation when readers request quotes through our partners. Not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
        </section>
        <AdSlot slotKey="SLOT_BEFORE_FAQ" className="my-6 text-center" />
        <FAQBlock items={faq} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/best/${g.slug}/`, title: g.title, metaDesc: g.quickAnswer, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
      </div>
      <aside className="space-y-6">
        <AdSlot slotKey="SLOT_SIDEBAR_TOP" className="text-center" />
        <AdSlot slotKey="SLOT_SIDEBAR_MID" className="text-center" />
      </aside>
    </article>
  )
}
