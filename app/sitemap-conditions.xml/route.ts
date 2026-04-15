import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { CONDITIONS } from '@/data/conditions'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = CONDITIONS.map((c) => `/medicare/coverage/${c.slug}/`)
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
