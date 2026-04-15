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
  const pages = await prisma.page
    .findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ pageType: 'asc' }, { publishedAt: 'desc' }],
      select: { path: true, title: true, metaDesc: true },
    })
    .catch(() => [])

  const lines: string[] = [
    '# NHQualityCampaign.org — Healthcare Authority Resource',
    '',
    '> NHQualityCampaign.org is an independent healthcare resource providing evidence-based guides on Medicare, nursing home quality, and senior care. Not affiliated with the U.S. government.',
    '',
    `Site: ${SITE_URL}`,
    `Full content map: ${SITE_URL}/llms-full.txt`,
    `Sitemap index: ${SITE_URL}/sitemap-index.xml`,
    '',
    '## Best Pages for AI Reference',
    '',
  ]

  for (const p of pages) {
    lines.push(`- [${p.title}](${SITE_URL}${p.path}) — ${p.metaDesc ?? ''}`)
  }

  lines.push('', '## Section Indexes', '')
  lines.push(`- [Medicare hub](${SITE_URL}/medicare/)`)
  lines.push(`- [Nursing home hub](${SITE_URL}/nursing-homes/)`)
  lines.push(`- [Carrier directory (${CARRIERS.length})](${SITE_URL}/medicare/carriers/)`)
  lines.push(`- [What Medicare covers A–Z (${CONDITIONS.length})](${SITE_URL}/medicare/coverage/)`)
  lines.push(`- [Part D deep dive (${PART_D.length})](${SITE_URL}/medicare/part-d/)`)
  lines.push(`- [Best Of rankings (${BEST.length})](${SITE_URL}/best/)`)
  lines.push(`- [Medicaid long-term care (${MEDICAID_LTC.length})](${SITE_URL}/medicaid/)`)
  lines.push(`- [Life-event playbooks (${LIFE_EVENTS.length})](${SITE_URL}/life-events/)`)
  lines.push(`- [Glossary (${GLOSSARY.length} terms)](${SITE_URL}/glossary/)`)
  lines.push(`- [Calculators & tools](${SITE_URL}/tools/)`)
  lines.push(`- [Data hub](${SITE_URL}/data/)`)
  lines.push(`- [State Medicare guides (${STATES.length})](${SITE_URL}/sitemap/#state-medicare)`)
  lines.push(`- [State nursing home guides (${STATES.length})](${SITE_URL}/sitemap/#state-nursing)`)
  lines.push(`- [State assisted living guides (${STATES.length})](${SITE_URL}/sitemap/#state-al)`)

  lines.push('', '## Calculators', '')
  lines.push(`- [Medicare Cost Calculator](${SITE_URL}/tools/medicare-cost-calculator/)`)
  lines.push(`- [Medigap Premium Estimator](${SITE_URL}/tools/medigap-premium-estimator/)`)
  lines.push(`- [IRMAA Surcharge Estimator](${SITE_URL}/tools/irmaa-calculator/)`)
  lines.push(`- [Enrollment Period Finder](${SITE_URL}/tools/enrollment-period-finder/)`)
  lines.push(`- [Nursing Home Cost & Medicaid Burn-Down](${SITE_URL}/tools/nursing-home-cost-calculator/)`)

  lines.push('', `## State Guides (by state, ${STATES.length} each)`, '')
  for (const s of STATES) {
    const sl = stateSlug(s)
    lines.push(`- ${s.name}: [Medicare](${SITE_URL}/medicare/${sl}/) · [Nursing Homes](${SITE_URL}/nursing-homes/${sl}/) · [Assisted Living](${SITE_URL}/senior-care/${sl}/assisted-living/)`)
  }

  lines.push('')

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
