import Link from 'next/link'
import { STATES, stateSlug } from '@/data/states'
import { CARRIERS } from '@/data/carriers'
import { CONDITIONS } from '@/data/conditions'
import { GLOSSARY } from '@/data/glossary'
import { PART_D } from '@/data/partD'
import { BEST } from '@/data/best'
import { MEDICAID_LTC } from '@/data/medicaidLtc'
import { LIFE_EVENTS } from '@/data/lifeEvents'
import { Breadcrumb } from '@/components/site/Breadcrumb'

export const metadata = {
  title: 'Site Directory',
  description: 'Complete directory of all pages on NHQualityCampaign.org.',
  alternates: { canonical: '/sitemap/' },
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-brand-navy mb-2">{title}</h2>
      <ul className="grid md:grid-cols-2 gap-1 text-sm">{children}</ul>
    </section>
  )
}
function Item({ href, children }: { href: string; children: React.ReactNode }) {
  return <li><Link href={href} className="text-brand-teal hover:underline">{children}</Link></li>
}

export default function Sitemap() {
  return (
    <div>
      <Breadcrumb trail={[{ name: 'Home', href: '/' }, { name: 'Site Directory', href: '/sitemap/' }]} />
      <h1 className="text-3xl font-bold text-brand-navy">Site Directory</h1>
      <p className="text-gray-600 mt-2 mb-6">
        Every page on NHQualityCampaign.org. See also our <Link href="/sitemap-index.xml" className="text-brand-teal underline">XML sitemap</Link>, <Link href="/llms.txt" className="text-brand-teal underline">llms.txt</Link> (AEO), and <Link href="/llms-full.txt" className="text-brand-teal underline">llms-full.txt</Link>.
      </p>

      <Col title="Core Pages">
        <Item href="/">Home</Item>
        <Item href="/about/">About</Item>
        <Item href="/faq/">FAQ</Item>
        <Item href="/blog/">Blog</Item>
        <Item href="/tools/">Calculators & Tools</Item>
        <Item href="/glossary/">Glossary</Item>
      </Col>

      <Col title="Medicare">
        <Item href="/medicare/">Medicare Hub</Item>
        <Item href="/medicare/supplement-plans/">Medigap Plans Guide</Item>
        <Item href="/medicare/advantage/">Medicare Advantage</Item>
        <Item href="/medicare/carriers/">Carrier Directory</Item>
        <Item href="/medicare/coverage/">What Medicare Covers A–Z</Item>
        <Item href="/guides/medicare-enrollment-guide/">Enrollment Guide</Item>
      </Col>

      <Col title="Nursing Homes & Senior Care">
        <Item href="/nursing-homes/">Nursing Home Hub</Item>
        <Item href="/nursing-homes/how-to-choose/">How to Choose</Item>
        <Item href="/nursing-homes/ratings/">CMS Five-Star Ratings</Item>
        <Item href="/guides/nursing-home-checklist/">Visit Checklist</Item>
        <Item href="/senior-care/aging-in-place/">Aging in Place</Item>
        <Item href="/senior-care/home-health-care/">Home Health Care</Item>
        <Item href="/guides/dementia-care-guide/">Dementia Care</Item>
        <Item href="/guides/long-term-care-planning/">LTC Planning</Item>
      </Col>

      <Col title="Comparisons">
        <Item href="/compare/medicare-plan-g-vs-plan-n/">Plan G vs Plan N</Item>
        <Item href="/compare/medicare-plan-g-vs-plan-f/">Plan G vs Plan F</Item>
        <Item href="/compare/medicare-advantage-vs-medigap/">MA vs Medigap</Item>
        <Item href="/compare/original-medicare-vs-medicare-advantage/">Original vs MA</Item>
        <Item href="/compare/nursing-home-vs-assisted-living/">Nursing Home vs AL</Item>
        <Item href="/compare/home-health-vs-nursing-home/">Home Health vs SNF</Item>
      </Col>

      <Col title="Quality, Telehealth & Finance">
        <Item href="/healthcare-quality/">Healthcare Quality</Item>
        <Item href="/telehealth/medicare-telehealth-guide/">Medicare Telehealth</Item>
        <Item href="/senior-finance/medicare-costs/">Medicare Costs</Item>
      </Col>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">State Medicare Guides ({STATES.length})</h2>
        <ul className="grid md:grid-cols-3 gap-1 text-sm">
          {STATES.map((s) => <Item key={s.code} href={`/medicare/${stateSlug(s)}/`}>{s.name}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">State Nursing Home Guides ({STATES.length})</h2>
        <ul className="grid md:grid-cols-3 gap-1 text-sm">
          {STATES.map((s) => <Item key={s.code} href={`/nursing-homes/${stateSlug(s)}/`}>{s.name}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">State Assisted Living Guides ({STATES.length})</h2>
        <ul className="grid md:grid-cols-3 gap-1 text-sm">
          {STATES.map((s) => <Item key={s.code} href={`/senior-care/${stateSlug(s)}/assisted-living/`}>{s.name}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Part D Deep Dive ({PART_D.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {PART_D.map((t) => <Item key={t.slug} href={`/medicare/part-d/${t.slug}/`}>{t.title}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Best Of Rankings ({BEST.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {BEST.map((b) => <Item key={b.slug} href={`/best/${b.slug}/`}>{b.title}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Medicaid Long-Term Care ({MEDICAID_LTC.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {MEDICAID_LTC.map((m) => <Item key={m.slug} href={`/medicaid/${m.slug}/`}>{m.title}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Life-Event Playbooks ({LIFE_EVENTS.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {LIFE_EVENTS.map((e) => <Item key={e.slug} href={`/life-events/${e.slug}/`}>{e.title}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Data Hub</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          <Item href="/data/">State-by-state charts</Item>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Calculators ({5})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          <Item href="/tools/medicare-cost-calculator/">Medicare Cost Calculator</Item>
          <Item href="/tools/medigap-premium-estimator/">Medigap Premium Estimator</Item>
          <Item href="/tools/irmaa-calculator/">IRMAA Surcharge Estimator</Item>
          <Item href="/tools/enrollment-period-finder/">Enrollment Period Finder</Item>
          <Item href="/tools/nursing-home-cost-calculator/">Nursing Home Cost Calculator</Item>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Carrier Reviews ({CARRIERS.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {CARRIERS.map((c) => <Item key={c.slug} href={`/medicare/carriers/${c.slug}/`}>{c.name}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">What Medicare Covers ({CONDITIONS.length})</h2>
        <ul className="grid md:grid-cols-2 gap-1 text-sm">
          {CONDITIONS.map((c) => <Item key={c.slug} href={`/medicare/coverage/${c.slug}/`}>{c.name}</Item>)}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Glossary ({GLOSSARY.length})</h2>
        <ul className="grid md:grid-cols-3 gap-1 text-sm">
          {GLOSSARY.map((t) => <Item key={t.slug} href={`/glossary/${t.slug}/`}>{t.term}</Item>)}
        </ul>
      </section>

      <Col title="Legal">
        <Item href="/privacy/">Privacy Policy</Item>
        <Item href="/terms/">Terms of Service</Item>
        <Item href="/disclaimer/">Disclaimer</Item>
      </Col>
    </div>
  )
}
