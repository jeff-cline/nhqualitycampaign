import { Breadcrumb } from '@/components/site/Breadcrumb'
import { MedigapPremiumEstimator } from '@/components/tools/MedigapPremiumEstimator'
import { FAQBlock } from '@/components/site/FAQBlock'

export const metadata = {
  title: 'Medigap Premium Estimator by State & Age',
  description: 'Estimate typical Medigap Plan G, Plan N, or High-Deductible Plan G premium by state and age.',
  alternates: { canonical: '/tools/medigap-premium-estimator/' },
}

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }, { name: 'Medigap Estimator', href: '/tools/medigap-premium-estimator/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medigap Premium Estimator</h1>
      <MedigapPremiumEstimator />
      <FAQBlock items={[
        { question: 'How accurate is this?', answer: 'Estimates are 2026 state-median benchmarks adjusted for plan and age. Actual quotes vary 20–30% in either direction based on carrier, ZIP, and underwriting.' },
        { question: 'Why do states vary so much?', answer: 'Community-rated states (NY, CT, MA, MN, WA) and states with different excess-charge rules produce different pricing. Rate filings are state-regulated.' },
        { question: 'Does it matter if I use tobacco?', answer: 'Yes — tobacco use typically adds 15% to Medigap premium.' },
        { question: 'Should I always pick the lowest quote?', answer: 'No — rate stability matters. A lower introductory premium with a 12% annual increase ends up costing more than a stable carrier at a slightly higher premium.' },
      ]} />
    </div>
  )
}
