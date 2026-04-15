import Link from 'next/link'
import { Breadcrumb } from '@/components/site/Breadcrumb'

const TOOLS = [
  { slug: 'medicare-cost-calculator', name: 'Medicare Cost Calculator', desc: 'Compare Original Medicare + Medigap vs Medicare Advantage annual cost.' },
  { slug: 'irmaa-calculator', name: 'IRMAA Surcharge Estimator', desc: 'Estimate your income-related Part B and Part D surcharges.' },
  { slug: 'nursing-home-cost-calculator', name: 'Nursing Home Cost & Medicaid Burn-Down', desc: 'Project how long savings last paying for long-term care.' },
]

export const metadata = {
  title: 'Free Medicare & Senior Care Calculators',
  description: 'Free tools to estimate Medicare costs, IRMAA surcharges, and long-term care burn-down.',
  alternates: { canonical: '/tools/' },
}

export default function ToolsIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Calculators & Tools</h1>
      <p className="text-gray-600 mt-2 mb-6">Free, unbiased calculators for Medicare and senior care planning.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {TOOLS.map((t) => (
          <Link key={t.slug} href={`/tools/${t.slug}/`} className="block border border-gray-200 rounded-lg p-5 hover:border-brand-teal">
            <div className="text-lg font-semibold text-brand-navy">{t.name}</div>
            <div className="text-sm text-gray-600 mt-1">{t.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
