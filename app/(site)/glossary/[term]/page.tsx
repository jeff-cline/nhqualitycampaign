import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GLOSSARY, type Term } from '@/data/glossary'
import { Breadcrumb } from '@/components/site/Breadcrumb'
import { AdSlot } from '@/components/site/AdSlot'
import { articleSchema, jsonLd } from '@/lib/schema'

type Params = Promise<{ term: string }>

export async function generateStaticParams() {
  return GLOSSARY.map((t) => ({ term: t.slug }))
}

function find(slug: string): Term | undefined {
  return GLOSSARY.find((t) => t.slug === slug)
}

export async function generateMetadata({ params }: { params: Params }) {
  const { term } = await params
  const t = find(term)
  if (!t) return {}
  return {
    title: `${t.term}: Definition & Meaning`,
    description: t.definition.length > 160 ? t.definition.slice(0, 157) + '…' : t.definition,
    alternates: { canonical: `/glossary/${t.slug}/` },
  }
}

export default async function GlossaryTerm({ params }: { params: Params }) {
  const { term } = await params
  const t = find(term)
  if (!t) notFound()
  const related = GLOSSARY.filter((g) => g.category === t.category && g.slug !== t.slug).slice(0, 8)
  return (
    <article className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Glossary', href: '/glossary/' }, { name: t.term, href: `/glossary/${t.slug}/` }]} />
      <div className="text-xs uppercase tracking-wider text-brand-teal font-semibold">Glossary · {t.category}</div>
      <h1 className="text-3xl font-bold text-brand-navy mt-1">{t.term}</h1>
      <div className="my-4 rounded-lg bg-brand-sky border-l-4 border-brand-navy p-5 text-lg">
        {t.definition}
      </div>
      <AdSlot slotKey="SLOT_IN_CONTENT_1" className="my-6 text-center" />
      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-brand-navy mb-3">Related Terms</h2>
          <ul className="grid md:grid-cols-2 gap-1">
            {related.map((r) => (
              <li key={r.slug}><Link href={`/glossary/${r.slug}/`} className="text-brand-teal hover:underline">{r.term}</Link></li>
            ))}
          </ul>
        </section>
      )}
      <p className="mt-8"><Link href="/glossary/" className="text-brand-teal hover:underline">← Back to glossary index</Link></p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        '@context': 'https://schema.org', '@type': 'DefinedTerm', name: t.term, description: t.definition, inDefinedTermSet: 'NHQualityCampaign Medicare & Senior Care Glossary',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema({ path: `/glossary/${t.slug}/`, title: t.term, metaDesc: t.definition, pageType: 'ARTICLE', updatedAt: new Date() })) }} />
    </article>
  )
}
