import Link from 'next/link'
import { MEDICAID_LTC } from '@/data/medicaidLtc'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Medicaid Long-Term Care: Every Topic',
  description: 'Comprehensive index of Medicaid long-term care planning — eligibility, look-back, spousal protection, Miller trusts, estate recovery.',
  alternates: { canonical: '/medicaid/' },
}

export default function MedicaidIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Medicaid LTC', href: '/medicaid/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicaid Long-Term Care</h1>
      <p className="text-gray-600 mt-2 mb-6">{MEDICAID_LTC.length} deep guides to Medicaid long-term care planning.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {MEDICAID_LTC.map((t) => (
          <Link key={t.slug} href={`/medicaid/${t.slug}/`} className="block border border-gray-200 rounded-lg p-4 hover:border-brand-teal">
            <div className="font-semibold text-brand-navy">{t.title}</div>
            <div className="text-sm text-gray-600 mt-1">{t.quickAnswer.slice(0, 140)}…</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
