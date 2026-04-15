import Link from 'next/link'
import { CONDITIONS } from '@/data/conditions'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'What Does Medicare Cover? A–Z Condition Index',
  description: 'Alphabetical index of what Medicare covers for specific conditions, services, and procedures.',
  alternates: { canonical: '/medicare/coverage/' },
}

export default function CoverageIndex() {
  const grouped = CONDITIONS.reduce<Record<string, typeof CONDITIONS>>((acc, c) => {
    acc[c.category] = acc[c.category] ?? []
    acc[c.category].push(c)
    return acc
  }, {})
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Medicare', href: '/medicare/' }, { name: 'Coverage Index', href: '/medicare/coverage/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">What Medicare Covers: A–Z Index</h1>
      <p className="text-gray-600 mt-2 mb-6">{CONDITIONS.length} condition, service, and procedure pages.</p>
      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat} className="mb-8">
          <h2 className="text-xl font-semibold text-brand-navy mb-2">{cat}</h2>
          <ul className="grid md:grid-cols-2 gap-1">
            {items.map((c) => (
              <li key={c.slug}><Link href={`/medicare/coverage/${c.slug}/`} className="text-brand-teal hover:underline">{c.name}</Link></li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
