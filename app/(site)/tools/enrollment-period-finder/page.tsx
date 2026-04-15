import { Breadcrumb } from '@/components/site/Breadcrumb'
import { EnrollmentPeriodFinder } from '@/components/tools/EnrollmentPeriodFinder'
import { FAQBlock } from '@/components/site/FAQBlock'

export const metadata = {
  title: 'Medicare Enrollment Period Finder',
  description: 'Enter your date of birth to find your Medicare Initial Enrollment Period, Medigap Open Enrollment window, and annual election dates.',
  alternates: { canonical: '/tools/enrollment-period-finder/' },
}

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Tools', href: '/tools/' }, { name: 'Enrollment Finder', href: '/tools/enrollment-period-finder/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare Enrollment Period Finder</h1>
      <EnrollmentPeriodFinder />
      <FAQBlock items={[
        { question: 'Do I have to enroll at 65?', answer: 'Only if you don\'t have creditable employer coverage. Delaying without creditable coverage triggers a permanent 10% Part B penalty per 12 months delayed.' },
        { question: 'What if I miss IEP?', answer: 'Use the General Enrollment Period (Jan 1 – Mar 31) or a Special Enrollment Period. Late penalties may apply.' },
        { question: 'When is Medigap Open Enrollment?', answer: 'A one-time 6-month window that starts when you\'re 65+ AND enrolled in Part B. Insurers cannot decline or upcharge for health status during this window.' },
        { question: 'Can I change Medicare Advantage plans anytime?', answer: 'No. Changes are limited to AEP (Oct 15 – Dec 7), MA-OEP (Jan 1 – Mar 31), or qualifying SEPs.' },
      ]} />
    </div>
  )
}
