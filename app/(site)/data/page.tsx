import { Breadcrumb } from '@/components/site/Breadcrumb'
import { BarChart } from '@/components/data/BarChart'
import { STATES } from '@/data/states'

export const metadata = {
  title: 'Medicare & Senior Care Data Hub',
  description: 'State-by-state data on Medicare enrollment, Medigap premiums, Medicare Advantage penetration, and nursing home quality.',
  alternates: { canonical: '/data/' },
}

export default function DataHub() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Data Hub', href: '/data/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Data Hub</h1>
      <p className="text-gray-600 mt-2 mb-6">Interactive data views sourced from CMS, Genworth, KFF, and state survey agencies. Charts update with each publish.</p>

      <BarChart
        title="Medicare Advantage Penetration by State (top 15)"
        data={STATES.map((s) => ({ label: s.name, value: s.maPenetrationPct }))}
        unit="%"
      />

      <BarChart
        title="Typical Medigap Plan G Premium by State (65 yo nonsmoker, top 15 highest)"
        data={STATES.map((s) => ({ label: s.name, value: s.planGMedianMo }))}
        unit="/mo"
      />

      <BarChart
        title="Nursing Home 5-Star Share by State (top 15 highest)"
        data={STATES.map((s) => ({ label: s.name, value: s.snfFiveStarPct }))}
        unit="%"
      />

      <BarChart
        title="Median Nursing Home Cost (semi-private, $/month, top 15 highest)"
        data={STATES.map((s) => ({ label: s.name, value: s.medianSnfSemiMo }))}
        unit=""
      />

      <BarChart
        title="Median Assisted Living Cost ($/month, top 15 highest)"
        data={STATES.map((s) => ({ label: s.name, value: s.medianAlMo }))}
        unit=""
      />

      <BarChart
        title="Medicare Enrollees by State (millions, top 15)"
        data={STATES.map((s) => ({ label: s.name, value: Number(s.medicareEnrolleesM.toFixed(2)) }))}
        unit="M"
      />

      <p className="text-xs text-gray-500 mt-8">
        Sources: CMS Medicare Advantage State Enrollment; Medicare.gov Care Compare; Genworth Cost of Care Survey 2023 benchmarks; KFF Medicare data briefs. Figures are 2026 approximations rounded for display. Full per-state detail on each <a className="text-brand-teal underline" href="/sitemap/">state page</a>.
      </p>
    </div>
  )
}
