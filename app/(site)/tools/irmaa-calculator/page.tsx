import { Breadcrumb } from '@/components/site/Breadcrumb'
import { IrmaaCalc } from '@/components/tools/IrmaaCalc'
import { FAQBlock } from '@/components/site/FAQBlock'

export const metadata = {
  title: 'IRMAA Calculator: Medicare Part B & D Surcharge Estimator',
  description: 'Estimate your IRMAA surcharge on Medicare Part B and Part D based on your MAGI.',
  alternates: { canonical: '/tools/irmaa-calculator/' },
}

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }, { name: 'IRMAA Calculator', href: '/tools/irmaa-calculator/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">IRMAA Surcharge Estimator</h1>
      <IrmaaCalc />
      <FAQBlock items={[
        { question: 'What is IRMAA?', answer: 'The Income-Related Monthly Adjustment Amount — surcharges on Medicare Parts B and D premiums for higher-income beneficiaries.' },
        { question: 'Which year\'s income does Medicare use?', answer: 'The tax return filed 2 years prior (e.g., 2026 IRMAA uses 2024 MAGI).' },
        { question: 'Can I appeal IRMAA?', answer: 'Yes, for life-changing events like retirement, divorce, or loss of a spouse — file Form SSA-44.' },
        { question: 'Is IRMAA permanent?', answer: 'IRMAA is recalculated annually based on most recent tax return — it can go up or down each year.' },
      ]} />
    </div>
  )
}
