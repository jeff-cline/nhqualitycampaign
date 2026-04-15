import Link from 'next/link'
import { LIFE_EVENTS } from '@/data/lifeEvents'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Medicare & Senior Care Life-Event Playbooks',
  description: 'Step-by-step playbooks for every Medicare life event — turning 65, retiring, losing coverage, moving, diagnoses, and more.',
  alternates: { canonical: '/life-events/' },
}

export default function LifeEventIndex() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Life Events', href: '/life-events/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Medicare Life-Event Playbooks</h1>
      <p className="text-gray-600 mt-2 mb-6">{LIFE_EVENTS.length} step-by-step playbooks for every major Medicare and senior-care life event.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {LIFE_EVENTS.map((e) => (
          <Link key={e.slug} href={`/life-events/${e.slug}/`} className="block border border-gray-200 rounded-lg p-4 hover:border-brand-teal">
            <div className="font-semibold text-brand-navy">{e.title}</div>
            <div className="text-sm text-gray-600 mt-1">{e.quickAnswer.slice(0, 140)}…</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
