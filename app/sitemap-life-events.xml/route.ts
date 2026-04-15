import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { LIFE_EVENTS } from '@/data/lifeEvents'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = ['/life-events/', ...LIFE_EVENTS.map((e) => `/life-events/${e.slug}/`)]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
