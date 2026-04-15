import Link from 'next/link'
import { CARRIERS } from '@/data/carriers'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Medicare Carriers Directory: Independent Reviews',
  description: 'Independent reviews of the top Medicare insurance carriers — Medigap, Medicare Advantage, and Part D.',
  alternates: { canonical: '/medicare/carriers/' },
}

export default function CarriersIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Medicare', href: '/medicare/' }, { name: 'Carriers', href: '/medicare/carriers/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare Carriers Directory</h1>
      <p className="text-gray-600 mt-2 mb-6">Independent reviews of {CARRIERS.length} top Medicare insurance carriers.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {CARRIERS.map((c) => (
          <Link key={c.slug} href={`/medicare/carriers/${c.slug}/`} className="block border border-gray-200 rounded-lg p-4 hover:border-brand-teal">
            <div className="font-semibold text-brand-navy">{c.name}</div>
            <div className="text-xs text-gray-500 mt-1">AM Best {c.amBest} · {c.states} states · {c.focus.join(', ')}</div>
            <div className="text-sm text-gray-700 mt-2">{c.notes}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
