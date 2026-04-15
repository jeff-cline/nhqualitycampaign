import Link from 'next/link'
import { GLOSSARY } from '@/data/glossary'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Medicare & Senior Care Glossary (A–Z)',
  description: `Plain-English definitions of ${GLOSSARY.length}+ Medicare, Medigap, long-term care, and senior care terms.`,
  alternates: { canonical: '/glossary/' },
}

export default function GlossaryIndex() {
  const sorted = [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term))
  const byLetter = sorted.reduce<Record<string, typeof GLOSSARY>>((acc, t) => {
    const letter = t.term[0].toUpperCase()
    acc[letter] = acc[letter] ?? []
    acc[letter].push(t)
    return acc
  }, {})
  const letters = Object.keys(byLetter).sort()
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Glossary', href: '/glossary/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare & Senior Care Glossary</h1>
      <p className="text-gray-600 mt-2">{GLOSSARY.length} terms with plain-English definitions.</p>
      <nav className="flex flex-wrap gap-2 my-4">
        {letters.map((l) => <a key={l} href={`#${l}`} className="px-2 py-1 border rounded text-sm hover:bg-brand-mist">{l}</a>)}
      </nav>
      {letters.map((l) => (
        <section key={l} id={l} className="mt-6">
          <h2 className="text-2xl font-bold text-brand-navy border-b pb-1 mb-3">{l}</h2>
          <ul className="grid md:grid-cols-2 gap-1">
            {byLetter[l].map((t) => (
              <li key={t.slug}>
                <Link href={`/glossary/${t.slug}/`} className="text-brand-teal hover:underline">{t.term}</Link>
                <span className="text-xs text-gray-500 ml-2">{t.category}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
