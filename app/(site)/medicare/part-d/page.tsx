import Link from 'next/link'
import { PART_D } from '@/data/partD'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Medicare Part D Deep Dive: Every Topic',
  description: 'Comprehensive index of Medicare Part D topics — formularies, tiers, donut hole, insulin cap, Extra Help, appeals.',
  alternates: { canonical: '/medicare/part-d/' },
}

export default function PartDIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Medicare', href: '/medicare/' }, { name: 'Part D', href: '/medicare/part-d/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare Part D Deep Dive</h1>
      <p className="text-gray-600 mt-2 mb-6">Everything about Medicare prescription drug coverage — {PART_D.length} focused guides.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {PART_D.map((t) => (
          <Link key={t.slug} href={`/medicare/part-d/${t.slug}/`} className="block border border-gray-200 rounded-lg p-4 hover:border-brand-teal">
            <div className="font-semibold text-brand-navy">{t.title}</div>
            <div className="text-sm text-gray-600 mt-1">{t.quickAnswer.slice(0, 140)}…</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
