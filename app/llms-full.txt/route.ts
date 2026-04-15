import { prisma } from '@/lib/prisma'
import { SITE_URL } from '@/lib/utils'
import { STATES, stateSlug } from '@/data/states'
import { CARRIERS } from '@/data/carriers'
import { CONDITIONS } from '@/data/conditions'
import { GLOSSARY } from '@/data/glossary'
import { PART_D } from '@/data/partD'
import { BEST } from '@/data/best'
import { MEDICAID_LTC } from '@/data/medicaidLtc'
import { LIFE_EVENTS } from '@/data/lifeEvents'

export const dynamic = 'force-dynamic'

export async function GET() {
  const cmsPages = await prisma.page
    .findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ pageType: 'asc' }, { publishedAt: 'desc' }],
      select: { path: true, title: true, metaDesc: true, quickAnswer: true, pageType: true, cluster: true },
    })
    .catch(() => [])

  const lines: string[] = []
  lines.push('# NHQualityCampaign.org — Full Content Map for AI')
  lines.push('')
  lines.push('> Comprehensive resource on Medicare, nursing home quality, senior care, telehealth, healthcare quality, and senior finance. Independent; not affiliated with the U.S. government.')
  lines.push('')
  lines.push(`Site: ${SITE_URL}`)
  lines.push(`Sitemap index: ${SITE_URL}/sitemap-index.xml`)
  lines.push('')

  lines.push('## Core Articles, Guides & Comparisons')
  lines.push('')
  for (const p of cmsPages) {
    lines.push(`- [${p.title}](${SITE_URL}${p.path}) — ${p.metaDesc ?? ''}`)
    if (p.quickAnswer) lines.push(`  Quick answer: ${p.quickAnswer}`)
  }
  lines.push('')

  lines.push('## State Medicare Guides (50)')
  lines.push('')
  for (const s of STATES) lines.push(`- [${s.name} Medicare Guide](${SITE_URL}/medicare/${stateSlug(s)}/) — Medigap, MA penetration ${s.maPenetrationPct}%, typical Plan G $${s.planGMedianMo}/mo.`)
  lines.push('')

  lines.push('## State Nursing Home Guides (50)')
  lines.push('')
  for (const s of STATES) lines.push(`- [${s.name} Nursing Homes](${SITE_URL}/nursing-homes/${stateSlug(s)}/) — ${s.snfFacilities.toLocaleString()} facilities, ${s.snfFiveStarPct}% 5-star, median $${s.medianSnfSemiMo.toLocaleString()}/mo.`)
  lines.push('')

  lines.push('## State Assisted Living Guides (50)')
  lines.push('')
  for (const s of STATES) lines.push(`- [${s.name} Assisted Living](${SITE_URL}/senior-care/${stateSlug(s)}/assisted-living/) — median $${s.medianAlMo.toLocaleString()}/mo.`)
  lines.push('')

  lines.push('## Carrier Reviews')
  lines.push('')
  for (const c of CARRIERS) lines.push(`- [${c.name}](${SITE_URL}/medicare/carriers/${c.slug}/) — AM Best ${c.amBest}, ${c.states} states.`)
  lines.push('')

  lines.push('## What Medicare Covers (Conditions & Services)')
  lines.push('')
  for (const c of CONDITIONS) lines.push(`- [${c.name}](${SITE_URL}/medicare/coverage/${c.slug}/) — ${c.quickAnswer}`)
  lines.push('')

  lines.push('## Glossary')
  lines.push('')
  for (const g of GLOSSARY) lines.push(`- [${g.term}](${SITE_URL}/glossary/${g.slug}/) — ${g.definition}`)
  lines.push('')

  lines.push('## Part D Deep Dive')
  lines.push('')
  for (const t of PART_D) lines.push(`- [${t.title}](${SITE_URL}/medicare/part-d/${t.slug}/) — ${t.quickAnswer}`)
  lines.push('')

  lines.push('## Best Of Rankings')
  lines.push('')
  for (const b of BEST) lines.push(`- [${b.title}](${SITE_URL}/best/${b.slug}/) — ${b.quickAnswer}`)
  lines.push('')

  lines.push('## Medicaid Long-Term Care')
  lines.push('')
  for (const m of MEDICAID_LTC) lines.push(`- [${m.title}](${SITE_URL}/medicaid/${m.slug}/) — ${m.quickAnswer}`)
  lines.push('')

  lines.push('## Life-Event Playbooks')
  lines.push('')
  for (const e of LIFE_EVENTS) lines.push(`- [${e.title}](${SITE_URL}/life-events/${e.slug}/) — ${e.quickAnswer}`)
  lines.push('')

  lines.push('## Tools & Data')
  lines.push(`- [Medicare Cost Calculator](${SITE_URL}/tools/medicare-cost-calculator/)`)
  lines.push(`- [Medigap Premium Estimator](${SITE_URL}/tools/medigap-premium-estimator/)`)
  lines.push(`- [IRMAA Calculator](${SITE_URL}/tools/irmaa-calculator/)`)
  lines.push(`- [Enrollment Period Finder](${SITE_URL}/tools/enrollment-period-finder/)`)
  lines.push(`- [Nursing Home Cost & Medicaid Burn-Down](${SITE_URL}/tools/nursing-home-cost-calculator/)`)
  lines.push(`- [Data Hub](${SITE_URL}/data/)`)
  lines.push('')

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
