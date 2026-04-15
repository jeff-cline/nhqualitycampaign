import { xmlUrlset, xmlResponse } from '@/lib/sitemapXml'
import { BEST } from '@/data/best'

export const dynamic = 'force-dynamic'

export async function GET() {
  const paths = ['/best/', ...BEST.map((b) => `/best/${b.slug}/`)]
  return xmlResponse(xmlUrlset(paths.map((p) => ({ path: p, priority: 0.7 }))))
}
