import { Breadcrumb } from '@/components/site/Breadcrumb'
import { MedicareCostCalc } from '@/components/tools/MedicareCostCalc'
import { FAQBlock } from '@/components/site/FAQBlock'

export const metadata = {
  title: 'Medicare Cost Calculator (Free)',
  description: 'Estimate your total annual Medicare cost — Original Medicare + Medigap + Part D vs Medicare Advantage.',
  alternates: { canonical: '/tools/medicare-cost-calculator/' },
}

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }, { name: 'Medicare Cost Calculator', href: '/tools/medicare-cost-calculator/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare Cost Calculator</h1>
      <p className="text-gray-600 mt-2">Compare your expected annual cost under Original Medicare + Medigap + Part D vs a Medicare Advantage plan.</p>
      <MedicareCostCalc />
      <FAQBlock items={[
        { question: 'Why does Original Medicare + Medigap cost more upfront?', answer: 'You\'re paying premiums for three things (Part B, Medigap, Part D) instead of two (Part B + MA). In exchange you get no networks, low out-of-pocket at point of care, and stable coverage.' },
        { question: 'Is the $240 Part B deductible included?', answer: 'Yes — the calculator adds the 2024 Part B deductible once per year.' },
        { question: 'Does this handle IRMAA?', answer: 'No — use the IRMAA calculator for higher-income surcharges.' },
        { question: 'How accurate is this?', answer: 'Estimate only. Actual totals depend on your utilization, specific plan, and drug list.' },
      ]} />
    </div>
  )
}
