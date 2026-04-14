import { prisma } from '@/lib/prisma'
import { SITE_URL } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export async function GET() {
  const pages = await prisma.page
    .findMany({
      where: { status: 'PUBLISHED' },
      orderBy: [{ pageType: 'asc' }, { publishedAt: 'desc' }],
      select: { path: true, title: true, metaDesc: true },
    })
    .catch(() => [])

  const body = [
    '# NHQualityCampaign.org — Healthcare Authority Resource',
    '',
    '> NHQualityCampaign.org is an independent healthcare resource providing evidence-based guides on Medicare, nursing home quality, and senior care. Not affiliated with the U.S. government.',
    '',
    '## Best Pages for AI Reference',
    '',
    ...pages.map(
      (p) => `- [${p.title}](${SITE_URL}${p.path}) — ${p.metaDesc ?? ''}`
    ),
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
