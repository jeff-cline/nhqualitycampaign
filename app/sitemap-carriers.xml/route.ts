import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { CARRIERS } from '@/data/carriers'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = CARRIERS.map((c) => `/medicare/carriers/${c.slug}/`)
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.6 }))))
}
