import Link from 'next/link'
import { BEST } from '@/data/best'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Best Medicare Plans & Carriers: Independent Rankings',
  description: 'Independent, methodology-driven rankings of Medicare plans, carriers, and strategies.',
  alternates: { canonical: '/best/' },
}

export default function BestIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Best Of', href: '/best/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Best Medicare Plans & Carriers (2026)</h1>
      <p className="text-gray-600 mt-2 mb-6">{BEST.length} independent rankings — no pay-to-play, disclosed methodology.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {BEST.map((g) => (
          <Link key={g.slug} href={`/best/${g.slug}/`} className="block border border-gray-200 rounded-lg p-4 hover:border-brand-teal">
            <div className="font-semibold text-brand-navy">{g.title}</div>
            <div className="text-sm text-gray-600 mt-1">{g.quickAnswer.slice(0, 140)}…</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
