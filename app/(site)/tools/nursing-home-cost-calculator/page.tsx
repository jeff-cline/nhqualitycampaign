import { Breadcrumb } from '@/components/site/Breadcrumb'
import { NursingHomeCostCalc } from '@/components/tools/NursingHomeCostCalc'
import { FAQBlock } from '@/components/site/FAQBlock'

export const metadata = {
  title: 'Nursing Home Cost Calculator: Savings Burn-Down & Medicaid Timing',
  description: 'Project how long your savings last paying for nursing home or long-term care, and when Medicaid planning becomes urgent.',
  alternates: { canonical: '/tools/nursing-home-cost-calculator/' },
}

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }, { name: 'Nursing Home Cost Calculator', href: '/tools/nursing-home-cost-calculator/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Nursing Home Cost &amp; Medicaid Burn-Down</h1>
      <NursingHomeCostCalc />
      <FAQBlock items={[
        { question: 'Why does Medicaid planning matter?', answer: 'Medicaid pays for long-term nursing home care for those who qualify — but eligibility has strict asset and income limits plus a 5-year look-back on asset transfers.' },
        { question: 'When should I start Medicaid planning?', answer: 'At least 5 years before anticipated need. Consult an elder-law attorney.' },
        { question: 'Does Medicare pay any of this cost?', answer: 'Medicare covers up to 100 days of skilled care after a qualifying hospital stay — not long-term custodial care.' },
        { question: 'Is my home counted against Medicaid?', answer: 'The primary residence is partially protected under federal home-equity limits and spousal impoverishment rules, but estate recovery may apply after death. State rules vary.' },
      ]} />
    </div>
  )
}
